import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";
import { onlyIn } from "@/lib/region-guard";

export const metadata: Metadata = {
  title: "External Compliance Reviews — Licensed Providers New Zealand",
  description:
    "An external compliance health check against your FMA licence conditions and the Code of Professional Conduct — scope, methodology and a formal report.",
  alternates: { canonical: "/licensing/compliance-review" },
};

export default function NzComplianceReviewPage() {
  onlyIn("nz");
  return (
    <main>
      <PageHero
        eyebrow="External Compliance Reviews"
        title="A periodic health check for your framework."
        lede="An independent perspective to identify and fix issues — particularly material or systemic ones — before they become breaches."
      />
      <PageBody>
        <h2>Scope and purpose</h2>
        <p>
          A defined scope ensures the review addresses your core questions. Some prefer full
          framework assessments against their licence conditions and the Code of Professional
          Conduct; others target specific areas like adviser supervision or disclosure.
        </p>

        <h2>Frequency</h2>
        <p>
          Depends on your licence type, operational size, retail client involvement, regulatory
          changes since the last review, and available resources.
        </p>

        <h2>Methodology</h2>
        <ul>
          <li>Evaluating compliance policies against regulatory requirements</li>
          <li>Testing implementation and adherence</li>
          <li>Assessing overall framework effectiveness</li>
        </ul>

        <h2>Output</h2>
        <p>
          A formal report covering review, findings and recommendations. You decide internally
          whether to implement, and document the rationale either way.
        </p>
      </PageBody>
      <CTABand />
    </main>
  );
}
