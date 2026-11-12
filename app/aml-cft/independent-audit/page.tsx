import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";
import { onlyIn } from "@/lib/region-guard";

export const metadata: Metadata = {
  title: "Independent AML/CFT Audit",
  description:
    "An independent audit of your ML/TF risk assessment and AML/CFT programme — by an appropriately qualified auditor independent of programme design and ongoing management.",
  alternates: { canonical: "/aml-cft/independent-audit" },
};

export default function IndependentAuditPage() {
  onlyIn("nz");
  return (
    <main>
      <PageHero
        eyebrow="Independent Audit"
        title="A periodic, independent health check."
        lede="Reporting entities must have their risk assessment and AML/CFT programme independently audited. We deliver the audit with the independence the Act requires."
      />
      <PageBody>
        <h2>What the audit covers</h2>
        <p>
          An independent audit tests whether your risk assessment remains fit for purpose and
          whether your AML/CFT programme has been adequately and effectively implemented — and
          may examine secondary documents (onboarding procedures, forms, training records) to
          identify inconsistencies.
        </p>

        <h2>Independence</h2>
        <p>
          The auditor must be appropriately qualified and independent — they cannot have been
          involved in designing, implementing or maintaining your risk assessment or programme.
        </p>

        <h2>Frequency</h2>
        <p>
          Audits are required periodically under the Act and its regulations, and whenever your
          supervisor requests one. We&rsquo;ll confirm the timing that applies to you.
        </p>

        <h2>Output</h2>
        <p>
          A formal audit report with findings and a practical remediation plan — ready to
          provide to your supervisor on request.
        </p>
      </PageBody>
      <CTABand />
    </main>
  );
}
