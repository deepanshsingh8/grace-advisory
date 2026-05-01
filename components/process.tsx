import { SectionHead } from "@/components/section";

interface Step {
  num: string;
  title: string;
  body: string;
}

const STEPS: Step[] = [
  {
    num: "01",
    title: "Discovery",
    body: "A 30-minute scoping call. We learn your business model, regulatory perimeter, and the specific obligations you need to meet.",
  },
  {
    num: "02",
    title: "Scope",
    body: "A written engagement letter — deliverables, timeline and fixed fee. No hourly billing, no surprises.",
  },
  {
    num: "03",
    title: "Build",
    body: "We do the work — your AML/CTF Program, AFSL application, policies, or independent review — alongside your team, not above them.",
  },
  {
    num: "04",
    title: "Embed",
    body: "Implementation support, role-based training, and a clean handover. We measure success by what your team can run on its own.",
  },
  {
    num: "05",
    title: "Sustain",
    body: "Move to a monthly retainer for ongoing monitoring, regulator liaison and program upkeep — or pick up the next engagement when you need us.",
  },
];

/**
 * Five-step horizontal process for the home page. A long gold connector rule
 * runs through the centre of every step's hex glyph, anchoring them visually.
 * Mobile collapses to a vertical timeline with the same connector running
 * down the left edge.
 */
export function Process() {
  return (
    <section
      id="process"
      className="relative py-[clamp(56px,7vw,96px)] bg-[var(--color-ivory-50)] overflow-hidden"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(900px 500px at 0% 0%, rgba(244,210,122,0.10), transparent 60%)," +
            "radial-gradient(700px 600px at 100% 100%, rgba(30,42,86,0.05), transparent 60%)",
        }}
      />
      {/* Subtle hex pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-50"
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
          eyebrow="No. VIII · The Engagement"
          title={<>How we work,<br/>step by step.</>}
          lede="Five stages from first call to ongoing support — clearly scoped, fixed-fee, and senior-led throughout."
        />

        {/* ── Desktop: horizontal 5-column grid with central gold rule ── */}
        <div className="reveal hidden md:block">
          <div className="relative">
            {/* Connector rule running through the hex glyphs, edge to edge */}
            <div
              aria-hidden
              className="absolute left-0 right-0 top-[42px] h-px pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, var(--color-gold-500) 8%, var(--color-gold-500) 92%, transparent 100%)",
              }}
            />
            <ol className="relative grid grid-cols-5 gap-3 lg:gap-6 list-none p-0 m-0">
              {STEPS.map((s, i) => (
                <DesktopStep key={s.num} step={s} index={i} />
              ))}
            </ol>
          </div>
        </div>

        {/* ── Mobile: vertical timeline with left rail rule ── */}
        <ol className="md:hidden relative pl-12 list-none p-0 m-0 reveal">
          {/* Vertical connector rule */}
          <div
            aria-hidden
            className="absolute left-[20px] top-3 bottom-3 w-px pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, var(--color-gold-500) 8%, var(--color-gold-500) 92%, transparent 100%)",
            }}
          />
          {STEPS.map((s) => (
            <MobileStep key={s.num} step={s} />
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─── Desktop step ───────────────────────────────────────────────────── */
function DesktopStep({ step, index }: { step: Step; index: number }) {
  return (
    <li className="relative pt-0">
      {/* Hex glyph badge sitting on the connector rule */}
      <div className="relative mx-auto w-[88px] h-[88px] grid place-items-center">
        {/* Behind-the-hex ivory disc to mask the connector under the badge */}
        <div className="absolute inset-2 bg-[var(--color-ivory-50)] z-0" />
        <svg viewBox="0 0 88 88" fill="none" aria-hidden className="absolute inset-0 z-[1] text-[var(--color-gold-500)]">
          <path d="M44 6 L78 26 V62 L44 82 L10 62 V26 Z" stroke="currentColor" strokeWidth="1.4" />
          {index === 0 && (
            <path d="M44 14 L70 30 V58 L44 74 L18 58 V30 Z" fill="currentColor" fillOpacity="0.06" />
          )}
        </svg>
        <span className="relative z-[2] font-display font-medium text-[var(--color-navy-900)] tabular-nums" style={{ fontSize: "1.6rem", lineHeight: 1 }}>
          {step.num}
        </span>
      </div>

      <div className="text-center mt-6">
        <h3
          className="font-display font-semibold tracking-[-0.005em] text-[var(--color-navy-900)] m-0"
          style={{ fontSize: "clamp(1.1rem, 1.4vw, 1.3rem)" }}
        >
          {step.title}
        </h3>
        <p className="mt-2 text-[var(--color-ink-700)] text-[0.92rem] leading-[1.55] m-0 mx-auto max-w-[28ch]">
          {step.body}
        </p>
      </div>
    </li>
  );
}

/* ─── Mobile step ────────────────────────────────────────────────────── */
function MobileStep({ step }: { step: Step }) {
  return (
    <li className="relative pb-8 last:pb-0">
      {/* Hex badge centred on the rail */}
      <div className="absolute -left-12 top-0 w-10 h-10 grid place-items-center">
        <div className="absolute inset-1 bg-[var(--color-ivory-50)] z-0" />
        <svg viewBox="0 0 40 40" fill="none" aria-hidden className="absolute inset-0 z-[1] text-[var(--color-gold-500)]">
          <path d="M20 3 L34 11 V29 L20 37 L6 29 V11 Z" stroke="currentColor" strokeWidth="1.3" />
        </svg>
        <span className="relative z-[2] font-display font-medium text-[var(--color-navy-900)] text-[0.78rem] tabular-nums">
          {step.num}
        </span>
      </div>
      <h3
        className="font-display font-semibold tracking-[-0.005em] text-[var(--color-navy-900)] m-0"
        style={{ fontSize: "1.2rem" }}
      >
        {step.title}
      </h3>
      <p className="mt-1.5 text-[var(--color-ink-700)] text-[0.95rem] leading-[1.6] m-0">
        {step.body}
      </p>
    </li>
  );
}
