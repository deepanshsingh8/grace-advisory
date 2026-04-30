import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { Insights } from "@/components/insights";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Insights — Financial Services Licence & Compliance Insights",
  description:
    "Plain-English commentary on the AFSL, AML/CTF and AUSTRAC rules — Tranche 2, RG 105, the application process and more.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <main>
      <PageHero
        eyebrow="Insights"
        title="Notes from the practice."
        lede="Plain-English commentary on the rules you actually have to follow."
      />
      <Insights />
      <CTABand />
    </main>
  );
}
