/**
 * Credit Licensing (Australian Credit Licence) — the AU site's third pillar.
 *
 * Every piece of copy that appears in more than one place — nav labels,
 * service cards, homepage pillar, landing-page sections and FAQs — lives
 * here, so the pillar can be edited in one file. Long-form copy for each
 * service page lives in that page's own file under app/credit-licensing/.
 *
 * Editorial rules (from the ACL developer brief):
 *   • Describe Grace Advisory as providing advisory, application support and
 *     compliance services. Never imply Grace Advisory itself holds an ACL.
 *   • No promise of licence approval, ASIC timeframes or fixed capital
 *     thresholds — authorisations and obligations depend on the business model.
 *   • Regulatory copy must be reviewed before publication.
 */

export const CREDIT_BASE = "/credit-licensing";

export interface CreditService {
  /** Two-digit index shown on cards ("01"). */
  num: string;
  /** Route under /credit-licensing. */
  href: string;
  /** Label used in the nav dropdown, footer and service lists. */
  navLabel: string;
  /** Short card title. */
  title: string;
  /** One-line summary for cards. */
  summary: string;
  /** Value used to pre-select this service on the enquiry form. */
  enquiryValue: string;
}

export const CREDIT_SERVICES: readonly CreditService[] = [
  {
    num: "01",
    href: `${CREDIT_BASE}/applications`,
    navLabel: "ACL Applications & Variations",
    title: "ACL Applications",
    summary: "Authorisation scoping, application evidence and ASIC liaison — for new licences and variations.",
    enquiryValue: "acl-application",
  },
  {
    num: "02",
    href: `${CREDIT_BASE}/responsible-managers`,
    navLabel: "Responsible Manager Advisory",
    title: "Responsible Managers",
    summary: "Competency mapping against RG 206, evidence of experience and qualifications, and nomination support.",
    enquiryValue: "acl-responsible-managers",
  },
  {
    num: "03",
    href: `${CREDIT_BASE}/compliance-frameworks`,
    navLabel: "Credit Compliance Frameworks",
    title: "Compliance Frameworks",
    summary: "Policies, controls and governance built around the general conduct obligations.",
    enquiryValue: "acl-compliance-frameworks",
  },
  {
    num: "04",
    href: `${CREDIT_BASE}/ongoing-compliance`,
    navLabel: "Ongoing Compliance & Reviews",
    title: "Ongoing ACL Compliance",
    summary: "Monitoring, breach reporting, annual compliance certificates and independent reviews.",
    enquiryValue: "acl-ongoing-compliance",
  },
  {
    num: "05",
    href: `${CREDIT_BASE}/responsible-lending`,
    navLabel: "Responsible Lending & Consumer Protection",
    title: "Responsible Lending",
    summary: "Suitability assessments, verification, disclosure, hardship and consumer protections.",
    enquiryValue: "acl-responsible-lending",
  },
  {
    num: "06",
    href: `${CREDIT_BASE}/remediation`,
    navLabel: "Remediation & Regulatory Engagement",
    title: "Regulatory Remediation",
    summary: "Gap assessments, compliance uplift, customer remediation and ASIC engagement.",
    enquiryValue: "acl-remediation",
  },
];

/** Look up a service by its route (used by each service page). */
export function creditService(href: string): CreditService {
  const s = CREDIT_SERVICES.find((x) => x.href === href);
  if (!s) throw new Error(`Unknown credit service: ${href}`);
  return s;
}

/** Contact link that pre-selects a service on the enquiry form. */
export function enquiryHref(value = "acl-general") {
  return `/contact?service=${encodeURIComponent(value)}#enquiry`;
}

/* ─── Landing page ─────────────────────────────────────────────────── */

export const CREDIT_LANDING = {
  h1: "Australian Credit Licence (ACL) Advisory & Compliance",
  lede:
    "From your first ASIC credit licence application to ongoing regulatory oversight, Grace Advisory helps lenders, brokers and credit businesses establish practical, proportionate compliance frameworks.",
  primaryCta: "Book an ACL Consultation",
  secondaryCta: "Discuss Your Licensing Requirements",
};

export interface Audience { key: string; title: string; body: string }

