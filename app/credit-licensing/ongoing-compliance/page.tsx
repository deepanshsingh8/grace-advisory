import type { Metadata } from "next";
import Link from "next/link";
import { CreditServiceLayout } from "@/components/credit-service-layout";
import { CREDIT_BASE, creditService } from "@/lib/credit-licensing";
import { onlyIn } from "@/lib/region-guard";

const SERVICE = creditService(`${CREDIT_BASE}/ongoing-compliance`);

export const metadata: Metadata = {
  title: "Ongoing ACL Compliance & Independent Reviews — Credit Licensee Compliance Support",
  description:
    "Ongoing compliance support for Australian Credit Licence holders — monitoring, breach reporting, annual compliance certificates, regulatory change and independent compliance reviews.",
  alternates: { canonical: SERVICE.href },
};

const FAQS = [
  {
    q: "What is the annual compliance certificate?",
    a: "Credit licensees must lodge an annual compliance certificate with ASIC, confirming matters about their compliance with their licence obligations. We help you gather the evidence behind the certificate so it can be given with confidence.",
  },
  {
    q: "When does a breach need to be reported to ASIC?",
    a: "Credit licensees must report certain reportable situations to ASIC — including significant breaches or likely breaches of core obligations — generally within 30 calendar days of first knowing, or being reckless about whether, a reportable situation has arisen. Whether a matter is reportable depends on the facts, so it pays to assess incidents promptly.",
  },
  {
    q: "Can you act as our compliance function?",
    a: "Yes. Through a retainer we can replace or supplement your in-house compliance resource — running the monitoring program, preparing reports for the board and keeping your framework current.",
  },
];

export default function OngoingCompliancePage() {
  onlyIn("au");
  return (
    <CreditServiceLayout
      service={SERVICE}
      title={<>Ongoing compliance<br />&amp; reviews.</>}
      lede="Monitoring, reporting and assurance for credit licensees — so obligations are met every day, not just on the day the licence is granted."
      faqs={FAQS}
    >
      <p>
        A credit licence comes with continuing obligations. ASIC expects licensees to monitor
        their own compliance, identify and fix problems, report what must be reported, and keep
        their arrangements current as the business and the law change.
      </p>

      <h2>Ongoing compliance support</h2>
      <ul>
        <li><strong>Compliance monitoring</strong> — a risk-based program of checks across lending, broking, complaints, representatives and records</li>
        <li><strong>Breach reporting</strong> — assessing incidents against the reportable situations regime (RG 78) and preparing reports to ASIC</li>
        <li><strong>Annual compliance certificate</strong> — gathering and reviewing the evidence behind the certificate lodged with ASIC</li>
        <li><strong>Complaints and AFCA</strong> — oversight of internal dispute resolution, IDR data and AFCA matters</li>
        <li><strong>Representatives</strong> — appointment, training, supervision and ASIC notifications for credit representatives</li>
        <li><strong>Regulatory change</strong> — tracking ASIC guidance and legislative reform and updating your framework</li>
        <li><strong>Board reporting</strong> — clear, regular reporting on compliance status, incidents and risks</li>
      </ul>

      <h2>Independent compliance reviews</h2>
      <p>
        An independent review gives you, your board and — where relevant — ASIC an objective view
        of how your framework works in practice. Depending on your needs, a review can include:
      </p>
      <ol>
        <li><strong>Gap assessment</strong> — your framework tested against the general conduct obligations and current ASIC guidance.</li>
        <li><strong>File reviews</strong> — sampling loan, broking or lease files to test responsible lending, disclosure and record-keeping.</li>
        <li><strong>Control testing</strong> — checking that monitoring, complaints, breach reporting and training work as documented.</li>
        <li><strong>Report and remediation plan</strong> — prioritised findings, practical recommendations and agreed owners and dates.</li>
      </ol>
      <p>
        Where a review finds systemic issues, see{" "}
        <Link href={`${CREDIT_BASE}/remediation`}>Remediation &amp; Regulatory Engagement</Link>.
      </p>

      <h2>Retainers</h2>
      <p>
        Ongoing support is available on a monthly retainer, scaled to your business. See{" "}
        <Link href="/pricing#tiers">retainer tiers</Link>.
      </p>
    </CreditServiceLayout>
  );
}
