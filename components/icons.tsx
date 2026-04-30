/**
 * Lightweight SVG icon set. We deliberately avoid importing an icon library
 * — every icon stays consistent in stroke weight and visual language.
 */

type IconProps = React.SVGProps<SVGSVGElement> & { className?: string };

const stroke = { stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "square" as const };

export function ArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" {...stroke} />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" {...stroke} />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6 6l12 12M18 6L6 18" {...stroke} />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6 9l6 6 6-6" {...stroke} />
    </svg>
  );
}

/* ─── Hexagon glyphs ─────────────────────────────────────────────────── */

export function HexOutline(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 2 L21 7 V17 L12 22 L3 17 V7 Z" {...stroke} />
    </svg>
  );
}

export function HexFilled(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2 L21 7 V17 L12 22 L3 17 V7 Z" />
    </svg>
  );
}

/* ─── Service-card icons (all built on the hex frame) ────────────────── */

export function HexCheck(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path d="M24 4 L42 14 V34 L24 44 L6 34 V14 Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M16 22 L22 28 L34 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
    </svg>
  );
}

export function HexLines(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path d="M24 4 L42 14 V34 L24 44 L6 34 V14 Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M16 18 H32 M16 24 H32 M16 30 H26" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
    </svg>
  );
}

export function HexCircle(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path d="M24 4 L42 14 V34 L24 44 L6 34 V14 Z" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M24 14 V18 M24 30 V34 M14 24 H18 M30 24 H34" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
    </svg>
  );
}

export function HexShield(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path d="M24 4 L42 14 V34 L24 44 L6 34 V14 Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M18 28 L24 18 L30 28 Z M21 26 H27" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
    </svg>
  );
}

export function HexDoc(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path d="M24 4 L42 14 V34 L24 44 L6 34 V14 Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M18 18 H30 M18 24 H30 M18 30 H30 M21 14 V18 M27 14 V18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
    </svg>
  );
}

export function HexBadge(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path d="M24 4 L42 14 V34 L24 44 L6 34 V14 Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M16 22 L22 28 L34 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
      <path d="M14 32 H34" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

/* ─── Social ─────────────────────────────────────────────────────────── */

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.55v14H.22V8zm7.65 0h4.36v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v7.44h-4.55v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V22H7.87V8z" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
    </svg>
  );
}

export function YouTubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.5 6.2c-.3-1-1.1-1.8-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5c-1 .3-1.8 1.1-2.1 2.1C0 8 0 12 0 12s0 4 .5 5.8c.3 1 1.1 1.8 2.1 2.1 1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5c1-.3 1.8-1.1 2.1-2.1.5-1.8.5-5.8.5-5.8s0-4-.5-5.8zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z" />
    </svg>
  );
}
