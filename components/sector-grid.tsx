import { SectionHead } from "@/components/section";
import {
  IllAccounting, IllCrypto, IllFinance, IllLaw, IllOther, IllRealEstate,
} from "@/components/sector-illustrations";
import { ComponentType, HTMLAttributes } from "react";

interface Sector {
  num: string;
  name: string;
  body: string;
  Ill: ComponentType<HTMLAttributes<HTMLDivElement> & { className?: string }>;
}

const SECTORS: Sector[] = [
  { num: "i",   name: "Accounting",              body: "Wide reach and a gatekeeper role — accountants feature in every phase of ML/TF.", Ill: IllAccounting },
  { num: "ii",  name: "Financial Services",      body: "Heightened ML/TF exposure. The Act sets clear obligations to detect and deter.", Ill: IllFinance },
  { num: "iii", name: "Law",                     body: "Wide reach and a gatekeeper role — lawyers feature in every phase of ML/TF.", Ill: IllLaw },
  { num: "iv",  name: "Real Estate",             body: "FIU research indicates real estate is the ML asset of choice.", Ill: IllRealEstate },
  { num: "v",   name: "Virtual Assets & Crypto", body: "Pseudo-anonymous, wide-reach services — VASPs attract heightened scrutiny.", Ill: IllCrypto },
  { num: "vi",  name: "Other Captured Sectors",  body: "Easy-access industries that lend themselves to ML/TF — now in scope under Tranche 2.", Ill: IllOther },
];

/**
 * Sectors we serve — a calm 2×3 editorial grid. No card borders; only
 * hairline dividers that grid the cells. Small illustration sits beside
 * the sector name; prose flows underneath. Consistent left alignment
 * throughout so the section reads as a quiet inventory, not a clutter
 * of boxes.
 */
export function SectorGrid() {
  return (
    <section id="sectors" className="relative section-pad bg-cream-mesh">
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <SectionHead
          eyebrow="No. I · Reporting Entities"
          title={<>Qualified to consult for<br/>Phase 1 &amp; 2 entities.</>}
          lede="From financial services and law to real estate and virtual assets — we work across every sector captured by Australia's AML/CTF regime."
        />

        <div className="reveal mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((s, i) => {
            // Build divider classes so the grid renders as hairlines
            // (border-t on every row except the first; border-l on every
            // column except the first at each breakpoint).
            const dividers = [
              "py-9 sm:py-10",
              "px-0 sm:px-8 lg:px-10",
              // Horizontal rule above (skip on the very first row)
              i === 0 ? "" : "border-t border-[var(--color-line)]",
              // sm: only second column gets a left border; reset on lg
              i % 2 === 1 ? "sm:border-l sm:border-[var(--color-line)] lg:border-l-0" : "",
              // lg: items 1 and 2 (and 4,5) get a left border
              i % 3 !== 0 ? "lg:border-l lg:border-[var(--color-line)]" : "",
              // sm: rows 0,1 → no top border on row 0; row 1 has top after row 0
              // sm-only behaviour: pairs (0,1) (2,3) (4,5). Reset top on sm pair starts.
              i % 2 === 0 && i !== 0 ? "sm:border-t" : "",
              i % 2 === 1 && i === 1 ? "sm:border-t-0" : "",
              // lg: top border resets for first row of triples (i 0,1,2 no top; i 3,4,5 top)
              i < 3 ? "lg:border-t-0" : "lg:border-t lg:border-[var(--color-line)]",
            ].join(" ");

            return (
              <article key={s.name} className={`group ${dividers}`}>
                <div className="flex items-start gap-5">
                  <s.Ill className="text-[var(--color-gold-500)] transition-transform duration-300 group-hover:rotate-[6deg] shrink-0" />
                  <div className="min-w-0 pt-1">
                    <span className="font-sans font-bold tracking-[0.2em] uppercase text-[0.7rem] text-[var(--color-gold-700)]">
                      {s.num}.
                    </span>
                    <h3
                      className="font-display font-medium tracking-[-0.008em] text-[var(--color-navy-900)] mt-1.5 mb-3 leading-[1.15]"
                      style={{ fontSize: "clamp(1.25rem, 1.7vw, 1.5rem)" }}
                    >
                      {s.name}
                    </h3>
                    <p
                      className="font-sans text-[var(--color-ink-700)] m-0 leading-[1.65]"
                      style={{ fontSize: "0.97rem" }}
                    >
                      {s.body}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
