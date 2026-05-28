import type { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Our Partners — AFSL Compliance Partner Firms & Strategic Alliances",
  description:
    "Strategic alliances with legal, accounting, audit and insurance professionals that complement Grace Advisory's AFSL and AML/CTF compliance services.",
  alternates: { canonical: "/our-partners" },
};

const ALLIANCES: { eyebrow: string; title: string; body: string }[] = [
  {
    eyebrow: "Legal",
    title: "Corporate & financial services counsel",
    body: "We work alongside specialist law firms on AFSL conditions, breach analysis and disclosure where formal legal advice is required.",
  },
  {
    eyebrow: "Audit & Assurance",
    title: "External auditors & assurance providers",
    body: "Our reviews complement statutory audit cycles — coordinated so the AFSL Manual and AML/CTF Program testing fit your assurance calendar.",
  },
  {
    eyebrow: "Insurance",
    title: "Life-risk distribution platform",
    body: "Through HAE Financial (AFSL 501 891), we operate Grace Advisory Services for the general advice life-risk channel.",
  },
  {
    eyebrow: "Accounting",
    title: "CPA & CA practices",
    body: "Trusted referral channels with accountants positioned for the Tranche 2 reforms — supporting their entry into the AUSTRAC regime.",
  },
];

export default function OurPartnersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Partners"
        title={<>Built on long-lasting<br/>relationships.</>}
        lede="We collaborate with legal, accounting, audit and insurance professionals to deliver outcomes across the regulatory perimeter."
      />

      <section className="bg-[var(--color-ivory-50)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-[640px] mb-12">
            <span className="eyebrow">Strategic alliances</span>
            <h2 className="font-display font-medium text-[var(--color-navy-900)] tracking-[-0.012em] mt-3"
                style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", lineHeight: 1.12 }}>
              A network of trusted advisers — assembled to support whatever your engagement needs.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-line)] border border-[var(--color-line)]">
            {ALLIANCES.map((a) => (
              <div key={a.title} className="bg-[var(--color-ivory-50)] p-7 sm:p-9 lg:p-10">
                <span className="font-sans font-bold tracking-[0.2em] uppercase text-[0.7rem] text-[var(--color-gold-700)]">
                  {a.eyebrow}
                </span>
                <h3 className="font-display font-medium text-[var(--color-navy-900)] mt-4 mb-3"
                    style={{ fontSize: "clamp(1.25rem, 1.7vw, 1.5rem)", lineHeight: 1.2 }}>
                  {a.title}
                </h3>
                <p className="font-sans text-[var(--color-ink-700)] text-[0.98rem] leading-[1.65] m-0">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy band */}
      <section className="bg-[var(--color-ivory-100)] border-t border-[var(--color-line)] py-16 sm:py-20">
        <div className="mx-auto max-w-[900px] px-5 sm:px-8 text-center">
          <span className="eyebrow">How we partner</span>
          <blockquote className="font-display font-medium text-[var(--color-navy-900)] mt-6 m-0 leading-[1.35] tracking-[-0.01em]"
                      style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)" }}>
            <span className="text-[var(--color-gold-500)] mr-1">“</span>
            We aim to foster long-lasting client relationships and partnerships
            on the basis of mutual respect and trust.
            <span className="text-[var(--color-gold-500)] ml-1">”</span>
          </blockquote>
          <div className="mt-8 flex justify-center">
            <Link href="/contact" className="btn btn-primary magnetic">
              Talk about a partnership
              <ArrowRight className="arrow" />
            </Link>
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
