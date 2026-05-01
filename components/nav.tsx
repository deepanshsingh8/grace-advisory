"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/lib/seo";
import { ArrowRight, MenuIcon, XIcon, ChevronDownIcon } from "@/components/icons";

/**
 * Lighter top nav.
 *
 * Visible items, top to bottom of importance:
 *   • Logo
 *   • THREE primary nav items (AFSL / AML/CTF / About) — each is a dropdown
 *     that reveals the deeper service tree on hover
 *   • A single CTA — "Book a consultation"
 *
 * Phone, secondary nav, and inner sub-pages live inside the dropdowns and
 * the mobile sheet, not on the top bar. This solves the "congested" feel.
 */
export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={
        "sticky top-0 z-50 transition-[background,backdrop-filter,box-shadow] duration-300 " +
        (scrolled
          ? "bg-[rgba(251,248,241,0.92)] backdrop-saturate-150 backdrop-blur-md shadow-[0_1px_0_var(--color-line)]"
          : "bg-[rgba(251,248,241,0.55)] backdrop-blur-sm")
      }
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-6 py-4">
          {/* ── Logo ─────────────────────────────────────────────── */}
          <Link href="/" aria-label="Grace Advisory home" className="shrink-0 inline-flex items-center">
            <Image
              src="/brand/grace_advisory_logo.png"
              alt="Grace Advisory — Governance · Risk · Compliance · Audit · AFSL"
              width={586}
              height={206}
              priority
              className="h-9 w-auto sm:h-10"
            />
          </Link>

          {/* ── Primary nav (desktop) ────────────────────────────── */}
          <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
            <NavMenu label="AFSL" items={NAV.AFSL} />
            <NavMenu label="AML/CTF" items={NAV.AML} />
            <NavMenu label="About" items={NAV.ABOUT} />
            <Link href="/pricing" className="nav-link-flat">Pricing</Link>
            <Link href="/blog" className="nav-link-flat">Insights</Link>
          </nav>

          {/* ── CTA ──────────────────────────────────────────────── */}
          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden lg:inline-flex btn btn-primary magnetic">
              Book a consultation
              <ArrowRight className="arrow" />
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center border border-[var(--color-line)] text-[var(--color-navy-900)]"
            >
              {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile sheet ───────────────────────────────────────── */}
      <MobileSheet open={open} onClose={() => setOpen(false)} />

      <style jsx>{`
        :global(.nav-link-flat) {
          position: relative;
          padding: 10px 16px;
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 0.78rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--color-ink-900);
          transition: color 200ms var(--ease-out-soft);
        }
        :global(.nav-link-flat::after) {
          content: "";
          position: absolute;
          left: 16px; right: 16px;
          bottom: 4px;
          height: 1.5px;
          background: linear-gradient(90deg, var(--color-gold-500), var(--color-gold-200));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 360ms var(--ease-out-expo);
        }
        :global(.nav-link-flat:hover) { color: var(--color-navy-900); }
        :global(.nav-link-flat:hover::after) { transform: scaleX(1); }
      `}</style>
    </header>
  );
}

/* ── Hover dropdown menu (desktop) ───────────────────────────── */
function NavMenu({
  label,
  items,
}: {
  label: string;
  items: readonly { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  let closeTimer: ReturnType<typeof setTimeout> | null = null;

  const cancelClose = () => {
    if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => { cancelClose(); setOpen(true); }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        className="nav-link-flat inline-flex items-center gap-1.5"
      >
        {label}
        <ChevronDownIcon className={"h-3 w-3 transition-transform duration-300 " + (open ? "rotate-180" : "")} />
      </button>

      <div
        role="menu"
        className={
          "absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-[opacity,transform] duration-300 " +
          (open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none")
        }
      >
        <div className="min-w-[280px] bg-[var(--color-ivory-50)] border border-[var(--color-line)] shadow-[0_24px_48px_-20px_rgba(20,27,60,0.18)]">
          <div className="h-[3px] bg-gradient-to-r from-[var(--color-gold-500)] to-[var(--color-gold-200)]" />
          <ul className="py-2">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  role="menuitem"
                  className="group flex items-center justify-between gap-4 px-5 py-3 text-[0.92rem] text-[var(--color-ink-900)] hover:bg-[var(--color-ivory-100)] transition-colors"
                >
                  <span className="font-sans">{item.label}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-[var(--color-gold-600)] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ── Mobile sheet ─────────────────────────────────────────────── */
function MobileSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      className={
        "lg:hidden fixed inset-0 z-40 transition-[opacity,visibility] duration-300 " +
        (open ? "opacity-100 visible" : "opacity-0 invisible")
      }
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 bg-[var(--color-navy-900)]/30 backdrop-blur-sm"
      />
      <div
        className={
          "absolute right-0 top-0 h-full w-[min(360px,86vw)] bg-[var(--color-ivory-50)] border-l border-[var(--color-line)] shadow-2xl transition-transform duration-400 ease-[var(--ease-out-expo)] " +
          (open ? "translate-x-0" : "translate-x-full")
        }
      >
        <div className="h-full flex flex-col">
          <div className="px-6 py-5 border-b border-[var(--color-line)] flex items-center justify-between">
            <Image
              src="/brand/grace_advisory_logo.png"
              alt=""
              width={586} height={206}
              className="h-8 w-auto"
            />
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="h-9 w-9 inline-flex items-center justify-center text-[var(--color-navy-900)]"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-7">
            <MobileSection title="AFSL" items={NAV.AFSL} onClose={onClose} />
            <MobileSection title="AML/CTF" items={NAV.AML} onClose={onClose} />
            <MobileSection title="About" items={NAV.ABOUT} onClose={onClose} />
            <MobileSection title="Pricing" items={[{ label: "Retainers & Projects", href: "/pricing" }]} onClose={onClose} />
            <MobileSection title="Insights" items={[{ label: "Blog", href: "/blog" }]} onClose={onClose} />
          </nav>

          <div className="px-6 py-6 border-t border-[var(--color-line)] space-y-4">
            <Link href="/contact" onClick={onClose} className="btn btn-primary w-full justify-center">
              Book a consultation
              <ArrowRight className="arrow" />
            </Link>
            <a href={`tel:${SITE.phoneTel}`} className="block text-[0.78rem] tracking-[0.18em] uppercase font-sans font-bold text-[var(--color-ink-600)]">
              Or call <strong className="font-sans tracking-[0.04em] text-[var(--color-navy-900)] ml-1 normal-case text-[0.95rem]">{SITE.phone}</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileSection({
  title,
  items,
  onClose,
}: {
  title: string;
  items: readonly { label: string; href: string }[];
  onClose: () => void;
}) {
  return (
    <div>
      <div className="eyebrow mb-3">{title}</div>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onClose}
              className="block py-2 text-[1rem] font-sans text-[var(--color-ink-900)] hover:text-[var(--color-navy-700)] transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
