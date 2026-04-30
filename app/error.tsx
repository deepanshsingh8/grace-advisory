"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ArrowRight } from "@/components/icons";

/**
 * Brand-coherent error boundary. Required to be a client component per Next.js.
 * Logs the error to the console (and to a future Sentry/Vercel Logs sink).
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surfaces in Vercel Logs. Replace with Sentry / OpenTelemetry later.
    // eslint-disable-next-line no-console
    console.error("[error-boundary]", error);
  }, [error]);

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
      <section className="relative mx-auto max-w-[760px] px-5 sm:px-8 py-24 text-center">
        <span className="eyebrow no-rule">Unexpected error</span>
        <h1
          className="font-display font-medium leading-[1.05] tracking-[-0.012em] mt-5 text-[var(--color-navy-900)]"
          style={{ fontSize: "clamp(2.4rem, 5.4vw, 4rem)" }}
        >
          Something went <em className="not-italic font-normal italic text-[var(--color-gold-600)]">briefly sideways.</em>
        </h1>
        <p
          className="font-display italic text-[var(--color-ink-700)] mt-6 mx-auto max-w-[58ch]"
          style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", lineHeight: 1.6 }}
        >
          An unexpected error stopped the page from loading. Please try again — or get in touch and we&rsquo;ll sort it out.
        </p>

        {error.digest && (
          <p className="mt-6 font-sans text-[0.72rem] tracking-[0.18em] uppercase text-[var(--color-ink-400)]">
            ref · <span className="font-mono normal-case tracking-normal text-[var(--color-ink-600)]">{error.digest}</span>
          </p>
        )}

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <button type="button" onClick={reset} className="btn btn-primary magnetic">
            Try again
            <ArrowRight className="arrow" />
          </button>
          <Link href="/" className="btn btn-outline">Back to home</Link>
        </div>
      </section>
    </main>
  );
}
