import { byRegion, LANG, REGION, SITE_URL } from "@/lib/region";

/* ─── Contact details ──────────────────────────────────────────────────
   The NZ site currently uses the Australian office and phone (shown in
   international format) until a New Zealand office is set up. When it is,
   update the `nz` block — phone, email, address and NZBN. */
const AU_SITE = {
  phone: "0468 454 831",
  phoneTel: "+61468454831",
  email: "info@graceadvisory.com.au",
  address: {
    line1: "52 Petrel Crescent",
    line2: "Worongary QLD 4213",
  },
  /** Business identifier shown in the footer / contact panel. */
  businessIdLabel: "ABN",
  businessId: "89 661 414 197",
};

const NZ_SITE: typeof AU_SITE = {
  phone: "+61 468 454 831",
  phoneTel: "+61468454831",
  email: "info@graceadvisory.com.au",
  address: {
    line1: "52 Petrel Crescent",
    line2: "Worongary QLD 4213, Australia",
  },
  businessIdLabel: "ABN",
  businessId: "89 661 414 197",
};

export const SITE = byRegion({ au: AU_SITE, nz: NZ_SITE });

/**
 * Centralised JSON-LD graph for the site. Imported once into the root layout.
 * Per-page schema (Article, Service, etc.) lives in each page module.
 */
const AU_KNOWS_ABOUT = [
  "Australian Financial Services Licence (AFSL)",
  "AFSL Application",
  "Responsible Manager Nominations",
  "AFSL Compliance Policies",
  "External AFSL Compliance Review",
  "Ongoing AFSL Compliance Monitoring",
  "AML/CTF Program",
  "AUSTRAC Registration",
  "Independent Review of AML/CTF Program",
  "Tranche 2 Reforms",
  "Customer Due Diligence",
  "Risk-Based Compliance",
];

const NZ_KNOWS_ABOUT = [
  "Financial Advice Provider (FAP) Licence",
  "Financial Service Providers Register (FSPR)",
  "Dispute Resolution Scheme Membership",
  "FMA Market Services Licensing",
  "Conduct of Financial Institutions (CoFI)",
  "Compliance Policies and Procedures",
  "External Compliance Review",
  "AML/CFT Risk Assessment",
  "AML/CFT Programme",
  "goAML Reporting",
  "Independent AML/CFT Audit",
  "Customer Due Diligence",
  "Risk-Based Compliance",
];

