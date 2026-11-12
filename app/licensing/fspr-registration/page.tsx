import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";
import { onlyIn } from "@/lib/region-guard";

export const metadata: Metadata = {
  title: "FSPR Registration & Dispute Resolution Scheme Membership",
  description:
    "Registering on the Financial Service Providers Register — confirming what to register, lodging the registration, joining an approved dispute resolution scheme and keeping it current.",
  alternates: { canonical: "/licensing/fspr-registration" },
};

export default function FsprRegistrationPage() {
  onlyIn("nz");
  return (
    <main>
      <PageHero
        eyebrow="FSPR Registration"
        title="The first step for most financial service providers."
        lede="Registration on the Financial Service Providers Register is a gateway obligation — and often a prerequisite for licensing, banking and AML/CFT."
      />
      <PageBody>
        <p>
          Under the Financial Service Providers (Registration and Dispute Resolution) Act 2008,
          most businesses providing financial services in New Zealand must be registered on the
          FSPR before they start. Registration is not a licence, and does not mean the FMA has
          assessed or approved the business.
        </p>

        <h2>How we can assist</h2>
        <ol>
          <li><strong>Confirming whether you must register</strong> — including the territorial scope rules for businesses with offshore links.</li>
          <li><strong>Identifying the right services</strong> — what to register for, and whether an FMA licence is also needed.</li>
          <li><strong>Registration</strong> — preparing and lodging the registration with the Companies Office.</li>
          <li><strong>Dispute resolution</strong> — selecting and joining an approved scheme where you serve retail clients.</li>
        </ol>

        <h2>Approved dispute resolution schemes</h2>
        <ul>
          <li>Banking Ombudsman Scheme</li>
          <li>Financial Services Complaints Ltd (FSCL)</li>
          <li>Insurance &amp; Financial Services Ombudsman Scheme (IFSO)</li>
          <li>Financial Dispute Resolution Service (FDRS)</li>
        </ul>

        <h2>After registration</h2>
        <ul>
          <li>Keeping your registered details and services current</li>
          <li>Annual confirmation, fees and levies</li>
          <li>Notifying changes in directors, services or scheme membership</li>
        </ul>
      </PageBody>
      <CTABand />
    </main>
  );
}
