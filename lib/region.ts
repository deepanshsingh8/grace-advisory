/**
 * Region switch — one codebase, two sites.
 *
 *   graceadvisory.com.au  →  NEXT_PUBLIC_SITE_REGION=au  (default)
 *   graceadvisory.co.nz   →  NEXT_PUBLIC_SITE_REGION=nz
 *
 * The design is identical on both sites; only the content changes. Each
 * region is a separate Vercel project built from the same repository, with
 * this one environment variable set. Because it is a NEXT_PUBLIC_ variable
 * it is inlined at build time, so server and client components can both
 * read it and every page stays statically rendered.
 *
 * Local dev:  npm run dev      (AU)
 *             npm run dev:nz   (NZ)
 */
export type Region = "au" | "nz";

export const REGION: Region = process.env.NEXT_PUBLIC_SITE_REGION === "nz" ? "nz" : "au";
export const IS_NZ = REGION === "nz";

/** Pick the value for the current region: `byRegion({ au: "AFSL", nz: "FAP licence" })`. */
export function byRegion<T>(values: { au: T; nz: T }): T {
  return values[REGION];
}

/** Canonical origin for each region's site. */
export const SITE_URLS: Record<Region, string> = {
  au: "https://graceadvisory.com.au",
  nz: "https://graceadvisory.co.nz",
};

export const SITE_URL = SITE_URLS[REGION];
export const OTHER_REGION: Region = IS_NZ ? "au" : "nz";

/** BCP 47 language tag per region (html lang, hreflang, JSON-LD inLanguage). */
export const LANG: Record<Region, string> = { au: "en-AU", nz: "en-NZ" };
