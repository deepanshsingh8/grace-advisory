"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/**
 * DoodleField — a playful, physics-driven layer of compliance doodles that
 * float in the whitespace of every page.
 *
 * What it does
 *   • 9 monoline "what Grace Advisory does" doodles (shield-tick, scales,
 *     checklist, magnifier, seal, fingerprint, radar, handshake, grad-cap).
 *   • Perpetual gentle drift so the layer always feels alive.
 *   • Cursor PARALLAX: each doodle shifts by an amount scaled to its depth,
 *     giving a sense of layered space.
 *   • FLICK physics: grab any doodle and throw it — it flies off with the
 *     momentum you gave it, bounces off the viewport edges, and eases back
 *     into a calm drift. Works with mouse, touch and pen (Pointer Events).
 *
 * It's mounted once in the root layout (fixed, full-viewport). The container
 * is pointer-transparent; only the doodles themselves are grabbable, so text
 * and links underneath stay fully usable. Honors prefers-reduced-motion.
 *
 * Perf: React renders the doodles once; the animation loop mutates each
 * element's transform directly (no per-frame re-render).
 */

/* ── The doodle art ──────────────────────────────────────────────────────
   House style: monoline, 48×48 frame, currentColor. Rounded caps here (vs.
   the square caps of the UI icon set) to read a touch more hand-drawn. */
const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const DOODLES: { name: string; el: React.ReactNode }[] = [
  {
    name: "Compliance shield",
    el: (
      <>
        <path d="M24 5 L40 11 V24 C40 33 33 40 24 43 C15 40 8 33 8 24 V11 Z" {...S} />
        <path d="M17 24 L22 29 L32 18" {...S} />
      </>
    ),
  },
  {
    name: "Scales of governance",
    el: (
      <>
        <path d="M24 9 V38 M18 38 H30" {...S} />
        <circle cx="24" cy="8" r="1.6" {...S} />
        <path d="M11 15 H37" {...S} />
        <path d="M11 15 L6 25 M11 15 L16 25 M5 25 A6 6 0 0 0 17 25" {...S} />
        <path d="M37 15 L32 25 M37 15 L42 25 M31 25 A6 6 0 0 0 43 25" {...S} />
      </>
    ),
  },
  {
    name: "Policy checklist",
    el: (
      <>
        <path d="M14 6 H30 L36 12 V42 H14 Z M30 6 V12 H36" {...S} />
        <path d="M18 19 l2.2 2.2 L24.5 17 M27 20 H32" {...S} />
        <path d="M18 28 l2.2 2.2 L24.5 26 M27 29 H32" {...S} />
        <path d="M18 37 l2.2 2.2 L24.5 35 M27 38 H32" {...S} />
      </>
    ),
  },
  {
    name: "Audit magnifier",
    el: (
      <>
        <circle cx="20" cy="20" r="11" {...S} />
        <path d="M28 28 L40 40" {...S} />
        <path d="M15 20 L19 24 L26 16" {...S} />
      </>
    ),
  },
  {
    name: "Licence seal",
    el: (
      <>
        <circle cx="24" cy="20" r="12" {...S} />
        <circle cx="24" cy="20" r="7.5" {...S} />
        <path d="M20.5 20 L23 22.5 L28 17" {...S} />
        <path d="M18 30 L16 43 L21 39 L24 43 L27 39 L32 43 L30 30" {...S} />
      </>
    ),
  },
  {
    name: "KYC fingerprint",
    el: (
      <>
        <path d="M13 23 a11 11 0 0 1 22 0 V27" {...S} />
        <path d="M17 24 a7 7 0 0 1 14 0 V30" {...S} />
        <path d="M21 25 a3 3 0 0 1 6 0 V33" {...S} />
        <path d="M24 25 V36" {...S} />
        <path d="M31 30 V34 M13 27 V31" {...S} />
      </>
    ),
  },
  {
    name: "Monitoring radar",
    el: (
      <>
        <circle cx="24" cy="24" r="6" {...S} />
        <circle cx="24" cy="24" r="12" {...S} />
        <circle cx="24" cy="24" r="18" {...S} />
        <circle cx="24" cy="24" r="1.6" {...S} />
        <path d="M24 24 L39 13" {...S} />
        <circle cx="33" cy="17" r="1.6" {...S} />
      </>
    ),
  },
  {
    name: "Advisory handshake",
    el: (
      <>
        <path d="M4 30 L15 24 L24 28" {...S} />
        <path d="M44 30 L33 24 L24 28" {...S} />
        <path d="M18 25 L23 22 L28 25 L24.5 28.5 Z" {...S} />
        <path d="M19 27 L22 30 M22.5 26 L25.5 29 M26 25 L29 28" {...S} />
      </>
    ),
  },
  {
    name: "Graduate training",
    el: (
      <>
        <path d="M24 10 L42 18 L24 26 L6 18 Z" {...S} />
        <path d="M14 22 V31 C14 33.5 34 33.5 34 31 V22" {...S} />
        <path d="M42 18 V31" {...S} />
        <circle cx="42" cy="33" r="1.8" {...S} />
      </>
    ),
  },
];

