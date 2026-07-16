"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/**
 * DoodleField — a playful layer of compliance doodles that live ONLY in the
 * side gutters (the empty margins left & right of the centred content column).
 *
 * Design rules (per client):
 *   • Never overlap or hover over any text — doodles are geometrically clamped
 *     to the side rails outside the ~1240px content column, so they physically
 *     cannot enter the text area (parallax and throws are clamped too).
 *   • Small, ambient, background feel.
 *
 * Behaviour: perpetual gentle drift, cursor parallax by depth, and each doodle
 * can still be grabbed & flung — but it bounces within its rail rather than
 * flying across the page. Works with mouse, touch and pen (Pointer Events).
 *
 * Mounted once in the root layout (fixed, full-viewport). The container is
 * pointer-transparent; only doodles are grabbable. Honors prefers-reduced-motion
 * and hides itself on viewports too narrow to have real gutters.
 *
 * Perf: React renders the doodles once; the loop mutates transforms directly.
 */

/* ── The doodle art ──────────────────────────────────────────────────────
   House style: monoline, 48×48 frame, currentColor, rounded caps. */
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
   One free-floating doodle, confined to a rail box [xMin..xMax] × [yMin..yMax]
   in viewport pixels (the layer is position:fixed, so "world" == viewport). */
type Body = {
  idx: number;
  side: "L" | "R";
  x: number; y: number;
  vx: number; vy: number;
  size: number;
  depth: number;      // 0.15–0.5 — parallax amount
  gold: boolean;
  rot: number;
  drift: number;      // idle heading (radians) — biased vertical
  xMin: number; xMax: number; yMin: number; yMax: number;
  dragging: boolean;
  el: HTMLDivElement | null;
};

const IDLE = 0.3;       // px/frame — perpetual minimum drift speed
const FRICTION = 0.99;
const RESTITUTION = 0.8;
// Cursor parallax at depth 1. Vertical is generous (the rails are tall, and
// vertical shift can never touch text); horizontal stays small since the rails
// are narrow and any sideways drift is clamped away from the copy.
const PARALLAX_X = 14;
const PARALLAX_Y = 40;

/* Layout of the two side rails for a given viewport. The content column is
   ~1240px wide; text sits inside it. We keep doodles OUTSIDE the text with a
   safety gap, so they never touch copy. Rails only exist on wide-enough screens. */
const CONTENT_HALF = 590; // ≈ half the widest text block (1240 col minus padding)
const TEXT_GAP = 10;      // clearance between text edge and a doodle
const EDGE = 6;           // clearance from the viewport edge
const TOP_SAFE = 84;      // clear the sticky nav
const BOT_SAFE = 16;
const MIN_RAIL = 34;      // below this usable width, no room → hide the field

function railLayout(W: number, H: number) {
  const innerL = W / 2 - CONTENT_HALF - TEXT_GAP; // right edge of the left rail
  const innerR = W / 2 + CONTENT_HALF + TEXT_GAP; // left edge of the right rail
  const railW = innerL - EDGE;                     // usable width (same both sides)
  const ok = railW >= MIN_RAIL;
  // Doodles shrink to fit the rail — small and ambient.
  const size = Math.max(24, Math.min(railW - 4, 46));
  return { ok, innerL, innerR, railW, size, yMin: TOP_SAFE, yMax: H - size - BOT_SAFE };
}

