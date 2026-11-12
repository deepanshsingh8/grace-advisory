import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";
import { onlyIn } from "@/lib/region-guard";

export const metadata: Metadata = {
  title: "FAP Licence Application — Financial Advice Provider Licensing New Zealand",
  description:
    "Applying for a financial advice provider (FAP) licence — licence scoping, compliance arrangements, Code of Professional Conduct readiness, FMA liaison and post-licence requirements.",
  alternates: { canonical: "/licensing/fap-licence" },
};

export default function FapLicencePage() {
  onlyIn("nz");
  return (
    <main>
      <PageHero
        eyebrow="FAP Licence Application"
        title="From scoping to licence — and beyond."
        lede="We support financial advice providers through every step of the FMA application — and stay alongside as post-licence obligations kick in."
      />
      <PageBody>
        <p>
          Businesses that give regulated financial advice to retail clients in New Zealand need a
          financial advice provider (FAP) licence from the Financial Markets Authority — or must
          operate under another FAP&rsquo;s licence.
        </p>

        <h2>1. The application process — how we can assist</h2>
        <ol>
          <li><strong>Scoping your licence</strong> — mapping the advice you give, who gives it (the business itself, financial advisers or nominated representatives) and the licence that fits.</li>
          <li><strong>Compliance arrangements</strong> — documenting how you will meet your duties under the Financial Markets Conduct Act 2013, the Code of Professional Conduct for Financial Advice Services and the FMA&rsquo;s standard conditions.</li>
          <li><strong>Application preparation</strong> — preparing the application and supporting documents, including fit and proper information for directors and senior managers.</li>
          <li><strong>FMA liaison</strong> — responding to information requests throughout the assessment process.</li>
        </ol>

        <h2>2. Your licence has been granted. Now what?</h2>
        <ul>
          <li>FSPR registration for the FAP and the financial advisers it engages</li>
          <li>Dispute resolution scheme membership (for retail client services)</li>
          <li>Client disclosure in line with the disclosure regulations</li>
          <li>Adviser competence, knowledge and skill — and ongoing training</li>
          <li>Notifying the FMA of material changes</li>
          <li>AML/CFT obligations, where your services are captured</li>
        </ul>
      </PageBody>
      <CTABand />
    </main>
  );
}
