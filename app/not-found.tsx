import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you’re looking for doesn’t exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
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
      {/* Hex ornament — bottom right */}
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

      <section className="relative mx-auto max-w-[760px] px-5 sm:px-8 py-24 text-center">
        <span className="eyebrow no-rule">Error · 404</span>
        <h1
          className="font-display font-medium leading-[1.05] tracking-[-0.012em] mt-5 text-[var(--color-navy-900)]"
          style={{ fontSize: "clamp(2.4rem, 5.4vw, 4.4rem)" }}
        >
          This page is <span className="text-[var(--color-gold-600)]">out of scope.</span>
        </h1>
        <p
          className="font-sans text-[var(--color-ink-700)] mt-6 mx-auto max-w-[58ch]"
          style={{ fontSize: "clamp(1rem, 1.25vw, 1.15rem)", lineHeight: 1.65 }}
        >
          The page you&rsquo;re looking for either moved, was renamed, or never existed.
          Try one of the routes below — or get in touch and we&rsquo;ll point you in the right direction.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn btn-primary magnetic">
            Back to home
            <ArrowRight className="arrow" />
          </Link>
          <Link href="/contact" className="btn btn-outline">Contact us</Link>
        </div>

        <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3 justify-center font-sans font-bold text-[0.72rem] tracking-[0.18em] uppercase text-[var(--color-ink-600)]">
          {[
            { label: "AFSL", href: "/afsl" },
            { label: "AML/CTF", href: "/aml-ctf" },
            { label: "Pricing", href: "/pricing" },
            { label: "Insights", href: "/blog" },
            { label: "About", href: "/about" },
          ].map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-[var(--color-gold-600)] border-b border-transparent hover:border-[var(--color-gold-500)] pb-1 transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
