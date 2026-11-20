import type { Metadata } from "next";
import Link from "next/link";
import { CreditServiceLayout } from "@/components/credit-service-layout";
import { CREDIT_BASE, creditService } from "@/lib/credit-licensing";
import { onlyIn } from "@/lib/region-guard";

const SERVICE = creditService(`${CREDIT_BASE}/responsible-lending`);

export const metadata: Metadata = {
  title: "Responsible Lending & Consumer Protection — RG 209 Compliance for Credit Licensees",
  description:
    "Responsible lending and consumer protection support for lenders and brokers — reasonable inquiries, verification, unsuitability assessments, disclosure, hardship and the best interests duty.",
  alternates: { canonical: SERVICE.href },
};

const FAQS = [
  {
    q: "Do responsible lending obligations apply to every credit contract?",
    a: "They apply to most consumer credit contracts and consumer leases regulated by the National Credit Code. Some products are subject to modified obligations — for example certain low cost credit contracts such as buy now pay later — and business-purpose lending generally falls outside the Code. Confirming which rules apply to each product is the first step.",
  },
  {
    q: "How much verification is enough?",
    a: "The law requires reasonable inquiries and reasonable steps to verify, which scale with the risk of the product and the consumer's circumstances. ASIC's RG 209 explains its expectations. A good policy sets out what is required in different scenarios, so staff are not left to judge it case by case.",
  },
  {
    q: "What is the best interests duty for mortgage brokers?",
    a: "Mortgage brokers must act in the best interests of consumers when providing credit assistance about home loans, and must prioritise the consumer's interests where there is a conflict. Broker policies, file notes and remuneration arrangements need to support and evidence that duty.",
  },
];

export default function ResponsibleLendingPage() {
  onlyIn("au");
  return (
    <CreditServiceLayout
      service={SERVICE}
      title={<>Responsible lending<br />&amp; consumer protection.</>}
      lede="Suitability assessments, hardship and consumer protections designed into your lending and broking processes — practical for staff, and evidenced for ASIC."
      faqs={FAQS}
    >
      <p>
        Responsible lending sits at the heart of the credit regime. Before entering into a credit
        contract or consumer lease — or providing credit assistance — licensees must take steps to
        make sure the product is not unsuitable for the consumer. ASIC&rsquo;s expectations are set
        out in Regulatory Guide 209 <em>Credit licensing: Responsible lending conduct</em>.
      </p>

      <h2>The core obligations</h2>
      <ul>
        <li><strong>Reasonable inquiries</strong> about the consumer&rsquo;s requirements and objectives, and their financial situation</li>
        <li><strong>Reasonable steps to verify</strong> the consumer&rsquo;s financial situation</li>
        <li><strong>An assessment</strong> of whether the credit or lease is unsuitable — and not proceeding if it is</li>
        <li><strong>Records</strong> that show what was asked, verified and concluded, and a copy of the assessment for the consumer on request</li>
      </ul>

      <h2>How we can assist</h2>
      <ol>
        <li><strong>Responsible lending policy</strong> — clear rules for inquiries, verification and assessment, tailored to each product and channel.</li>
        <li><strong>Serviceability and assessment tools</strong> — reviewing how expenses, income and buffers are assessed, and how exceptions are approved.</li>
        <li><strong>Disclosure</strong> — credit guides, quotes, proposal disclosure and other documents your customers must receive.</li>
        <li><strong>Mortgage broker obligations</strong> — processes and file notes that support the best interests duty and conflict priority rule.</li>
        <li><strong>Financial hardship</strong> — recognising and responding to hardship notices and supporting customers in financial difficulty.</li>
        <li><strong>Vulnerable customers and fair treatment</strong> — practical guidance for staff, including collections and default management.</li>
        <li><strong>Product governance</strong> — target market determinations and distribution controls where design and distribution obligations apply.</li>
        <li><strong>Testing</strong> — file reviews that check the policy is followed in practice.</li>
      </ol>

      <h2>Part of a wider framework</h2>
      <p>
        Responsible lending controls work best as part of your overall{" "}
        <Link href={`${CREDIT_BASE}/compliance-frameworks`}>credit compliance framework</Link>,
        supported by monitoring and{" "}
        <Link href={`${CREDIT_BASE}/ongoing-compliance`}>independent review</Link>.
      </p>
    </CreditServiceLayout>
  );
}
