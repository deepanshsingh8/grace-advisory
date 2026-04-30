import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";
import { IMG } from "@/lib/imagery";

export const metadata: Metadata = {
  title: "AML/CTF Compliance — AML Reforms & Tranche 2 Compliance Services Australia",
  description:
    "Anti-Money Laundering and Counter-Terrorism Financing compliance — AML/CTF Programs, AUSTRAC enrolment, training, KYC, transaction monitoring and independent reviews.",
  alternates: { canonical: "/aml-ctf" },
};

export default function AmlCtfPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pillar II"
        title="AML/CTF Compliance."
        lede="The Australian AML/CTF regime is risk-based at heart. We translate that principle into programs that work in practice — from AUSTRAC enrolment through to the independent review."
        image={IMG.pillar_aml}
        imageAlt="Signing a contract — the formality of compliance, made tractable."
      />
      <PageBody>
        <p>AUSTRAC is the administrator of the AML/CTF regime and the Financial Intelligence Unit (FIU) in Australia.</p>

        <h2>Key obligations for reporting entities</h2>
        <ul>
          <li>Establish and maintain an AML/CTF Program</li>
          <li>Designate an AML/CTF Compliance Officer</li>
          <li>Conduct staff training on AML/CTF obligations</li>
          <li>Perform Know Your Customer (KYC) procedures</li>
          <li>Comply with ongoing customer due diligence requirements</li>
          <li>Meet reporting obligations: suspicious matters, threshold transactions, international funds transfer instructions</li>
          <li>Review and update the AML/CTF Program regularly</li>
        </ul>

        <h2>Services we offer</h2>
        <ul>
          <li>AUSTRAC enrolment and registration</li>
          <li>AML/CTF Program drafting with tailored policies</li>
          <li>Compliance induction and refresher training</li>
          <li>Role-based training for compliance personnel</li>
          <li>Ongoing guidance on KYC, due diligence and transaction monitoring</li>
          <li>AML/CTF Program reviews and updates</li>
          <li>Independent Part A program reviews</li>
        </ul>
      </PageBody>
      <CTABand />
    </main>
  );
}
