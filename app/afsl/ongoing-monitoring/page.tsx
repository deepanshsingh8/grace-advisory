import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Ongoing AFSL Compliance Monitoring",
  description:
    "Replace or supplement your in-house compliance function — staff training, monitoring, reports, website review, AFSL policy updates and regulator liaison.",
  alternates: { canonical: "/afsl/ongoing-monitoring" },
};

export default function OngoingMonitoringPage() {
  return (
    <main>
      <PageHero
        eyebrow="Ongoing AFSL Compliance"
        title="Replace or supplement your in-house function."
        lede="Comprehensive policies and procedures alone do not prevent breaches. Implementation and ongoing compliance are essential."
      />
      <PageBody>
        <p>
          We can replace your in-house compliance function or supplement an existing team —
          ideal for businesses without resources for dedicated compliance staff, or those
          needing extra capacity during peak workload.
        </p>
        <h2>Examples of ongoing support</h2>
        <ul>
          <li>Staff training (inductions, refreshers, role-based)</li>
          <li>Representative monitoring and supervision with reporting to committees / boards</li>
          <li>Regular compliance reports and meetings (monthly or quarterly)</li>
          <li>Website review</li>
          <li>AFSL policy review and updates</li>
          <li>Regulator liaison</li>
        </ul>
      </PageBody>
      <CTABand />
    </main>
  );
}
