import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { Founder } from "@/components/founder";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";
import { Results } from "@/components/results";
import { IMG } from "@/lib/imagery";

export const metadata: Metadata = {
  title: "About — Australian Financial Services Licence AFSL Compliance Experts",
  description:
    "Grace Advisory is a boutique compliance consultancy across Governance, Risk, Compliance, Audit and AFSL — committed to ethical conduct and lasting client partnerships.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Grace Advisory"
        title={<>Governance · Risk · Compliance ·<br/>Audit · AFSL.</>}
        lede="A boutique consultancy for Australia’s regulated firms — deep regulatory expertise, senior-led, end-to-end."
        image={IMG.about_hero}
        imageAlt="Inside the practice — a workspace built for considered compliance work."
      />

      <PageBody>
        <p>
          Committed to ethical conduct and putting clients&rsquo; interests first — building
          long-lasting partnerships on mutual respect and trust.
        </p>

        <h2>What we do</h2>
        <p>
          We specialise in AFSL and AML/CTF compliance — from licence application through to
          ongoing monitoring and independent review. Each engagement is shaped to the nature,
          size and complexity of your business.
        </p>

        <ul>
          <li><strong>Compliance Services</strong> — ongoing programs, monitoring and reporting.</li>
          <li><strong>Credit Licence Applications</strong> — including responsible-lending obligations.</li>
          <li><strong>AFSL Application</strong> — proof documents, RM selection, ASIC liaison.</li>
          <li><strong>Legal Services</strong> — corporate and commercial.</li>
        </ul>

        <h2>How we work</h2>
        <p>
          Senior-led by design. You work with the people who shape your program — not a junior
          layer. We measure success by the longevity of our client relationships.
        </p>
      </PageBody>

      <Founder noHead />
      <Results />

      <CTABand />
    </main>
  );
}
