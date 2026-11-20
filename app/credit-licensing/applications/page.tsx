import type { Metadata } from "next";
import Link from "next/link";
import { CreditServiceLayout } from "@/components/credit-service-layout";
import { CREDIT_BASE, creditService } from "@/lib/credit-licensing";
import { onlyIn } from "@/lib/region-guard";

const SERVICE = creditService(`${CREDIT_BASE}/applications`);

export const metadata: Metadata = {
  title: "ACL Applications & Variations — Australian Credit Licence Application Support",
  description:
    "Support with Australian Credit Licence applications and variations — authorisation scoping, Responsible Managers, application evidence, lodgement and ASIC liaison.",
  alternates: { canonical: SERVICE.href },
};

const FAQS = [
  {
    q: "Should I apply for my own ACL or become a credit representative?",
    a: "It depends on your business. A credit representative acts under another licensee's ACL and that licensee's compliance framework, which can suit smaller brokers. Holding your own licence gives you control of your products, brand and distribution, but you carry the full set of licensee obligations. We can help you weigh up both before you commit.",
  },
  {
    q: "Can I add new credit activities to an existing licence?",
    a: "Yes — by applying to ASIC to vary your licence. ASIC will want to see that your Responsible Managers, compliance arrangements and resources cover the new activities, so a variation is prepared much like a focused application.",
  },
  {
    q: "What happens if ASIC asks for more information?",
    a: "Requests for further information are a normal part of ASIC's assessment. We help you respond accurately and on time, and make sure the answers stay consistent with the rest of your application.",
  },
];

export default function AclApplicationsPage() {
  onlyIn("au");
  return (
    <CreditServiceLayout
      service={SERVICE}
      title={<>ACL applications<br />&amp; variations.</>}
      lede="From scoping your credit activities to responding to ASIC's questions — application support for new Australian Credit Licences and for licensees expanding what they do."
      faqs={FAQS}
    >
      <p>
        An Australian Credit Licence application asks you to show ASIC that your business — and
        the people running it — can engage in credit activities competently, honestly and fairly.
        The strongest applications are written around how the business will actually operate, not
        assembled from templates.
      </p>

      <h2>1. Scoping your authorisations</h2>
      <p>
        We start by mapping your products, customers and distribution model to the credit
        activities the licence must cover. Depending on your business, that may include:
      </p>
      <ul>
        <li><strong>Credit provider</strong> — providing consumer credit under a credit contract</li>
        <li><strong>Credit service</strong> — providing credit assistance or acting as an intermediary, such as mortgage and finance broking</li>
        <li><strong>Lessor</strong> — offering consumer leases</li>
        <li><strong>Other activities</strong> — for example debt management or credit reporting assistance (such as credit repair) services, or buy now pay later products brought into the regime by recent reforms</li>
      </ul>
      <p>
        Getting this right matters: authorisations that are too narrow restrict the business,
        while authorisations that are too broad need Responsible Managers and arrangements to
        support them.
      </p>

      <h2>2. Preparing the application</h2>
      <ol>
        <li><strong>Responsible Managers</strong> — assessing candidates against ASIC&rsquo;s expectations in RG 206. See <Link href={`${CREDIT_BASE}/responsible-managers`}>Responsible Manager Advisory</Link>.</li>
        <li><strong>Fit and proper people</strong> — gathering the information ASIC needs about the people who manage and control the business — usually directors, partners, trustees and senior managers, and anyone who controls the applicant — including criminal history and bankruptcy checks.</li>
        <li><strong>Business description</strong> — a clear account of your credit activities, products, customers and operating model.</li>
        <li><strong>Compliance arrangements</strong> — how you will meet the general conduct obligations, including responsible lending, conflicts, training and monitoring. See <Link href={`${CREDIT_BASE}/compliance-frameworks`}>Credit Compliance Frameworks</Link>.</li>
        <li><strong>Resources and risk</strong> — adequate financial, technological and human resources (RG 207) and a risk management system.</li>
        <li><strong>Dispute resolution and compensation</strong> — internal dispute resolution meeting RG 271, AFCA membership (ASIC will only issue the licence once you are a member), and compensation arrangements such as professional indemnity insurance (RG 210).</li>
      </ol>

      <h2>3. Lodgement and ASIC liaison</h2>
      <p>
        Applications are made online with ASIC, followed by your supporting documents. We help you
        lodge and then manage ASIC&rsquo;s requests
        for further information through to a decision. ASIC&rsquo;s timing depends on the
        complexity of the business and the quality of the application — we cannot promise a
        timeframe or an outcome, but a complete and consistent application avoids the most common
        causes of delay.
      </p>

      <h2>4. Licence variations and expansion</h2>
      <p>
        Business models change. If you plan to offer a new product, add credit assistance to a
        lending business, start offering consumer leases or change how you distribute, you may need
        to vary your licence — an application made through ASIC&rsquo;s credit licensee and
        representative portal. We review whether a variation is required, update your Responsible
        Manager coverage and compliance arrangements, and prepare the variation application.
      </p>

      <h2>5. After the licence is granted</h2>
      <p>
        Several obligations start on day one — from responsible lending and breach reporting to
        dispute resolution and record-keeping. We can stay alongside you through{" "}
        <Link href={`${CREDIT_BASE}/ongoing-compliance`}>Ongoing Compliance &amp; Reviews</Link>.
      </p>
    </CreditServiceLayout>
  );
}
