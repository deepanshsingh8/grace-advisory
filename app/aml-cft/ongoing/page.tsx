import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";
import { onlyIn } from "@/lib/region-guard";

export const metadata: Metadata = {
  title: "Ongoing AML/CFT Compliance",
  description:
    "Continuous compliance with your AML/CFT programme — risk assessment updates, training, transaction monitoring, goAML reporting, annual reports and supervisor liaison.",
  alternates: { canonical: "/aml-cft/ongoing" },
};

export default function NzOngoingAmlPage() {
  onlyIn("nz");
  return (
    <main>
      <PageHero
        eyebrow="Ongoing AML/CFT Compliance"
        title="The programme is the start, not the end."
        lede="Implementing the programme is the start. Continuous compliance with its obligations is what keeps you on the right side of the rules."
      />
      <PageBody>
        <h2>ML/TF risk assessment</h2>
        <p>
          New Zealand&rsquo;s AML/CFT framework is risk-based. A current risk assessment drives
          customer risk rating and the level of due diligence that follows — so it needs to
          change when your business does.
        </p>

        <h2>Training</h2>
        <p>
          Training implementation often falls short of programme requirements. Training
          undertaken for your FMA licence obligations is not automatically relevant to AML/CFT.
        </p>

        <h2>Transaction monitoring &amp; reporting</h2>
        <p>
          Often absent or insufficient. Monitoring underpins both due diligence and the
          obligation to report suspicious activity to the FIU through goAML.
        </p>

        <h2>Annual AML/CFT report</h2>
        <p>
          We prepare and review your annual report to your supervisor before it is filed, so it
          accurately reflects your programme and activity.
        </p>

        <h2>What we offer</h2>
        <ul>
          <li>Tailored compliance training</li>
          <li>Regular compliance reviews with reporting</li>
          <li>Report review and stakeholder meetings</li>
          <li>Annual report preparation</li>
          <li>Supervisor liaison</li>
          <li>Ad-hoc support</li>
        </ul>
      </PageBody>
      <CTABand />
    </main>
  );
}
