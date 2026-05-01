import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HexFilled } from "@/components/icons";
import { SectionHead } from "@/components/section";
import { IMG } from "@/lib/imagery";

interface FounderProps {
  /** Hide the editorial SectionHead — use when this slot follows a PageHero. */
  noHead?: boolean;
}

const CREDENTIALS: { label: string; body: string }[] = [
  { label: "FGIA", body: "Fellow, Governance Institute of Australia." },
  { label: "Certified GRC Auditor & Professional", body: "OCEG — governance, risk and compliance." },
  { label: "CPA Australia · ACAMS · ACFE", body: "Member — accounting, AML, fraud examiners." },
  { label: "ANZIIF Associate", body: "Australia & New Zealand Institute of Insurance and Finance." },
];

const RECOGNITION: { year: string; body: string }[] = [
  { year: "2024", body: "Australian Governance Top 100 — Outstanding Achievement (Top 10) · Nasdaq · Computershare." },
  { year: "2023", body: "Shortlisted, Risk Leader of the Year — Risk Management Institute of Australasia (RMIA)." },
  { year: "2022", body: "Finalist, Australian Governance Top 100." },
];

/**
 * Founder / CEO profile section.
 *
 * Editorial split — large framed portrait on the left, name + credentials
 * + recognition on the right. Mirrors the WhiteLight About-page treatment,
 * tuned to Grace Advisory's navy/gold/serif language.
 */
