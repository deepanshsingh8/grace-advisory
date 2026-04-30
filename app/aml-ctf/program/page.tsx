import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "AML/CTF Program",
  description:
    "Standard, Joint and Special AML/CTF Programs — Part A risk identification and mitigation, Part B customer identification and verification.",
  alternates: { canonical: "/aml-ctf/program" },
};

export default function ProgramPage() {
  return (
    <main>
      <PageHero
        eyebrow="AML/CTF Program"
        title="Practical, flexible, fit for purpose."
        lede="We take time to understand your business in detail, then tailor your AML/CTF Program to suit how you actually operate — with a focus on practicality."
      />
      <PageBody>
        <h2>Three program categories</h2>
        <ul>
          <li><strong>Standard AML/CTF Program</strong> — for stand-alone reporting entities.</li>
          <li><strong>Joint AML/CTF Program</strong> — for multiple entities within a Designated Business Group structure.</li>
          <li><strong>Special AML/CTF Program</strong> — where the only designated service provided is item 54.</li>
        </ul>
        <h2>Structure</h2>
        <p>Standard and joint programs require Part A and Part B.</p>
        <ul>
          <li><strong>Part A</strong> — identification, management and mitigation of ML/TF risks.</li>
          <li><strong>Part B</strong> — customer identification and verification processes.</li>
        </ul>
      </PageBody>
      <CTABand />
    </main>
  );
}
