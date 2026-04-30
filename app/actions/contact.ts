"use server";

import { sendMail } from "@/lib/mailer";

/* ─── Types ──────────────────────────────────────────────────────────── */

export interface ContactState {
  status: "idle" | "ok" | "error";
  message?: string;
  /** Per-field validation errors keyed by field name */
  errors?: Partial<Record<"name" | "email" | "phone" | "subject" | "message", string>>;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

/* ─── Server action ─────────────────────────────────────────────────── */

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot — bots fill in any field they can find. Humans never see this one.
  // Silently succeed so bots don't learn it failed.
  if (typeof formData.get("company_website") === "string" && formData.get("company_website")) {
    return { status: "ok", message: "Thank you. We’ll be in touch shortly." };
  }

  const name    = String(formData.get("name")    ?? "").trim();
  const email   = String(formData.get("email")   ?? "").trim();
  const phone   = String(formData.get("phone")   ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: ContactState["errors"] = {};
  if (!name) errors.name = "Please enter your name.";
  if (!email) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(email)) errors.email = "That email doesn’t look right.";
  if (!message) errors.message = "Please enter a message.";
  if (message.length > 5000) errors.message = "Message is too long (max 5,000 characters).";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please correct the highlighted fields.", errors };
  }

  // Build the email
  const cleanSubject = subject || "New consultation request";
  const emailSubject = `New consultation request — ${cleanSubject}`;
  const text = [
    `New consultation request from the Grace Advisory website`,
    ``,
    `Name:    ${name}`,
    `Email:   ${email}`,
    phone ? `Phone:   ${phone}` : null,
    subject ? `Subject: ${subject}` : null,
    ``,
    `Message:`,
    message,
    ``,
    `— Reply to this email to respond directly to ${name}.`,
  ].filter(Boolean).join("\n");

  const html = renderHtml({ name, email, phone, subject, message });

  const result = await sendMail({
    subject: emailSubject,
    text,
    html,
    replyTo: `${name} <${email}>`,
  });

  if (!result.ok) {
    // Log on the server; don't leak provider details to the client.
    // eslint-disable-next-line no-console
    console.error("[contact] mail send failed", result);
    return {
      status: "error",
      message: "Sorry — we couldn’t send your message. Please email us directly at info@graceadvisory.com.au or call 0468 454 831.",
    };
  }

  return {
    status: "ok",
    message: "Thank you. Your message is on its way — we’ll be in touch shortly.",
  };
}

/* ─── HTML email body ────────────────────────────────────────────────── */

function renderHtml(data: { name: string; email: string; phone: string; subject: string; message: string }) {
  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>New consultation request</title>
</head>
<body style="margin:0;padding:0;background:#FBF8F1;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#1A1F33;">
  <div style="max-width:560px;margin:32px auto;background:#ffffff;border:1px solid #E5E0CF;">
    <div style="background:#141B3C;color:#FBF8F1;padding:24px 28px;">
      <div style="font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#F4D27A;font-weight:bold;">Grace Advisory</div>
      <h1 style="margin:6px 0 0;font-family:Georgia,'Times New Roman',serif;font-weight:500;font-size:26px;line-height:1.2;color:#FBF8F1;">New consultation request</h1>
    </div>

    <table role="presentation" style="width:100%;border-collapse:collapse;padding:0;">
      <tbody>
        ${row("Name",    esc(data.name))}
        ${row("Email",   `<a href="mailto:${esc(data.email)}" style="color:#1E2A56;">${esc(data.email)}</a>`)}
        ${data.phone   ? row("Phone",   `<a href="tel:${esc(data.phone)}" style="color:#1E2A56;">${esc(data.phone)}</a>`) : ""}
        ${data.subject ? row("Subject", esc(data.subject)) : ""}
      </tbody>
    </table>

    <div style="padding:24px 28px;border-top:1px solid #E5E0CF;">
      <div style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#4A5170;font-weight:bold;margin-bottom:10px;">Message</div>
      <div style="font-size:15px;line-height:1.65;white-space:pre-wrap;color:#1A1F33;">${esc(data.message)}</div>
    </div>

    <div style="padding:18px 28px;background:#F4F1E8;border-top:1px solid #E5E0CF;font-size:12px;color:#4A5170;">
      Reply directly to this email to respond to <strong style="color:#1A1F33;">${esc(data.name)}</strong>.
    </div>
  </div>
</body>
</html>`;
}

function row(label: string, value: string) {
  return `
        <tr>
          <td style="padding:14px 28px;border-top:1px solid #EFEAD8;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#4A5170;font-weight:bold;width:96px;vertical-align:top;">${label}</td>
          <td style="padding:14px 28px 14px 0;border-top:1px solid #EFEAD8;font-size:15px;color:#1A1F33;">${value}</td>
        </tr>`;
}
