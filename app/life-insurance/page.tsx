import type { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/cta-band";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Life Insurance — General Advice for Life Risk Products",
  description:
    "Grace Advisory Services — Authorised Representative for life risk products. Remove the compliance burden and focus on your expert knowledge.",
  alternates: { canonical: "/life-insurance" },
};

const PRODUCTS = [
  { name: "Life Insurance", blurb: "Cover for your clients' loved ones." },
  { name: "Total & Permanent Disability", blurb: "Protection if life-changing illness or injury strikes." },
  { name: "Income Protection", blurb: "Replace lost income through illness or accident." },
  { name: "Trauma / Critical Illness", blurb: "A lump sum on diagnosis of a covered condition." },
];

export default function LifeInsurancePage() {
  return (
    <main>
      <PageHero
        eyebrow="Life Insurance"
        title={<>General advice for<br/>life risk products.</>}
        lede="Moving to General Advice doesn't mean less service — it means a platform that supports your business, not one that hinders it."
      />

      {/* Products grid */}
      <section className="bg-[var(--color-ivory-100)] section-pad">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-[640px] mb-10 sm:mb-14">
            <span className="eyebrow">What we cover</span>
            <h2 className="font-display font-medium text-[var(--color-navy-900)] tracking-[-0.012em] mt-3"
                style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", lineHeight: 1.12 }}>
              Life insurance products offered through Grace Advisory Services.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--color-line)] border border-[var(--color-line)]">
            {PRODUCTS.map((p) => (
              <div key={p.name} className="bg-[var(--color-ivory-50)] p-7 sm:p-8 lg:p-10">
                <div className="h-[3px] w-10 bg-[var(--color-gold-500)] mb-5" aria-hidden />
                <h3 className="font-display font-medium text-[var(--color-navy-900)] text-[1.25rem] sm:text-[1.35rem] mb-2">
                  {p.name}
                </h3>
                <p className="font-sans text-[var(--color-ink-700)] text-[0.98rem] leading-[1.6]">
                  {p.blurb}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageBody>
        <h2>Who is Grace Advisory Services?</h2>
        <p>
          Grace Advisory Services is an Authorised Representative
          <strong> (AR No 001312166)</strong> of HAE Financial Pty Ltd,
          Australian Financial Services Licence <strong>(AFSL) 501 891</strong> —
          and a member of the Australian Financial Complaints Authority
          <strong> (AFCA) 40296</strong>.
        </p>

        <h2>Remove the compliance burden</h2>
        <p>
          As an expert in life insurance, you need an AFSL platform that supports your business —
          not one that gets in the way. Provide what your clients really need: your expert knowledge.
        </p>

        <div className="not-prose mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-primary magnetic">
            Get in touch
            <ArrowRight className="arrow" />
          </Link>
          <Link href="/afsl" className="btn btn-outline">
            AFSL services
          </Link>
        </div>
      </PageBody>

      {/* Disclosure */}
      <section className="bg-[var(--color-ivory-50)] border-t border-[var(--color-line)]">
        <div className="mx-auto max-w-[900px] px-5 sm:px-8 lg:px-12 py-10 sm:py-14">
          <div className="eyebrow mb-4">General advice disclosure</div>
          <p className="font-sans text-[var(--color-ink-600)] text-[0.92rem] sm:text-[0.95rem] leading-[1.7]">
            The information in this communication contains general information only. We have not
            taken into consideration any of your personal objectives, financial situation or needs.
            Before taking any action, you should consider whether the general advice contained in
            this communication is appropriate to you having regard to your circumstances and needs.
          </p>
          <p className="font-sans text-[var(--color-ink-600)] text-[0.92rem] sm:text-[0.95rem] leading-[1.7] mt-4">
            Grace Advisory Services is an Authorised Representative (AR No 001312166) of HAE
            Financial Pty Ltd, Australian Financial Services Licence (AFSL) 501&nbsp;891. Member of
            the Australian Financial Complaints Authority (AFCA) 40296.
            <Link href="/contact" className="underline decoration-[var(--color-gold-500)] underline-offset-4 ml-1">
              Contact us for a copy of our Financial Services Guide (FSG).
            </Link>
          </p>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
