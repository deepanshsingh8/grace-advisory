import type { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { ArrowRight } from "@/components/icons";
import { byRegion } from "@/lib/region";

export const metadata: Metadata = {
  ...byRegion({
    au: {
      title: "Services — AML Compliance & AFSL Consulting Australia",
      description:
        "Comprehensive AML compliance and AFSL Australia support. Professional compliance consulting services for regulated financial services businesses.",
    },
    nz: {
      title: "Services — FMA Licensing & AML/CFT Consulting New Zealand",
      description:
        "FSPR registration, FAP and market services licensing, AML/CFT programmes and independent audits — compliance consulting for New Zealand's regulated financial services businesses.",
    },
  }),
  alternates: { canonical: "/services" },
};

interface Family {
  eyebrow: string;
  title: string;
  blurb: string;
  href: string;
  items: { label: string; href: string }[];
}

const AU_FAMILIES: Family[] = [
  {
    eyebrow: "Pillar I",
    title: "AFSL Compliance",
    blurb:
      "From application through to ongoing oversight — for firms providing financial products and services in Australia.",
    href: "/afsl",
    items: [
      { label: "AFSL Application", href: "/afsl/application" },
      { label: "Compliance Policies Drafting", href: "/afsl/compliance-policies" },
      { label: "Responsible Manager Nominations", href: "/afsl/responsible-manager" },
      { label: "External Compliance Reviews", href: "/afsl/external-review" },
      { label: "Ongoing Compliance Monitoring", href: "/afsl/ongoing-monitoring" },
    ],
  },
  {
    eyebrow: "Pillar II",
    title: "AML/CTF Compliance",
    blurb:
      "Risk-based programs that work in practice — calibrated to Tranche 2 and the realities of AUSTRAC supervision.",
    href: "/aml-ctf",
    items: [
      { label: "AML/CTF Program", href: "/aml-ctf/program" },
      { label: "AUSTRAC Registration", href: "/aml-ctf/austrac-registration" },
      { label: "Ongoing AML/CTF Compliance", href: "/aml-ctf/ongoing" },
      { label: "Independent Review (Part A & B)", href: "/aml-ctf/independent-review" },
    ],
  },
];

const NZ_FAMILIES: Family[] = [
  {
    eyebrow: "Pillar I",
    title: "Licensing & Registration",
    blurb:
      "From FSPR registration and the FMA licence application through to ongoing oversight — for firms providing financial advice and market services in New Zealand.",
    href: "/licensing",
    items: [
      { label: "FAP Licence Application", href: "/licensing/fap-licence" },
      { label: "FSPR Registration & Dispute Resolution", href: "/licensing/fspr-registration" },
      { label: "Compliance Policies Drafting", href: "/licensing/compliance-policies" },
      { label: "External Compliance Reviews", href: "/licensing/compliance-review" },
      { label: "Ongoing Compliance Monitoring", href: "/licensing/ongoing-monitoring" },
    ],
  },
  {
    eyebrow: "Pillar II",
    title: "AML/CFT Compliance",
    blurb:
      "Risk-based programmes that work in practice — built for the AML/CFT Act 2009 and the realities of supervision and FIU reporting.",
    href: "/aml-cft",
    items: [
      { label: "AML/CFT Programme", href: "/aml-cft/programme" },
      { label: "Remitters & Virtual Asset Providers", href: "/aml-cft/remittance-vasp" },
      { label: "Ongoing AML/CFT Compliance", href: "/aml-cft/ongoing" },
      { label: "Independent AML/CFT Audit", href: "/aml-cft/independent-audit" },
    ],
  },
];

const FAMILIES = byRegion({ au: AU_FAMILIES, nz: NZ_FAMILIES });

interface Adjacent { title: string; blurb: string; href: string }

const AU_ADJACENT: Adjacent[] = [
  {
    title: "Credit Licence Applications",
    blurb: "Help your business obtain an Australian Credit Licence (ACL) — including responsible-lending obligations.",
    href: "/contact",
  },
  {
    title: "Legal & Corporate Support",
    blurb: "Corporate and commercial legal support to complement your compliance framework.",
    href: "/contact",
  },
  {
    title: "Graduate Training Program",
    blurb: "Hands-on training, industry insight and career development for graduates entering compliance.",
    href: "/graduate-training",
  },
];

const NZ_ADJACENT: Adjacent[] = [
  {
    title: "Market Services & CoFI Licensing",
    blurb: "Support for managed fund, DIMS and other market services licences — and fair conduct programmes for banks, insurers and deposit takers under CoFI.",
    href: "/contact",
  },
  {
    title: "Consumer Credit Compliance",
    blurb: "Responsible lending and compliance frameworks for consumer lenders under the Credit Contracts and Consumer Finance Act 2003.",
    href: "/contact",
  },
  {
    title: "Graduate Training Program",
    blurb: "Hands-on training, industry insight and career development for graduates entering compliance.",
    href: "/graduate-training",
  },
];

const ADJACENT = byRegion({ au: AU_ADJACENT, nz: NZ_ADJACENT });

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title={<>What we do —<br/>in detail.</>}
        lede="A practical menu of engagements — each tailored to the nature, size and complexity of your business."
      />

      {/* Two pillars */}
      <section className="bg-[var(--color-ivory-50)] section-pad">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {FAMILIES.map((f) => (
              <article key={f.title}
                       className="relative bg-[var(--color-ivory-50)] border border-[var(--color-line)] p-7 sm:p-9 lg:p-10 flex flex-col">
                <div className="h-[3px] w-12 bg-[var(--color-gold-500)] mb-6" aria-hidden />
                <span className="eyebrow no-rule">
                  {f.eyebrow}
                </span>
                <h2 className="font-display font-medium text-[var(--color-navy-900)] tracking-[-0.01em] mt-3"
                    style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)", lineHeight: 1.15 }}>
                  {f.title}
                </h2>
                <p className="font-sans text-[var(--color-ink-700)] mt-4 mb-6 leading-[1.65]">
                  {f.blurb}
                </p>

                <ul className="list-none p-0 m-0 divide-y divide-[var(--color-line)]">
                  {f.items.map((it) => (
                    <li key={it.href}>
                      <Link href={it.href}
                            className="group flex items-center justify-between gap-4 py-3.5 text-[0.97rem] font-sans text-[var(--color-ink-900)] hover:text-[var(--color-navy-700)] transition-colors">
                        <span>{it.label}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[var(--color-gold-600)] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <Link href={f.href} className="btn-ghost">
                    Family overview
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Adjacent services */}
      <section className="bg-[var(--color-ivory-100)] border-t border-[var(--color-line)] section-pad">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-[640px] mb-10 sm:mb-12">
            <span className="eyebrow">Also available</span>
            <h2 className="font-display font-medium text-[var(--color-navy-900)] tracking-[-0.012em] mt-3"
                style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", lineHeight: 1.12 }}>
              Adjacent engagements.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-line)] border border-[var(--color-line)]">
            {ADJACENT.map((a) => (
              <Link key={a.title} href={a.href}
                    className="group bg-[var(--color-ivory-50)] p-7 sm:p-8 hover:bg-[var(--color-ivory-100)] transition-colors">
                <h3 className="font-display font-medium text-[var(--color-navy-900)] mb-2.5"
                    style={{ fontSize: "clamp(1.15rem, 1.5vw, 1.35rem)", lineHeight: 1.2 }}>
                  {a.title}
                </h3>
                <p className="font-sans text-[var(--color-ink-700)] text-[0.95rem] leading-[1.6] m-0 mb-5">
                  {a.blurb}
                </p>
                <span className="inline-flex items-center gap-1.5 font-sans font-bold text-[0.7rem] tracking-[0.2em] uppercase text-[var(--color-gold-700)] group-hover:text-[var(--color-gold-600)] transition-colors">
                  Enquire
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
