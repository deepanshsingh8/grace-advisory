import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "AFSL Responsible Manager Nominations",
  description:
    "Nomination and termination of Responsible Managers and Key Persons, plus AFSL variations — handled in line with RG 105.",
  alternates: { canonical: "/afsl/responsible-manager" },
};

export default function RmPage() {
  return (
    <main>
      <PageHero
        eyebrow="Responsible Manager Nominations"
        title="RMs, Key Persons and AFSL variations."
        lede="We assist AFSL holders with the nomination and termination of Responsible Managers and Key Persons, and with variations to AFSL conditions."
      />
      <PageBody>
        <h2>Responsible Managers</h2>
        <p>
          A Responsible Manager (RM) meets the knowledge and skills requirements under RG 105
          to maintain authorisations granted to an AFSL holder. All RMs collectively must cover
          organisational competency requirements.
        </p>
        <h2>Key Person requirements</h2>
        <ul>
          <li>Written notice to ASIC within 5 business days when a Key Person departs.</li>
          <li>Notice must include departure date and replacement details.</li>
          <li>If no replacement exists, licensees must explain why.</li>
          <li>Replacement requires an AFSL licence variation, not just a nomination.</li>
        </ul>
        <h2>AFSL variations</h2>
        <p>
          Businesses expanding their services or changing direction may need new authorisations,
          requiring variation applications that update business descriptions and organisational
          competence documentation.
        </p>
      </PageBody>
      <CTABand />
    </main>
  );
}
