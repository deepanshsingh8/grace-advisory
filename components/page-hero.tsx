import Image from "next/image";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  /** Optional featured image — turns the hero into a split layout. */
  image?: string;
  imageAlt?: string;
}

/**
 * Inner-page hero. Two modes:
 *   • Text-only (default) — single column on a deep navy banner with hex motif.
 *   • With image — split layout, framed photograph on the right.
 */
export function PageHero({ eyebrow, title, lede, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-banner banner-rule-top text-[var(--color-ivory-50)]">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(900px 500px at 100% 0%, rgba(232,185,71,0.22), transparent 60%)," +
            "radial-gradient(700px 600px at 0% 100%, rgba(210,154,26,0.10), transparent 60%)",
        }}
      />
      {!image && (
        <div
          aria-hidden
          className="absolute -bottom-12 -right-12 w-[280px] h-[280px] opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none'><path d='M12 2 L21 7 V17 L12 22 L3 17 V7 Z' stroke='%23E8B947' stroke-width='0.6'/></svg>\")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            transform: "translate3d(calc(var(--mx) * -16px), calc(var(--my) * -12px), 0) rotate(8deg)",
            transition: "transform 1200ms cubic-bezier(.18,.7,.2,1)",
          }}
        />
      )}

      {/* Bottom gold rule */}
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 z-[3] h-[2px] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(210,154,26,0) 4%, rgba(232,185,71,0.7) 50%, rgba(210,154,26,0) 96%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12"
           style={{ paddingBlock: "clamp(72px, 8.5vw, 112px) clamp(40px, 5vw, 64px)" }}>
        <div className={image ? "grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center" : ""}>
          <div>
            <span className="eyebrow on-dark">{eyebrow}</span>
            <h1
              className="font-display font-medium leading-[1.06] tracking-[-0.012em] mt-4 max-w-[24ch]"
              style={{ fontSize: "clamp(2.2rem, 4.6vw, 3.8rem)" }}
            >
              {title}
            </h1>
            {lede && (
              <p className="font-sans text-[var(--color-ivory-50)]/80 mt-5 max-w-[64ch]"
                 style={{ fontSize: "clamp(1rem, 1.25vw, 1.18rem)", lineHeight: 1.6 }}>
                {lede}
              </p>
            )}
          </div>

          {image && (
            <figure className="relative">
              <div className="relative aspect-[5/6] sm:aspect-[4/3] lg:aspect-[5/6] overflow-hidden bg-[var(--color-navy-900)]">
                <Image
                  src={image}
                  alt={imageAlt ?? ""}
                  fill
                  sizes="(min-width: 1024px) 540px, 100vw"
                  className="object-cover"
                  priority
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(11,18,48,0.30) 0%, rgba(24,33,72,0.10) 50%, rgba(210,154,26,0.10) 100%)",
                    mixBlendMode: "multiply",
                  }}
                />
                <svg viewBox="0 0 24 24" fill="none" className="absolute bottom-5 right-5 w-12 h-12 text-[var(--color-gold-300)]"
                     aria-hidden>
                  <path d="M12 2 L21 7 V17 L12 22 L3 17 V7 Z" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M12 8 L17 11 V14 L12 17 L7 14 V11 Z" fill="currentColor" opacity="0.85" />
                </svg>
                {/* Top-left gold corner accent */}
                <div
                  aria-hidden
                  className="absolute -top-px -left-px w-20 h-20 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(225deg, var(--color-gold-500) 0%, var(--color-gold-300) 100%)",
                    clipPath: "polygon(0 0, 100% 0, 0 100%)",
                  }}
                />
              </div>
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}
