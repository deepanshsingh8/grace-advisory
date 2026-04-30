import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";
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
        lede="A boutique consultancy purpose-built for Australia’s regulated firms — pairing deep regulatory expertise with a senior-led, end-to-end model of service."
        image={IMG.about_hero}
        imageAlt="Inside the practice — a workspace built for considered compliance work."
      />

      <PageBody>
        <p>
          We are committed, through our words and actions, to ethical conduct and always
          putting clients&rsquo; interest first. We aim to foster long-lasting client relationships
          and partnerships on the basis of mutual respect and trust.
        </p>

        <h2>What we do</h2>
        <p>
          Grace Advisory specialises in the AFSL and AML/CTF compliance regimes — from licence
          application through to ongoing monitoring and independent review. Our work is shaped
          to fit the nature, size and complexity of your business.
        </p>

        <ul>
          <li><strong>Compliance Services</strong> — ongoing programs, monitoring and reporting.</li>
          <li><strong>Credit Licence Applications</strong> — including responsible-lending obligations.</li>
          <li><strong>AFSL Application</strong> — proof documents, RM selection, ASIC liaison.</li>
          <li><strong>Legal Services</strong> — general corporate and commercial.</li>
        </ul>

        <h2>How we work</h2>
        <p>
          Our model is deliberately senior-led. You work with the people who shape your
          program — not a junior layer. We measure success by the longevity of the relationships
          we build with the clients we serve.
        </p>
      </PageBody>

      <CTABand />
    </main>
  );
}
