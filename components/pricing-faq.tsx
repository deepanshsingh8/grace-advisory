import { FAQAccordion } from "@/components/faq-accordion";
import { PRICING_FAQS } from "@/lib/pricing";

export function PricingFAQ() {
  return (
    <FAQAccordion
      faqs={PRICING_FAQS}
      lede="Plain-language answers on structure, billing and scope. Anything else — just ask."
    />
  );
}
