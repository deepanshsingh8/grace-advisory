import type { Metadata } from "next";
import Link from "next/link";
import { CreditServiceLayout } from "@/components/credit-service-layout";
import { CREDIT_BASE, creditService } from "@/lib/credit-licensing";
import { onlyIn } from "@/lib/region-guard";

const SERVICE = creditService(`${CREDIT_BASE}/responsible-managers`);

export const metadata: Metadata = {
  title: "Responsible Manager Advisory — Credit Licence Responsible Manager Requirements (RG 206)",
  description:
    "Responsible Manager advisory for Australian Credit Licence applicants and licensees — competency mapping against RG 206, experience and qualification evidence, and nomination support.",
  alternates: { canonical: SERVICE.href },
};

const FAQS = [
  {
    q: "How many Responsible Managers do we need?",
    a: "There is no fixed number. Together, your Responsible Managers need to cover every credit activity you are authorised for, and ASIC considers the nature, scale and complexity of the business. If your competence depends heavily on one or two people, ASIC may impose a 'key person' licence condition naming them, so you would need to show continued competence if they leave (RG 206.48).",
  },
  {
    q: "Can a Responsible Manager be external to the business?",
    a: "Generally not as an outside adviser alone. Under RG 206, a credit licensee's Responsible Managers are drawn from its own directors, secretaries or senior managers (or partners or trustees) who perform duties in relation to its credit activities. A person brought in from outside would need to hold a genuine role of that kind in the business — and the role needs to be real, documented and properly resourced.",
  },
  {
    q: "What if our Responsible Manager leaves?",
    a: "You need to keep the organisational competence your licence relies on. That usually means appointing a suitable replacement promptly and notifying ASIC of the change. Planning for this before it happens avoids a gap in competence.",
  },
];

export default function ResponsibleManagersPage() {
  onlyIn("au");
  return (
    <CreditServiceLayout
      service={SERVICE}
      title={<>Responsible Manager<br />advisory.</>}
      lede="ASIC looks to your Responsible Managers to judge whether your business has the competence its licence requires. We help you find, assess and evidence the right people for the credit activities you will engage in."
      faqs={FAQS}
    >
      <p>
        Under ASIC&rsquo;s RG 206, a credit licensee&rsquo;s Responsible Managers are the directors, secretaries or senior managers (or, for partnerships and trusts, the partners or trustees) who perform duties in relation to your credit activities and whom you nominate to demonstrate competence. ASIC relies heavily on their knowledge and
        experience when deciding whether a credit business has the organisational competence to
        hold a licence — and whether it continues to have it once licensed.
      </p>

      <h2>What ASIC looks for</h2>
      <p>
        ASIC&rsquo;s expectations are set out in Regulatory Guide 206 <em>Credit licensing:
        Competence and training</em>. In general terms, ASIC expects each Responsible Manager to:
      </p>
      <ul>
        <li>Have relevant, problem-free experience in the credit activities the licence covers — generally at least two years</li>
        <li>Hold a credit industry qualification to at least Certificate IV level, or another relevant higher-level qualification such as a diploma or degree — and, where the business provides third-party home loan credit assistance (mortgage broking), at least a Certificate IV in Finance and Mortgage Broking</li>
        <li>Complete at least 20 hours of continuing professional development each year</li>
        <li>Be fit and proper, supported by police and bankruptcy checks</li>
        <li>Be genuinely involved in the credit business, with the time and authority the role requires</li>
      </ul>
      <p>
        ASIC can accept other ways of demonstrating competence in some circumstances, but you
        need to explain and evidence why the alternative is sufficient.
      </p>

      <h2>How we can assist</h2>
      <ol>
        <li><strong>Competency mapping</strong> — matching each candidate&rsquo;s experience and qualifications to the authorisations you are seeking, and identifying any gaps.</li>
        <li><strong>Evidence of experience</strong> — helping candidates document their roles, responsibilities and track record in a way ASIC can assess.</li>
        <li><strong>Qualification review</strong> — confirming whether existing qualifications meet RG 206 or whether further study is needed.</li>
        <li><strong>Nomination support</strong> — preparing the Responsible Manager information for a new application, a variation or a change of Responsible Manager.</li>
        <li><strong>Succession planning</strong> — making sure the licence does not depend on a single person.</li>
      </ol>

      <h2>AFSL and ACL together</h2>
      <p>
        If your business holds, or is applying for, an Australian Financial Services Licence as
        well, the AFSL&rsquo;s Responsible Manager expectations sit in RG 105. One person can
        sometimes cover both, but the evidence needs to be specific to each licence. See our{" "}
        <Link href="/afsl/responsible-manager">AFSL Responsible Manager service</Link>.
      </p>
    </CreditServiceLayout>
  );
}
