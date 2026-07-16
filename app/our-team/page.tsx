import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Our Team — AFSL & AML Compliance Experts | Risk Management",
  description:
    "Meet our AFSL compliance experts and AML/CTF compliance professionals. A trusted financial risk management team supporting regulatory compliance.",
  alternates: { canonical: "/our-team" },
};

const PRINCIPLES: { title: string; body: string }[] = [
  {
    title: "Deep industry knowledge",
    body: "We stay current with regulatory updates and industry trends — our clients get today's thinking, not last year's.",
  },
  {
    title: "Collaborative approach",
    body: "We work with your team, not around them — tailoring solutions to your business, not to a template.",
  },
  {
    title: "Continuous improvement",
    body: "We invest in our own development so every engagement benefits from the latest skills and expertise.",
  },
];

const TRACK_RECORD: { stat: string; body: string }[] = [
  { stat: "Full",   body: "Regulatory compliance maintained across complex financial and insurance portfolios." },
  { stat: "Strong", body: "Track record of growth through risk-mitigation strategy and strategic planning." },
  { stat: "Deep",   body: "Involvement in navigating regulatory change and smooth compliance transitions." },
];

export default function OurTeamPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Team"
        title={<>Experienced. Senior-led.<br/>Quietly excellent.</>}
        lede="Years of combined expertise across financial services, risk management and regulatory compliance — delivered with integrity and care."
      />

      {/* Principles */}
      <section className="bg-[var(--color-ivory-50)] section-pad">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-[640px] mb-12">
            <span className="eyebrow">Commitment to excellence</span>
            <h2 className="font-display font-medium text-[var(--color-navy-900)] tracking-[-0.012em] mt-3"
                style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", lineHeight: 1.12 }}>
              Each member brings perspective and depth — for an integrated approach to governance and finance.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-line)] border border-[var(--color-line)]">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="bg-[var(--color-ivory-50)] p-7 sm:p-8 lg:p-10">
                <h3 className="font-display font-medium text-[var(--color-navy-900)] mt-4 mb-3"
                    style={{ fontSize: "clamp(1.2rem, 1.6vw, 1.4rem)", lineHeight: 1.2 }}>
                  {p.title}
                </h3>
                <p className="font-sans text-[var(--color-ink-700)] text-[0.98rem] leading-[1.65] m-0">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track record */}
      <section className="bg-[var(--color-ivory-100)] section-pad border-t border-[var(--color-line)]">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
            <div>
              <span className="eyebrow">Track record</span>
              <h2 className="font-display font-medium text-[var(--color-navy-900)] tracking-[-0.012em] mt-3"
                  style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", lineHeight: 1.12 }}>
                Reputation built on results.
              </h2>
              <p className="font-sans text-[var(--color-ink-700)] mt-5 leading-[1.7] max-w-[44ch]">
                Integrity, expertise and outcomes — backed by years of successful client
                partnerships in a challenging regulatory environment.
              </p>
            </div>
            <ul className="list-none p-0 m-0 divide-y divide-[var(--color-line)]">
              {TRACK_RECORD.map((t) => (
                <li key={t.stat} className="py-5 grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] gap-5 items-baseline first:pt-0 last:pb-0">
                  <span className="font-display font-medium text-[var(--color-gold-600)]"
                        style={{ fontSize: "clamp(1.4rem, 2vw, 1.8rem)", letterSpacing: "-0.01em" }}>
                    {t.stat}
                  </span>
                  <span className="font-sans text-[var(--color-ink-700)] text-[0.98rem] leading-[1.6]">
                    {t.body}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
