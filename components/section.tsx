import { ReactNode } from "react";

/**
 * Standard editorial section header.
 * Eyebrow + serif H2 + sans-serif lede in a 1fr / 1.4fr grid that collapses on mobile.
 * `lede` is optional — pass nothing for an eyebrow + title only header.
 */
export function SectionHead({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
}) {
  return (
    <div
      className={
        "reveal grid gap-5 mb-9 md:mb-14 " +
        (lede ? "md:grid-cols-[1fr_1.4fr] md:items-end md:gap-14" : "")
      }
    >
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="font-display font-medium leading-[1.06] tracking-[-0.012em] mt-3 text-[var(--color-navy-900)]"
            style={{ fontSize: "clamp(1.85rem, 3.8vw, 3rem)" }}>
          {title}
        </h2>
      </div>
      {lede && (
        <p className="font-sans text-[var(--color-ink-700)] m-0"
           style={{ fontSize: "clamp(1rem, 1.25vw, 1.18rem)", lineHeight: 1.65 }}>
          {lede}
        </p>
      )}
    </div>
  );
}
