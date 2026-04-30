import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "External AFSL Compliance Reviews",
  description:
    "An external compliance health check — scope, methodology and a formal report covering policy, implementation and framework effectiveness.",
  alternates: { canonical: "/afsl/external-review" },
};

export default function ExternalReviewPage() {
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
          A defined scope ensures the review addresses the licensee&rsquo;s core questions. Some
          prefer comprehensive framework assessments; others target specific areas like
          representative monitoring.
        </p>
        <h2>Frequency</h2>
        <p>
          Depends on product types, operational size, retail client involvement, regulatory
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
          A formal, detailed report documenting the review, the findings and recommendations.
          Clients then decide internally whether to implement the suggestions and document the
          rationale either way.
        </p>
      </PageBody>
      <CTABand />
    </main>
  );
}
