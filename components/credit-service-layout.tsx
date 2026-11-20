import Link from "next/link";
import { CTABand } from "@/components/cta-band";
import { FAQAccordion, FAQSchema, type FAQItem } from "@/components/faq-accordion";
import { ArrowRight } from "@/components/icons";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";
import {
  CREDIT_BASE,
  CREDIT_LANDING,
  CREDIT_SERVICES,
  enquiryHref,
  type CreditService,
} from "@/lib/credit-licensing";
import { SITE_URL } from "@/lib/region";

/**
 * Shared shell for the six Credit Licensing service pages:
 * hero → long-form body → FAQs → related services → closing CTA.
 * Each page supplies its own body copy and FAQs.
 */
export function CreditServiceLayout({
  service,
  title,
  lede,
  faqs,
  children,
}: {
  service: CreditService;
  title: React.ReactNode;
  lede: string;
  faqs: readonly FAQItem[];
  children: React.ReactNode;
}) {
  const related = CREDIT_SERVICES.filter((s) => s.href !== service.href);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.navLabel,
    serviceType: "Australian Credit Licence advisory and compliance",
    description: lede,
    url: `${SITE_URL}${service.href}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Australia" },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }}
      />
      <PageHero
        eyebrow={`Credit Licensing · ${service.num}`}
        title={title}
        lede={lede}
        actions={
          <>
            <Link
              href={enquiryHref(service.enquiryValue)}
              className="btn btn-primary magnetic"
              data-track="cta_click"
              data-track-label={`hero_${service.enquiryValue}`}
            >
              {CREDIT_LANDING.primaryCta}
              <ArrowRight className="arrow" />
            </Link>
            <Link href={CREDIT_BASE} className="btn btn-outline on-dark">
              All credit licensing services
            </Link>
          </>
        }
      />

      <PageBody>
        <nav aria-label="Breadcrumb" className="not-prose mb-8 font-sans text-[0.78rem] tracking-[0.14em] uppercase text-[var(--color-ink-600)]">
          <Link href={CREDIT_BASE} className="hover:text-[var(--color-gold-700)]">Credit Licensing</Link>
          <span aria-hidden className="mx-2">/</span>
          <span aria-current="page" className="text-[var(--color-navy-900)]">{service.navLabel}</span>
        </nav>
        {children}
        <p className="text-[0.92rem] text-[var(--color-ink-600)]">
          <em>
            The authorisations you need and the obligations that apply depend on your credit
            activities and business model. This page is general information, not legal advice.
          </em>
        </p>
      </PageBody>

      {faqs.length > 0 && (
        <>
          <FAQAccordion
            faqs={faqs}
            title={<>Questions about<br />{service.title.toLowerCase()}.</>}
            lede="Plain-language answers. If your situation is not covered here, ask us directly."
          />
          <FAQSchema faqs={faqs} />
        </>
      )}

      <RelatedServices related={related} />

      <CTABand
        primary={{ label: CREDIT_LANDING.primaryCta, href: enquiryHref(service.enquiryValue) }}
        secondary={{ label: "Explore Credit Licensing", href: CREDIT_BASE }}
        trackLabel={`cta_band_${service.enquiryValue}`}
      />
    </main>
  );
}

function RelatedServices({ related }: { related: readonly CreditService[] }) {
  return (
    <section className="bg-[var(--color-ivory-100)] border-t border-[var(--color-line)] section-pad-sm">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <h2 className="font-display font-medium text-[var(--color-navy-900)] tracking-[-0.012em] mb-8"
            style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)", lineHeight: 1.15 }}>
          Related credit licensing services
        </h2>
        <ul className="list-none p-0 m-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {related.map((s) => (
            <li key={s.href} className="bg-[var(--color-ivory-50)] border border-[var(--color-line)] hover:border-[var(--color-gold-300)] transition-colors">
              <Link href={s.href}
                    className="group flex h-full flex-col p-6 hover:bg-[var(--color-ivory-100)] transition-colors"
                    data-track="service_card_click"
                    data-track-label={s.enquiryValue}>
                <span className="font-sans font-bold text-[0.7rem] tracking-[0.2em] text-[var(--color-gold-700)]">{s.num}</span>
                <span className="font-display font-medium text-[var(--color-navy-900)] mt-2 text-[1.2rem] leading-[1.25]">{s.navLabel}</span>
                <span className="font-sans text-[0.92rem] text-[var(--color-ink-700)] leading-[1.55] mt-2">{s.summary}</span>
                <span className="mt-auto pt-4 inline-flex items-center gap-1.5 font-sans font-bold text-[0.7rem] tracking-[0.2em] uppercase text-[var(--color-gold-700)]">
                  Learn more
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 font-sans text-[0.95rem] text-[var(--color-ink-700)]">
          Also licensed for financial services or regulated by AUSTRAC? See our{" "}
          <Link href="/afsl" className="text-[var(--color-navy-700)] underline underline-offset-4 decoration-[var(--color-gold-500)]">AFSL services</Link>{" "}
          and{" "}
          <Link href="/aml-ctf" className="text-[var(--color-navy-700)] underline underline-offset-4 decoration-[var(--color-gold-500)]">AML/CTF services</Link>.
        </p>
      </div>
    </section>
  );
}
