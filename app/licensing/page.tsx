import type { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/cta-band";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";
import { IMG } from "@/lib/imagery";
import { onlyIn } from "@/lib/region-guard";

export const metadata: Metadata = {
  title: "Licensing & Registration — FAP Licence & FSPR Registration New Zealand",
  description:
    "FMA licensing and FSPR registration support — FAP licence applications, dispute resolution scheme membership, compliance policies, external reviews and ongoing monitoring.",
  alternates: { canonical: "/licensing" },
};

export default function LicensingPage() {
  onlyIn("nz");
  return (
    <main>
      <PageHero
        eyebrow="Pillar I"
        title="Licensing & Registration."
        lede="For firms providing financial advice and market services in New Zealand — from FSPR registration and the licence application through to policies, monitoring and external review."
        image={IMG.pillar_afsl}
        imageAlt="Pen on document — the substance of a licence application."
      />
      <PageBody>
        <p>
          Most businesses providing financial services in New Zealand must be registered on the
          Financial Service Providers Register (FSPR). Firms giving regulated financial advice to
          retail clients, or providing market services, generally also need a licence from the
          Financial Markets Authority (FMA).
        </p>

        <h2>Which licence or registration?</h2>
        <ul>
          <li><strong><Link href="/licensing/fspr-registration">FSPR registration</Link></strong> — the gateway obligation for most financial service providers, with dispute resolution scheme membership for retail services.</li>
          <li><strong><Link href="/licensing/fap-licence">Financial advice provider (FAP) licence</Link></strong> — for businesses giving regulated financial advice to retail clients.</li>
          <li><strong>Market services licences</strong> — for managed investment scheme managers, discretionary investment management service (DIMS) providers, derivatives issuers, and crowdfunding and peer-to-peer lending services.</li>
          <li><strong>Financial institution licence</strong> — for registered banks, licensed insurers and licensed non-bank deposit takers under the conduct of financial institutions (CoFI) regime, including a fair conduct programme.</li>
        </ul>

        <h2>Policies and procedures drafting</h2>
        <p>Coverage typically spans:</p>
        <ul>
          <li>Engagement, training and supervision of financial advisers and nominated representatives</li>
          <li>Conflicts of interest and the duty to prioritise clients&rsquo; interests</li>
          <li>Incident and breach management</li>
          <li>Risk management, business continuity and technology systems</li>
          <li>Advertising and client communications</li>
          <li>Disclosure obligations</li>
          <li>Complaints handling and dispute resolution</li>
          <li>Outsourcing arrangements</li>
          <li>Record keeping and registers</li>
        </ul>

        <h2>Ongoing compliance</h2>
        <p>We can design and deliver a compliance solution tailored to your licence and your business.</p>

        <h2>External compliance review</h2>
        <p>A &ldquo;health check&rdquo; for the organisation — policy evaluation and implementation testing against your licence conditions and the Code of Professional Conduct.</p>
      </PageBody>
      <CTABand />
    </main>
  );
}
