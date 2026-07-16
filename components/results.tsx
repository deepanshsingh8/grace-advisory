import { SectionHead } from "@/components/section";
import { HexFilled } from "@/components/icons";

interface Stat {
  num: string;
  label: string;
  body: string;
}

const STATS: Stat[] = [
  {
    num: "100+",
    label: "Compliance engagements",
    body: "AFSL applications, AML/CTF programs and independent reviews delivered for Australian firms.",
  },
  {
    num: "15+",
    label: "Years in the practice",
    body: "Senior counsel across regulated financial services, governance, risk and investigations.",
  },
  {
    num: "Phase 1 & 2",
    label: "Reporting entities",
    body: "Qualified to consult across every sector captured by Australia's AML/CTF regime.",
  },
  {
    num: "Top 10",
    label: "Governance recognition",
    body: "Outstanding Achievement, Australian Governance Top 100 — Nasdaq · Computershare, 2024.",
  },
];

const STANDARDS = [
  "ASIC", "AUSTRAC", "AFCA", "FATF", "RG 105", "AML/CTF Act", "ANZIIF", "OCEG", "ACAMS",
];

/**
 * Trusted by Leaders. Backed by Results.
 *
 * 2×2 editorial stat block. Each cell sits on the page (no card borders) —
 * a thin cross of hairlines partitions the grid, keeping the structure
 * legible without making the section feel boxy.
 */
export function Results() {
  return (
    <section
      id="results"
      className="relative section-pad bg-cream-mesh overflow-hidden"
    >
      {/* Atmosphere */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(900px 500px at 20% 0%, rgba(244,210,122,0.16), transparent 60%)," +
            "radial-gradient(700px 500px at 90% 90%, rgba(30,42,86,0.06), transparent 60%)",
        }}
      />
      {/* Subtle hex pattern */}
      <div
        aria-hidden
        className="parallax absolute -inset-10 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 92' width='80' height='92'><path d='M40 2 L74 22 V64 L40 84 L6 64 V22 Z' fill='none' stroke='%23182148' stroke-opacity='0.04' stroke-width='1'/></svg>\")",
          backgroundSize: "200px 230px",
          transform: "translate3d(calc(var(--mx) * -10px), calc(var(--my) * -8px), 0)",
          transition: "transform 1200ms cubic-bezier(.18,.7,.2,1)",
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <SectionHead
          eyebrow="Proof of practice"
          title={<>Trusted by leaders.<br/>Backed by results.</>}
          lede="A boutique that brings the rigour of a top-tier compliance function — measured in programs delivered, regulators answered, and clients retained."
        />

        {/* 2×2 stat grid — divider hairlines (no boxes) */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 mt-2">
          {STATS.map((s, i) => {
            const isRightCol = i % 2 === 1;
            const isBottomRow = i >= 2;
            return (
              <div
                key={s.label}
                className={
                  "relative py-9 sm:py-10 lg:py-12 " +
                  (isRightCol ? "sm:pl-10 lg:pl-14 " : "sm:pr-10 lg:pr-14 ") +
                  (isBottomRow ? "border-t border-[var(--color-line)] " : "") +
                  // Vertical divider for right column on sm+
                  (isRightCol ? "sm:border-l sm:border-[var(--color-line)] " : "")
                }
              >
                <div
                  className="font-display font-medium tracking-[-0.018em] text-[var(--color-navy-900)] leading-[0.95]"
                  style={{ fontSize: "clamp(2.4rem, 4.4vw, 3.6rem)" }}
                >
                  {s.num}
                </div>
                <div className="mt-4 font-sans font-bold text-[0.72rem] tracking-[0.2em] uppercase text-[var(--color-gold-700)]">
                  {s.label}
                </div>
                <p className="mt-3 mb-0 font-sans text-[var(--color-ink-700)] leading-[1.65] max-w-[44ch]"
                   style={{ fontSize: "0.98rem" }}>
                  {s.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* Standards / accreditations strip */}
        <div className="reveal mt-[clamp(40px,6vw,72px)] pt-8 border-t border-[var(--color-line)] flex flex-col items-center gap-5 text-center">
          <span className="eyebrow">Accredited & operating across</span>
          <div className="flex flex-wrap justify-center items-center gap-x-7 gap-y-3 sm:gap-x-10
                          font-sans font-bold text-[0.85rem] tracking-[0.18em] uppercase text-[var(--color-navy-700)]">
            {STANDARDS.map((s, i) => (
              <span key={s} className="flex items-center gap-x-7 sm:gap-x-10">
                <span>{s}</span>
                {i < STANDARDS.length - 1 && (
                  <HexFilled className="w-2 h-2 text-[var(--color-gold-500)] shrink-0" aria-hidden />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
