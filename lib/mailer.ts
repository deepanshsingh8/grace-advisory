/**
 * Mailer abstraction.
 *
 * Two delivery paths, picked at runtime by which env vars are set:
 *
 *   1. Resend (preferred — modern, REST, webhooks, observability)
 *      Required: RESEND_API_KEY
 *      Optional: MAIL_FROM (defaults to a Grace Advisory address)
 *
 *   2. SMTP via Nodemailer (works with Microsoft 365 / Google Workspace /
 *      any provider Grace Advisory's existing email is on)
 *      Required: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
 *      Optional: SMTP_SECURE ("true" for 465; defaults false → STARTTLS)
 *               MAIL_FROM
 *
 *   3. Dry-run fallback (no env configured): logs the payload to the server
 *      console and returns ok. Lets us ship the form before mail is wired.
 *
 * All paths set Reply-To to the form submitter so replies go straight to them.
 */

import { Resend } from "resend";
import nodemailer from "nodemailer";
import { CONTACT_RECIPIENTS, MAIL_FROM_DEFAULT, MAIL_FROM_NAME } from "@/lib/seo";

export interface MailMessage {
  /** Display subject, e.g. "New consultation request — AFSL Application" */
  subject: string;
  /** HTML body (rich) */
  html: string;
  /** Plain-text fallback */
  text: string;
  /** Submitter's email — used as Reply-To */
  replyTo?: string;
  /** Optional override of the recipient list (defaults to CONTACT_RECIPIENTS) */
  to?: readonly string[];
}

export interface MailResult {
  ok: boolean;
  /** Identifier returned by the provider (Resend message id, SMTP envelope id, etc.) */
  id?: string;
  /** Provider used to send — useful for logs */
  provider: "resend" | "smtp" | "dry-run";
  /** Human-readable error if !ok */
  error?: string;
}

/* ─── From-address resolution ────────────────────────────────────────── */

function fromAddress(): string {
  const raw = process.env.MAIL_FROM?.trim() || MAIL_FROM_DEFAULT;
  // If the value already includes "Name <email>" form, leave it alone.
  if (raw.includes("<")) return raw;
  return `${MAIL_FROM_NAME} <${raw}>`;
}

/* ─── Public entry point ─────────────────────────────────────────────── */

export async function sendMail(msg: MailMessage): Promise<MailResult> {
  const recipients = msg.to ?? CONTACT_RECIPIENTS;
  if (recipients.length === 0) {
    return { ok: false, provider: "dry-run", error: "No recipients configured." };
  }

  const from = fromAddress();

  // 1. Resend
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { data, error } = await resend.emails.send({
        from,
        to: [...recipients],
        replyTo: msg.replyTo,
        subject: msg.subject,
        html: msg.html,
        text: msg.text,
      });
      if (error) return { ok: false, provider: "resend", error: error.message };
      return { ok: true, provider: "resend", id: data?.id };
    } catch (e) {
      return { ok: false, provider: "resend", error: errMessage(e) };
    }
  }

  // 2. SMTP via Nodemailer
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE } = process.env;
  if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: SMTP_SECURE === "true",
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      });
      const info = await transporter.sendMail({
        from,
        to: recipients.join(", "),
        replyTo: msg.replyTo,
        subject: msg.subject,
        html: msg.html,
        text: msg.text,
      });
      return { ok: true, provider: "smtp", id: info.messageId };
    } catch (e) {
      return { ok: false, provider: "smtp", error: errMessage(e) };
    }
  }

  // 3. Dry-run — no provider configured. Log so we can see what would have
  // been sent, return ok so the UI shows success in dev.
  // eslint-disable-next-line no-console
  console.log("[mailer:dry-run]", {
    from,
    to: recipients,
    replyTo: msg.replyTo,
    subject: msg.subject,
    text: msg.text,
  });
  return { ok: true, provider: "dry-run" };
}

function errMessage(e: unknown): string {
  if (e instanceof Error) return e.message;
  return String(e);
}
