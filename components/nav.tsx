"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { NAV, SITE } from "@/lib/seo";
import { ArrowRight, MenuIcon, XIcon, ChevronDownIcon } from "@/components/icons";

/**
 * Lighter top nav.
 *
 * Visible items, top to bottom of importance:
 *   • Logo
 *   • THREE primary nav items (AFSL / AML/CTF / About) — each is a dropdown
 *     disclosure that reveals the deeper service tree on hover, click, or focus
 *   • A single CTA — "Book a consultation"
 *
 * Phone, secondary nav, and inner sub-pages live inside the dropdowns and
 * the mobile sheet, not on the top bar. This solves the "congested" feel.
 */

/** Route-match helper shared by desktop + mobile nav for active-state styling. */
function useIsActive() {
  const pathname = usePathname();
  return useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/";
      return pathname === href || pathname.startsWith(href + "/");
    },
    [pathname],
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isActive = useIsActive();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open, compensating for the
  // removed scrollbar so the fixed/sticky content doesn't shift.
  useEffect(() => {
    if (open) {
      const gutter = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (gutter > 0) document.body.style.paddingRight = `${gutter}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={
        "sticky top-0 z-50 transition-[background,backdrop-filter,box-shadow] duration-300 " +
        (scrolled
          ? "bg-[rgba(250,250,246,0.92)] backdrop-saturate-150 backdrop-blur-md shadow-[0_1px_0_var(--color-line)]"
          : "bg-[rgba(250,250,246,0.55)] backdrop-blur-sm")
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
              className="h-[80px] w-auto sm:h-[88px]"
            />
          </Link>

          {/* ── Primary nav (desktop) ────────────────────────────── */}
          <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
            <NavMenu label="AFSL" items={NAV.AFSL} isActive={isActive} />
            <NavMenu label="AML/CTF" items={NAV.AML} isActive={isActive} />
            <NavMenu label="About" items={NAV.ABOUT} isActive={isActive} />
            <Link
              href="/pricing"
              className={"nav-link-flat" + (isActive("/pricing") ? " is-active" : "")}
              aria-current={isActive("/pricing") ? "page" : undefined}
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className={"nav-link-flat" + (isActive("/blog") ? " is-active" : "")}
              aria-current={isActive("/blog") ? "page" : undefined}
            >
              Insights
            </Link>
          </nav>

          {/* ── CTA ──────────────────────────────────────────────── */}
          <div className="flex items-center gap-3">
            {/* Wrapper carries the responsive hide: `.btn` sets display:inline-flex
                as an unlayered rule, which would override a `hidden` utility placed
                directly on the Link — so the show/hide lives on this plain span. */}
            <span className="hidden lg:inline-flex">
              <Link href="/contact" className="btn btn-primary magnetic">
                Book a consultation
                <ArrowRight className="arrow" />
              </Link>
            </span>
            <button
              ref={menuButtonRef}
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
        :global(.nav-link-flat:focus-visible) {
          outline: 2px solid var(--color-gold-500);
          outline-offset: 2px;
          border-radius: 2px;
          color: var(--color-navy-900);
        }
        :global(.nav-link-flat.is-active) { color: var(--color-navy-900); }
        :global(.nav-link-flat.is-active::after) { transform: scaleX(1); }
      `}</style>
    </header>

    {/* ── Mobile sheet ─────────────────────────────────────────────
        Must live OUTSIDE the sticky header: its backdrop-filter creates
        a containing block for position:fixed, which would size the
        sheet to the header box instead of the viewport. */}
    <MobileSheet open={open} onClose={() => setOpen(false)} returnFocusRef={menuButtonRef} isActive={isActive} />
    </>
  );
}

/* ── Dropdown disclosure (desktop) ───────────────────────────────
   Opens on hover, click, or keyboard focus. Closes on mouse-leave,
   Escape, or when focus leaves the group. Uses a plain list of links
   under an aria-expanded trigger (not the ARIA menu pattern) so the
   keyboard model is honest: Tab moves through links, Escape closes. */
