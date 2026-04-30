import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { ServiceGrid } from "@/components/service-grid";

export const metadata: Metadata = {
  title: "Services — AML Compliance & AFSL Australia",
  description:
    "Our consulting services across AFSL applications, credit licences, ongoing compliance, AML/CTF programs, AUSTRAC registration and corporate legal support.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="What we do, in detail."
        lede="A practical menu of engagements — each tailored and grounded in the regulatory text."
      />
      <ServiceGrid />
      <CTABand />
    </main>
  );
}
