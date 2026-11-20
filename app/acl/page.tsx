import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";
import { onlyIn } from "@/lib/region-guard";

export const metadata: Metadata = {
  title: "Australian Credit Licence (ACL) — Application & Credit Compliance Support",
  description:
    "Applying for an Australian Credit Licence — authorisation scoping, Responsible Managers, responsible-lending frameworks, ASIC liaison and post-grant credit compliance.",
  alternates: { canonical: "/acl" },
};

export default function AclPage() {
  onlyIn("au");
  return (
    <main>
      <PageHero
        eyebrow="Australian Credit Licence"
        title={<>Credit licensing,<br/>done properly.</>}
        lede="We guide lenders, brokers and other credit businesses through the ACL application — and build the responsible-lending framework that has to hold up once you are licensed."
      />
      <PageBody>
        <p>
          Businesses that engage in consumer credit activities in Australia generally need an
          Australian Credit Licence (ACL) issued by ASIC under the National Consumer Credit
          Protection Act 2009 (National Credit Act).
        </p>

        <h2>1. Who needs an ACL?</h2>
        <ul>
          <li>Lenders and other credit providers offering consumer credit</li>
          <li>Mortgage and finance brokers providing credit assistance</li>
          <li>Lessors offering consumer leases</li>
          <li>Buy now pay later providers</li>
          <li>Debt management firms</li>
          <li>Businesses acting as an intermediary between consumers and credit providers</li>
        </ul>

        <h2>2. The application process — how we can assist</h2>
        <ol>
          <li><strong>Scoping your authorisations</strong> — confirming which credit activities you engage in (credit provider, credit service, lessor) so the licence matches your business model.</li>
          <li><strong>Selecting Responsible Managers</strong> — assessing candidates against ASIC&rsquo;s competence and training expectations under RG 206.</li>
          <li><strong>Preparing application documents</strong> — business description, organisational competence, compliance and risk management arrangements, financial resources (RG 207), dispute resolution and compensation arrangements.</li>
          <li><strong>Application lodgement</strong> — preparing and lodging the ACL application through the ASIC Regulatory Portal.</li>
          <li><strong>ASIC liaison</strong> — responding to requisitions and information requests throughout the assessment.</li>
        </ol>

        <h2>3. Responsible lending</h2>
        <p>
          Responsible-lending obligations sit at the heart of the credit regime. We design
          practical frameworks covering:
        </p>
        <ul>
          <li>Reasonable inquiries into a consumer&rsquo;s requirements, objectives and financial situation</li>
          <li>Reasonable steps to verify the consumer&rsquo;s financial situation</li>
          <li>Unsuitability assessments and their documentation (RG 209)</li>
          <li>Credit guides, quotes and other disclosure documents</li>
          <li>Hardship handling and fair treatment of consumers in financial difficulty</li>
        </ul>

        <h2>4. Your ACL has been granted. Now what?</h2>
        <ul>
          <li>AFCA membership and internal dispute resolution procedures (RG 271)</li>
          <li>Compensation arrangements, including professional indemnity insurance (RG 210)</li>
          <li>Reportable situations (breach reporting) to ASIC</li>
          <li>Design and distribution obligations for credit products</li>
          <li>Annual compliance certificate lodged with ASIC</li>
          <li>Training and ongoing competence of representatives</li>
        </ul>

        <h2>5. Ongoing credit compliance</h2>
        <p>
          Once licensed, we can support you with policies and procedures drafting, Responsible
          Manager changes, external compliance reviews and ongoing monitoring — tailored to the
          nature, scale and complexity of your credit business.
        </p>
      </PageBody>
      <CTABand />
    </main>
  );
}
