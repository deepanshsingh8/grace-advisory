/**
 * Pricing data — monthly retainer tiers + one-off project engagements.
 *
 * Dollar figures are deliberately not published anywhere on the site;
 * fees are quoted on enquiry. Quotes are AUD (AU site) or NZD (NZ site),
 * exclusive of GST.
 */
import { byRegion } from "@/lib/region";

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
  /** A small footnote with the engagement terms */
  footnote?: string;
  /** Highlighted in the layout? */
  featured?: boolean;
  /** Headline features included in this tier */
  features: Feature[];
  /** CTA label override (defaults to "Start a conversation") */
  cta?: string;
}

const AU_TIERS: Tier[] = [
  {
    id: "foundation",
    name: "Foundation",
    eyebrow: "Tier I",
    tagline: "For newly licensed firms and small reporting entities — your compliance baseline, on retainer.",
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
  /** Typical timeline */
  timeline: string;
  href: string;
}

const AU_PROJECTS: Project[] = [
  {
    name: "AFSL Application",
    description: "End-to-end support: RM selection, proof documents, application, ASIC liaison.",
    timeline: "4–8 months",
    href: "/afsl/application",
  },
  {
    name: "AML/CTF Program — Standard",
    description: "Tailored Part A and Part B for a stand-alone reporting entity.",
    timeline: "4–8 weeks",
    href: "/aml-ctf/program",
  },
  {
    name: "AUSTRAC Registration Package",
    description: "For remittance providers and crypto exchanges — program, application and liaison.",
    timeline: "6–10 weeks",
    href: "/aml-ctf/austrac-registration",
  },
  {
    name: "Independent AML/CTF Review",
    description: "Part A or Part B independent review with formal report and recommendations.",
    timeline: "3–6 weeks",
    href: "/aml-ctf/independent-review",
  },
  {
    name: "AFSL Compliance Policies Drafting",
    description: "A complete AFSL Manual aligned to the nature, size and complexity of your business.",
    timeline: "3–5 weeks",
    href: "/afsl/compliance-policies",
  },
  {
    name: "External AFSL Compliance Review",
    description: "Independent compliance health-check with formal report and recommendations.",
    timeline: "3–6 weeks",
    href: "/afsl/external-review",
  },
];

/* ─── FAQs ──────────────────────────────────────────────────────────── */

export interface FAQ { q: string; a: string; }

const AU_PRICING_FAQS: FAQ[] = [
  {
    q: "How is your pricing structured?",
    a: "Retainer tiers are a fixed monthly fee, quoted on enquiry; project engagements are quoted as a fixed fee that we confirm in writing after a 30-minute scoping call. We don't bill by the hour for project work — once we've agreed scope, the fee is the fee.",
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
    a: "We offer a one-off Compliance Health Check which functions as a paid trial: you receive a formal report, and the fee is credited against your first six months if you proceed to a retainer.",
  },
  {
    q: "How are fees billed?",
    a: "Retainers are billed monthly in advance, by direct debit or bank transfer. Project engagements are typically 50% on commencement and 50% on delivery. All fees are quoted in AUD and exclusive of GST.",
  },
];

/* ─── New Zealand ───────────────────────────────────────────────────── */
/** NZ tiers keep the AU names, structure and terms; only the copy changes. */
const NZ_TIER_COPY: Record<Tier["id"], Pick<Tier, "tagline" | "features">> = {
  foundation: {
    tagline: "For newly licensed firms and smaller reporting entities — your compliance baseline, on retainer.",
    features: [
      { label: "Quarterly compliance review with formal report", included: true },
      { label: "Annual policy & procedure refresh", included: true },
      { label: "AML/CFT supervisor liaison (as needed)", included: true },
      { label: "Annual staff training induction", included: true },
      { label: "Email & phone advisory (within business hours)", included: true },
      { label: "Monthly cadence & in-person meetings", included: false },
      { label: "Embedded named compliance officer", included: false },
    ],
  },
  practice: {
    tagline: "For licensed financial advice providers and active reporting entities — a true ongoing partnership.",
    features: [
      { label: "Monthly compliance report & meeting", included: true },
      { label: "Bi-annual policy & procedure refresh", included: true },
      { label: "FMA, DIA and dispute resolution scheme liaison on your behalf", included: true },
      { label: "Role-based staff training (induction + refreshers)", included: true },
      { label: "Adviser monitoring & supervision", included: true },
      { label: "Website & disclosure document review", included: true },
      { label: "Priority email & phone advisory", included: true },
      { label: "Embedded named compliance officer", included: false },
    ],
  },
  concierge: {
    tagline: "Your fully outsourced compliance function — embedded with the team and the board.",
    features: [
      { label: "Named compliance officer embedded with your team", included: true },
      { label: "Unlimited advisory, in business hours", included: true },
      { label: "Monthly compliance reports + quarterly board reporting", included: true },
      { label: "Continuous policy maintenance & version control", included: true },
      { label: "Full FMA, DIA, FIU & banking-partner liaison", included: true },
      { label: "Custom training programmes (board-level + frontline)", included: true },
      { label: "Annual external compliance review included", included: true },
      { label: "AML/CFT annual report preparation included", included: true },
    ],
  },
};

const NZ_TIERS: Tier[] = AU_TIERS.map((tier) => ({ ...tier, ...NZ_TIER_COPY[tier.id] }));

const NZ_PROJECTS: Project[] = [
  {
    name: "FAP Licence Application",
    description: "End-to-end support: licence scoping, compliance arrangements, application and FMA liaison.",
    timeline: "3–6 months",
    href: "/licensing/fap-licence",
  },
  {
    name: "AML/CFT Risk Assessment & Programme",
    description: "A written risk assessment and tailored programme for a standalone entity or designated business group.",
    timeline: "4–8 weeks",
    href: "/aml-cft/programme",
  },
  {
    name: "Remitter & VASP Set-up Package",
    description: "For remittance and virtual asset providers — FSPR, AML/CFT programme, goAML registration and liaison.",
    timeline: "6–10 weeks",
    href: "/aml-cft/remittance-vasp",
  },
  {
    name: "Independent AML/CFT Audit",
    description: "An independent audit of your risk assessment and programme, with formal report and remediation plan.",
    timeline: "3–6 weeks",
    href: "/aml-cft/independent-audit",
  },
  {
    name: "FSPR Registration & Dispute Resolution",
    description: "Confirming what to register, lodging the registration and joining an approved dispute resolution scheme.",
    timeline: "2–4 weeks",
    href: "/licensing/fspr-registration",
  },
  {
    name: "External Compliance Review",
    description: "Independent compliance health-check against your licence and the Code, with formal report and recommendations.",
    timeline: "3–6 weeks",
    href: "/licensing/compliance-review",
  },
];

const NZ_PRICING_FAQS: FAQ[] = AU_PRICING_FAQS.map((f) => {
  switch (f.q) {
    case "What's NOT included in a retainer?":
      return {
        q: f.q,
        a: "Major one-off project work (licence applications, new AML/CFT programmes, independent audits) sits outside the retainer and is quoted separately. Day-to-day advisory, monitoring and training are all included.",
      };
    case "Do you work with firms outside Brisbane?":
      return {
        q: "Do you work with firms across New Zealand?",
        a: "Yes. We work with regulated firms throughout New Zealand. Most engagements are run remotely, with in-person meetings arranged for Concierge clients and on request for Practice.",
      };
    case "How are fees billed?":
      return {
        q: f.q,
        a: "Retainers are billed monthly in advance, by direct debit or bank transfer. Project engagements are typically 50% on commencement and 50% on delivery. All fees are quoted in NZD and exclusive of GST (15%).",
      };
    default:
      return f;
  }
});

export const TIERS = byRegion({ au: AU_TIERS, nz: NZ_TIERS });
export const PROJECTS = byRegion({ au: AU_PROJECTS, nz: NZ_PROJECTS });
export const PRICING_FAQS = byRegion({ au: AU_PRICING_FAQS, nz: NZ_PRICING_FAQS });
