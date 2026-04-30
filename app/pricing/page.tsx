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
    "Transparent pricing for AFSL and AML/CTF compliance — three monthly retainer tiers and fixed-fee project engagements (AFSL Application, AML/CTF Programs, AUSTRAC Registration, Independent Reviews).",
  alternates: { canonical: "/pricing" },
};

/* ─── JSON-LD: each tier as an Offer; each project as a Service+Offer ── */
const pricingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    ...TIERS.map((t) => ({
      "@type": "Offer",
      "@id": `https://graceadvisory.com.au/pricing#${t.id}`,
      name: `${t.name} retainer`,
      description: t.tagline,
      price: t.price,
      priceCurrency: "AUD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: t.price,
        priceCurrency: "AUD",
        unitText: "MON",
      },
      availability: "https://schema.org/InStock",
      eligibleRegion: { "@type": "Country", name: "Australia" },
      seller: { "@id": "https://graceadvisory.com.au/#organization" },
    })),
    ...PROJECTS.map((p) => ({
      "@type": "Service",
      name: p.name,
      description: p.description,
      provider: { "@id": "https://graceadvisory.com.au/#organization" },
      offers: {
        "@type": "AggregateOffer",
        lowPrice: p.from,
        highPrice: p.to ?? p.from,
        priceCurrency: "AUD",
      },
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
        title={<>Transparent fees, by retainer<br/>and by project.</>}
        lede="No hourly bills. Three subscription tiers for ongoing work; fixed-fee ranges for one-off engagements. AUD, excl. GST."
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
