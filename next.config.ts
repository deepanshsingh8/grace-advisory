import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Stock placeholder photography. Swap for in-house photography when available.
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  // Static-friendly: every page is statically rendered unless it opts out.
  experimental: {
    optimizePackageImports: [],
  },
  async redirects() {
    // The standalone About page was folded back into the home page.
    return [{ source: "/about", destination: "/#approach", permanent: true }];
  },
};

export default nextConfig;
