import type { MetadataRoute } from "next";
import { REGION, SITE_URL } from "@/lib/region";
import { BLOG_SLUGS, REGION_ROUTES, SHARED_ROUTES } from "@/lib/routes";

/** Sitemap for the site being built — only this region's pages. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [
    ...SHARED_ROUTES,
    ...REGION_ROUTES[REGION],
    ...BLOG_SLUGS[REGION].map((slug) => `/blog/${slug}`),
  ];
  return paths.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "/" : path}`,
    lastModified,
    changeFrequency: path === "/" || path === "/blog" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").length === 2 ? 0.9 : 0.7,
  }));
}
