"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { ArrowRight } from "@/components/icons";
import { SITE } from "@/lib/seo";
import { submitContact, type ContactState } from "@/app/actions/contact";

const INITIAL: ContactState = { status: "idle" };

/** Field order — drives "focus the first invalid field" after a failed submit. */
const FIELD_ORDER = ["name", "email", "phone", "subject", "message"] as const;

/**
 * Contact section — split: brand-tinted detail panel on the left,
 * editorial form on the right. Uses a Next.js server action so the form
 * works without JS; with JS it gets pending state, inline validation
 * messages and an in-place success notice.
 */
export function ContactSection() {
  const [state, formAction] = useActionState(submitContact, INITIAL);
  const alertRef = useRef<HTMLDivElement>(null);

  // After a failed submit, move focus to the first invalid field so keyboard
  // and screen-reader users are taken straight to what needs fixing. If the
  // failure is general (no field errors), focus the error banner instead.
  useEffect(() => {
    if (state.status !== "error") return;
    const firstInvalid = FIELD_ORDER.find((name) => state.errors?.[name]);
    if (firstInvalid) {
      document.getElementById(`field-${firstInvalid}`)?.focus();
    } else {
      alertRef.current?.focus();
    }
  }, [state]);

  return (
    <section className="relative bg-[var(--color-ivory-50)]">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(900px 500px at 0% 0%, rgba(244,210,122,0.10), transparent 60%)," +
            "radial-gradient(700px 500px at 100% 100%, rgba(30,42,86,0.05), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12 section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-0 border border-[var(--color-line)] bg-[var(--color-ivory-50)]">
          {/* Detail panel */}
          <aside className="relative bg-[var(--color-navy-900)] text-[var(--color-ivory-50)] p-10 sm:p-12 overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 92' width='80' height='92'><path d='M40 2 L74 22 V64 L40 84 L6 64 V22 Z' fill='none' stroke='%23E6B637' stroke-opacity='0.1' stroke-width='1'/></svg>\")",
                backgroundSize: "180px 207px",
              }}
            />
            <div className="relative">
              <span className="eyebrow on-dark">Contact information</span>
              <h2
                className="font-display font-medium leading-[1.1] tracking-[-0.008em] mt-4 mb-8"
                style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.4rem)" }}
              >
                Let&rsquo;s connect.
              </h2>
              <dl className="space-y-5">
                <Item label="Phone">
                  <a href={`tel:${SITE.phoneTel}`} className="hover:text-[var(--color-gold-200)] transition-colors font-sans font-bold tracking-[0.04em]">{SITE.phone}</a>
                </Item>
                <Item label="Email">
                  <a href={`mailto:${SITE.email}`} className="hover:text-[var(--color-gold-200)] transition-colors font-sans">{SITE.email}</a>
                </Item>
                <Item label="Address">
                  <span className="font-sans leading-[1.6]">{SITE.address.line1}<br/>{SITE.address.line2}</span>
                </Item>
                <Item label="ABN">
                  <span className="font-sans tracking-[0.06em]">{SITE.abn}</span>
                </Item>
              </dl>
            </div>
          </aside>

          {/* Form */}
          <div className="p-10 sm:p-12">
            <span className="eyebrow">Keep in touch</span>
            <h3 className="font-display font-medium leading-[1.1] tracking-[-0.008em] mt-4 mb-8"
                style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.4rem)" }}>
              Tell us about your engagement.
            </h3>

            {state.status === "ok" ? (
              <SuccessNotice message={state.message} />
            ) : (
              <form action={formAction} className="space-y-5" noValidate>
                {/* Honeypot — hidden from sighted users + screen readers */}
                <input
                  type="text"
                  name="company_website"
                  autoComplete="off"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="absolute -left-[9999px] w-px h-px opacity-0 pointer-events-none"
                />

                <Field label="Full name" name="name" autoComplete="name" error={state.errors?.name} required />
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Email" name="email" type="email" autoComplete="email" inputMode="email" error={state.errors?.email} required />
                  <Field label="Phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" error={state.errors?.phone} />
                </div>
                <Field label="Subject" name="subject" autoComplete="off" error={state.errors?.subject} />
                <Field label="Your message" name="message" textarea autoComplete="off" error={state.errors?.message} required />

                {state.status === "error" && state.message && (
                  <div
                    ref={alertRef}
                    role="alert"
                    tabIndex={-1}
                    className="flex items-start gap-3 border-l-[3px] border-[var(--color-gold-700)] bg-[var(--color-ivory-100)] px-4 py-3 text-[var(--color-ink-900)] text-[0.95rem] font-sans focus:outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-gold-500)] focus-visible:outline-offset-2"
                  >
                    <WarningIcon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold-700)]" />
                    <span>{state.message}</span>
                  </div>
                )}

                <SubmitButton />

                <p className="text-[0.78rem] text-[var(--color-ink-600)] font-sans m-0">
                  Your message is sent directly to our team — replies come from a real person, not an autoresponder.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Success notice ─────────────────────────────────────────────────────
   role="status" + aria-live announces the confirmation to assistive tech,
   and focus is moved here so keyboard users land on the outcome. */

