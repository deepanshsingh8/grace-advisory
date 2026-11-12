/**
 * Which routes belong to which region, and where a visitor lands if they
 * follow an AU link on the NZ site (or vice versa).
 *
 * Used by next.config.ts (cross-region redirects), app/sitemap.ts, and the
 * page-level guards. Keep this file free of Next/React imports — it is
 * loaded by next.config.ts.
 */
import type { Region } from "./region";

/** Pages that exist on both sites (content adapts per region). */
export const SHARED_ROUTES = [
  "/",
  "/services",
  "/pricing",
  "/contact",
  "/our-team",
  "/our-partners",
  "/graduate-training",
  "/blog",
] as const;

/** Region-specific service pages, in nav order. */
export const REGION_ROUTES: Record<Region, readonly string[]> = {
  au: [
    "/afsl",
    "/afsl/application",
    "/afsl/compliance-policies",
    "/afsl/responsible-manager",
    "/afsl/external-review",
    "/afsl/ongoing-monitoring",
    "/aml-ctf",
    "/aml-ctf/program",
    "/aml-ctf/austrac-registration",
    "/aml-ctf/ongoing",
    "/aml-ctf/independent-review",
    "/life-insurance",
  ],
  nz: [
    "/licensing",
    "/licensing/fap-licence",
    "/licensing/fspr-registration",
    "/licensing/compliance-policies",
    "/licensing/compliance-review",
    "/licensing/ongoing-monitoring",
    "/aml-cft",
    "/aml-cft/programme",
    "/aml-cft/remittance-vasp",
    "/aml-cft/ongoing",
    "/aml-cft/independent-audit",
  ],
};

/** Blog slugs per region. */
export const BLOG_SLUGS: Record<Region, readonly string[]> = {
  au: [
    "tranche-2-aml-ctf-reforms-australia-2026",
    "australian-financial-services-licence-afsl-application-guide",
    "aml-ctf-reforms-2026-australian-business-guide",
  ],
  nz: [
    "aml-cft-guide-new-zealand-reporting-entities",
    "financial-advice-provider-licence-new-zealand-guide",
    "fspr-registration-dispute-resolution-schemes-explained",
  ],
};

/** AU path → closest NZ equivalent. */
const AU_TO_NZ: Record<string, string> = {
  "/afsl": "/licensing",
  "/afsl/application": "/licensing/fap-licence",
  "/afsl/compliance-policies": "/licensing/compliance-policies",
  "/afsl/responsible-manager": "/licensing",
  "/afsl/external-review": "/licensing/compliance-review",
  "/afsl/ongoing-monitoring": "/licensing/ongoing-monitoring",
  "/aml-ctf": "/aml-cft",
  "/aml-ctf/program": "/aml-cft/programme",
  "/aml-ctf/austrac-registration": "/aml-cft/remittance-vasp",
  "/aml-ctf/ongoing": "/aml-cft/ongoing",
  "/aml-ctf/independent-review": "/aml-cft/independent-audit",
  "/life-insurance": "/",
};

/** NZ path → closest AU equivalent. */
const NZ_TO_AU: Record<string, string> = {
  "/licensing": "/afsl",
  "/licensing/fap-licence": "/afsl/application",
  "/licensing/fspr-registration": "/afsl",
  "/licensing/compliance-policies": "/afsl/compliance-policies",
  "/licensing/compliance-review": "/afsl/external-review",
  "/licensing/ongoing-monitoring": "/afsl/ongoing-monitoring",
  "/aml-cft": "/aml-ctf",
  "/aml-cft/programme": "/aml-ctf/program",
  "/aml-cft/remittance-vasp": "/aml-ctf/austrac-registration",
  "/aml-cft/ongoing": "/aml-ctf/ongoing",
  "/aml-cft/independent-audit": "/aml-ctf/independent-review",
};

/**
 * Redirects for the site being built: any path that only exists on the
 * other region's site is sent to its closest local equivalent.
 * Temporary (307) so nothing is cached permanently while the NZ site beds in.
 */
export function crossRegionRedirects(region: Region) {
  const map = region === "nz" ? AU_TO_NZ : NZ_TO_AU;
  const otherSlugs = BLOG_SLUGS[region === "nz" ? "au" : "nz"];
  return [
    ...Object.entries(map).map(([source, destination]) => ({ source, destination, permanent: false })),
    ...otherSlugs.map((slug) => ({ source: `/blog/${slug}`, destination: "/blog", permanent: false })),
  ];
}
