import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "AUSTRAC Registration & Enrolment",
  description:
    "AUSTRAC registration package for remittance providers and crypto exchanges — program development, application preparation, training and AUSTRAC liaison.",
  alternates: { canonical: "/aml-ctf/austrac-registration" },
};

export default function AustracPage() {
  return (
    <main>
      <PageHero
        eyebrow="AUSTRAC Registration"
        title="For remittance providers and crypto exchanges."
        lede="An end-to-end registration package — covering the AML/CTF Program, application preparation, training and ongoing AUSTRAC liaison."
      />
      <PageBody>
        <p>
          Remittance service providers and crypto exchanges must obtain AUSTRAC registration
          before they can commence operations.
        </p>
        <h2>Package components</h2>
        <ol>
          <li><strong>AML/CTF Program development</strong> — including ML/TF Risk Assessment before submission.</li>
          <li><strong>Application preparation</strong> — gathering documentation and completing the Business Profile form.</li>
          <li><strong>Compliance training</strong> — induction covering the Australian AML/CTF framework and the obligations on reporting entities.</li>
          <li><strong>AUSTRAC liaison</strong> — direct communication with regulators and coordination with banking partners.</li>
        </ol>
        <h2>Additional support</h2>
        <p>
          We can facilitate communication between you and your banking partners regarding your
          compliance framework — addressing the well-known challenges remittance and crypto
          businesses face when securing banking relationships.
        </p>
      </PageBody>
      <CTABand />
    </main>
  );
}
