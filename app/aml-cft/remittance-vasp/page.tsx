import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";
import { onlyIn } from "@/lib/region-guard";

export const metadata: Metadata = {
  title: "Remittance & Virtual Asset Provider Set-up New Zealand",
  description:
    "AML/CFT set-up for money remitters and virtual asset service providers — FSPR registration, risk assessment and programme, goAML registration, training and banking-partner liaison.",
  alternates: { canonical: "/aml-cft/remittance-vasp" },
};

export default function RemittanceVaspPage() {
  onlyIn("nz");
  return (
    <main>
      <PageHero
        eyebrow="Remitters & VASPs"
        title="For remittance providers and virtual asset services."
        lede="An end-to-end set-up package — covering FSPR registration, your risk assessment and AML/CFT programme, goAML registration, training and banking-partner liaison."
      />
      <PageBody>
        <p>
          Money remitters and virtual asset service providers face some of the closest AML/CFT
          scrutiny in New Zealand — from their supervisor, from the FIU and from the banks they
          rely on. Getting the foundations right before you launch matters.
        </p>

        <h2>Package components</h2>
        <ol>
          <li><strong>FSPR registration</strong> — and dispute resolution scheme membership where you serve retail clients.</li>
          <li><strong>Risk assessment and AML/CFT programme</strong> — built around your corridors, products, customers and delivery channels.</li>
          <li><strong>goAML registration</strong> — so you can file suspicious activity and prescribed transaction reports with the FIU from day one.</li>
          <li><strong>Compliance training</strong> — induction covering New Zealand&rsquo;s AML/CFT framework and the obligations on reporting entities.</li>
          <li><strong>Supervisor liaison</strong> — direct communication with your AML/CFT supervisor.</li>
        </ol>

        <h2>Additional support</h2>
        <p>
          We facilitate communication between you and your banking partners on your compliance
          framework — addressing the challenges remittance and virtual asset businesses face
          securing banking relationships.
        </p>
      </PageBody>
      <CTABand />
    </main>
  );
}
