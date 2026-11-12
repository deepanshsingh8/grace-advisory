import type { MetadataRoute } from "next";
import { byRegion, LANG, REGION } from "@/lib/region";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Grace Advisory",
    short_name: "Grace Advisory",
    description: byRegion({
      au: "AFSL & AML/CTF compliance consulting in Australia.",
      nz: "FMA licensing & AML/CFT compliance consulting in New Zealand.",
    }),
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#FBF8F1",
    theme_color: "#141B3C",
    lang: LANG[REGION],
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/brand/icon-mask.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
