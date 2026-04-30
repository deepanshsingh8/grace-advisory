import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { HexComposition } from "@/components/hex-composition";

/**
 * Hero — atmospheric navy background with multiple gradient washes,
 * gold hex pattern overlay, paper grain, and the rotating hex composition.
 *
 * No side rail. No congestion. Just air, depth, and the brand mark anchored
 * on the right.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden text-[var(--color-ivory-50)] bg-[var(--color-navy-900)]"
    >
      {/* ── Atmospheric layers (back → front) ─────────────────────── */}
      {/* 1. Multi-stop gradient wash for depth */}
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(1100px 600px at 80% -10%, rgba(230,182,55,0.20), transparent 60%)," +
            "radial-gradient(900px 500px at 10% 110%, rgba(244,210,122,0.10), transparent 60%)," +
            "radial-gradient(800px 600px at 50% 50%, rgba(46,58,107,0.5), transparent 70%)," +
            "linear-gradient(180deg, #141B3C 0%, #1E2A56 60%, #141B3C 100%)",
        }}
      />

      {/* 2. Hex pattern, parallax-translated by --mx/--my */}
      <div
        aria-hidden
        className="absolute -inset-10 z-[1] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 92' width='80' height='92'><path d='M40 2 L74 22 V64 L40 84 L6 64 V22 Z' fill='none' stroke='%23E6B637' stroke-opacity='0.10' stroke-width='1'/></svg>\")",
          backgroundSize: "160px 184px",
          transform: "translate3d(calc(var(--mx) * -22px), calc(var(--my) * -14px), 0)",
          transition: "transform 1200ms cubic-bezier(.18,.7,.2,1)",
          willChange: "transform",
        }}
      />

      {/* 3. Paper grain */}
      <div
        aria-hidden
        className="absolute inset-0 z-[2] pointer-events-none mix-blend-overlay opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.18'/></svg>\")",
        }}
      />

      {/* 4. Gold horizon line at the bottom — defines the section edge */}
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 z-[3] h-[2px] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(230,182,55,0) 5%, rgba(230,182,55,0.5) 50%, rgba(230,182,55,0) 95%, transparent 100%)",
        }}
      />

      {/* ── Content ───────────────────────────────────────────────── */}
      <div className="relative z-[4] mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <div
          className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center gap-12 lg:gap-24"
          style={{ paddingBlock: "clamp(96px, 14vw, 168px) clamp(80px, 10vw, 120px)" }}
        >
          {/* Text */}
          <div
            className="hero-text-parallax"
            style={{
              transform: "translate3d(calc(var(--mx) * -6px), calc(var(--my) * -4px), 0)",
              transition: "transform 900ms cubic-bezier(.18,.7,.2,1)",
            }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="roman" style={{ color: "rgba(251,248,241,.5)" }}>No. I</span>
              <span className="eyebrow on-dark no-rule">Compliance Consulting · Australia</span>
            </div>

            <h1
              className="font-display font-medium leading-[1.02] tracking-[-0.015em] mb-7"
              style={{ fontSize: "clamp(2.6rem, 6.4vw, 5.4rem)" }}
            >
              Compliance,{" "}
              <em className="not-italic font-normal italic text-[var(--color-gold-200)]">conducted with grace.</em>
            </h1>

            <p
              className="font-display italic text-[var(--color-ivory-50)]/80 max-w-[580px] mb-10"
              style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.3rem)", lineHeight: 1.55 }}
            >
              Tailored AFSL and AML/CTF advisory for Australia&rsquo;s regulated firms — from
              licence application to ongoing monitoring, calibrated to the nature, size and
              complexity of your business.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Link href="/contact" className="btn btn-primary magnetic">
                Book a consultation
                <ArrowRight className="arrow" />
              </Link>
              <Link href="/about" className="btn btn-outline on-dark">
                Our approach
              </Link>
            </div>

            {/* Credentials strip — credential prominent, descriptor secondary */}
            <dl
              className="mt-14 pt-7 grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-7"
              style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
            >
              {[
                { i: "i.",   credential: "Phase 1 & 2",   descriptor: "reporting entities" },
                { i: "ii.",  credential: "RG 105",        descriptor: "responsible managers" },
                { i: "iii.", credential: "AUSTRAC",       descriptor: "independent reviews" },
                { i: "iv.",  credential: "End-to-end",    descriptor: "senior-led service" },
              ].map((c) => (
                <div key={c.credential} className="flex flex-col gap-1.5">
                  <span className="roman text-[var(--color-gold-200)]">{c.i}</span>
                  <dt className="font-display font-medium text-[var(--color-ivory-50)] tracking-[-0.005em] leading-[1.05]"
                      style={{ fontSize: "clamp(1.25rem, 1.8vw, 1.55rem)" }}>
                    {c.credential}
                  </dt>
                  <dd className="m-0 font-sans text-[0.7rem] tracking-[0.18em] uppercase text-[rgba(251,248,241,0.55)]">
                    {c.descriptor}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Hex composition */}
          <HexComposition />
        </div>
      </div>
    </section>
  );
}
