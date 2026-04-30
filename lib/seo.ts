/**
 * Centralised JSON-LD graph for the site. Imported once into the root layout.
 * Per-page schema (Article, Service, etc.) lives in each page module.
 */
export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService", "LegalService"],
      "@id": "https://graceadvisory.com.au/#organization",
      name: "Grace Advisory",
      alternateName: "Grace Advisory Pty Ltd",
      url: "https://graceadvisory.com.au/",
      logo: {
        "@type": "ImageObject",
        url: "https://graceadvisory.com.au/brand/grace_advisory_logo.png",
        width: 586,
        height: 206,
      },
      image: "https://graceadvisory.com.au/brand/og-image.png",
      description:
        "Boutique AFSL and AML/CTF compliance consulting for Australia's regulated firms — from licence application to ongoing monitoring.",
      telephone: "+61-468-454-831",
      email: "info@graceadvisory.com.au",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1/19 Musgrave St",
        addressLocality: "West End",
        addressRegion: "QLD",
        postalCode: "4101",
        addressCountry: "AU",
      },
      geo: { "@type": "GeoCoordinates", latitude: -27.481, longitude: 153.011 },
      areaServed: { "@type": "Country", name: "Australia" },
      identifier: [{ "@type": "PropertyValue", name: "ABN", value: "89 661 414 197" }],
      knowsAbout: [
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
      ],
      sameAs: [
        "https://www.linkedin.com/company/grace-advisory",
        "https://www.facebook.com/graceadvisory",
        "https://www.youtube.com/@graceadvisory",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://graceadvisory.com.au/#website",
      url: "https://graceadvisory.com.au/",
      name: "Grace Advisory",
      publisher: { "@id": "https://graceadvisory.com.au/#organization" },
      inLanguage: "en-AU",
    },
  ],
};

export const NAV = {
  AFSL: [
    { label: "AFSL Application", href: "/afsl/application" },
    { label: "Compliance Policies Drafting", href: "/afsl/compliance-policies" },
    { label: "Responsible Manager Nominations", href: "/afsl/responsible-manager" },
    { label: "External Compliance Reviews", href: "/afsl/external-review" },
    { label: "Ongoing Compliance Monitoring", href: "/afsl/ongoing-monitoring" },
  ],
  AML: [
    { label: "AML/CTF Program", href: "/aml-ctf/program" },
    { label: "AUSTRAC Registration", href: "/aml-ctf/austrac-registration" },
    { label: "Ongoing AML/CTF Compliance", href: "/aml-ctf/ongoing" },
    { label: "Independent Review", href: "/aml-ctf/independent-review" },
  ],
  ABOUT: [
    { label: "About", href: "/about" },
    { label: "Our Team", href: "/our-team" },
    { label: "Our Partners", href: "/our-partners" },
    { label: "Graduate Training", href: "/graduate-training" },
  ],
} as const;

export const SITE = {
  phone: "0468 454 831",
  phoneTel: "+61468454831",
  email: "info@graceadvisory.com.au",
  address: {
    line1: "1/19 Musgrave St",
    line2: "West End QLD 4101",
  },
  abn: "89 661 414 197",
};
