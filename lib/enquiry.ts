/**
 * Enquiry form options — shared by the contact form (client) and the
 * server action (validation + email). Per region.
 *
 * `service` values double as the `?service=` query parameter that
 * pre-selects an option, e.g. /contact?service=acl-application#enquiry.
 */
import { byRegion } from "@/lib/region";

export interface Option { value: string; label: string }
export interface OptionGroup { label: string; options: readonly Option[] }

const AU_SERVICES: readonly OptionGroup[] = [
  {
    label: "Credit Licensing (ACL)",
    options: [
      { value: "acl-general", label: "Australian Credit Licence — general enquiry" },
      { value: "acl-application", label: "ACL application or variation" },
      { value: "acl-responsible-managers", label: "Responsible Manager advisory" },
      { value: "acl-compliance-frameworks", label: "Credit compliance framework" },
      { value: "acl-ongoing-compliance", label: "Ongoing ACL compliance or review" },
      { value: "acl-responsible-lending", label: "Responsible lending & consumer protection" },
      { value: "acl-remediation", label: "Remediation & ASIC engagement" },
    ],
  },
  {
    label: "AFSL",
    options: [
      { value: "afsl-application", label: "AFSL application" },
      { value: "afsl-compliance", label: "AFSL compliance, policies or review" },
      { value: "afsl-responsible-manager", label: "AFSL Responsible Manager" },
    ],
  },
  {
    label: "AML/CTF",
    options: [
      { value: "aml-program", label: "AML/CTF Program" },
      { value: "aml-austrac-registration", label: "AUSTRAC registration" },
      { value: "aml-ongoing", label: "Ongoing AML/CTF compliance" },
      { value: "aml-independent-review", label: "Independent review" },
    ],
  },
  {
    label: "Other",
    options: [
      { value: "retainer", label: "Compliance retainer" },
      { value: "other", label: "Something else" },
    ],
  },
];

const NZ_SERVICES: readonly OptionGroup[] = [
  {
    label: "Licensing & Registration",
    options: [
      { value: "nz-fap-licence", label: "FAP licence application" },
      { value: "nz-fspr", label: "FSPR registration & dispute resolution" },
      { value: "nz-licensing-compliance", label: "Compliance policies, review or monitoring" },
    ],
  },
  {
    label: "AML/CFT",
    options: [
      { value: "nz-aml-programme", label: "AML/CFT risk assessment & programme" },
      { value: "nz-remitter-vasp", label: "Remitters & virtual asset providers" },
      { value: "nz-aml-ongoing", label: "Ongoing AML/CFT compliance" },
      { value: "nz-aml-audit", label: "Independent AML/CFT audit" },
    ],
  },
  {
    label: "Other",
    options: [
      { value: "retainer", label: "Compliance retainer" },
      { value: "other", label: "Something else" },
    ],
  },
];

const AU_BUSINESS_MODELS: readonly Option[] = [
  { value: "lender", label: "Lender / credit provider" },
  { value: "broker", label: "Mortgage or finance broker" },
  { value: "bnpl-fintech", label: "Buy now pay later or fintech credit" },
  { value: "lessor", label: "Consumer lessor" },
  { value: "debt-management", label: "Debt management" },
  { value: "financial-services", label: "Financial services (advice, products, funds)" },
  { value: "remittance-crypto", label: "Remittance or digital currency exchange" },
  { value: "professional-services", label: "Professional services (legal, accounting, real estate)" },
  { value: "other", label: "Other" },
];

const NZ_BUSINESS_MODELS: readonly Option[] = [
  { value: "financial-advice", label: "Financial advice provider" },
  { value: "market-services", label: "Fund manager, DIMS or other market services" },
  { value: "lender", label: "Lender / consumer credit" },
  { value: "remittance-vasp", label: "Remitter or virtual asset provider" },
  { value: "professional-services", label: "Professional services (legal, accounting, real estate)" },
  { value: "other", label: "Other" },
];

const AU_LICENCE_STATUS: readonly Option[] = [
  { value: "new-entrant", label: "Not yet licensed / new entrant" },
  { value: "applying", label: "Application in progress" },
  { value: "hold-acl", label: "Hold an ACL" },
  { value: "hold-afsl", label: "Hold an AFSL" },
  { value: "hold-both", label: "Hold both an AFSL and an ACL" },
  { value: "credit-representative", label: "Credit representative or authorised representative" },
  { value: "austrac", label: "AUSTRAC-enrolled or registered" },
  { value: "unsure", label: "Not sure" },
];

const NZ_LICENCE_STATUS: readonly Option[] = [
  { value: "new-entrant", label: "Not yet registered or licensed" },
  { value: "fspr-registered", label: "Registered on the FSPR" },
  { value: "fma-licensed", label: "Hold an FMA licence" },
  { value: "applying", label: "Application in progress" },
  { value: "reporting-entity", label: "AML/CFT reporting entity" },
  { value: "unsure", label: "Not sure" },
];

export const ENQUIRY = byRegion({
  au: { services: AU_SERVICES, businessModels: AU_BUSINESS_MODELS, licenceStatus: AU_LICENCE_STATUS },
  nz: { services: NZ_SERVICES, businessModels: NZ_BUSINESS_MODELS, licenceStatus: NZ_LICENCE_STATUS },
});

const flatServices = ENQUIRY.services.flatMap((g) => g.options);

/** Label for an option value, or "" if the value is not one of the options. */
export function serviceLabel(value: string): string {
  return flatServices.find((o) => o.value === value)?.label ?? "";
}
export function businessModelLabel(value: string): string {
  return ENQUIRY.businessModels.find((o) => o.value === value)?.label ?? "";
}
export function licenceStatusLabel(value: string): string {
  return ENQUIRY.licenceStatus.find((o) => o.value === value)?.label ?? "";
}
export function isServiceValue(value: string): boolean {
  return flatServices.some((o) => o.value === value);
}
