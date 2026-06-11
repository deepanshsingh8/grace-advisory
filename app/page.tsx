import { Approach } from "@/components/approach";
import { CTABand } from "@/components/cta-band";
import { Hero } from "@/components/hero";
import { Insights } from "@/components/insights";
import { Marquee } from "@/components/marquee";
import { Pillars } from "@/components/pillars";
import { Process } from "@/components/process";
import { Results } from "@/components/results";
import { TrustStrip } from "@/components/trust-strip";

/**
 * Home page. Sections in narrative order:
 *   1. Hero            — the promise
 *   2. Marquee         — kinetic strip of practice areas
 *   3. TrustStrip      — the regulators we work in front of
 *   4. Pillars         — AFSL + AML/CTF service families             (No. I)
 *   5. Approach        — why Grace, principles and pull quote         (No. II)
 *   6. Results         — proof of practice                            (No. III)
 *   7. Process         — how an engagement actually runs              (No. IV)
 *   8. Insights        — latest from the practice                     (No. V)
 *   9. CTABand         — closing call-to-action
 *
 * Sector coverage lives on /aml-ctf.
 */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <TrustStrip />
      <Pillars />
      <Approach />
      <Results />
      <Process />
      <Insights />
      <CTABand />
    </main>
  );
}
