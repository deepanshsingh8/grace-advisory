/**
 * The hero hex composition — layered SVGs that:
 *   • independently parallax-translate based on the global --mx/--my vars
 *   • independently rotate at different speeds
 *   • respond to a soft 3D tilt driven by cursor position
 *
 * The centerpiece is a geometric G-in-hex monogram that mirrors the
 * Grace Advisory brand mark — replacing the earlier serif "G" which
 * felt generic and off-balance.
 */
export function HexComposition() {
  // Each layer multiplies the global cursor vars by a different depth value
  // so the further-back layers move less (and the foreground mark most).
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
          background: "radial-gradient(closest-side, rgba(230,182,55,0.34), transparent 70%)",
          filter: "blur(22px)",
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

      {/* Layer 2: mid hex rings, opposite rotation */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" style={layer(16, 16)}>
        <g className="hex-spin-rev">
          <path d="M200 60 L320 130 V270 L200 340 L80 270 V130 Z"
                fill="none" stroke="#F4D27A" strokeOpacity="0.35" strokeWidth="1" />
          <path d="M200 90 L296 145 V255 L200 310 L104 255 V145 Z"
                fill="none" stroke="#F4D27A" strokeOpacity="0.35" strokeWidth="1" />
        </g>
      </svg>

      {/* Layer 3: hex tick marks at the vertices */}
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

      {/* Foreground: solid navy hex with the brand G-mark inside */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full"
        style={layer(30, 30, 1.3)}
      >
        {/* Soft outer halo */}
        <defs>
          <radialGradient id="hexGlow" cx="50%" cy="42%" r="55%">
            <stop offset="0%" stopColor="#F4D27A" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#E6B637" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="110" fill="url(#hexGlow)" />

        {/* Solid navy hex */}
        <path
          d="M200 110 L278 155 V245 L200 290 L122 245 V155 Z"
          fill="#0B1230"
          stroke="#E6B637"
          strokeWidth="1.8"
        />
        {/* Inner gold hairline hex */}
        <path
          d="M200 124 L266 162 V238 L200 276 L134 238 V162 Z"
          fill="none"
          stroke="#F4D27A"
          strokeOpacity="0.45"
          strokeWidth="0.8"
        />

        {/* Geometric G monogram — mirrors the brand wordmark */}
        <g
          transform="translate(200 200)"
          fill="none"
          stroke="#E6B637"
          strokeWidth="11"
          strokeLinejoin="miter"
          strokeLinecap="square"
        >
          {/* C-shape opening right: top → left → bottom → bottom-right → inner tab */}
          <path d="M 28 -32 L -32 -32 L -32 32 L 32 32 L 32 2 L 8 2" />
        </g>
        {/* Wordmark caption inside the hex */}
        <text
          x="200"
          y="262"
          textAnchor="middle"
          fill="#F1CB6B"
          fillOpacity="0.78"
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            fontSize: "12px",
            letterSpacing: "3.5px",
          }}
        >
          GRACE ADVISORY
        </text>
      </svg>

      {/* Floating credential satellites — anchor in the brand's regulatory world */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={layer(-14, -14, 0.6)}
      >
        {[
          { x: 70,  y: 88,  t: "ASIC" },
          { x: 332, y: 110, t: "AUSTRAC" },
          { x: 60,  y: 296, t: "RG 105" },
          { x: 336, y: 304, t: "AFCA" },
        ].map((c) => (
          <g key={c.t}>
            <circle cx={c.x} cy={c.y} r="2.5" fill="#E6B637" fillOpacity="0.9" />
            <text
              x={c.x}
              y={c.y + 18}
              textAnchor="middle"
              fill="#F1CB6B"
              fillOpacity="0.78"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "2.4px",
              }}
            >
              {c.t}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
