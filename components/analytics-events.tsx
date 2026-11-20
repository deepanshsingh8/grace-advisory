"use client";

import { track } from "@vercel/analytics";
import { useEffect } from "react";

/**
 * Site-wide click tracking for Vercel Web Analytics.
 *
 * Any element with `data-track="<event>"` sends that event when clicked,
 * with `data-track-label` and the current path as properties. This keeps
 * tracking out of individual components: to track a new CTA, add the two
 * data attributes. Custom events appear in Vercel → Analytics → Events
 * (custom events need a Vercel Pro or Enterprise plan; page views work on all plans).
 *
 * Events in use:
 *   cta_click          — consultation / enquiry buttons
 *   service_card_click — service cards on the Credit Licensing landing page
 *   enquiry_submitted  — sent from the contact form on a successful submit
 */
export function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest?.("[data-track]");
      if (!el) return;
      const name = el.getAttribute("data-track");
      if (!name) return;
      track(name, {
        label: el.getAttribute("data-track-label") ?? "",
        path: window.location.pathname,
      });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
