import type { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Graduate Training Program — Compliance Training & Legal Register",
  description:
    "Graduate training focused on compliance and legal registers. Practical, industry-led education for regulatory and risk management roles.",
  alternates: { canonical: "/graduate-training" },
};

const PILLARS: { title: string; body: string }[] = [
  { title: "Industry-specific training", body: "A deep dive into market trends, operations and the best practices regulators expect." },
  { title: "Hands-on experience", body: "Apply your learning in practical scenarios with mentorship from senior professionals." },
  { title: "Career development", body: "Job-search strategy — from a sharper CV to confident, considered interviews." },
  { title: "Networking opportunities", body: "Connect with industry leaders and professionals who can guide your career." },
];

export default function GradPage() {
  return (
    <main>
      <PageHero
        eyebrow="Graduate Training"
        title={<>Kickstart your career<br/>with practical experience.</>}
        lede="Landing your first opportunity is hard without experience. Our program bridges that gap with end-to-end training and real-world insight."
      />

      <section className="bg-[var(--color-ivory-50)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-[640px] mb-12">
            <span className="eyebrow">What we offer</span>
            <h2 className="font-display font-medium text-[var(--color-navy-900)] tracking-[-0.012em] mt-3"
                style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", lineHeight: 1.12 }}>
              The skills, knowledge and confidence to navigate a competitive job market.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--color-line)] border border-[var(--color-line)]">
            {PILLARS.map((p, i) => (
              <div key={p.title} className="bg-[var(--color-ivory-50)] p-7 sm:p-9 lg:p-10">
                <span className="font-sans font-bold tracking-[0.2em] uppercase text-[0.7rem] text-[var(--color-gold-700)]">
                  No. {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display font-medium text-[var(--color-navy-900)] mt-4 mb-3"
                    style={{ fontSize: "clamp(1.2rem, 1.7vw, 1.45rem)", lineHeight: 1.2 }}>
                  {p.title}
                </h3>
                <p className="font-sans text-[var(--color-ink-700)] text-[0.98rem] leading-[1.65] m-0">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary magnetic">
              Apply to the program
              <ArrowRight className="arrow" />
            </Link>
            <Link href="/our-team" className="btn btn-outline">
              Meet the team
            </Link>
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
