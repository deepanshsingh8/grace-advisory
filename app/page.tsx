import { CTABand } from "@/components/cta-band";
import { Founder } from "@/components/founder";
import { Hero } from "@/components/hero";
import { Insights } from "@/components/insights";
import { Marquee } from "@/components/marquee";
import { Pillars } from "@/components/pillars";
import { TrustStrip } from "@/components/trust-strip";

/**
 * Lean home page. Each section pulls weight:
 *   1. Hero            — the promise
 *   2. Marquee         — kinetic strip of practice areas
 *   3. TrustStrip      — the regulators we work in front of
 *   4. Pillars         — AFSL + AML/CTF service families
 *   5. Founder         — the named authority behind the firm
 *   6. Insights        — recent thinking (3 most-recent posts)
 *   7. CTABand         — closing call-to-action
 *
 * Detailed proof (Results, Approach, Process) lives on /about; sector
 * coverage lives on /aml-ctf where it's most relevant.
 */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <TrustStrip />
      <Pillars />
      <Founder />
      <Insights />
      <CTABand />
    </main>
  );
}
