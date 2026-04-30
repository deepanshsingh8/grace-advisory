import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Highly experienced team across financial services, risk management and regulatory compliance — combining deep industry knowledge with a collaborative approach.",
  alternates: { canonical: "/our-team" },
};

export default function OurTeamPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Team"
        title="At the core of our success."
        lede="Experienced across financial services, risk management and regulatory compliance — deep knowledge, collaborative approach."
      />
      <PageBody>
        <p>
          We combine deep industry knowledge with a collaborative approach — and a track record
          across complex regulated portfolios.
        </p>
        <h2>What we bring</h2>
        <ul>
          <li><strong>Deep industry knowledge</strong> across AFSL and AML/CTF regimes.</li>
          <li><strong>Collaborative approach</strong> — we work with your team, not around them.</li>
          <li><strong>Continuous improvement</strong> in every engagement.</li>
        </ul>
        <p><em>Individual team profiles to follow.</em></p>
      </PageBody>
      <CTABand />
    </main>
  );
}