export function Founder({ noHead = false }: FounderProps) {
  return (
    <section
      id="founder"
      className="relative py-[clamp(56px,7vw,96px)] bg-warm-mesh overflow-hidden"
    >
      {/* Atmosphere */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(1000px 600px at 90% 0%, rgba(230,182,55,0.12), transparent 60%)," +
            "radial-gradient(700px 500px at 0% 100%, rgba(30,42,86,0.06), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        {!noHead && (
          <SectionHead
            eyebrow="No. VII · From the Principal"
            title={<>The compliance counsel<br/>behind every engagement.</>}
            lede="Senior-led by design — the partnership begins with the person whose name is on the door."
          />
        )}

        <div className="reveal grid grid-cols-1 lg:grid-cols-[0.95fr_1.15fr] gap-10 lg:gap-16 items-start">
          {/* ── Portrait ─────────────────────────────────────────── */}
          <figure className="relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-navy-900)]">
              <Image
                src={IMG.founder_portrait}
                alt="Raj Kumar — Founder & Principal of Grace Advisory."
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(.18,.7,.2,1)] hover:scale-[1.03]"
              />
              {/* Brand-tinted overlay — keeps portrait coherent with the navy/gold palette */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(20,27,60,0.18) 0%, rgba(30,42,86,0.06) 50%, rgba(230,182,55,0.06) 100%)",
                  mixBlendMode: "multiply",
                }}
              />
              {/* Bottom-left hex glyph */}
              <svg viewBox="0 0 24 24" fill="none" className="absolute bottom-5 left-5 w-12 h-12 text-[var(--color-gold-300)]"
                   aria-hidden>
                <path d="M12 2 L21 7 V17 L12 22 L3 17 V7 Z" stroke="currentColor" strokeWidth="1.2" />
                <path d="M12 8 L17 11 V14 L12 17 L7 14 V11 Z" fill="currentColor" opacity="0.85" />
              </svg>
              {/* Bottom-right gold corner accent */}
              <div
                aria-hidden
                className="absolute -bottom-px -right-px w-20 h-20 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(315deg, var(--color-gold-500) 0%, var(--color-gold-300) 100%)",
                  clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                }}
              />
            </div>

            <figcaption className="mt-5 flex items-center gap-4 font-sans font-bold text-[0.7rem] tracking-[0.18em] uppercase text-[var(--color-ink-600)]">
              <span className="w-9 h-px bg-[var(--color-gold-500)]" aria-hidden />
              The Principal
            </figcaption>
          </figure>

          {/* ── Bio + credentials ────────────────────────────────── */}
          <div className="flex flex-col">
            {/* Name + role */}
            <span className="font-sans font-bold text-[0.72rem] tracking-[0.22em] uppercase text-[var(--color-gold-600)] mb-3">
              Founder & Principal
            </span>
            <h3 className="font-display font-medium leading-[1.0] tracking-[-0.018em] text-[var(--color-navy-900)] m-0"
                style={{ fontSize: "clamp(2.4rem, 4.6vw, 3.6rem)" }}>
              Raj Kumar
            </h3>
            <p className="font-sans font-bold tracking-[0.16em] uppercase text-[var(--color-gold-700)] mt-3 mb-7"
               style={{ fontSize: "0.78rem" }}>
              Chief Executive Officer · Grace Advisory
            </p>

            {/* Pull quote */}
            <blockquote
              className="font-display font-medium leading-[1.4] tracking-[-0.008em] text-[var(--color-navy-900)] m-0
                         border-l-2 border-[var(--color-gold-500)] pl-6 mb-8"
              style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.55rem)" }}
            >
              <span className="text-[var(--color-gold-500)] mr-1">“</span>
              Compliance is a discipline of judgement, not of paperwork. Our work is to bring clarity
              to obligations that the market often treats as ambiguous — and to do it with the care a
              client&rsquo;s own counsel would.
              <span className="text-[var(--color-gold-500)] ml-1">”</span>
            </blockquote>

            {/* Bio */}
            <div className="space-y-4 text-[var(--color-ink-700)] leading-[1.7] mb-9">
              <p className="m-0">
                Raj founded Grace Advisory to give Australia&rsquo;s regulated firms a senior, ethics-first
                alternative to the volume model. He has spent more than a decade across financial services,
                governance, risk, and investigations — with engagements spanning AFSL and credit licence
                holders, AUSTRAC reporting entities, and the new sectors captured by Tranche 2.
              </p>
              <p className="m-0">
                He is a Fellow of the Governance Institute of Australia (FGIA), a Certified GRC Auditor and
                Professional under OCEG, and a member of CPA Australia, ACAMS, and the Association of
                Certified Fraud Examiners. In 2024 he was recognised in the Australian Governance Top 100
                with the Outstanding Achievement award (Top 10).
              </p>
            </div>

            {/* Credentials list */}
            <div className="bg-[var(--color-ivory-50)] border border-[var(--color-line)]">
              <div className="px-7 py-4 border-b border-[var(--color-line)] flex items-center justify-between">
                <span className="font-sans font-bold text-[0.7rem] tracking-[0.22em] uppercase text-[var(--color-navy-700)]">
                  Credentials
                </span>
                <span className="font-sans font-bold tracking-[0.18em] uppercase text-[0.7rem] text-[var(--color-gold-700)]">i</span>
              </div>
              <ul className="list-none p-0 m-0 divide-y divide-[var(--color-line)]">
                {CREDENTIALS.map((c) => (
                  <li key={c.label} className="px-7 py-4 grid grid-cols-[18px_1fr] gap-3.5 items-start">
                    <HexFilled className="w-3 h-3 mt-1.5 text-[var(--color-gold-500)] shrink-0" />
                    <span className="text-[0.95rem] text-[var(--color-ink-700)] leading-[1.55]">
                      <strong className="text-[var(--color-ink-900)] font-bold">{c.label}</strong>
                      {" — "}
                      {c.body}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recognition */}
            <div className="mt-7">
              <span className="font-sans font-bold text-[0.7rem] tracking-[0.22em] uppercase text-[var(--color-gold-600)]">
                Recognition
              </span>
              <ul className="list-none p-0 m-0 mt-4 space-y-3">
                {RECOGNITION.map((r) => (
                  <li key={r.year} className="grid grid-cols-[68px_1fr] gap-4 items-baseline">
                    <span className="font-sans font-bold text-[var(--color-gold-700)] tabular-nums"
                          style={{ fontSize: "0.95rem", letterSpacing: "0.04em" }}>
                      {r.year}
                    </span>
                    <span className="text-[0.95rem] text-[var(--color-ink-700)] leading-[1.55]">
                      {r.body}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect link */}
            <div className="mt-9 flex flex-wrap gap-4 items-center">
              <Link href="/contact" className="btn btn-primary magnetic">
                Speak with Raj
                <ArrowRight className="arrow" />
              </Link>
              <a
                href="https://au.linkedin.com/in/raj-kumar-0a5a3170"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Profile on LinkedIn
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