function NavMenu({
  label,
  items,
  isActive,
}: {
  label: string;
  items: readonly { label: string; href: string }[];
  isActive: (href: string) => boolean;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelId = useId();
  const active = items.some((i) => isActive(i.href));

  const cancelClose = () => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };
  useEffect(() => () => cancelClose(), []);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => { cancelClose(); setOpen(true); }}
      onMouseLeave={scheduleClose}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          setOpen(false);
          triggerRef.current?.focus();
        }
      }}
      onBlur={(e) => {
        if (!containerRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={"nav-link-flat inline-flex items-center gap-1.5" + (active ? " is-active" : "")}
        aria-current={active ? "page" : undefined}
      >
        {label}
        <ChevronDownIcon className={"h-3 w-3 transition-transform duration-300 " + (open ? "rotate-180" : "")} />
      </button>

      <div
        id={panelId}
        inert={!open}
        className={
          "absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-[opacity,transform] duration-300 " +
          (open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none")
        }
      >
        <div className="min-w-[280px] bg-[var(--color-ivory-50)] border border-[var(--color-line)] shadow-[0_24px_48px_-20px_rgba(20,27,60,0.18)]">
          <div className="h-[3px] bg-gradient-to-r from-[var(--color-gold-500)] to-[var(--color-gold-200)]" />
          <ul className="py-2">
            {items.map((item) => {
              const current = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={current ? "page" : undefined}
                    className={
                      "group flex items-center justify-between gap-4 px-5 py-3 text-[0.92rem] transition-colors " +
                      (current
                        ? "bg-[var(--color-ivory-100)] text-[var(--color-navy-700)]"
                        : "text-[var(--color-ink-900)] hover:bg-[var(--color-ivory-100)]")
                    }
                  >
                    <span className="font-sans">{item.label}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-[var(--color-gold-600)] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ── Mobile sheet ─────────────────────────────────────────────── */
function MobileSheet({
  open,
  onClose,
  returnFocusRef,
  isActive,
}: {
  open: boolean;
  onClose: () => void;
  returnFocusRef: React.RefObject<HTMLButtonElement | null>;
  isActive: (href: string) => boolean;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  // ESC to close, Tab focus-trap, focus-in on open, restore focus on close.
  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const focusable = () =>
      panel
        ? Array.from(
            panel.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
            ),
          ).filter((el) => el.offsetParent !== null)
        : [];

    focusable()[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "Tab") {
        const items = focusable();
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const toRestore = returnFocusRef.current;
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      toRestore?.focus();
    };
  }, [open, onClose, returnFocusRef]);

  return (
    <div
      className={
        "lg:hidden fixed inset-0 z-[60] transition-[opacity,visibility] duration-300 " +
        (open ? "opacity-100 visible" : "opacity-0 invisible")
      }
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
        className="absolute inset-0 bg-[var(--color-navy-900)]/30 backdrop-blur-sm"
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
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
              className="h-11 w-11 -mr-2 inline-flex items-center justify-center text-[var(--color-navy-900)]"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-7">
            <MobileSection title="AFSL" items={NAV.AFSL} onClose={onClose} isActive={isActive} />
            <MobileSection title="AML/CTF" items={NAV.AML} onClose={onClose} isActive={isActive} />
            <MobileSection title="About" items={NAV.ABOUT} onClose={onClose} isActive={isActive} />
            <MobileSection title="Pricing" items={[{ label: "Retainers & Projects", href: "/pricing" }]} onClose={onClose} isActive={isActive} />
            <MobileSection title="Insights" items={[{ label: "Blog", href: "/blog" }]} onClose={onClose} isActive={isActive} />
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
  isActive,
}: {
  title: string;
  items: readonly { label: string; href: string }[];
  onClose: () => void;
  isActive: (href: string) => boolean;
}) {
  return (
    <div>
      <div className="eyebrow mb-3">{title}</div>
      <ul className="space-y-1">
        {items.map((item) => {
          const current = isActive(item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                aria-current={current ? "page" : undefined}
                className={
                  "block py-2 text-[1rem] font-sans transition-colors " +
                  (current
                    ? "text-[var(--color-navy-700)] font-bold"
                    : "text-[var(--color-ink-900)] hover:text-[var(--color-navy-700)]")
                }
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
