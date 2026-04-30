/**
 * Editorial body wrapper for inner pages — long-form text in a narrow,
 * comfortable measure with proper rhythm. Pair with PageHero on top.
 */
export function PageBody({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative bg-[var(--color-ivory-50)]">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(700px 400px at 100% 100%, rgba(244,210,122,0.08), transparent 60%)",
        }}
      />
      <article
        className="prose-grace relative mx-auto max-w-[760px] px-5 sm:px-8"
        style={{ paddingBlock: "clamp(48px, 6vw, 96px)" }}
      >
        {children}
      </article>

      <style>{`
        .prose-grace { color: var(--color-ink-700); font-size: 1.06rem; line-height: 1.8; }
        .prose-grace h2 {
          font-family: var(--font-display);
          font-weight: 500;
          color: var(--color-navy-900);
          font-size: clamp(1.6rem, 2.6vw, 2.2rem);
          line-height: 1.15;
          letter-spacing: -0.008em;
          margin: 2.2em 0 0.7em;
        }
        .prose-grace h3 {
          font-family: var(--font-display);
          font-weight: 600;
          color: var(--color-navy-900);
          font-size: clamp(1.25rem, 1.6vw, 1.5rem);
          margin: 1.8em 0 0.5em;
        }
        .prose-grace p { margin: 1em 0; }
        .prose-grace strong { color: var(--color-ink-900); font-weight: 700; }
        .prose-grace a { color: var(--color-navy-700); border-bottom: 1.5px solid var(--color-gold-500); transition: color 200ms; }
        .prose-grace a:hover { color: var(--color-gold-600); }
        .prose-grace ul { padding-left: 0; list-style: none; margin: 1em 0; }
        .prose-grace ul li {
          position: relative;
          padding-left: 1.4em;
          margin: 0.55em 0;
        }
        .prose-grace ul li::before {
          content: "";
          position: absolute;
          left: 0; top: 0.65em;
          width: 8px; height: 8px;
          background: var(--color-gold-500);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
        .prose-grace ol { padding-left: 1.4em; margin: 1em 0; }
        .prose-grace ol li { margin: 0.55em 0; padding-left: 0.4em; }
        .prose-grace ol li::marker { color: var(--color-gold-600); font-family: var(--font-display); font-weight: 600; }
        .prose-grace blockquote {
          font-family: var(--font-display);
          font-style: italic;
          font-size: 1.25rem;
          line-height: 1.5;
          color: var(--color-navy-900);
          border-left: 2px solid var(--color-gold-500);
          padding-left: 1.4em;
          margin: 2em 0;
        }
      `}</style>
    </section>
  );
}
