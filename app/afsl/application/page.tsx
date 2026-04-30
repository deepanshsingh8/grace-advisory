import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "AFSL Application — Application Support & Licensing Assistance",
  description:
    "Applying for an Australian Financial Services Licence — RM selection, proof documents, ASIC liaison and post-grant requirements.",
  alternates: { canonical: "/afsl/application" },
};

export default function AfslApplicationPage() {
  return (
    <main>
      <PageHero
        eyebrow="AFSL Application"
        title="From scoping to grant — and beyond."
        lede="We support licensees through every step of the application — and stay alongside as post-grant obligations kick in."
      />
      <PageBody>
        <p>
          Firms providing financial products and services in Australia generally need an
          Australian Financial Services Licence (AFSL).
        </p>

        <h2>1. The application process — how we can assist</h2>
        <ol>
          <li><strong>Selecting Responsible Manager candidates</strong> — evaluating RM candidates to ensure full coverage of authorisations under RG 105.</li>
          <li><strong>Preparing proof documents</strong> — Core Proofs (Business Description, People, Organisational Competency, Financial Statements) and Additional Proofs (compliance, risk management, conflicts of interest, dispute resolution).</li>
          <li><strong>Application form completion</strong> — preparing and lodging the AFSL application form.</li>
          <li><strong>ASIC liaison</strong> — responding to information requests throughout the assessment process.</li>
        </ol>

        <h2>2. Your AFSL has been granted. Now what?</h2>
        <ul>
          <li>Auditor appointment (within one month)</li>
          <li>AFCA membership (for retail client dealings)</li>
          <li>Professional indemnity insurance</li>
          <li>AUSTRAC enrolment (within 28 days if applicable)</li>
        </ul>
      </PageBody>
      <CTABand />
    </main>
  );
}