/* ── Body model ──────────────────────────────────────────────────────────
   One free-floating rigid dot per doodle. Positions are viewport pixels
   (the layer is position:fixed, so "world" == viewport). */
type Body = {
  idx: number;        // which doodle art
  x: number; y: number;
  vx: number; vy: number;
  size: number;       // px, square
  depth: number;      // 0.15–0.55 — parallax + how "close" it feels
  gold: boolean;      // accent vs. navy line colour
  opacity: number;
  rot: number; vr: number;
  drift: number;      // idle heading (radians)
  dragging: boolean;
  el: HTMLDivElement | null;
};

const IDLE = 0.22;      // px/frame — perpetual minimum drift speed
const FRICTION = 0.992; // light: thrown doodles glide a long way
const RESTITUTION = 0.86;
const PARALLAX = 34;    // px of cursor parallax at depth 1
const TOP_SAFE = 76;    // keep initial spawns clear of the sticky nav

function rand(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export function DoodleField() {
  // A couple of the closer doodles are gold accents; the rest are navy line.
  const goldSet = useMemo(() => new Set([1, 4, 6]), []);
  const bodiesRef = useRef<Body[]>([]);
  // Bodies are built client-side (they use window + randomness). We render an
  // empty container on the server / first paint — matching the client's first
  // paint, so no hydration mismatch — then flip `mounted` to render the field.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const W = window.innerWidth;
    const H = window.innerHeight;
    const small = W < 720;

    // On phones, thin the field so it never crowds the copy.
    const active = small ? [0, 2, 3, 5, 6, 8] : DOODLES.map((_, i) => i);

    bodiesRef.current = active.map((idx, n) => {
      const size = small ? rand(40, 62) : rand(48, 88);
      const depth = rand(0.16, 0.55);
      return {
        idx,
        x: rand(24, Math.max(48, W - size - 24)),
        y: rand(TOP_SAFE, Math.max(TOP_SAFE + 40, H - size - 24)),
        vx: 0,
        vy: 0,
        size,
        depth,
        gold: goldSet.has(idx),
        opacity: 0.5, // as requested — plainly visible
        rot: rand(-14, 14),
        vr: 0,
        drift: (n / active.length) * Math.PI * 2,
        dragging: false,
        el: null,
      };
    });
    setMounted(true);
  }, [goldSet]);

  // Physics + parallax loop. Runs after `mounted` renders the doodle elements,
  // so every body.el ref is attached before the first frame.
  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;
    const bodies = bodiesRef.current;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W = window.innerWidth;
    let H = window.innerHeight;

    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      for (const b of bodies) {
        b.x = Math.min(b.x, Math.max(0, W - b.size));
        b.y = Math.min(b.y, Math.max(0, H - b.size));
      }
    };
    window.addEventListener("resize", onResize, { passive: true });

    // Reduced motion: place them statically, no loop, no interaction.
    if (reduce) {
      for (const b of bodies) {
        if (b.el) b.el.style.transform = `translate3d(${b.x}px, ${b.y}px, 0) rotate(${b.rot}deg)`;
      }
      return () => window.removeEventListener("resize", onResize);
    }

    /* ── Cursor parallax (own lerped pointer, decoupled) ── */
    let pxT = 0, pyT = 0, pxC = 0, pyC = 0;
    const onMouse = (e: MouseEvent) => {
      pxT = (e.clientX / W) * 2 - 1;
      pyT = (e.clientY / H) * 2 - 1;
    };
    window.addEventListener("mousemove", onMouse, { passive: true });

    /* ── Animation loop ── */
    let raf = 0;
    const step = () => {
      pxC += (pxT - pxC) * 0.06;
      pyC += (pyT - pyC) * 0.06;

      for (const b of bodies) {
        if (!b.dragging) {
          b.x += b.vx;
          b.y += b.vy;
          b.vx *= FRICTION;
          b.vy *= FRICTION;

          // Bounce off the viewport edges.
          const maxX = W - b.size;
          const maxY = H - b.size;
          if (b.x < 0) { b.x = 0; b.vx = Math.abs(b.vx) * RESTITUTION + IDLE; b.drift = Math.atan2(b.vy, b.vx); }
          else if (b.x > maxX) { b.x = maxX; b.vx = -Math.abs(b.vx) * RESTITUTION - IDLE; b.drift = Math.atan2(b.vy, b.vx); }
          if (b.y < 0) { b.y = 0; b.vy = Math.abs(b.vy) * RESTITUTION + IDLE; b.drift = Math.atan2(b.vy, b.vx); }
          else if (b.y > maxY) { b.y = maxY; b.vy = -Math.abs(b.vy) * RESTITUTION - IDLE; b.drift = Math.atan2(b.vy, b.vx); }

          // Never fully stop — keep a calm perpetual drift.
          const sp = Math.hypot(b.vx, b.vy);
          if (sp < IDLE) {
            if (sp < 1e-3) { b.vx = Math.cos(b.drift) * IDLE; b.vy = Math.sin(b.drift) * IDLE; }
            else { const k = IDLE / sp; b.vx *= k; b.vy *= k; }
          }
          // Roll a little in the direction of travel.
          b.rot += b.vx * 0.22;
        }

        if (b.el) {
          const px = pxC * PARALLAX * b.depth;
          const py = pyC * PARALLAX * b.depth;
          b.el.style.transform = `translate3d(${(b.x + px).toFixed(2)}px, ${(b.y + py).toFixed(2)}px, 0) rotate(${b.rot.toFixed(2)}deg)`;
        }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, [mounted]);

  /* ── Per-doodle pointer handlers: grab → drag → flick ──
     setPointerCapture routes move/up to the element even outside its bounds,
     so a throw tracks the cursor all the way to release. */
  const grabOff = useRef<{ id: number; ox: number; oy: number } | null>(null);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>, b: Body) => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    b.dragging = true;
    b.vx = 0; b.vy = 0;
    grabOff.current = { id: e.pointerId, ox: e.clientX - b.x, oy: e.clientY - b.y };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>, b: Body) => {
    if (!b.dragging || grabOff.current?.id !== e.pointerId) return;
    const nx = e.clientX - grabOff.current.ox;
    const ny = e.clientY - grabOff.current.oy;
    // Smoothed instantaneous velocity → becomes the throw on release.
    b.vx = b.vx * 0.4 + (nx - b.x) * 0.6;
    b.vy = b.vy * 0.4 + (ny - b.y) * 0.6;
    b.x = nx;
    b.y = ny;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>, b: Body) => {
    if (grabOff.current?.id !== e.pointerId) return;
    b.dragging = false;
    grabOff.current = null;
    // Cap the launch so a violent flick doesn't teleport off-screen.
    const cap = 34;
    const sp = Math.hypot(b.vx, b.vy);
    if (sp > cap) { const k = cap / sp; b.vx *= k; b.vy *= k; }
  };

  return (
    <div className="doodle-field" aria-hidden="true">
      {(mounted ? bodiesRef.current : []).map((b, i) => (
        <div
          key={i}
          ref={(el) => { b.el = el; }}
          className={`doodle${b.gold ? " is-gold" : ""}`}
          style={{ width: b.size, height: b.size, opacity: b.opacity }}
          onPointerDown={(e) => onPointerDown(e, b)}
          onPointerMove={(e) => onPointerMove(e, b)}
          onPointerUp={(e) => endDrag(e, b)}
          onPointerCancel={(e) => endDrag(e, b)}
        >
          <svg viewBox="0 0 48 48" width="100%" height="100%">
            {DOODLES[b.idx].el}
          </svg>
        </div>
      ))}
    </div>
  );
}
