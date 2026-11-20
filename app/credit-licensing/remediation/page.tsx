import type { Metadata } from "next";
import Link from "next/link";
import { CreditServiceLayout } from "@/components/credit-service-layout";
import { CREDIT_BASE, creditService } from "@/lib/credit-licensing";
import { onlyIn } from "@/lib/region-guard";

const SERVICE = creditService(`${CREDIT_BASE}/remediation`);

export const metadata: Metadata = {
  title: "Remediation & Regulatory Engagement — Credit Licensee Compliance Uplift & ASIC Engagement",
  description:
    "Support for credit licensees facing compliance issues — gap assessments, compliance uplift, customer remediation under RG 277 and engagement with ASIC.",
  alternates: { canonical: SERVICE.href },
};

const FAQS = [
  {
    q: "We have found a problem. Do we have to tell ASIC?",
    a: "Possibly. Credit licensees must report reportable situations — including significant breaches or likely breaches of core obligations — generally within 30 calendar days of first knowing, or being reckless about whether, one has arisen. We can help you assess the facts quickly and decide what must be reported.",
  },
  {
    q: "Do affected customers have to be compensated?",
    a: "Where customers have suffered loss because of a licensee's misconduct or other failure, ASIC expects the licensee to remediate them in line with RG 277. The right approach depends on the issue, how many customers are affected and the records available.",
  },
  {
    q: "Can you help us respond to an ASIC notice or surveillance?",
    a: "Yes. We help you understand what ASIC has asked for, gather accurate information and present it clearly. Where legal advice is needed, we work alongside your lawyers.",
  },
];

export default function RemediationPage() {
  onlyIn("au");
  return (
    <CreditServiceLayout
      service={SERVICE}
      title={<>Remediation &amp;<br />regulatory engagement.</>}
      lede="When something has gone wrong — or ASIC is asking questions — we help you understand the issue, fix it properly and engage with the regulator with confidence."
      faqs={FAQS}
    >
      <p>
        Compliance issues happen in well-run businesses. What matters to ASIC — and to your
        customers — is how quickly you identify them, how honestly you assess them, and how
        thoroughly you fix them.
      </p>

      <h2>Gap assessments and compliance uplift</h2>
      <ul>
        <li>Rapid assessment of your framework against current obligations and ASIC guidance</li>
        <li>Root-cause analysis of incidents, complaints themes and breach trends</li>
        <li>A prioritised uplift plan with owners, milestones and evidence of completion</li>
        <li>Rewriting policies, controls and training where they are not working</li>
      </ul>

      <h2>Breach assessment and reporting</h2>
      <p>
        We help you investigate incidents, decide whether they are reportable situations under
        RG 78, prepare reports to ASIC and keep the record of your decision-making.
      </p>

      <h2>Customer remediation</h2>
      <p>
        Where customers have been affected, ASIC expects remediation to be fair, timely and
        transparent. We can help you scope the affected population, design a remediation approach
        consistent with RG 277 <em>Consumer remediation</em>, and track the program to completion.
      </p>

      <h2>Engaging with ASIC</h2>
      <ul>
        <li>Responding to ASIC requests, notices and surveillance activity</li>
        <li>Preparing clear, accurate submissions and supporting evidence</li>
        <li>Supporting licence condition reviews and commitments made to ASIC</li>
        <li>Working alongside your legal advisers where legal advice is required</li>
      </ul>

      <h2>Preventing a repeat</h2>
      <p>
        After remediation, an{" "}
        <Link href={`${CREDIT_BASE}/ongoing-compliance`}>ongoing monitoring program</Link> helps
        show that the fix has held — and catches the next issue early.
      </p>
    </CreditServiceLayout>
  );
}
