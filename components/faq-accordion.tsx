"use client";

import { useId, useState } from "react";
import { SectionHead } from "@/components/section";
import { ChevronDownIcon } from "@/components/icons";

export interface FAQItem { q: string; a: string }

/**
 * Editorial FAQ accordion. Soft, slow disclosure — matches the rest of the
 * site's restraint. Only one open at a time keeps the layout calm.
 * Pair with <FAQSchema> to publish the same questions as FAQPage JSON-LD.
 */
export function FAQAccordion({
  faqs,
  eyebrow = "Frequently asked",
  title = <>The questions we<br/>are most often asked.</>,
  lede,
  className = "bg-cream-mesh",
}: {
  faqs: readonly FAQItem[];
  eyebrow?: string;
  title?: React.ReactNode;
  lede?: React.ReactNode;
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const base = useId();

  return (
    <section className={"relative py-[clamp(56px,7vw,96px)] " + className}>
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <SectionHead eyebrow={eyebrow} title={title} lede={lede} />

        <div className="reveal max-w-[820px] mx-auto border-t border-[var(--color-line)]">
          {faqs.map((faq, i) => {
            const open = i === openIndex;
            const id = `${base}-faq-${i}`;
            const triggerId = `${base}-faq-trigger-${i}`;
            return (
              <div key={faq.q} className="border-b border-[var(--color-line)]">
                <h3 className="m-0">
                  <button
                    type="button"
                    id={triggerId}
                    aria-expanded={open}
                    aria-controls={id}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="w-full text-left py-6 lg:py-7 flex items-start justify-between gap-6 group focus:outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-gold-500)] focus-visible:outline-offset-2"
                  >
                    <span className="font-display font-medium leading-[1.3] tracking-[-0.005em] text-[var(--color-navy-900)] flex-1"
                          style={{ fontSize: "clamp(1.15rem, 1.5vw, 1.35rem)" }}>
                      {faq.q}
                    </span>
                    <span
                      className={
                        "shrink-0 mt-1 w-9 h-9 inline-flex items-center justify-center border transition-colors duration-200 " +
                        (open
                          ? "bg-[var(--color-navy-900)] border-[var(--color-navy-900)] text-[var(--color-gold-300)]"
                          : "bg-transparent border-[var(--color-line)] text-[var(--color-navy-700)] group-hover:border-[var(--color-gold-500)]")
                      }
                      aria-hidden
                    >
                      <ChevronDownIcon className={"h-4 w-4 transition-transform duration-300 " + (open ? "rotate-180" : "")} />
                    </span>
                  </button>
                </h3>
                <div
                  id={id}
                  role="region"
                  aria-labelledby={triggerId}
                  className={
                    "grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(.18,.7,.2,1)] " +
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

/** FAQPage structured data for the same questions. */
export function FAQSchema({ faqs }: { faqs: readonly FAQItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
