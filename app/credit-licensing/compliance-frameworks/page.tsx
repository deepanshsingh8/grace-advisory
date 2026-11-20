import type { Metadata } from "next";
import Link from "next/link";
import { CreditServiceLayout } from "@/components/credit-service-layout";
import { CREDIT_BASE, creditService } from "@/lib/credit-licensing";
import { onlyIn } from "@/lib/region-guard";

const SERVICE = creditService(`${CREDIT_BASE}/compliance-frameworks`);

export const metadata: Metadata = {
  title: "Credit Compliance Frameworks — ACL Policies, Procedures & Governance",
  description:
    "Credit compliance frameworks for Australian Credit Licence holders and applicants — policies, procedures, controls and governance built around the general conduct obligations.",
  alternates: { canonical: SERVICE.href },
};

const FAQS = [
  {
    q: "Can we use a template compliance manual?",
    a: "Templates are a reasonable starting point, but ASIC expects your arrangements to reflect your actual business. A framework that describes processes you do not follow creates risk rather than reducing it. We tailor every document to your products, systems and people.",
  },
  {
    q: "We already hold an AFSL. Can we reuse our AFSL policies?",
    a: "Some policies — conflicts, complaints handling, breach reporting and training — can often be extended to cover credit. Others, such as responsible lending, hardship and credit representative oversight, are specific to the credit regime. We map what can be shared and what must be added.",
  },
  {
    q: "How often should the framework be reviewed?",
    a: "At least annually, and whenever your business, products or the law change. We recommend recording each review so you can show ASIC the framework is maintained, not just written.",
  },
];

export default function ComplianceFrameworksPage() {
  onlyIn("au");
  return (
    <CreditServiceLayout
      service={SERVICE}
      title={<>Credit compliance<br />frameworks.</>}
      lede="Policies, controls and governance that meet the general conduct obligations — and that your team can actually follow."
      faqs={FAQS}
    >
      <p>
        Every credit licensee must meet the general conduct obligations in the National Consumer
        Credit Protection Act — including engaging in credit activities efficiently, honestly and
        fairly, managing conflicts of interest, maintaining competence, having adequate resources
        and risk management systems, and supervising representatives. A compliance framework is how
        you show that you do.
      </p>

      <h2>What a framework typically covers</h2>
      <ul>
        <li>Compliance plan, monitoring program and compliance calendar</li>
        <li>Responsible lending policy and procedures — see <Link href={`${CREDIT_BASE}/responsible-lending`}>Responsible Lending &amp; Consumer Protection</Link></li>
        <li>Conflicts of interest management</li>
        <li>Internal dispute resolution procedures aligned to RG 271, and AFCA membership</li>
        <li>Financial hardship procedures</li>
        <li>Breach reporting and incident management (reportable situations)</li>
        <li>Risk management framework and risk register</li>
        <li>Credit representative appointment, training and oversight</li>
        <li>Training and competence of staff and representatives</li>
        <li>Financial resources and compensation arrangements (RG 207 and RG 210)</li>
        <li>Outsourcing, record-keeping and privacy, including credit reporting where relevant</li>
        <li>Design and distribution obligations, where your credit products are in scope</li>
      </ul>

      <h2>How we work</h2>
      <ol>
        <li><strong>Understand the business</strong> — products, customer journey, systems, people and distribution.</li>
        <li><strong>Design proportionately</strong> — controls scaled to the nature, size and complexity of your credit activities.</li>
        <li><strong>Draft and embed</strong> — clear documents with owners, procedures and records, plus training for the people who use them.</li>
        <li><strong>Govern</strong> — reporting lines to the board or senior management, so compliance is visible and evidenced.</li>
      </ol>

      <h2>For applicants and existing licensees</h2>
      <p>
        For applicants, the framework underpins the compliance arrangements described in your{" "}
        <Link href={`${CREDIT_BASE}/applications`}>ACL application</Link>. For existing licensees,
        we can review and uplift what you already have — often as part of an{" "}
        <Link href={`${CREDIT_BASE}/ongoing-compliance`}>independent compliance review</Link>.
      </p>
    </CreditServiceLayout>
  );
}
