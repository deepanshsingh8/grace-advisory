"use client";

import { useState } from "react";
import { SectionHead } from "@/components/section";
import { PRICING_FAQS } from "@/lib/pricing";
import { ChevronDownIcon } from "@/components/icons";

/**
 * Editorial FAQ accordion. Soft, slow disclosure — matches the rest of the
 * site's restraint. Only one open at a time keeps the layout calm.
 */
export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-[clamp(56px,7vw,96px)] bg-cream-mesh">
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <SectionHead
          eyebrow="No. III · Frequently asked"
          title={<>The questions we<br/>are most often asked.</>}
          lede="Plain-language answers on structure, billing and scope. Anything else — just ask."
        />

        <div className="reveal max-w-[820px] mx-auto border-t border-[var(--color-line)]">
          {PRICING_FAQS.map((faq, i) => {
            const open = i === openIndex;
            const id = `faq-${i}`;
            return (
              <div key={faq.q} className="border-b border-[var(--color-line)]">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={id}
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full text-left py-6 lg:py-7 flex items-start justify-between gap-6 group"
                >
                  <span className="font-display font-medium leading-[1.3] tracking-[-0.005em] text-[var(--color-navy-900)] flex-1"
                        style={{ fontSize: "clamp(1.15rem, 1.5vw, 1.35rem)" }}>
                    {faq.q}
                  </span>
                  <span
                    className={
                      "shrink-0 mt-1 w-9 h-9 inline-flex items-center justify-center border " +
                      (open
                        ? "bg-[var(--color-navy-900)] border-[var(--color-navy-900)] text-[var(--color-gold-300)]"
                        : "bg-transparent border-[var(--color-line)] text-[var(--color-navy-700)] group-hover:border-[var(--color-gold-500)]")
                    }
                  >
                    <ChevronDownIcon className={"h-4 w-4 transition-transform duration-300 " + (open ? "rotate-180" : "")} />
                  </span>
                </button>
                <div
                  id={id}
                  role="region"
                  className={
                    "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(.18,.7,.2,1)] " +
                    (open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")
                  }
                >
                  <div className="overflow-hidden">
                    <p className="pb-7 lg:pb-8 max-w-[640px] text-[var(--color-ink-700)] text-[1rem] leading-[1.7] m-0 font-sans">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
