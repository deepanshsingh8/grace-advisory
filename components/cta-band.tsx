import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { SITE } from "@/lib/seo";

export function CTABand() {
  return (
    <section
      id="contact"
      className="on-dark relative overflow-hidden bg-navy-banner banner-rule-top text-[var(--color-ivory-50)]"
    >
      {/* Atmospheric layers */}
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(1000px 540px at 80% 0%, rgba(210,154,26,0.30), transparent 60%)," +
            "radial-gradient(700px 500px at 0% 100%, rgba(232,185,71,0.14), transparent 65%)," +
            "linear-gradient(180deg, #060920 0%, #111939 60%, #0B1230 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 92' width='80' height='92'><path d='M40 2 L74 22 V64 L40 84 L6 64 V22 Z' fill='none' stroke='%23D29A1A' stroke-opacity='0.10' stroke-width='1'/></svg>\")",
          backgroundSize: "200px 230px",
          transform: "translate3d(calc(var(--mx) * -16px), calc(var(--my) * -10px), 0)",
          transition: "transform 1200ms cubic-bezier(.18,.7,.2,1)",
        }}
      />

      {/* Bottom gold rule */}
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 z-[3] h-[2px] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(210,154,26,0) 4%, rgba(232,185,71,0.75) 50%, rgba(210,154,26,0) 96%, transparent 100%)",
        }}
      />

      <div className="relative z-[2] mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] items-end gap-10"
             style={{ paddingBlock: "clamp(56px, 7vw, 96px)" }}>
          <div>
            <span className="eyebrow on-dark">Get in touch</span>
            <h2
              className="font-display font-medium leading-[1.06] tracking-[-0.012em] mt-5 max-w-[720px] m-0"
              style={{ fontSize: "clamp(1.85rem, 3.8vw, 3rem)" }}
            >
              Speak to a{" "}
              <span className="text-[var(--color-gold-300)]">compliance specialist</span>
              , not a salesperson.
            </h2>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Link href="/contact" className="btn btn-primary magnetic">
              Book a consultation
              <ArrowRight className="arrow" />
            </Link>
            <Link href="/about" className="btn btn-outline">Read our approach</Link>
            <span className="font-sans text-[rgba(241,203,107,0.85)] text-[0.72rem] tracking-[0.18em] uppercase font-bold mt-1">
              Or call us
              <strong className="ml-2 font-sans font-bold tracking-[0.04em] text-[var(--color-ivory-50)] text-[0.95rem]" style={{ textTransform: "none", letterSpacing: "0.04em" }}>{SITE.phone}</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
