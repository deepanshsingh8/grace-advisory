import { notFound } from "next/navigation";
import { REGION, type Region } from "@/lib/region";

/**
 * Call at the top of a region-specific page. On the other region's site the
 * page renders as a 404 (in practice next.config.ts redirects visitors to the
 * local equivalent before they ever reach it).
 */
export function onlyIn(region: Region) {
  if (REGION !== region) notFound();
}
