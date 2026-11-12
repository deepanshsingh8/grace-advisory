import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";
import { onlyIn } from "@/lib/region-guard";

export const metadata: Metadata = {
  title: "AML/CFT Risk Assessment & Programme",
  description:
    "A written ML/TF risk assessment and a tailored AML/CFT programme — for standalone reporting entities and designated business groups.",
  alternates: { canonical: "/aml-cft/programme" },
};

export default function NzProgrammePage() {
  onlyIn("nz");
  return (
    <main>
      <PageHero
        eyebrow="AML/CFT Programme"
        title="Practical, flexible, fit for purpose."
        lede="We learn how your business actually operates, then tailor your risk assessment and AML/CFT programme around it — with a focus on practicality."
      />
      <PageBody>
        <h2>Risk assessment first</h2>
        <p>
          Your programme must rest on a written assessment of the money laundering and terrorism
          financing risks your business may reasonably expect to face — considering your
          customers, products and services, delivery methods, the countries and institutions you
          deal with, and the nature, size and complexity of the business. We draw on the
          national and sector risk assessments so yours reflects how risk actually presents.
        </p>

        <h2>Programme structures</h2>
        <ul>
          <li><strong>Standalone programme</strong> — for a single reporting entity.</li>
          <li><strong>Designated business group (DBG)</strong> — for eligible related entities that share a risk assessment and programme, with obligations allocated across members.</li>
        </ul>

        <h2>What the programme covers</h2>
        <ul>
          <li>Vetting and training of senior managers, the compliance officer and staff</li>
          <li>Customer due diligence — simplified, standard and enhanced, including PEP checks</li>
          <li>Account and transaction monitoring</li>
          <li>Suspicious activity and prescribed transaction reporting</li>
          <li>Record keeping</li>
          <li>Managing and mitigating ML/TF risk, including new technologies and products</li>
          <li>Reviewing and maintaining the programme</li>
        </ul>
      </PageBody>
      <CTABand />
    </main>
  );
}
