"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Single client component mounted once in the root layout.
 * Owns ALL pointer-driven effects:
 *   • Mouse parallax  → sets --mx, --my on :root (range -1..1)
 *   • Cursor spotlight on .has-spotlight cards → sets --cx, --cy locally
 *   • Magnetic CTAs   → translates .magnetic elements toward the cursor
 *   • Custom dot cursor (gold)
 *   • Scroll reveal observer (re-binds on route change)
 *
 * Gracefully degrades for prefers-reduced-motion and touch devices.
 */
export function InteractiveLayer() {
  const pathname = usePathname();

  /* ── Reveal observer — re-runs on every route change ─────────────
     Critical: client-side navigation does NOT remount the layout, so
     a route-change effect must re-bind the IntersectionObserver to
     elements on the new page. Without this, .reveal elements on any
     non-initial page stay at opacity:0 forever. */
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!("IntersectionObserver" in window) || reduce) {
      document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );
    // Defer one frame so newly-rendered route content is in the DOM.
    const id = requestAnimationFrame(() => {
      document.querySelectorAll(".reveal:not(.in), .reveal-stagger:not(.in)").forEach((el) => io.observe(el));
    });
    return () => {
      cancelAnimationFrame(id);
      io.disconnect();
    };
  }, [pathname]);

  /* ── Pointer-driven layer — set up once at mount ────────────────── */
  useEffect(() => {
    const root = document.documentElement;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = matchMedia("(hover: none)").matches || matchMedia("(pointer: coarse)").matches;
    const cleanups: (() => void)[] = [];

    if (reduce) return () => cleanups.forEach((c) => c());

    /* ── Mouse parallax (root vars, lerped) ──────────────────────── */
    let tX = 0, tY = 0, cX = 0, cY = 0;
    let raf: number | null = null;
    const tick = () => {
      cX += (tX - cX) * 0.08;
      cY += (tY - cY) * 0.08;
      root.style.setProperty("--mx", cX.toFixed(3));
      root.style.setProperty("--my", cY.toFixed(3));
      if (Math.abs(tX - cX) > 0.001 || Math.abs(tY - cY) > 0.001) raf = requestAnimationFrame(tick);
      else raf = null;
    };
    const onMove = (e: MouseEvent) => {
      tX = (e.clientX / window.innerWidth) * 2 - 1;
      tY = (e.clientY / window.innerHeight) * 2 - 1;
      if (raf == null) raf = requestAnimationFrame(tick);
    };
    if (!isTouch) {
      window.addEventListener("mousemove", onMove, { passive: true });
      cleanups.push(() => window.removeEventListener("mousemove", onMove));
    }
    // Tablets / phones: use device orientation if granted
    if (isTouch && "DeviceOrientationEvent" in window) {
      const onOrient = (e: DeviceOrientationEvent) => {
        if (e.gamma == null || e.beta == null) return;
        tX = Math.max(-1, Math.min(1, e.gamma / 30));
        tY = Math.max(-1, Math.min(1, (e.beta - 45) / 30));
        if (raf == null) raf = requestAnimationFrame(tick);
      };
      window.addEventListener("deviceorientation", onOrient, { passive: true });
      cleanups.push(() => window.removeEventListener("deviceorientation", onOrient));
    }

    /* ── Cursor spotlight on cards ───────────────────────────────── */
    const onCardMove = (e: MouseEvent) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>(".has-spotlight");
      if (!card) return;
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      card.style.setProperty("--cx", `${x}%`);
      card.style.setProperty("--cy", `${y}%`);
    };
    document.addEventListener("mousemove", onCardMove, { passive: true });
    cleanups.push(() => document.removeEventListener("mousemove", onCardMove));

    /* ── Magnetic CTAs (delegated, so it survives client-side navigation) ── */
    if (!isTouch) {
      const strength = 14;
      let active: HTMLElement | null = null;
      const onMagneticMove = (e: MouseEvent) => {
        const btn = (e.target as HTMLElement | null)?.closest<HTMLElement>(".magnetic") ?? null;
        if (btn) {
          if (active && active !== btn) active.style.transform = "";
          active = btn;
          const r = btn.getBoundingClientRect();
          const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
          const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
          btn.style.transform = `translate3d(${(dx * strength).toFixed(1)}px, ${(dy * strength).toFixed(1)}px, 0)`;
        } else if (active) {
          active.style.transform = "";
          active = null;
        }
      };
      document.addEventListener("mousemove", onMagneticMove, { passive: true });
      cleanups.push(() => {
        document.removeEventListener("mousemove", onMagneticMove);
        if (active) active.style.transform = "";
      });
    }

    /* ── Custom dot cursor ───────────────────────────────────────── */
    if (!isTouch) {
      const dot = document.createElement("div");
      dot.className = "cursor-dot";
      dot.setAttribute("aria-hidden", "true");
      document.body.appendChild(dot);

      let dx = window.innerWidth / 2, dy = window.innerHeight / 2;
      let cx2 = dx, cy2 = dy;
      let dRaf = 0;

      const move = (e: MouseEvent) => {
        dx = e.clientX; dy = e.clientY;
        if (!dot.classList.contains("is-active")) dot.classList.add("is-active");
      };
      const loop = () => {
        cx2 += (dx - cx2) * 0.22;
        cy2 += (dy - cy2) * 0.22;
        dot.style.transform = `translate3d(${cx2}px, ${cy2}px, 0) translate(-50%, -50%)`;
        dRaf = requestAnimationFrame(loop);
      };
      dRaf = requestAnimationFrame(loop);
      window.addEventListener("mousemove", move, { passive: true });

      const interactive = "a, button, .btn, .has-spotlight, [role='button']";
      const over = (e: Event) => {
        const t = e.target as HTMLElement | null;
        if (t && t.closest(interactive)) dot.classList.add("is-link");
      };
      const out = (e: Event) => {
        const t = e.target as HTMLElement | null;
        if (t && t.closest(interactive)) dot.classList.remove("is-link");
      };
      document.body.addEventListener("mouseover", over);
      document.body.addEventListener("mouseout", out);

      const leave = () => dot.classList.remove("is-active");
      const enter = () => dot.classList.add("is-active");
      window.addEventListener("mouseleave", leave);
      window.addEventListener("mouseenter", enter);

      cleanups.push(() => {
        cancelAnimationFrame(dRaf);
        window.removeEventListener("mousemove", move);
        document.body.removeEventListener("mouseover", over);
        document.body.removeEventListener("mouseout", out);
        window.removeEventListener("mouseleave", leave);
        window.removeEventListener("mouseenter", enter);
        dot.remove();
      });
    }

    return () => cleanups.forEach((c) => c());
  }, []);

  return null;
}
