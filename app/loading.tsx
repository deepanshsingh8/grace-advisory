/**
 * Route-level loading state. Shown briefly during navigation between
 * server-rendered pages while the next route streams. We render a calm
 * brand-tinted shell rather than a spinner — keeps the perceived rhythm.
 */
export default function Loading() {
  return (
    <main className="relative isolate overflow-hidden bg-warm-mesh min-h-[70vh] grid place-items-center">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(900px 500px at 100% 0%, rgba(244,210,122,0.20), transparent 60%)," +
            "radial-gradient(700px 600px at 0% 100%, rgba(30,42,86,0.05), transparent 60%)",
        }}
      />
      <div role="status" aria-live="polite" className="relative flex flex-col items-center gap-6">
        {/* Slowly rotating outline hex — quiet, on-brand */}
        <svg
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden
          className="w-12 h-12 text-[var(--color-gold-500)] motion-safe:animate-[spin_4s_linear_infinite]"
        >
          <path d="M24 4 L42 14 V34 L24 44 L6 34 V14 Z" stroke="currentColor" strokeWidth="1.4" />
          <path d="M24 12 L34 18 V30 L24 36 L14 30 V18 Z" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        </svg>
        <span className="font-sans font-bold text-[0.72rem] tracking-[0.22em] uppercase text-[var(--color-ink-600)]">
          Loading
        </span>
        <span className="sr-only">Loading the requested page.</span>
      </div>
    </main>
  );
}
