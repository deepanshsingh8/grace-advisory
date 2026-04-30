import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";
import { IMG } from "@/lib/imagery";

export const metadata: Metadata = {
  title: "AFSL Compliance — Applying for an AFSL & AFSL Registration Australia",
  description:
    "End-to-end AFSL compliance: application support, policies and procedures drafting, Responsible Manager nominations, external reviews, and ongoing monitoring.",
  alternates: { canonical: "/afsl" },
};

export default function AfslPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pillar I"
        title="AFSL Compliance."
        lede="For organisations providing financial products and services in Australia. From the application itself through to the responsible-manager framework, policies, monitoring and external review."
        image={IMG.pillar_afsl}
        imageAlt="Pen on document — the substance of an AFSL application."
      />
      <PageBody>
        <p>
          Organisations that wish to provide financial products and services in Australia are
          generally required to have an Australian Financial Services Licence (AFSL).
        </p>

        <h2>Policies and procedures drafting</h2>
        <p>Coverage typically spans:</p>
        <ul>
          <li>Appointment, training and termination protocols</li>
          <li>Conflict of interest oversight</li>
          <li>Breach management and reporting</li>
          <li>Risk management frameworks</li>
          <li>Promotional material compliance</li>
          <li>Staff trading policies</li>
          <li>Dispute resolution procedures</li>
          <li>Outsourcing arrangements</li>
          <li>Register maintenance</li>
        </ul>

        <h2>Ongoing compliance</h2>
        <p>We can design and deliver an AFSL compliance solution tailored to your needs.</p>

        <h2>External compliance review</h2>
        <p>A &ldquo;health check&rdquo; for the organisation — policy evaluation and implementation testing.</p>

        <h2>Responsible Managers</h2>
        <p>
          A Responsible Manager is a person who satisfies the knowledge and skills requirements
          under RG 105 to maintain the authorisation(s) granted.
        </p>
      </PageBody>
      <CTABand />
    </main>
  );
}
