import { Approach } from "@/components/approach";
import { CTABand } from "@/components/cta-band";
import { Founder } from "@/components/founder";
import { Hero } from "@/components/hero";
import { Insights } from "@/components/insights";
import { Marquee } from "@/components/marquee";
import { Pillars } from "@/components/pillars";
import { Process } from "@/components/process";
import { Results } from "@/components/results";
import { SectorGrid } from "@/components/sector-grid";
import { ServiceGrid } from "@/components/service-grid";
import { TrustStrip } from "@/components/trust-strip";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <TrustStrip />
      <Results />
      <Pillars />
      <ServiceGrid />
      <SectorGrid />
      <Approach />
      <Founder />
      <Process />
      <Insights />
      <CTABand />
    </main>
  );
}
