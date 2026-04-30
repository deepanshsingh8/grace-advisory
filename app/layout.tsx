import type { Metadata, Viewport } from "next";
import { EB_Garamond, Lato } from "next/font/google";
import Script from "next/script";
import { siteSchema } from "@/lib/seo";
import "./globals.css";

import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { InteractiveLayer } from "@/components/interactive-layer";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#141B3C",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://graceadvisory.com.au"),
  title: {
    default: "Grace Advisory — AFSL & AML/CTF Compliance Consulting · Australia",
    template: "%s · Grace Advisory",
  },
  description:
    "Boutique AFSL and AML/CTF compliance consulting in Australia. Tailored advisory from licence application to ongoing monitoring — for Phase 1 & 2 reporting entities and Tranche 2 firms.",
  keywords: [
    "AFSL compliance",
    "AFSL application",
    "AML/CTF compliance",
    "AUSTRAC registration",
    "Tranche 2 reforms",
    "RG 105",
    "Responsible Manager",
    "compliance consulting Australia",
    "regulatory compliance",
    "Brisbane compliance consultant",
  ],
  authors: [{ name: "Grace Advisory" }],
  creator: "Grace Advisory",
  publisher: "Grace Advisory",
  formatDetection: { telephone: false, email: false, address: false },
  alternates: {
    canonical: "/",
    languages: { "en-AU": "/", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://graceadvisory.com.au/",
    siteName: "Grace Advisory",
    title: "Grace Advisory — AFSL & AML/CTF Compliance Consulting · Australia",
    description:
      "Boutique AFSL and AML/CTF advisory for Australia's regulated firms — from licence application to ongoing monitoring.",
    images: [
      {
        url: "/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "Grace Advisory — Compliance, conducted with grace.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grace Advisory — AFSL & AML/CTF Compliance Consulting",
    description:
      "Boutique AFSL and AML/CTF advisory for Australia's regulated firms.",
    images: ["/brand/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: [{ url: "/brand/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  other: {
    "geo.region": "AU-QLD",
    "geo.placename": "Brisbane",
    "geo.position": "-27.481;153.011",
    ICBM: "-27.481, 153.011",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${ebGaramond.variable} ${lato.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
        <InteractiveLayer />
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </body>
    </html>
  );
}
