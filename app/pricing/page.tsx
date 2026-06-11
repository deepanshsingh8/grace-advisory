import type { Metadata } from "next";
import Script from "next/script";
import { CTABand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { PricingFAQ } from "@/components/pricing-faq";
import { PricingTiers } from "@/components/pricing-tiers";
import { ProjectPricing } from "@/components/project-pricing";
import { TIERS, PROJECTS, PRICING_FAQS } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing — Compliance Retainers & Project Engagements",
  description:
    "AFSL and AML/CTF compliance pricing — three monthly retainer tiers and fixed-fee project engagements (AFSL Application, AML/CTF Programs, AUSTRAC Registration, Independent Reviews). Fees quoted on enquiry.",
  alternates: { canonical: "/pricing" },
};

/* ─── JSON-LD: tiers and projects as Services — fees are not published ── */
const pricingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    ...TIERS.map((t) => ({
      "@type": "Service",
      "@id": `https://graceadvisory.com.au/pricing#${t.id}`,
      name: `${t.name} retainer`,
      description: t.tagline,
      areaServed: { "@type": "Country", name: "Australia" },
      provider: { "@id": "https://graceadvisory.com.au/#organization" },
    })),
    ...PROJECTS.map((p) => ({
      "@type": "Service",
      name: p.name,
      description: p.description,
      provider: { "@id": "https://graceadvisory.com.au/#organization" },
    })),
    {
      "@type": "FAQPage",
      mainEntity: PRICING_FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pricing"
        title={<>Fixed fees, by retainer<br/>and by project.</>}
        lede="No hourly bills. Three subscription tiers for ongoing work; fixed fees for one-off engagements — quoted on scope."
      />
      <PricingTiers />
      <ProjectPricing />
      <PricingFAQ />
      <CTABand />

      <Script
        id="ld-pricing"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
    </main>
  );
}
