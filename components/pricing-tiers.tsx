import Link from "next/link";
import { ArrowRight, HexFilled, HexOutline } from "@/components/icons";
import { SectionHead } from "@/components/section";
import { TIERS, type Tier } from "@/lib/pricing";

/**
 * Three-tier subscription cards for the pricing page.
 * Middle tier is featured (lifted, gold-tinted, "most chosen").
 * All cards share a hex corner mark + a hex bullet feature list.
 */
export function PricingTiers() {
  return (
    <section id="tiers" className="relative py-[clamp(56px,7vw,96px)] bg-warm-mesh scroll-mt-24">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(900px 500px at 12% 0%, rgba(244,210,122,0.18), transparent 60%)," +
            "radial-gradient(800px 600px at 90% 100%, rgba(30,42,86,0.06), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <SectionHead
          eyebrow="No. I · Retainer Tiers"
          title={<>Compliance, on retainer.</>}
          lede="Three monthly subscriptions for ongoing compliance — matched to your regulatory load at every stage. AUD, excl. GST."
        />

        <div className="reveal grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {TIERS.map((tier) => (
            <TierCard key={tier.id} tier={tier} />
          ))}
        </div>

        <p className="reveal mt-10 text-center font-sans text-[var(--color-ink-600)] text-[0.95rem]">
          All retainers are 12-month engagements.
          Need something bespoke? <Link href="/contact" className="text-[var(--color-navy-700)] border-b border-[var(--color-gold-500)] hover:text-[var(--color-gold-600)] transition-colors">Speak to a partner</Link>.
        </p>
      </div>
    </section>
  );
}

/* ─── Single tier card ──────────────────────────────────────────────── */

function TierCard({ tier }: { tier: Tier }) {
  const featured = !!tier.featured;
  return (
    <article
      className={
        "has-spotlight relative flex flex-col h-full transition-[transform,box-shadow] duration-500 " +
        (featured
          ? "bg-[var(--color-navy-900)] text-[var(--color-ivory-50)] lg:-translate-y-3 shadow-[0_24px_60px_-20px_rgba(20,27,60,0.3)] on-dark"
          : "bg-[var(--color-ivory-50)] border border-[var(--color-line)] hover:border-[var(--color-gold-300)]")
      }
    >
      {/* Hex corner mark — gold for plain, brighter gold for featured */}
      <div
        aria-hidden
        className="absolute -top-px -right-px w-16 h-16 pointer-events-none"
        style={{
          backgroundImage: featured
            ? "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none'><path d='M12 2 L21 7 V17 L12 22 L3 17 V7 Z' stroke='%23F4D27A' stroke-width='1.4'/><path d='M12 8 L17 11 V14 L12 17 L7 14 V11 Z' fill='%23F4D27A' opacity='0.85'/></svg>\")"
            : "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none'><path d='M12 2 L21 7 V17 L12 22 L3 17 V7 Z' stroke='%23E6B637' stroke-width='1.4'/><path d='M12 8 L17 11 V14 L12 17 L7 14 V11 Z' fill='%23E6B637' opacity='0.85'/></svg>\")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      />

      {/* Top atmospheric tint for featured card */}
      {featured && (
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(700px 300px at 80% 0%, rgba(230,182,55,0.20), transparent 60%)",
          }}
        />
      )}

      <div className="relative p-8 lg:p-10 flex flex-col h-full">
        <span className={"eyebrow " + (featured ? "on-dark" : "")}>{tier.eyebrow}</span>
        <h3
          className="font-display font-medium leading-[1.05] tracking-[-0.012em] mt-4"
          style={{ fontSize: "clamp(2rem, 3.4vw, 2.6rem)" }}
        >
          {tier.name}
        </h3>
        <p className={"mt-3 font-sans leading-[1.55] text-[1rem] " + (featured ? "text-[rgba(251,248,241,0.78)]" : "text-[var(--color-ink-700)]")}>
          {tier.tagline}
        </p>

        {/* Price block */}
        <div className={"mt-7 pt-6 border-t " + (featured ? "border-[rgba(255,255,255,0.15)]" : "border-[var(--color-line)]")}>
          <div className="flex items-baseline gap-2">
            <span className={"font-sans font-bold tracking-[0.18em] uppercase text-[0.7rem] " + (featured ? "text-[rgba(241,203,107,0.7)]" : "text-[var(--color-gold-700)]")}>from</span>
            <span
              className={"font-display font-medium tracking-[-0.02em] " + (featured ? "text-[var(--color-gold-200)]" : "text-[var(--color-navy-900)]")}
              style={{ fontSize: "clamp(2.6rem, 4.4vw, 3.4rem)", lineHeight: 1 }}
            >
              <span className="text-[0.55em] align-top mr-0.5">$</span>{tier.price.toLocaleString("en-AU")}
            </span>
            <span className={"font-sans text-sm font-bold tracking-[0.04em] " + (featured ? "text-[rgba(251,248,241,0.7)]" : "text-[var(--color-ink-600)]")}>
              {tier.cadence}
            </span>
          </div>
          {tier.footnote && (
            <p className={"mt-2 text-xs font-sans tracking-[0.04em] " + (featured ? "text-[rgba(251,248,241,0.55)]" : "text-[var(--color-ink-600)]")}>
              {tier.footnote}
            </p>
          )}
        </div>

        {/* Features */}
        <ul className={"mt-7 pt-6 border-t space-y-3.5 list-none p-0 flex-1 " + (featured ? "border-[rgba(255,255,255,0.15)]" : "border-[var(--color-line)]")}>
          {tier.features.map((f) => (
            <li
              key={f.label}
              className={
                "grid grid-cols-[18px_1fr] gap-3 items-start text-[0.95rem] leading-[1.5] " +
                (f.included
                  ? featured ? "text-[var(--color-ivory-50)]" : "text-[var(--color-ink-900)]"
                  : featured ? "text-[rgba(251,248,241,0.4)]" : "text-[var(--color-ink-400)]")
              }
            >
              {f.included ? (
                <HexFilled className={"w-3 h-3 mt-1.5 shrink-0 " + (featured ? "text-[var(--color-gold-300)]" : "text-[var(--color-gold-500)]")} />
              ) : (
                <HexOutline className="w-3 h-3 mt-1.5 shrink-0 opacity-50" />
              )}
              <span className={f.included ? "" : "line-through opacity-70"}>{f.label}</span>
            </li>
          ))}
        </ul>

        {/* CTA — full-card-width so all three tier buttons match exactly,
            regardless of label length ("Talk to a partner" vs "Start a conversation"). */}
        <Link
          href="/contact"
          className={"btn magnetic mt-8 w-full justify-center " + (featured ? "btn-primary" : "btn-outline")}
        >
          {tier.cta ?? "Start a conversation"}
          <ArrowRight className="arrow" />
        </Link>
      </div>
    </article>
  );
}
