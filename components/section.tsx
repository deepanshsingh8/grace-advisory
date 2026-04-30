import { ReactNode } from "react";

/**
 * Standard editorial section header used across the home page.
 * Pairs a Roman-numeralled eyebrow + serif H2 + italic lede in a
 * 1fr / 1.4fr grid that collapses on mobile.
 */
export function SectionHead({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: ReactNode;
  lede: ReactNode;
}) {
  return (
    <div className="reveal grid gap-6 md:grid-cols-[1fr_1.4fr] md:items-end md:gap-16 mb-12 md:mb-20">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="font-display font-medium leading-[1.05] tracking-[-0.012em] mt-4"
            style={{ fontSize: "clamp(2rem, 4.2vw, 3.4rem)" }}>
          {title}
        </h2>
      </div>
      <p className="font-display italic text-[var(--color-ink-700)] m-0"
         style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.3rem)", lineHeight: 1.55 }}>
        {lede}
      </p>
    </div>
  );
}