export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService", "LegalService"],
      "@id": `${SITE_URL}/#organization`,
      name: "Grace Advisory",
      alternateName: "Grace Advisory Pty Ltd",
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}${REGION === "nz" ? "/brand/grace_advisory_logo_nz.png" : "/brand/grace_advisory_logo.png"}`,
        width: 586,
        height: 206,
      },
      image: `${SITE_URL}/brand/og-image.png`,
      description: byRegion({
        au: "Boutique AFSL and AML/CTF compliance consulting for Australia's regulated firms — from licence application to ongoing monitoring.",
        nz: "Boutique FMA licensing and AML/CFT compliance consulting for New Zealand's regulated firms — from FSPR registration and licence application to ongoing monitoring.",
      }),
      telephone: "+61-468-454-831",
      email: SITE.email,
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "52 Petrel Crescent",
        addressLocality: "Worongary",
        addressRegion: "QLD",
        postalCode: "4213",
        addressCountry: "AU",
      },
      geo: { "@type": "GeoCoordinates", latitude: -27.481, longitude: 153.011 },
      areaServed: { "@type": "Country", name: byRegion({ au: "Australia", nz: "New Zealand" }) },
      identifier: [{ "@type": "PropertyValue", name: "ABN", value: "89 661 414 197" }],
      knowsAbout: byRegion({ au: AU_KNOWS_ABOUT, nz: NZ_KNOWS_ABOUT }),
      sameAs: [
        "https://www.linkedin.com/company/grace-advisory",
        "https://www.facebook.com/graceadvisory",
        "https://www.youtube.com/@graceadvisory",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Grace Advisory",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: LANG[REGION],
    },
  ],
};

/* ─── Navigation ───────────────────────────────────────────────────────
   Two service pillars per region, plus shared About / Engage menus. */
interface NavItem { label: string; href: string }
interface NavGroup { label: string; items: readonly NavItem[] }

const AU_PILLARS: { PILLAR_1: NavGroup; PILLAR_2: NavGroup } = {
  PILLAR_1: {
    label: "AFSL",
    items: [
      { label: "AFSL Application", href: "/afsl/application" },
      { label: "Compliance Policies Drafting", href: "/afsl/compliance-policies" },
      { label: "Responsible Manager Nominations", href: "/afsl/responsible-manager" },
      { label: "External Compliance Reviews", href: "/afsl/external-review" },
      { label: "Ongoing Compliance Monitoring", href: "/afsl/ongoing-monitoring" },
    ],
  },
  PILLAR_2: {
    label: "AML/CTF",
    items: [
      { label: "AML/CTF Program", href: "/aml-ctf/program" },
      { label: "AUSTRAC Registration", href: "/aml-ctf/austrac-registration" },
      { label: "Ongoing AML/CTF Compliance", href: "/aml-ctf/ongoing" },
      { label: "Independent Review", href: "/aml-ctf/independent-review" },
    ],
  },
};

const NZ_PILLARS: typeof AU_PILLARS = {
  PILLAR_1: {
    label: "Licensing",
    items: [
      { label: "FAP Licence Application", href: "/licensing/fap-licence" },
      { label: "FSPR Registration", href: "/licensing/fspr-registration" },
      { label: "Compliance Policies Drafting", href: "/licensing/compliance-policies" },
      { label: "External Compliance Reviews", href: "/licensing/compliance-review" },
      { label: "Ongoing Compliance Monitoring", href: "/licensing/ongoing-monitoring" },
    ],
  },
  PILLAR_2: {
    label: "AML/CFT",
    items: [
      { label: "AML/CFT Programme", href: "/aml-cft/programme" },
      { label: "Remitters & VASPs", href: "/aml-cft/remittance-vasp" },
      { label: "Ongoing AML/CFT Compliance", href: "/aml-cft/ongoing" },
      { label: "Independent Audit", href: "/aml-cft/independent-audit" },
    ],
  },
};

export const NAV = {
  ...byRegion({ au: AU_PILLARS, nz: NZ_PILLARS }),
  ABOUT: [
    { label: "Our Team", href: "/our-team" },
    { label: "Our Partners", href: "/our-partners" },
    { label: "Graduate Training", href: "/graduate-training" },
  ],
  ENGAGE: [
    { label: "Retainer Tiers", href: "/pricing#tiers" },
    { label: "Project Engagements", href: "/pricing#projects" },
    { label: "Insights", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

/** Logo file + alt text. The AU logo's tagline ends in "AFSL", so the NZ
 *  site uses a variant with that word removed. */
export const LOGO = byRegion({
  au: {
    src: "/brand/grace_advisory_logo.png",
    alt: "Grace Advisory — Governance · Risk · Compliance · Audit · AFSL",
  },
  nz: {
    src: "/brand/grace_advisory_logo_nz.png",
    alt: "Grace Advisory — Governance · Risk · Compliance · Audit",
  },
});

/* ─── Mail routing ────────────────────────────────────────────────────
   Contact form submissions are delivered to BOTH addresses — from either
   site. NZ enquiries are tagged "[NZ]" in the subject line.
   To change recipients, edit this list (or override at runtime by
   passing `to` to sendMail()). */
export const CONTACT_RECIPIENTS = [
  "Raj@graceadvisory.com.au",
  "Info@graceadvisory.com.au",
] as const;

/** From-address used when MAIL_FROM env is not set. Defaults to a real
 *  monitored mailbox (info@) since that's what's actually provisioned;
 *  swap to noreply@ via the MAIL_FROM env var if/when that mailbox exists. */
export const MAIL_FROM_DEFAULT = "info@graceadvisory.com.au";
export const MAIL_FROM_NAME = "Grace Advisory";
