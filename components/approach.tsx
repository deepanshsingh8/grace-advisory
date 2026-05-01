import Image from "next/image";
import { SectionHead } from "@/components/section";
import { IMG } from "@/lib/imagery";

const PILLARS = [
  { num: "i.",   title: "Deep regulatory expertise", body: "Across AFSL and AUSTRAC. We work in the text of the rules — RG 105, the AML/CTF Act, Tranche 2 — so you don't have to." },
  { num: "ii.",  title: "End-to-end support",         body: "From application through to ongoing monitoring and independent review — we stay alongside the business as it grows." },
  { num: "iii.", title: "Trusted across all stages",  body: "Our framework scales to your business — first AFSL or mature program." },
];

export function Approach() {
  return (
    <section id="approach" className="relative py-[clamp(56px,7vw,96px)] bg-[var(--color-ivory-100)]">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(900px 400px at 50% 0%, rgba(244,210,122,0.20), transparent 70%)," +
            "radial-gradient(700px 400px at 50% 100%, rgba(30,42,86,0.06), transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <SectionHead
          eyebrow="No. VI · Why Grace"
          title={<>A boutique discipline,<br/>at every stage of compliance.</>}
          lede="Three principles shape every engagement — precision over volume, partnership over transaction."
        />

        {/* Editorial split: framed photograph + numbered pillars */}
        <div className="reveal grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 items-stretch">
          {/* Framed photograph with hex frame, gold rule and editorial caption */}
          <figure className="relative">
            <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] overflow-hidden bg-[var(--color-navy-900)]">
              <Image
                src={IMG.approach_frame}
                alt="A considered, deliberate workspace — the calibre of room where compliance work is done."
                fill
                sizes="(min-width: 1024px) 540px, 100vw"
                className="object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(.18,.7,.2,1)] hover:scale-[1.03]"
              />
              {/* Brand-tinted overlay */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(20,27,60,0.30) 0%, rgba(30,42,86,0.10) 50%, rgba(230,182,55,0.08) 100%)",
                  mixBlendMode: "multiply",
                }}
              />
              {/* Hex glyph in the bottom-left corner */}
              <svg viewBox="0 0 24 24" fill="none" className="absolute bottom-5 left-5 w-12 h-12 text-[var(--color-gold-300)]"
                   aria-hidden>
                <path d="M12 2 L21 7 V17 L12 22 L3 17 V7 Z" stroke="currentColor" strokeWidth="1.2" />
                <path d="M12 8 L17 11 V14 L12 17 L7 14 V11 Z" fill="currentColor" opacity="0.85" />
              </svg>
              {/* Top-right gold corner accent */}
              <div
                aria-hidden
                className="absolute -top-px -right-px w-20 h-20 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-gold-500) 0%, var(--color-gold-300) 100%)",
                  clipPath: "polygon(100% 0, 100% 100%, 0 0)",
                }}
              />
            </div>

            <figcaption className="mt-5 flex items-center gap-4 font-sans font-bold text-[0.7rem] tracking-[0.18em] uppercase text-[var(--color-ink-600)]">
              <span className="w-9 h-px bg-[var(--color-gold-500)]" aria-hidden />
              The room where it&rsquo;s done
            </figcaption>
          </figure>

          {/* Pillars stacked, each with hex glyph */}
          <div className="flex flex-col">
            <div className="bg-[var(--color-ivory-50)] border border-[var(--color-line)] divide-y divide-[var(--color-line)] flex-1">
              {PILLARS.map((p) => (
                <div key={p.title} className="p-8 lg:p-10 relative group">
                  {/* Numeral badge */}
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-sans font-bold text-[var(--color-gold-700)] text-[0.7rem] tracking-[0.18em] uppercase leading-none">{p.num}</span>
                    <h3 className="font-display font-medium leading-[1.1] tracking-[-0.008em] m-0 flex-1 text-[var(--color-navy-900)]"
                        style={{ fontSize: "clamp(1.35rem, 1.9vw, 1.7rem)" }}>{p.title}</h3>
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden
                         className="w-5 h-5 text-[var(--color-gold-500)] opacity-30 group-hover:opacity-100 transition-opacity duration-500 shrink-0">
                      <path d="M12 2 L21 7 V17 L12 22 L3 17 V7 Z" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </div>
                  <p className="text-[var(--color-ink-700)] text-[0.98rem] leading-[1.7] m-0">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pull quote */}
        <figure className="reveal mt-[clamp(48px,8vw,96px)] text-center max-w-[880px] mx-auto">
          <blockquote
            className="font-display font-medium leading-[1.3] tracking-[-0.008em] text-[var(--color-navy-900)] m-0"
            style={{ fontSize: "clamp(1.35rem, 2.4vw, 2.1rem)" }}
          >
            <span className="text-[var(--color-gold-500)] mr-1">“</span>
            We are committed, through our words and actions, to ethical conduct and always
            putting clients&rsquo; interest first.
            <span className="text-[var(--color-gold-500)] ml-1">”</span>
          </blockquote>
          <cite className="not-italic mt-6 inline-flex items-center gap-3.5 font-sans font-bold text-[0.78rem] tracking-[0.18em] uppercase text-[var(--color-ink-700)]">
            <span className="w-9 h-px bg-[var(--color-gold-500)]" aria-hidden />
            Grace Advisory · Statement of intent
          </cite>
        </figure>
      </div>
    </section>
  );
}