export const CREDIT_AUDIENCES: readonly Audience[] = [
  {
    key: "A",
    title: "Lenders",
    body: "Non-bank, personal loan and consumer credit providers — including buy now pay later and small-amount lenders.",
  },
  {
    key: "B",
    title: "Brokers",
    body: "Mortgage and finance brokers, aggregators and other businesses providing credit assistance.",
  },
  {
    key: "C",
    title: "Fintech & new entrants",
    body: "Digital lenders, emerging credit models, and AFSL holders or AUSTRAC-regulated firms moving into consumer credit.",
  },
  {
    key: "D",
    title: "Existing licensees",
    body: "ACL holders that need governance support, independent review, remediation or a stronger monitoring program.",
  },
];

/** How an ACL engagement typically runs — shown on the landing page. */
export const CREDIT_STEPS: readonly { title: string; body: string }[] = [
  {
    title: "Scope",
    body: "We map your credit activities, products and distribution model to the authorisations you need — and confirm whether a licence, a variation or a credit representative arrangement is the right path.",
  },
  {
    title: "Build",
    body: "Responsible Managers, compliance arrangements, policies and the application evidence are prepared together, so what you tell ASIC matches how the business will actually run.",
  },
  {
    title: "Engage",
    body: "We help you lodge, then manage ASIC's questions and requests for further information through to a decision.",
  },
  {
    title: "Operate",
    body: "Once licensed, we can support the obligations that start on day one — and keep your framework current as the business and the law change.",
  },
];

export interface FAQ { q: string; a: string }

export const CREDIT_FAQS: readonly FAQ[] = [
  {
    q: "What is the difference between an ACL and an AFSL?",
    a: "An Australian Credit Licence covers consumer credit activities — lending, credit assistance such as broking, consumer leases and related services — under the National Consumer Credit Protection Act 2009. An Australian Financial Services Licence covers financial products and services such as advice, dealing and managed investments under the Corporations Act 2001. Both are issued by ASIC, and some businesses need both. We can help you work out which applies to your model.",
  },
  {
    q: "Does my business need an Australian Credit Licence?",
    a: "Generally, yes, if you engage in consumer credit activities — for example providing consumer credit, providing credit assistance or acting as an intermediary, offering consumer leases, providing buy now pay later products, or certain debt management services. Some businesses can operate as a credit representative of another licensee, or rely on an exemption instead. The answer depends on your activities, so it is worth confirming before you start.",
  },
  {
    q: "What evidence does ASIC expect in an ACL application?",
    a: "ASIC wants to see that the applicant and its people are fit and proper, that it has the organisational competence to engage in the credit activities it is seeking (largely shown through its Responsible Managers), and that it has adequate compliance, risk management, dispute resolution, compensation and financial arrangements in place. The specific documents depend on your authorisations and business model.",
  },
  {
    q: "Who can be a Responsible Manager?",
    a: "A Responsible Manager is a person directly responsible for significant day-to-day decisions about your credit activities. Under ASIC's RG 206, Responsible Managers are generally expected to have relevant, problem-free experience and appropriate qualifications for the credit activities you will engage in, and to meet fit and proper requirements. We assess candidates against those expectations before anything is lodged.",
  },
  {
    q: "What obligations apply once the licence is granted?",
    a: "Credit licensees must comply with the general conduct obligations — including acting efficiently, honestly and fairly, managing conflicts, maintaining competence, and having adequate resources and risk management. Ongoing obligations typically include AFCA membership and internal dispute resolution, compensation arrangements, responsible lending, breach reporting, design and distribution obligations where relevant, and an annual compliance certificate. Exactly what applies depends on your credit activities.",
  },
  {
    q: "How long does an ACL application take, and can you guarantee approval?",
    a: "Timing depends on the complexity of your business, the quality of the application and ASIC's assessment, including any requests for further information. No adviser can guarantee approval or an ASIC timeframe. What we can do is prepare a complete, accurate application and manage ASIC's questions promptly, which removes the most common causes of delay.",
  },
];

/** Homepage Pillar III card — four services, per the brief. */
export const CREDIT_PILLAR_ITEMS: readonly { title: string; body: string }[] = [
  { title: "ACL Applications", body: "Authorisations, evidence and ASIC liaison." },
  { title: "Responsible Managers", body: "Competency mapping and nomination support." },
  { title: "Compliance Frameworks", body: "Policies, controls and responsible lending." },
  { title: "Ongoing ACL Compliance", body: "Monitoring, reporting, reviews and remediation." },
];
