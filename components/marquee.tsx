/**
 * Kinetic strip of practice areas. Pure CSS animation — pauses on hover.
 * Sits between the hero and the trust strip; provides motion / atmosphere
 * to bridge the dark hero into the light body.
 */
const ITEMS = [
  "AFSL Application",
  "Compliance Policies",
  "Responsible Manager Nominations",
  "External Compliance Reviews",
  "Ongoing Monitoring",
  "AML/CTF Programs",
  "AUSTRAC Registration",
  "Independent Reviews",
  "Tranche 2 Readiness",
];

export function Marquee() {
  return (
    <div className="marquee bg-[var(--color-ivory-50)]" aria-hidden>
      <div className="marquee-track">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 whitespace-nowrap font-display italic text-[var(--color-ink-700)]"
            style={{ fontSize: "clamp(1.05rem, 1.6vw, 1.4rem)" }}
          >
            {item}
            <span className="w-1.5 h-1.5 bg-[var(--color-gold-500)] rotate-45 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
