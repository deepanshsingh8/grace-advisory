import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { SITE } from "@/lib/seo";

export function CTABand() {
  return (
    <section
      id="contact"
      className="on-dark relative overflow-hidden bg-[var(--color-navy-900)] text-[var(--color-ivory-50)]"
    >
      {/* Atmospheric layers */}
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(900px 500px at 80% 0%, rgba(230,182,55,0.22), transparent 60%)," +
            "radial-gradient(700px 500px at 0% 100%, rgba(244,210,122,0.10), transparent 65%)," +
            "linear-gradient(180deg, #141B3C, #1E2A56 60%, #141B3C)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 92' width='80' height='92'><path d='M40 2 L74 22 V64 L40 84 L6 64 V22 Z' fill='none' stroke='%23E6B637' stroke-opacity='0.07' stroke-width='1'/></svg>\")",
          backgroundSize: "220px 252px",
          transform: "translate3d(calc(var(--mx) * -16px), calc(var(--my) * -10px), 0)",
          transition: "transform 1200ms cubic-bezier(.18,.7,.2,1)",
        }}
      />

      <div className="relative z-[2] mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] items-end gap-12"
             style={{ paddingBlock: "clamp(72px, 9vw, 128px)" }}>
          <div>
            <span className="eyebrow on-dark">No. VII · Get in touch</span>
            <h2
              className="font-display font-medium leading-[1.05] tracking-[-0.012em] mt-6 max-w-[720px] m-0"
              style={{ fontSize: "clamp(2rem, 4.2vw, 3.4rem)" }}
            >
              Speak to a{" "}
              <em className="not-italic font-normal italic text-[var(--color-gold-200)]">compliance specialist</em>
              , not a salesperson.
            </h2>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <Link href={`mailto:${SITE.email}`} className="btn btn-primary magnetic">
              Book a consultation
              <ArrowRight className="arrow" />
            </Link>
            <Link href="/about" className="btn btn-outline">Read our approach</Link>
            <span className="font-display italic text-[rgba(251,248,241,0.7)] text-[1.05rem]">
              Or call us
              <strong className="not-italic ml-2 font-sans font-bold tracking-[0.04em] text-[var(--color-ivory-50)]">{SITE.phone}</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
