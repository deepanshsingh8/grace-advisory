import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Independent Review of the AML/CTF Program",
  description:
    "An independent compliance health check — Part A and / or Part B reviews by a reviewer independent of program design and ongoing management.",
  alternates: { canonical: "/aml-ctf/independent-review" },
};

export default function IndependentReviewPage() {
  return (
    <main>
      <PageHero
        eyebrow="Independent Review"
        title="A periodic, independent health check."
        lede="Reporting entities must have Part A independently reviewed regularly. We deliver the review with the independence the rules require."
      />
      <PageBody>
        <h2>Part A review</h2>
        <p>
          Frequency depends on the nature, size and complexity of the business and its risk
          profile. Reviewers must be independent and cannot have participated in program design
          or ongoing management.
        </p>
        <h2>Part B review</h2>
        <p>
          Covers customer identification and verification — and may examine secondary policies
          (onboarding manuals, application forms, related procedures) to identify inconsistencies.
        </p>
      </PageBody>
      <CTABand />
    </main>
  );
}
