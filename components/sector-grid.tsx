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
 * Sectors we serve — replaces the previous card grid with an editorial
 * alternating list. Each sector is a single row: large display numeral,
 * sector name, prose; with the illustration mirroring left/right.
 * Hairline rules between rows, no card borders.
 */
export function SectorGrid() {
  return (
    <section id="sectors" className="relative py-[clamp(56px,7vw,96px)] bg-cream-mesh">
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <SectionHead
          eyebrow="No. V · Reporting Entities"
          title={<>Qualified to consult for<br/>Phase 1 &amp; 2 entities.</>}
          lede="From financial services and law to real estate and virtual assets — we work across every sector captured by Australia's AML/CTF regime."
        />

        <ul className="reveal list-none p-0 m-0 mt-2">
          {SECTORS.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <li
                key={s.name}
                className="group grid grid-cols-1 md:grid-cols-[120px_1fr_minmax(180px,_280px)] items-center gap-x-8 lg:gap-x-12 gap-y-4
                           py-9 sm:py-11 border-t border-[var(--color-line)] last:border-b"
              >
                {/* Numeral */}
                <div
                  className={
                    "font-display font-medium tracking-[-0.012em] text-[var(--color-gold-600)] leading-none " +
                    (flip ? "md:order-3 md:text-right" : "")
                  }
                  style={{ fontSize: "clamp(2.4rem, 4.4vw, 3.8rem)" }}
                >
                  {s.num}.
                </div>

                {/* Name + body */}
                <div className={"max-w-[64ch] " + (flip ? "md:order-2" : "md:order-2")}>
                  <h3
                    className="font-display font-medium tracking-[-0.012em] text-[var(--color-navy-900)] m-0 leading-[1.05]"
                    style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)" }}
                  >
                    {s.name}
                  </h3>
                  <p
                    className="font-sans text-[var(--color-ink-700)] mt-3 mb-0 leading-[1.7]"
                    style={{ fontSize: "clamp(0.98rem, 1.04vw, 1.08rem)" }}
                  >
                    {s.body}
                  </p>
                </div>

                {/* Illustration */}
                <div
                  className={
                    "flex " +
                    (flip ? "md:order-1 md:justify-start" : "md:order-3 md:justify-end")
                  }
                >
                  <s.Ill
                    className="text-[var(--color-gold-500)] transition-transform duration-700 group-hover:rotate-[6deg]"
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
