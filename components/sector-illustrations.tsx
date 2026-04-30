/**
 * Distinctive illustrations for each sector card.
 * All are vector, all sit inside a 64×64 frame with a soft hex backdrop,
 * all use currentColor so the brand accent flows through. Each illustration
 * is a small editorial vignette — not a generic icon.
 */

type IconProps = React.HTMLAttributes<HTMLDivElement> & { className?: string };

function HexFrame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden className="w-14 h-14 text-[var(--color-gold-500)]">
      {/* Outer hex frame with subtle inner glow */}
      <path d="M32 4 L56 16 V40 L32 60 L8 48 V24 Z" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <path d="M32 8 L52 18 V40 L32 56 L12 46 V22 Z" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      {children}
    </svg>
  );
}

/** Accounting — ledger lines + a small column-chart graph */
export function IllAccounting(props: IconProps) {
  return (
    <div {...props}>
      <HexFrame>
        <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" fill="none">
          {/* Ledger sheet */}
          <rect x="20" y="20" width="24" height="24" />
          <line x1="20" y1="26" x2="44" y2="26" opacity="0.6" />
          <line x1="20" y1="32" x2="44" y2="32" opacity="0.6" />
          <line x1="20" y1="38" x2="44" y2="38" opacity="0.6" />
        </g>
        <g fill="currentColor">
          {/* Bar chart on top of the sheet */}
          <rect x="24" y="34" width="3" height="6" opacity="0.7" />
          <rect x="29" y="30" width="3" height="10" opacity="0.85" />
          <rect x="34" y="32" width="3" height="8" opacity="0.7" />
          <rect x="39" y="28" width="3" height="12" />
        </g>
      </HexFrame>
    </div>
  );
}

/** Financial Services — a candlestick and an up-trending arrow */
export function IllFinance(props: IconProps) {
  return (
    <div {...props}>
      <HexFrame>
        <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" fill="none">
          {/* Trend line */}
          <polyline points="18,40 26,34 32,38 40,28 46,24" />
          <polyline points="42,24 46,24 46,28" />
        </g>
        <g fill="currentColor">
          {/* Candlestick wicks + bodies */}
          <rect x="20" y="32" width="2" height="10" opacity="0.5" />
          <rect x="19" y="34" width="4" height="6" opacity="0.85" />
          <rect x="28" y="28" width="2" height="14" opacity="0.5" />
          <rect x="27" y="32" width="4" height="6" opacity="0.85" />
          <rect x="36" y="24" width="2" height="14" opacity="0.5" />
          <rect x="35" y="26" width="4" height="6" />
        </g>
      </HexFrame>
    </div>
  );
}

/** Law — scales of justice */
export function IllLaw(props: IconProps) {
  return (
    <div {...props}>
      <HexFrame>
        <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" fill="none">
          {/* Vertical post */}
          <line x1="32" y1="18" x2="32" y2="44" />
          {/* Crossbar */}
          <line x1="20" y1="22" x2="44" y2="22" />
          {/* Left & right plates suspended by hairlines */}
          <line x1="22" y1="22" x2="22" y2="28" opacity="0.6" />
          <line x1="42" y1="22" x2="42" y2="28" opacity="0.6" />
          <path d="M17 32 Q22 26 27 32 Z" />
          <path d="M37 32 Q42 26 47 32 Z" />
          {/* Base */}
          <line x1="26" y1="44" x2="38" y2="44" />
          <line x1="28" y1="46" x2="36" y2="46" opacity="0.6" />
        </g>
        <circle cx="32" cy="18" r="1.6" fill="currentColor" />
      </HexFrame>
    </div>
  );
}

/** Real Estate — three building silhouettes */
export function IllRealEstate(props: IconProps) {
  return (
    <div {...props}>
      <HexFrame>
        <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="square" fill="none">
          <rect x="18" y="28" width="10" height="18" />
          <rect x="29" y="22" width="12" height="24" />
          <rect x="42" y="32" width="8"  height="14" />
          {/* Windows */}
          <line x1="21" y1="32" x2="25" y2="32" opacity="0.6" />
          <line x1="21" y1="36" x2="25" y2="36" opacity="0.6" />
          <line x1="21" y1="40" x2="25" y2="40" opacity="0.6" />
          <line x1="33" y1="27" x2="37" y2="27" opacity="0.6" />
          <line x1="33" y1="32" x2="37" y2="32" opacity="0.6" />
          <line x1="33" y1="37" x2="37" y2="37" opacity="0.6" />
          <line x1="33" y1="42" x2="37" y2="42" opacity="0.6" />
          <line x1="44" y1="36" x2="48" y2="36" opacity="0.6" />
          <line x1="44" y1="40" x2="48" y2="40" opacity="0.6" />
          {/* Ground line */}
          <line x1="14" y1="48" x2="50" y2="48" />
        </g>
      </HexFrame>
    </div>
  );
}

/** Virtual Assets — interlocked node cluster */
export function IllCrypto(props: IconProps) {
  return (
    <div {...props}>
      <HexFrame>
        <g stroke="currentColor" strokeWidth="1.1" fill="none" strokeLinecap="square">
          <line x1="32" y1="20" x2="22" y2="32" opacity="0.6" />
          <line x1="32" y1="20" x2="42" y2="32" opacity="0.6" />
          <line x1="22" y1="32" x2="32" y2="44" opacity="0.6" />
          <line x1="42" y1="32" x2="32" y2="44" opacity="0.6" />
          <line x1="22" y1="32" x2="42" y2="32" opacity="0.4" />
        </g>
        <g fill="currentColor">
          <circle cx="32" cy="20" r="3" />
          <circle cx="22" cy="32" r="3" opacity="0.85" />
          <circle cx="42" cy="32" r="3" opacity="0.85" />
          <circle cx="32" cy="44" r="3" opacity="0.7" />
        </g>
      </HexFrame>
    </div>
  );
}

/** Other Captured Sectors — a network of small hexes */
export function IllOther(props: IconProps) {
  return (
    <div {...props}>
      <HexFrame>
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <path d="M22 22 L28 25 V31 L22 34 L16 31 V25 Z" opacity="0.6" />
          <path d="M40 22 L46 25 V31 L40 34 L34 31 V25 Z" opacity="0.6" />
          <path d="M31 36 L37 39 V45 L31 48 L25 45 V39 Z" />
        </g>
        <g fill="currentColor" fillOpacity="0.85">
          <path d="M31 36 L37 39 V45 L31 48 L25 45 V39 Z" opacity="0.15" />
        </g>
      </HexFrame>
    </div>
  );
}