function SuccessNotice({ message }: { message?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { ref.current?.focus(); }, []);
  return (
    <div
      ref={ref}
      role="status"
      aria-live="polite"
      tabIndex={-1}
      className="border border-[var(--color-gold-300)] bg-[var(--color-gold-50)] p-7 focus:outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-gold-500)] focus-visible:outline-offset-2"
    >
      <div className="eyebrow no-rule mb-2">Message sent</div>
      <p className="font-sans text-[var(--color-navy-900)] m-0 text-[1.05rem] leading-[1.6]">
        {message}
      </p>
    </div>
  );
}

/* ─── Warning glyph (error banner) ──────────────────────────────────────── */

function WarningIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M12 3.5 L21.5 20 H2.5 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M12 10 V14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="16.8" r="0.9" fill="currentColor" />
    </svg>
  );
}

/* ─── Field ──────────────────────────────────────────────────────────── */

function Field({
  label, name, type = "text", required, textarea, error, autoComplete, inputMode,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  error?: string;
  autoComplete?: string;
  inputMode?: "text" | "email" | "tel" | "url" | "numeric" | "decimal" | "search" | "none";
}) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;

  const base =
    "w-full px-4 py-3.5 bg-[var(--color-ivory-50)] border " +
    "font-sans text-[var(--color-ink-900)] placeholder:text-[var(--color-ink-600)] " +
    "focus:outline-none focus:border-[var(--color-navy-700)] focus:shadow-[0_0_0_3px_rgba(230,182,55,0.4)] " +
    "transition-[border-color,box-shadow] duration-200 " +
    (error ? "border-[var(--color-gold-600)]" : "border-[var(--color-line)]");

  return (
    <div>
      <label htmlFor={id} className="block">
        <span className="block font-sans text-[0.7rem] tracking-[0.18em] uppercase text-[var(--color-ink-600)] font-bold mb-2">
          {label}
          {required && <span className="text-[var(--color-gold-600)] ml-1" aria-hidden>*</span>}
          {required && <span className="sr-only"> (required)</span>}
        </span>
        {textarea ? (
          <textarea
            id={id}
            name={name}
            required={required}
            rows={5}
            autoComplete={autoComplete}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? errorId : undefined}
            className={base}
          />
        ) : (
          <input
            autoComplete={autoComplete}
            inputMode={inputMode}
            id={id}
            name={name}
            type={type}
            required={required}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? errorId : undefined}
            className={base}
          />
        )}
      </label>
      {error && (
        <p id={errorId} className="mt-2 text-[0.82rem] font-sans text-[var(--color-gold-700)]">{error}</p>
      )}
    </div>
  );
}

/* ─── Submit ─────────────────────────────────────────────────────────── */

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn btn-primary magnetic disabled:opacity-60 disabled:cursor-wait"
    >
      {pending ? "Sending…" : "Send message"}
      {!pending && <ArrowRight className="arrow" />}
    </button>
  );
}

/* ─── DL row helper for the contact panel ──────────────────────────── */

function Item({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="font-sans font-bold tracking-[0.18em] uppercase text-[var(--color-gold-300)] text-[0.7rem]">{label}</dt>
      <dd className="m-0 mt-1 text-lg">{children}</dd>
    </div>
  );
}
