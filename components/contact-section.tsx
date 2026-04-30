"use client";

import { useState } from "react";
import { ArrowRight } from "@/components/icons";
import { SITE } from "@/lib/seo";

/**
 * Contact section — split: brand-tinted detail panel on the left,
 * editorial form on the right. The form is currently a no-op (logs);
 * wire to Resend / SendGrid via a server action when SMTP creds land.
 */
export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "ok">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // TODO: wire to /api/contact (server action) when mail provider is set
    console.log("[contact]", data);
    setTimeout(() => setStatus("ok"), 600);
  }

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
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12"
           style={{ paddingBlock: "clamp(56px, 7vw, 112px)" }}>
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
                <div>
                  <dt className="font-display italic text-[rgba(251,248,241,0.6)] text-sm">Phone</dt>
                  <dd className="m-0 mt-1 font-sans font-bold tracking-[0.04em] text-lg">
                    <a href={`tel:${SITE.phoneTel}`} className="hover:text-[var(--color-gold-200)] transition-colors">{SITE.phone}</a>
                  </dd>
                </div>
                <div>
                  <dt className="font-display italic text-[rgba(251,248,241,0.6)] text-sm">Email</dt>
                  <dd className="m-0 mt-1 font-display italic text-lg">
                    <a href={`mailto:${SITE.email}`} className="hover:text-[var(--color-gold-200)] transition-colors">{SITE.email}</a>
                  </dd>
                </div>
                <div>
                  <dt className="font-display italic text-[rgba(251,248,241,0.6)] text-sm">Address</dt>
                  <dd className="m-0 mt-1 font-display italic text-lg">{SITE.address.line1}<br/>{SITE.address.line2}</dd>
                </div>
                <div>
                  <dt className="font-display italic text-[rgba(251,248,241,0.6)] text-sm">ABN</dt>
                  <dd className="m-0 mt-1 font-sans tracking-[0.06em] text-base">{SITE.abn}</dd>
                </div>
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

            {status === "ok" ? (
              <div className="border border-[var(--color-gold-300)] bg-[var(--color-gold-50)] p-6 font-display italic text-[var(--color-navy-900)]">
                Thank you. We&rsquo;ll be in touch shortly.
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <Field label="Full name" name="name" required />
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>
                <Field label="Subject" name="subject" />
                <Field label="Your message" name="message" textarea required />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn btn-primary magnetic disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending…" : "Send message"}
                  <ArrowRight className="arrow" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", required, textarea,
}: { label: string; name: string; type?: string; required?: boolean; textarea?: boolean }) {
  const base =
    "w-full px-4 py-3.5 bg-[var(--color-ivory-50)] border border-[var(--color-line)] " +
    "font-sans text-[var(--color-ink-900)] placeholder:text-[var(--color-ink-600)] " +
    "focus:outline-none focus:border-[var(--color-navy-700)] focus:shadow-[0_0_0_3px_rgba(230,182,55,0.25)] " +
    "transition-[border-color,box-shadow] duration-200";
  return (
    <label className="block">
      <span className="block font-sans text-[0.7rem] tracking-[0.18em] uppercase text-[var(--color-ink-600)] font-bold mb-2">{label}{required && <span className="text-[var(--color-gold-600)] ml-1">*</span>}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={5} className={base} />
      ) : (
        <input name={name} type={type} required={required} className={base} />
      )}
    </label>
  );
}
