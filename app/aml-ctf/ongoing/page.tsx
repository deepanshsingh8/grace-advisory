import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Ongoing AML/CTF Compliance",
  description:
    "Continuous compliance with your AML/CTF Program — risk assessment, training, transaction monitoring, AUSTRAC liaison and ad-hoc support.",
  alternates: { canonical: "/aml-ctf/ongoing" },
};

export default function OngoingAmlPage() {
  return (
    <main>
      <PageHero
        eyebrow="Ongoing AML/CTF Compliance"
        title="The program is the start, not the end."
        lede="Implementing your AML/CTF Program is foundational. Continuous compliance with its obligations is what actually keeps you on the right side of the rules."
      />
      <PageBody>
        <h2>ML/TF risk assessment</h2>
        <p>
          The entire Australian AML/CTF regulatory framework is risk-based. A proper assessment
          enables customer risk rating and influences the level of subsequent due diligence.
        </p>
        <h2>Training</h2>
        <p>
          Training implementation often falls short of program requirements. Training undertaken
          to satisfy the AFSL regulatory regime is not automatically relevant to AML/CTF
          obligations.
        </p>
        <h2>Transaction monitoring & SMR</h2>
        <p>
          Often absent or insufficient. Important for both due diligence and reporting
          obligations under section 41 of the AML/CTF Act.
        </p>
        <h2>What we offer</h2>
        <ul>
          <li>Tailored compliance training</li>
          <li>Regular compliance reviews with reporting</li>
          <li>Report review and stakeholder meetings</li>
          <li>AUSTRAC liaison services</li>
          <li>Ad-hoc support</li>
        </ul>
      </PageBody>
      <CTABand />
    </main>
  );
}
