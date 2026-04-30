/**
 * The hero hex composition — 4 layered SVGs that:
 *   • independently parallax-translate based on the global --mx/--my vars
 *   • independently rotate at different speeds
 *   • respond to a soft 3D tilt driven by cursor position
 *
 * The layered depth is what creates the "wow" moment in the hero.
 */
export function HexComposition() {
  // Each layer multiplies the global cursor vars by a different depth value
  // so the further-back layers move less (and the foreground "G" most).
  const layer = (x: number, y: number, tiltMul = 1) => ({
    transform:
      `translate3d(calc(var(--mx) * ${x}px), calc(var(--my) * ${y}px), 0) ` +
      `rotate3d(1,0,0, calc(var(--my) * ${6 * tiltMul}deg)) ` +
      `rotate3d(0,1,0, calc(var(--mx) * ${-6 * tiltMul}deg))`,
    transition: "transform 700ms cubic-bezier(.18,.7,.2,1)",
    willChange: "transform",
  });

  return (
    <div
      aria-hidden
      className="relative aspect-square w-full max-w-[520px] mx-auto grid place-items-center"
      style={{ transformStyle: "preserve-3d", perspective: "1100px" }}
    >
      {/* Soft gold radial glow behind the centre */}
      <div
        className="absolute inset-[22%] z-0"
        style={{
          background: "radial-gradient(closest-side, rgba(230,182,55,0.32), transparent 70%)",
          filter: "blur(20px)",
          transform: "translate3d(calc(var(--mx) * 24px), calc(var(--my) * 18px), 0)",
          transition: "transform 700ms cubic-bezier(.18,.7,.2,1)",
        }}
      />

      {/* Layer 1: outermost slow-spinning hex ring */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" style={layer(-10, -10)}>
        <g className="hex-spin-slow">
          <path d="M200 20 L356 110 V290 L200 380 L44 290 V110 Z"
                fill="none" stroke="#E6B637" strokeOpacity="0.55" strokeWidth="1" />
        </g>
      </svg>

      {/* Layer 2: mid hex ring, opposite rotation */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" style={layer(16, 16)}>
        <g className="hex-spin-rev">
          <path d="M200 60 L320 130 V270 L200 340 L80 270 V130 Z"
                fill="none" stroke="#F4D27A" strokeOpacity="0.35" strokeWidth="1" />
          <path d="M200 90 L296 145 V255 L200 310 L104 255 V145 Z"
                fill="none" stroke="#F4D27A" strokeOpacity="0.35" strokeWidth="1" />
        </g>
      </svg>

      {/* Layer 3: hex tick marks (vertices) */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" style={layer(-22, -22)}>
        <g className="hex-spin-fast">
          {[
            [200, 20], [356, 110], [356, 290],
            [200, 380], [44, 290], [44, 110],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" fill="#E6B637" fillOpacity="0.85" />
          ))}
        </g>
      </svg>

      {/* Layer 4: inner solid hex */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" style={layer(30, 30)}>
        <path d="M200 130 L260 165 V235 L200 270 L140 235 V165 Z"
              fill="rgba(20,27,60,0.65)" stroke="#E6B637" strokeWidth="1.2" />
      </svg>

      {/* Foreground: gold "G" monogram */}
      <span
        className="relative z-[2] font-display font-semibold leading-none text-[var(--color-gold-200)]"
        style={{
          fontSize: "clamp(80px, 12vw, 140px)",
          letterSpacing: "-0.04em",
          textShadow: "0 0 40px rgba(230,182,55,.35)",
          ...layer(44, 44, 1.4),
        }}
      >
        G
      </span>
    </div>
  );
}
