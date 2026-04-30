/**
 * Sober regulator strip — the "operating within" reference frame.
 * Sits on a slightly darker ivory band so it visually separates from
 * the marquee above and the section below.
 */
const FRAMEWORKS = ["ASIC", "AUSTRAC", "AFCA", "FATF", "RG 105", "AML/CTF Act"];

export function TrustStrip() {
  return (
    <section
      className="relative py-12 sm:py-14 bg-[var(--color-ivory-100)] border-y border-[var(--color-line)]"
    >
      {/* Soft warm wash so it doesn't read as a flat slab */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(600px 280px at 50% 0%, rgba(244,210,122,0.18), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12 flex flex-col items-center gap-6 text-center">
        <span className="eyebrow">Operating within the framework of</span>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 sm:gap-x-12 lg:gap-x-14
                        font-sans font-bold text-base tracking-[0.18em] uppercase text-[var(--color-navy-700)]">
          {FRAMEWORKS.map((f, i) => (
            <span key={f} className="flex items-center gap-x-8 sm:gap-x-12 lg:gap-x-14">
              <span>{f}</span>
              {i < FRAMEWORKS.length - 1 && (
                <span className="w-1.5 h-1.5 bg-[var(--color-gold-500)] rotate-45 shrink-0" aria-hidden />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
