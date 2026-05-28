import { CTABand } from "@/components/cta-band";
import { Founder } from "@/components/founder";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Pillars } from "@/components/pillars";
import { Process } from "@/components/process";
import { TrustStrip } from "@/components/trust-strip";

/**
 * Lean home page. Sections in narrative order:
 *   1. Hero            — the promise
 *   2. Marquee         — kinetic strip of practice areas
 *   3. TrustStrip      — the regulators we work in front of
 *   4. Pillars         — AFSL + AML/CTF service families             (No. I)
 *   5. Founder         — the named authority behind the firm         (No. II)
 *   6. Process         — how an engagement actually runs              (No. III)
 *   7. CTABand         — closing call-to-action
 *
 * Proof points (Approach, Results, Insights) live on /about;
 * sector coverage lives on /aml-ctf.
 */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <TrustStrip />
      <Pillars />
      <Founder />
      <Process />
      <CTABand />
    </main>
  );
}
