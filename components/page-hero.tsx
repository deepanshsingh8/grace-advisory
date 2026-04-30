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
 *   • Text-only (default) — single column with hex ornament bottom-right.
 *   • With image — split layout, framed photograph on the right.
 */
export function PageHero({ eyebrow, title, lede, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-warm-mesh">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(900px 500px at 100% 0%, rgba(244,210,122,0.20), transparent 60%)," +
            "radial-gradient(700px 600px at 0% 100%, rgba(30,42,86,0.05), transparent 60%)",
        }}
      />
      {!image && (
        <div
          aria-hidden
          className="absolute -bottom-12 -right-12 w-[280px] h-[280px] opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none'><path d='M12 2 L21 7 V17 L12 22 L3 17 V7 Z' stroke='%23E6B637' stroke-width='0.6'/></svg>\")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            transform: "translate3d(calc(var(--mx) * -16px), calc(var(--my) * -12px), 0) rotate(8deg)",
            transition: "transform 1200ms cubic-bezier(.18,.7,.2,1)",
          }}
        />
      )}

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12"
           style={{ paddingBlock: "clamp(96px, 12vw, 160px) clamp(48px, 6vw, 80px)" }}>
        <div className={image ? "grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center" : ""}>
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h1
              className="font-display font-medium leading-[1.05] tracking-[-0.012em] mt-5 max-w-[24ch]"
              style={{ fontSize: "clamp(2.4rem, 5.4vw, 4.4rem)" }}
            >
              {title}
            </h1>
            {lede && (
              <p className="font-display italic text-[var(--color-ink-700)] mt-7 max-w-[64ch]"
                 style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.3rem)", lineHeight: 1.55 }}>
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
                      "linear-gradient(135deg, rgba(20,27,60,0.30) 0%, rgba(30,42,86,0.10) 50%, rgba(230,182,55,0.08) 100%)",
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
