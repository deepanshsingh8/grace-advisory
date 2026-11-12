import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";
import { onlyIn } from "@/lib/region-guard";

export const metadata: Metadata = {
  title: "Ongoing Compliance Monitoring — Licensed Providers New Zealand",
  description:
    "Replace or supplement your in-house compliance function — staff training, adviser monitoring, reporting, website and disclosure review, policy updates and FMA liaison.",
  alternates: { canonical: "/licensing/ongoing-monitoring" },
};

export default function NzOngoingMonitoringPage() {
  onlyIn("nz");
  return (
    <main>
      <PageHero
        eyebrow="Ongoing Compliance"
        title="Replace or supplement your in-house function."
        lede="Comprehensive policies and procedures alone do not prevent breaches. Implementation and ongoing compliance are essential."
      />
      <PageBody>
        <p>
          Replace your in-house compliance function or supplement an existing team — ideal when
          dedicated staff aren&rsquo;t viable, or when you need peak-load capacity.
        </p>

        <h2>Examples of ongoing support</h2>
        <ul>
          <li>Staff training (inductions, refreshers, role-based)</li>
          <li>Adviser and representative monitoring, with reporting to committees / boards</li>
          <li>Regular compliance reports and meetings (monthly or quarterly)</li>
          <li>Website and disclosure review</li>
          <li>Policy review and updates</li>
          <li>Incident and breach management support</li>
          <li>FMA and dispute resolution scheme liaison</li>
        </ul>
      </PageBody>
      <CTABand />
    </main>
  );
}
