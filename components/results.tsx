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
 * Editorial proof block — numerals sit directly on the page (no cards),
 * separated only by hairline rules. Asymmetric two-column rhythm gives
 * each statement breathing room; standards strip below grounds the page.
 */
export function Results() {
  return (
    <section
      id="results"
      className="relative py-[clamp(56px,7vw,96px)] bg-cream-mesh overflow-hidden"
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
        className="absolute -inset-10 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 92' width='80' height='92'><path d='M40 2 L74 22 V64 L40 84 L6 64 V22 Z' fill='none' stroke='%231E2A56' stroke-opacity='0.04' stroke-width='1'/></svg>\")",
          backgroundSize: "200px 230px",
          transform: "translate3d(calc(var(--mx) * -10px), calc(var(--my) * -8px), 0)",
          transition: "transform 1200ms cubic-bezier(.18,.7,.2,1)",
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <SectionHead
          eyebrow="No. II · Proof of practice"
          title={<>Trusted by leaders.<br/>Backed by results.</>}
          lede="A boutique that brings the rigour of a top-tier compliance function — measured in programs delivered, regulators answered, and clients retained."
        />

        {/* Editorial stat rows — no cards, just hairline rules */}
        <ul className="reveal list-none p-0 m-0 mt-2">
          {STATS.map((s, i) => (
            <li
              key={s.label}
              className="grid grid-cols-1 md:grid-cols-[minmax(260px,_0.9fr)_1.4fr] items-baseline gap-x-10 lg:gap-x-16 gap-y-3 py-8 sm:py-10
                         border-t border-[var(--color-line)] last:border-b"
            >
              {/* Numeral column */}
              <div
                className={
                  "font-display font-medium tracking-[-0.02em] text-[var(--color-navy-900)] leading-[0.95] " +
                  (i % 2 === 1 ? "md:text-right" : "")
                }
                style={{ fontSize: "clamp(2.8rem, 6.2vw, 5.2rem)" }}
              >
                {s.num}
              </div>

              {/* Body column */}
              <div className="max-w-[60ch]">
                <div className="eyebrow no-rule">{s.label}</div>
                <p className="font-sans text-[var(--color-ink-700)] mt-3 mb-0 leading-[1.7]"
                   style={{ fontSize: "clamp(1rem, 1.05vw, 1.1rem)" }}>
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Standards / accreditations strip */}
        <div className="reveal mt-[clamp(40px,6vw,72px)] pt-8 flex flex-col items-center gap-5 text-center">
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