function rand(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export function DoodleField() {
  // A few of the doodles are gold accents; the rest are navy line.
  const goldSet = useMemo(() => new Set([1, 4, 6]), []);
  const bodiesRef = useRef<Body[]>([]);
  // Built client-side (window + randomness). Empty on server/first paint →
  // no hydration mismatch → then `mounted` flips to render the field.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Build ONCE. In dev, React Strict Mode invokes effects twice; rebuilding
    // here would swap in fresh Body objects while the rendered DOM refs stay
    // bound to the originals — the loop would then animate orphan objects whose
    // .el is null and nothing would move. Guarding on length keeps render, refs
    // and the physics loop all pointing at the same objects.
    if (bodiesRef.current.length) { setMounted(true); return; }
    const W = window.innerWidth;
    const H = window.innerHeight;
    const L = railLayout(W, H);

    if (!L.ok) { setMounted(true); return; }

    // 8 doodles, alternating rails, spread down each rail.
    const order = [0, 2, 3, 5, 6, 8, 1, 4];
    bodiesRef.current = order.map((idx, n) => {
      const side: "L" | "R" = n % 2 === 0 ? "L" : "R";
      const xMin = side === "L" ? EDGE : L.innerR;
      const xMax = side === "L" ? L.innerL - L.size : W - EDGE - L.size;
      // Stagger vertically so they don't cluster.
      const band = (Math.floor(n / 2) + 0.5) / 4;
      const y = L.yMin + band * (L.yMax - L.yMin) + rand(-40, 40);
      return {
        idx,
        side,
        x: rand(xMin, Math.max(xMin, xMax)),
        y: Math.max(L.yMin, Math.min(L.yMax, y)),
        vx: rand(-0.12, 0.12),
        vy: (n % 2 === 0 ? 1 : -1) * IDLE, // start drifting immediately
        size: L.size,
        depth: rand(0.18, 0.5),
        gold: goldSet.has(idx),
        rot: rand(-12, 12),
        drift: (n % 2 === 0 ? 1 : -1) * (Math.PI / 2), // mostly vertical drift
        xMin,
        xMax: Math.max(xMin, xMax),
        yMin: L.yMin,
        yMax: L.yMax,
        dragging: false,
        el: null,
      };
    });
    setMounted(true);
  }, [goldSet]);

  // Physics + parallax loop. Runs after `mounted` renders the elements.
  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;
    const bodies = bodiesRef.current;
    if (!bodies.length) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W = window.innerWidth;
    let H = window.innerHeight;

    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      const L = railLayout(W, H);
      for (const b of bodies) {
        if (b.el) b.el.style.display = L.ok ? "" : "none";
        if (!L.ok) continue;
        b.size = L.size;
        b.xMin = b.side === "L" ? EDGE : L.innerR;
        b.xMax = (b.side === "L" ? L.innerL - L.size : W - EDGE - L.size);
        b.xMax = Math.max(b.xMin, b.xMax);
        b.yMin = L.yMin;
        b.yMax = L.yMax;
        b.x = Math.min(Math.max(b.x, b.xMin), b.xMax);
        b.y = Math.min(Math.max(b.y, b.yMin), b.yMax);
        if (b.el) { b.el.style.width = `${L.size}px`; b.el.style.height = `${L.size}px`; }
      }
    };
    window.addEventListener("resize", onResize, { passive: true });

    const place = (b: Body, px = 0, py = 0) => {
      if (!b.el) return;
      const x = Math.min(Math.max(b.x + px, b.xMin), b.xMax);
      const y = Math.min(Math.max(b.y + py, b.yMin), b.yMax);
      b.el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${b.rot.toFixed(2)}deg)`;
    };

    if (reduce) {
      for (const b of bodies) place(b);
      return () => window.removeEventListener("resize", onResize);
    }

    /* Cursor parallax (own lerped pointer). */
    let pxT = 0, pyT = 0, pxC = 0, pyC = 0;
    const onMouse = (e: MouseEvent) => {
      pxT = (e.clientX / W) * 2 - 1;
      pyT = (e.clientY / H) * 2 - 1;
    };
    window.addEventListener("mousemove", onMouse, { passive: true });

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

          // Bounce inside the rail box.
          if (b.x < b.xMin) { b.x = b.xMin; b.vx = Math.abs(b.vx) * RESTITUTION; }
          else if (b.x > b.xMax) { b.x = b.xMax; b.vx = -Math.abs(b.vx) * RESTITUTION; }
          if (b.y < b.yMin) { b.y = b.yMin; b.vy = Math.abs(b.vy) * RESTITUTION + IDLE; b.drift = Math.PI / 2; }
          else if (b.y > b.yMax) { b.y = b.yMax; b.vy = -Math.abs(b.vy) * RESTITUTION - IDLE; b.drift = -Math.PI / 2; }

          // Never fully stop — keep a calm, mostly-vertical drift.
          const sp = Math.hypot(b.vx, b.vy);
          if (sp < IDLE) {
            if (sp < 1e-3) { b.vx = Math.cos(b.drift) * IDLE * 0.3; b.vy = Math.sin(b.drift) * IDLE; }
            else { const k = IDLE / sp; b.vx *= k; b.vy *= k; }
          }
          b.rot += b.vy * 0.12;
        }
        place(b, pxC * PARALLAX_X * b.depth, pyC * PARALLAX_Y * b.depth);
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

  /* Per-doodle pointer handlers: grab → drag → flick (clamped to the rail). */
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
    // Clamp the drag itself to the rail so you can't drag a doodle over text.
    const nx = Math.min(Math.max(e.clientX - grabOff.current.ox, b.xMin), b.xMax);
    const ny = Math.min(Math.max(e.clientY - grabOff.current.oy, b.yMin), b.yMax);
    b.vx = b.vx * 0.4 + (nx - b.x) * 0.6;
    b.vy = b.vy * 0.4 + (ny - b.y) * 0.6;
    b.x = nx;
    b.y = ny;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>, b: Body) => {
    if (grabOff.current?.id !== e.pointerId) return;
    b.dragging = false;
    grabOff.current = null;
    const cap = 26;
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
          style={{ width: b.size, height: b.size }}
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
