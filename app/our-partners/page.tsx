import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Our Partners — AFSL Compliance Partner Firms & Strategic Alliances",
  description:
    "Strategic alliances and partner firms that complement Grace Advisory’s AFSL and AML/CTF compliance services.",
  alternates: { canonical: "/our-partners" },
};

export default function OurPartnersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Partners"
        title="Built on long-lasting relationships."
        lede="We collaborate with a network of legal, accounting and audit professionals to deliver compliance outcomes that hold up across the broader regulatory perimeter."
      />
      <PageBody>
        <p>
          We aim to foster long-lasting client relationships and partnerships on the basis of
          mutual respect and trust. Strategic alliance details will be added in due course.
        </p>
      </PageBody>
      <CTABand />
    </main>
  );
}
