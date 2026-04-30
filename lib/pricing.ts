/**
 * Pricing data — monthly retainer tiers + one-off project engagements.
 *
 * NOTE: Figures below are placeholders calibrated to the Australian
 * boutique-compliance market. Confirm with the client before launch
 * and edit this file directly.
 *
 * All amounts are AUD, exclusive of GST.
 */

export interface Feature {
  label: string;
  /** false = item is shown muted with a "—" glyph. Used for tier comparison. */
  included?: boolean;
}

export interface Tier {
  id: "foundation" | "practice" | "concierge";
  name: string;
  eyebrow: string;
  tagline: string;
  /** Monthly amount in AUD (excl. GST) */
  price: number;
  /** Suffix shown after the price, e.g. "/month" */
  cadence: string;
  /** A small footnote shown beneath the price */
  footnote?: string;
  /** Highlighted in the layout? */
  featured?: boolean;
  /** Headline features included in this tier */
  features: Feature[];
  /** CTA label override (defaults to "Start a conversation") */
  cta?: string;
}

export const TIERS: Tier[] = [
  {
    id: "foundation",
    name: "Foundation",
    eyebrow: "Tier I",
    tagline: "For newly licensed firms and small reporting entities — your compliance baseline, on retainer.",
    price: 1950,
    cadence: "/month",
    footnote: "Annual engagement · 30-day notice",
    features: [
      { label: "Quarterly compliance review with formal report", included: true },
      { label: "Annual policy & procedure refresh", included: true },
      { label: "AUSTRAC liaison (as needed)", included: true },
      { label: "Annual staff training induction", included: true },
      { label: "Email & phone advisory (within business hours)", included: true },
      { label: "Monthly cadence & in-person meetings", included: false },
      { label: "Embedded named compliance officer", included: false },
    ],
  },
  {
    id: "practice",
    name: "Practice",
    eyebrow: "Tier II · Most chosen",
    tagline: "For mid-sized AFSL holders and active reporting entities — a true ongoing partnership.",
    price: 3950,
    cadence: "/month",
    footnote: "Annual engagement · 60-day notice",
    featured: true,
    features: [
      { label: "Monthly compliance report & meeting", included: true },
      { label: "Bi-annual policy & procedure refresh", included: true },
      { label: "AUSTRAC, ASIC and AFCA liaison on your behalf", included: true },
      { label: "Role-based staff training (induction + refreshers)", included: true },
      { label: "Representative monitoring & supervision", included: true },
      { label: "Website & disclosure document review", included: true },
      { label: "Priority email & phone advisory", included: true },
      { label: "Embedded named compliance officer", included: false },
    ],
  },
  {
    id: "concierge",
    name: "Concierge",
    eyebrow: "Tier III",
    tagline: "Your fully outsourced compliance function — embedded with the team and the board.",
    price: 8500,
    cadence: "/month",
    footnote: "Annual engagement · 90-day notice",
    features: [
      { label: "Named compliance officer embedded with your team", included: true },
      { label: "Unlimited advisory, in business hours", included: true },
      { label: "Monthly compliance reports + quarterly board reporting", included: true },
      { label: "Continuous policy maintenance & version control", included: true },
      { label: "Full AUSTRAC, ASIC, AFCA & banking-partner liaison", included: true },
      { label: "Custom training programs (board-level + frontline)", included: true },
      { label: "Annual external compliance review included", included: true },
      { label: "Independent AML/CTF Part A review included", included: true },
    ],
    cta: "Talk to a partner",
  },
];

/* ─── One-off project engagements ────────────────────────────────────── */

export interface Project {
  name: string;
  description: string;
  /** Lower bound, AUD (excl. GST) */
  from: number;
  /** Upper bound or null for "+ scoping required" */
  to?: number;
  /** Typical timeline */
  timeline: string;
  href: string;
}

export const PROJECTS: Project[] = [
  {
    name: "AFSL Application",
    description: "End-to-end support: RM selection, proof documents, application, ASIC liaison.",
    from: 18000, to: 38000,
    timeline: "4–8 months",
    href: "/afsl/application",
  },
  {
    name: "AML/CTF Program — Standard",
    description: "Tailored Part A and Part B for a stand-alone reporting entity.",
    from: 6500, to: 14500,
    timeline: "4–8 weeks",
    href: "/aml-ctf/program",
  },
  {
    name: "AUSTRAC Registration Package",
    description: "For remittance providers and crypto exchanges — program, application and liaison.",
    from: 9500, to: 18500,
    timeline: "6–10 weeks",
    href: "/aml-ctf/austrac-registration",
  },
  {
    name: "Independent AML/CTF Review",
    description: "Part A or Part B independent review with formal report and recommendations.",
    from: 7500, to: 16500,
    timeline: "3–6 weeks",
    href: "/aml-ctf/independent-review",
  },
  {
    name: "AFSL Compliance Policies Drafting",
    description: "A complete AFSL Manual aligned to the nature, size and complexity of your business.",
    from: 5500, to: 12500,
    timeline: "3–5 weeks",
    href: "/afsl/compliance-policies",
  },
  {
    name: "External AFSL Compliance Review",
    description: "Independent compliance health-check with formal report and recommendations.",
    from: 8500, to: 18500,
    timeline: "3–6 weeks",
    href: "/afsl/external-review",
  },
];

/* ─── FAQs ──────────────────────────────────────────────────────────── */

export interface FAQ { q: string; a: string; }

export const PRICING_FAQS: FAQ[] = [
  {
    q: "Are these prices fixed, or a starting point?",
    a: "The retainer tiers are fixed monthly amounts; the project engagements are quoted ranges that we confirm in writing after a 30-minute scoping call. We don't bill by the hour for project work — once we've agreed scope, the fee is the fee.",
  },
  {
    q: "Can I move between retainer tiers?",
    a: "Yes. Most clients start at Foundation or Practice and move up as their compliance load grows. Tier upgrades are pro-rated to the next billing cycle; downgrades take effect at the end of the current annual term.",
  },
  {
    q: "What's NOT included in a retainer?",
    a: "Major one-off project work (AFSL applications, new AML/CTF Programs, independent reviews) sit outside the retainer and are quoted separately. Day-to-day advisory, monitoring and training are all included.",
  },
  {
    q: "Do you work with firms outside Brisbane?",
    a: "Yes. We work with regulated firms across Australia. Most engagements are run remotely with periodic in-person meetings — we travel for Concierge clients and on request for Practice.",
  },
  {
    q: "Can we trial before committing to an annual term?",
    a: "We offer a one-off Compliance Health Check (from $4,500) which functions as a paid trial: you receive a formal report, and the fee is credited against your first six months if you proceed to a retainer.",
  },
  {
    q: "How are fees billed?",
    a: "Retainers are billed monthly in advance, by direct debit or bank transfer. Project engagements are typically 50% on commencement and 50% on delivery. All amounts shown are AUD and exclusive of GST.",
  },
];
