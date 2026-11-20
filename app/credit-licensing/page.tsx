import type { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/cta-band";
import { FAQAccordion, FAQSchema } from "@/components/faq-accordion";
import { ArrowRight } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { SectionHead } from "@/components/section";
import {
  CREDIT_AUDIENCES,
  CREDIT_FAQS,
  CREDIT_LANDING,
  CREDIT_SERVICES,
  CREDIT_STEPS,
  enquiryHref,
} from "@/lib/credit-licensing";
import { IMG } from "@/lib/imagery";
import { onlyIn } from "@/lib/region-guard";

export const metadata: Metadata = {
  title: "Australian Credit Licence (ACL) Advisory & Compliance — ASIC Credit Licence Consultants",
  description:
    "Australian credit licence application support and ongoing ACL compliance — authorisations, Responsible Managers, responsible lending, compliance frameworks, reviews and ASIC engagement.",
  alternates: { canonical: "/credit-licensing" },
  openGraph: {
    title: "Australian Credit Licence (ACL) Advisory & Compliance",
    description:
      "From your first ASIC credit licence application to ongoing regulatory oversight — practical, proportionate compliance for lenders, brokers and credit businesses.",
  },
};

export default function CreditLicensingPage() {
  onlyIn("au");
  return (
    <main>
      <PageHero
        eyebrow="Pillar III · Credit Licensing"
        title={CREDIT_LANDING.h1}
        lede={CREDIT_LANDING.lede}
        image={IMG.pillar_credit}
        imageAlt="Modern office interior — the setting for a well-run credit business."
        actions={
          <>
            <Link
              href={enquiryHref("acl-general")}
              className="btn btn-primary magnetic"
              data-track="cta_click"
              data-track-label="credit_landing_hero_book"
            >
              {CREDIT_LANDING.primaryCta}
              <ArrowRight className="arrow" />
            </Link>
            <Link
              href={enquiryHref("acl-application")}
              className="btn btn-outline on-dark"
              data-track="cta_click"
              data-track-label="credit_landing_hero_discuss"
            >
              {CREDIT_LANDING.secondaryCta}
            </Link>
          </>
        }
      />

      {/* Introduction */}
      <section className="relative bg-[var(--color-ivory-50)] section-pad">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <span className="eyebrow">The credit regime</span>
            <h2 className="font-display font-medium text-[var(--color-navy-900)] tracking-[-0.012em] mt-3"
                style={{ fontSize: "clamp(1.85rem, 3.4vw, 2.7rem)", lineHeight: 1.08 }}>
              The right licence. A framework that lasts.
            </h2>
          </div>
          <div className="font-sans text-[var(--color-ink-700)] space-y-5" style={{ fontSize: "clamp(1rem, 1.2vw, 1.12rem)", lineHeight: 1.75 }}>
            <p className="m-0">
              Businesses that engage in consumer credit activities in Australia generally need an
              Australian Credit Licence (ACL) issued by ASIC under the National Consumer Credit
              Protection Act 2009. That includes providing consumer credit, providing credit
              assistance such as broking, offering consumer leases, and — following recent
              reforms — buy now pay later products and certain debt management services.
            </p>
            <p className="m-0">
              We help you work out which authorisations fit your business model, prepare an
              application that reflects how the business will actually operate, and build the
              compliance framework ASIC expects a licensee to run every day — responsible lending,
              dispute resolution, breach reporting, representative oversight and more.
            </p>
            <p className="m-0 text-[0.95rem] text-[var(--color-ink-600)]">
              Grace Advisory provides advisory, application support and compliance services. The
              authorisations you need and the obligations that apply depend on your credit
              activities.
            </p>
          </div>
        </div>
      </section>

      {/* Six services */}
      <section id="services" className="relative bg-warm-mesh section-pad border-t border-[var(--color-line)]">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <SectionHead
            eyebrow="Service portfolio"
            title={<>Six specialist<br />pathways.</>}
            lede="Engage us for one piece of work or for the whole journey — from first application to mature, well-evidenced compliance."
          />
          <ul className="reveal list-none p-0 m-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {CREDIT_SERVICES.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="has-spotlight group relative flex h-full flex-col bg-[var(--color-ivory-50)] border border-[var(--color-line)] p-7 sm:p-8 hover:border-[var(--color-gold-300)] transition-[border-color] duration-200"
                  data-track="service_card_click"
                  data-track-label={s.enquiryValue}
                >
                  <div className="h-[3px] w-10 bg-[var(--color-gold-500)] mb-6" aria-hidden />
                  <span className="font-sans font-bold text-[0.72rem] tracking-[0.22em] text-[var(--color-gold-700)]">{s.num}</span>
                  <h3 className="font-display font-medium text-[var(--color-navy-900)] mt-2 mb-3"
                      style={{ fontSize: "clamp(1.3rem, 1.7vw, 1.55rem)", lineHeight: 1.18 }}>
                    {s.navLabel}
                  </h3>
                  <p className="font-sans text-[var(--color-ink-700)] text-[0.98rem] leading-[1.65] m-0 mb-6">{s.summary}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 font-sans font-bold text-[0.72rem] tracking-[0.2em] uppercase text-[var(--color-gold-700)] group-hover:text-[var(--color-gold-600)]">
                    Explore
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Audiences */}
      <section className="relative bg-[var(--color-ivory-100)] section-pad border-y border-[var(--color-line)]">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <SectionHead
            eyebrow="Who we work with"
            title={<>Credit businesses,<br />at every stage.</>}
            lede="From start-ups preparing a first application to established licensees strengthening governance."
          />
          <dl className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-line)] border border-[var(--color-line)] m-0">
            {CREDIT_AUDIENCES.map((a) => (
              <div key={a.key} className="bg-[var(--color-ivory-50)] p-7">
                <dt>
                  <span className="block font-display text-[2rem] leading-none text-[var(--color-gold-600)]" aria-hidden>{a.key}</span>
                  <span className="block mt-4 font-display font-medium text-[var(--color-navy-900)] text-[1.35rem] leading-[1.2]">{a.title}</span>
                </dt>
                <dd className="m-0 mt-3 font-sans text-[var(--color-ink-700)] text-[0.96rem] leading-[1.6]">{a.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* How an engagement runs */}
      <section className="relative bg-[var(--color-ivory-50)] section-pad">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <SectionHead
            eyebrow="How we work"
            title={<>From scoping<br />to day one — and beyond.</>}
            lede="Every engagement is shaped to the nature, scale and complexity of your credit business."
          />
          <ol className="reveal list-none p-0 m-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CREDIT_STEPS.map((step, i) => (
              <li key={step.title} className="border-t-2 border-[var(--color-gold-500)] pt-5">
                <span className="font-sans font-bold text-[0.72rem] tracking-[0.22em] text-[var(--color-gold-700)]">
                  STEP {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display font-medium text-[var(--color-navy-900)] text-[1.45rem] mt-2 mb-3">{step.title}</h3>
                <p className="font-sans text-[var(--color-ink-700)] text-[0.98rem] leading-[1.65] m-0">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Cross-pillar links */}
      <section className="relative bg-[var(--color-ivory-100)] border-y border-[var(--color-line)] section-pad-sm">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12 grid gap-6 md:grid-cols-2">
          <CrossLink
            href="/afsl"
            eyebrow="Pillar I"
            title="Also need an AFSL?"
            body="Some credit businesses also deal in financial products — insurance, investments or payment products. We support both licences together."
          />
          <CrossLink
            href="/aml-ctf"
            eyebrow="Pillar II"
            title="AML/CTF obligations"
            body="Many lenders are also AUSTRAC reporting entities. We build AML/CTF programs that sit alongside your credit compliance framework."
          />
        </div>
      </section>

      <FAQAccordion
        faqs={CREDIT_FAQS}
        title={<>Credit licensing,<br />plainly answered.</>}
        lede="The questions credit businesses ask us most often. If yours is not here, get in touch."
      />
      <FAQSchema faqs={CREDIT_FAQS} />

      <CTABand
        primary={{ label: CREDIT_LANDING.primaryCta, href: enquiryHref("acl-general") }}
        secondary={{ label: CREDIT_LANDING.secondaryCta, href: enquiryHref("acl-application") }}
        trackLabel="cta_band_credit_landing"
      />
    </main>
  );
}

function CrossLink({ href, eyebrow, title, body }: { href: string; eyebrow: string; title: string; body: string }) {
  return (
    <Link href={href} className="group block bg-[var(--color-ivory-50)] border border-[var(--color-line)] p-7 sm:p-8 hover:border-[var(--color-gold-300)] transition-colors">
      <span className="eyebrow no-rule">{eyebrow}</span>
      <h2 className="font-display font-medium text-[var(--color-navy-900)] mt-2 mb-2 text-[1.4rem] leading-[1.2]">{title}</h2>
      <p className="font-sans text-[var(--color-ink-700)] text-[0.96rem] leading-[1.6] m-0 mb-4">{body}</p>
      <span className="inline-flex items-center gap-1.5 font-sans font-bold text-[0.7rem] tracking-[0.2em] uppercase text-[var(--color-gold-700)]">
        Learn more
        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
