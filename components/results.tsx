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
 * A proof block that pairs hard numbers with the credentials that frame
 * them — the regulators we work in front of, the standards bodies we are
 * accredited under. Editorial in voice; quantified in substance.
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

        {/* Stats grid */}
        <div className="reveal reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[var(--color-line)]">
          {STATS.map((s) => (
            <article
              key={s.label}
              className="has-spotlight relative bg-[var(--color-ivory-50)] hover:bg-white transition-colors duration-500
                         border-r border-b border-[var(--color-line)] p-9 lg:p-10 flex flex-col"
            >
              {/* Hex glyph in the corner */}
              <svg viewBox="0 0 24 24" fill="none" aria-hidden
                   className="absolute top-5 right-5 w-7 h-7 text-[var(--color-gold-300)] opacity-60">
                <path d="M12 2 L21 7 V17 L12 22 L3 17 V7 Z" stroke="currentColor" strokeWidth="1.4" />
              </svg>

              <div
                className="font-display font-medium tracking-[-0.018em] text-[var(--color-navy-900)] leading-[0.95] mb-5"
                style={{ fontSize: "clamp(2.4rem, 4.4vw, 3.6rem)" }}
              >
                {s.num}
              </div>
              <div className="font-sans font-bold text-[0.72rem] tracking-[0.18em] uppercase text-[var(--color-gold-600)] mb-3">
                {s.label}
              </div>
              <p className="text-[0.95rem] leading-[1.6] text-[var(--color-ink-700)] m-0">{s.body}</p>
            </article>
          ))}
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
