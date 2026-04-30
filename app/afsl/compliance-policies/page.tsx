import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "AFSL Compliance Policies Drafting",
  description:
    "AFSL Manuals tailored to the nature, size and complexity of your business — drafted to align with RG 105 and the financial services laws.",
  alternates: { canonical: "/afsl/compliance-policies" },
};

export default function PoliciesPage() {
  return (
    <main>
      <PageHero
        eyebrow="AFSL Policies & Procedures"
        title="Manuals built for the way your business actually runs."
        lede="AFS licensees carry many compliance obligations. We draft policies that fit your operations — not boilerplate."
      />
      <PageBody>
        <p>
          Non-compliance with financial services laws or AFSL conditions can mean suspension
          or cancellation of the licence.
        </p>
        <h2>When to consider new or updated policies</h2>
        <ul>
          <li>For recently granted licensees.</li>
          <li>When existing documentation is outdated and has not been recently reviewed.</li>
        </ul>
        <h2>What the AFSL Manual typically covers</h2>
        <ul>
          <li>Human resources and financial resources</li>
          <li>Representative appointment, training and termination</li>
          <li>Monitoring and supervision activities</li>
          <li>Conflicts of interest management</li>
          <li>Breach identification and reporting</li>
          <li>Risk management systems</li>
          <li>Promotional material management</li>
          <li>Client money handling</li>
          <li>Dispute resolution processes</li>
          <li>Outsourcing arrangements</li>
          <li>Record-keeping requirements</li>
          <li>Compensation arrangements</li>
          <li>Register maintenance</li>
        </ul>
        <blockquote>
          What is important is that your policies and procedures align with the nature, size
          and complexity of your business.
        </blockquote>
      </PageBody>
      <CTABand />
    </main>
  );
}
