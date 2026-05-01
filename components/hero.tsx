import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { HexComposition } from "@/components/hex-composition";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden text-[var(--color-ivory-50)] banner-rule-top bg-navy-banner"
    >
      {/* Atmospheric layers ─────────────────────────────────────── */}
      {/* 1. Deep navy gradient with strong gold sweep */}
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(1200px 700px at 82% -8%, rgba(210,154,26,0.34), transparent 60%)," +
            "radial-gradient(900px 520px at 8% 110%, rgba(232,185,71,0.16), transparent 60%)," +
            "radial-gradient(700px 600px at 50% 50%, rgba(42,52,96,0.45), transparent 70%)," +
            "linear-gradient(180deg, #060920 0%, #111939 55%, #0B1230 100%)",
        }}
      />

      {/* 2. Hex pattern, parallax-translated */}
      <div
        aria-hidden
        className="absolute -inset-10 z-[1] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 92' width='80' height='92'><path d='M40 2 L74 22 V64 L40 84 L6 64 V22 Z' fill='none' stroke='%23D29A1A' stroke-opacity='0.16' stroke-width='1'/></svg>\")",
          backgroundSize: "150px 173px",
          transform: "translate3d(calc(var(--mx) * -22px), calc(var(--my) * -14px), 0)",
          transition: "transform 1200ms cubic-bezier(.18,.7,.2,1)",
          willChange: "transform",
        }}
      />

      {/* 3. Paper grain */}
      <div
        aria-hidden
        className="absolute inset-0 z-[2] pointer-events-none mix-blend-overlay opacity-25"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.18'/></svg>\")",
        }}
      />

      {/* 4. Bottom gold rule — clearer, brighter */}
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 z-[3] h-[2px] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(210,154,26,0) 4%, rgba(232,185,71,0.85) 50%, rgba(210,154,26,0) 96%, transparent 100%)",
        }}
      />

      {/* Content ─────────────────────────────────────────────────── */}
      <div className="relative z-[4] mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <div
          className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center gap-10 lg:gap-20"
          style={{ paddingBlock: "clamp(72px, 9vw, 116px) clamp(60px, 7vw, 88px)" }}
        >
          {/* Text */}
          <div
            className="hero-text-parallax"
            style={{
              transform: "translate3d(calc(var(--mx) * -6px), calc(var(--my) * -4px), 0)",
              transition: "transform 900ms cubic-bezier(.18,.7,.2,1)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-rule" aria-hidden style={{ width: 28 }} />
              <span className="font-sans font-bold text-[0.7rem] tracking-[0.22em] uppercase text-[var(--color-gold-200)]">
                Compliance Consulting · Australia
              </span>
            </div>

            <h1
              className="font-display font-medium leading-[1.04] tracking-[-0.015em] mb-6"
              style={{ fontSize: "clamp(2.4rem, 5.6vw, 4.8rem)" }}
            >
              Compliance,{" "}
              <span className="text-[var(--color-gold-300)]">conducted with grace.</span>
            </h1>

            <p
              className="font-sans text-[var(--color-ivory-50)]/85 max-w-[560px] mb-8"
              style={{ fontSize: "clamp(1rem, 1.25vw, 1.18rem)", lineHeight: 1.6 }}
            >
              Tailored AFSL and AML/CTF advisory — from licence application to ongoing
              monitoring, scaled to your business.
            </p>

            <div className="flex flex-wrap gap-3 items-center">
              <Link href="/contact" className="btn btn-primary magnetic">
                Book a consultation
                <ArrowRight className="arrow" />
              </Link>
              <Link href="/about" className="btn btn-outline on-dark">
                Our approach
              </Link>
            </div>

            {/* Credentials strip */}
            <dl
              className="mt-10 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5"
              style={{ borderTop: "1px solid rgba(232,185,71,0.22)" }}
            >
              {[
                { credential: "Phase 1 & 2", descriptor: "reporting entities" },
                { credential: "RG 105",      descriptor: "responsible managers" },
                { credential: "AUSTRAC",     descriptor: "independent reviews" },
                { credential: "End-to-end",  descriptor: "senior-led service" },
              ].map((c) => (
                <div key={c.credential} className="flex flex-col gap-1.5">
                  <dt className="font-display font-medium text-[var(--color-ivory-50)] tracking-[-0.005em] leading-[1.1]"
                      style={{ fontSize: "clamp(1.15rem, 1.5vw, 1.4rem)" }}>
                    {c.credential}
                  </dt>
                  <dd className="m-0 font-sans text-[0.68rem] tracking-[0.18em] uppercase text-[rgba(241,203,107,0.7)]">
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
