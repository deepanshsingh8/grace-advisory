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
  { num: "i",   name: "Accounting",              body: "Wide reach and gatekeeper role — accountants feature in every phase of ML/TF.", Ill: IllAccounting },
  { num: "ii",  name: "Financial Services",      body: "Heightened ML/TF exposure. The Act sets clear obligations to detect and deter.", Ill: IllFinance },
  { num: "iii", name: "Law",                     body: "Wide reach and gatekeeper role — lawyers feature in every phase of ML/TF.", Ill: IllLaw },
  { num: "iv",  name: "Real Estate",             body: "FIU research indicates real estate is the ML asset of choice.", Ill: IllRealEstate },
  { num: "v",   name: "Virtual Assets & Crypto", body: "Pseudo-anonymous, wide-reach services — VASPs attract heightened scrutiny.", Ill: IllCrypto },
  { num: "vi",  name: "Other Captured Sectors",  body: "Easy-access industries that lend themselves to ML/TF — now in scope under Tranche 2.", Ill: IllOther },
];

export function SectorGrid() {
  return (
    <section id="sectors" className="relative py-[clamp(72px,10vw,144px)] bg-cream-mesh">
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <SectionHead
          eyebrow="No. IV · Reporting Entities"
          title={<>Qualified to consult for<br/>Phase 1 &amp; 2 entities.</>}
          lede="From financial services and law to real estate and virtual assets — we work across every sector captured by Australia's AML/CTF regime."
        />

        <div className="reveal reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTORS.map((s) => (
            <article
              key={s.name}
              className="has-spotlight relative bg-[var(--color-ivory-50)] border border-[var(--color-line)]
                         p-7 hover:bg-white hover:border-[var(--color-gold-300)]
                         transition-[background,border-color] duration-500 group"
            >
              {/* Top row: illustration + Roman numeral */}
              <div className="flex items-start justify-between mb-5">
                <s.Ill className="text-[var(--color-gold-500)] transition-transform duration-700 group-hover:rotate-[6deg]" />
                <span className="font-display italic text-[0.9rem] text-[var(--color-ink-400)]">{s.num}.</span>
              </div>
              <h3 className="font-display font-semibold tracking-[-0.005em] mb-2 m-0 text-[var(--color-navy-900)]"
                  style={{ fontSize: "clamp(1.25rem, 1.6vw, 1.5rem)" }}>{s.name}</h3>
              <p className="font-display italic text-[var(--color-ink-700)] text-[0.95rem] leading-[1.6] m-0">{s.body}</p>

              {/* Subtle hairline corner accent on hover */}
              <div
                aria-hidden
                className="absolute bottom-0 right-0 w-12 h-px bg-[var(--color-gold-500)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div
                aria-hidden
                className="absolute bottom-0 right-0 w-px h-12 bg-[var(--color-gold-500)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
