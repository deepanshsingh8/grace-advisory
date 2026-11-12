import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";
import { SectorGrid } from "@/components/sector-grid";
import { IMG } from "@/lib/imagery";
import { onlyIn } from "@/lib/region-guard";

export const metadata: Metadata = {
  title: "AML/CFT Compliance — Anti-Money Laundering Services New Zealand",
  description:
    "AML/CFT compliance under the AML/CFT Act 2009 — risk assessments, AML/CFT programmes, compliance officer support, goAML reporting, annual reports and independent audits.",
  alternates: { canonical: "/aml-cft" },
};

export default function AmlCftPage() {
  onlyIn("nz");
  return (
    <main>
      <PageHero
        eyebrow="Pillar II"
        title="AML/CFT Compliance."
        lede="New Zealand’s AML/CFT regime is risk-based. We turn that principle into programmes that work in practice — from risk assessment to independent audit."
        image={IMG.pillar_aml}
        imageAlt="Signing a contract — the formality of compliance, made tractable."
      />
      <PageBody>
        <p>
          The Anti-Money Laundering and Countering Financing of Terrorism Act 2009 applies to
          financial institutions, casinos, virtual asset service providers and designated
          non-financial businesses and professions. The Department of Internal Affairs (DIA)
          supervises reporting entities, and the New Zealand Police Financial Intelligence Unit
          (FIU) receives reports through goAML.
        </p>

        <h2>Key obligations for reporting entities</h2>
        <ul>
          <li>Undertake and keep current a written ML/TF risk assessment</li>
          <li>Establish, implement and maintain an AML/CFT programme</li>
          <li>Designate an AML/CFT compliance officer</li>
          <li>Vet and train staff on AML/CFT obligations</li>
          <li>Conduct customer due diligence — simplified, standard and enhanced</li>
          <li>Monitor accounts and transactions on an ongoing basis</li>
          <li>Report suspicious activities and prescribed transactions to the FIU</li>
          <li>Keep records, generally for at least five years</li>
          <li>File an annual AML/CFT report with your supervisor</li>
          <li>Have your risk assessment and programme independently audited</li>
        </ul>

        <h2>Services we offer</h2>
        <ul>
          <li>ML/TF risk assessments</li>
          <li>AML/CFT programme drafting with tailored policies</li>
          <li>goAML registration and reporting workflows</li>
          <li>Compliance induction and refresher training</li>
          <li>Role-based training for compliance personnel</li>
          <li>Ongoing guidance on CDD, PEP checks and transaction monitoring</li>
          <li>Annual report preparation and supervisor liaison</li>
          <li>Independent audits of the risk assessment and programme</li>
        </ul>
      </PageBody>
      <SectorGrid />
      <CTABand />
    </main>
  );
}
