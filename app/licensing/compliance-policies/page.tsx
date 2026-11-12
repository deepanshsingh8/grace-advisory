import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";
import { onlyIn } from "@/lib/region-guard";

export const metadata: Metadata = {
  title: "Compliance Policies Drafting — Licensed Financial Service Providers",
  description:
    "Compliance manuals tailored to the nature, size and complexity of your business — drafted to your FMA licence conditions, the FMC Act and the Code of Professional Conduct.",
  alternates: { canonical: "/licensing/compliance-policies" },
};

export default function NzPoliciesPage() {
  onlyIn("nz");
  return (
    <main>
      <PageHero
        eyebrow="Policies & Procedures"
        title="Manuals built for the way your business actually runs."
        lede="Licensed providers carry many compliance obligations. We draft policies that fit your operations — not boilerplate."
      />
      <PageBody>
        <p>
          Failing to meet your licence conditions or your duties under the Financial Markets
          Conduct Act 2013 can lead to FMA action — including directions, civil liability, and
          suspension or cancellation of the licence.
        </p>

        <h2>When to consider new or updated policies</h2>
        <ul>
          <li>Before applying for a licence, or for recently licensed providers.</li>
          <li>When existing documentation is outdated and has not been recently reviewed.</li>
          <li>When your services, advice model or regulatory obligations change.</li>
        </ul>

        <h2>What the compliance manual typically covers</h2>
        <ul>
          <li>Governance, and human and financial resources</li>
          <li>Engagement, training and supervision of financial advisers and nominated representatives</li>
          <li>Monitoring and supervision activities</li>
          <li>Conflicts of interest and the duty to prioritise clients&rsquo; interests</li>
          <li>Incident and breach management</li>
          <li>Risk management, business continuity and technology systems</li>
          <li>Advertising and client communications</li>
          <li>Client money and property handling</li>
          <li>Complaints handling and dispute resolution</li>
          <li>Outsourcing arrangements</li>
          <li>Record-keeping requirements</li>
          <li>Disclosure obligations</li>
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
