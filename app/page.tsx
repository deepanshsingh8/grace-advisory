import { Approach } from "@/components/approach";
import { CTABand } from "@/components/cta-band";
import { Hero } from "@/components/hero";
import { Insights } from "@/components/insights";
import { Marquee } from "@/components/marquee";
import { Pillars } from "@/components/pillars";
import { Process } from "@/components/process";
import { SectorGrid } from "@/components/sector-grid";
import { ServiceGrid } from "@/components/service-grid";
import { TrustStrip } from "@/components/trust-strip";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <TrustStrip />
      <Pillars />
      <ServiceGrid />
      <SectorGrid />
      <Approach />
      <Process />
      <Insights />
      <CTABand />
    </main>
  );
}
