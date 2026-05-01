/**
 * Centralised image registry.
 *
 * Every photographic asset on the site references this file. To swap stock
 * placeholders for in-house photography later, edit only this file.
 *
 * Current placeholders are sourced from Unsplash. URLs include a small set of
 * transformations (auto format, fit, quality) so the CDN serves an appropriate
 * variant; next/image then takes over for resolution-aware delivery.
 */

const u = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/photo-${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=${w}&q=${q}`;

export const IMG = {
  // Editorial / brand
  hero_accent:     u("1554224155-8d04cb21cd6c", 1200), // architectural detail
  approach_frame:  u("1450101499163-c8848c66ca85", 1600), // empty boardroom
  about_hero:      u("1497366216548-37526070297c", 1800), // modern office interior
  pillar_afsl:     u("1454165804606-c3d57bc86b40", 1200), // pen on document
  pillar_aml:      u("1486406146926-c627a92ad1ab", 1200), // signing
  contact_frame:   u("1517245386807-bb43f82c33c4", 1400), // modern building

  // Insights cover images (one per blog post)
  insight_tranche2: u("1556761175-b413da4baf72", 1200),  // architecture
  insight_afsl:     u("1454165804606-c3d57bc86b40", 1200), // pen on document
  insight_reforms:  u("1551836022-deb4988cc6c0", 1200),  // building

  // Founder portrait — drop the LinkedIn-sourced image at this path
  // (public/brand/raj-kumar.jpg). Falls back to a placeholder if absent.
  founder_portrait: "/brand/raj-kumar.jpg",
} as const;

export type ImgKey = keyof typeof IMG;
