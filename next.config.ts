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
};

export default nextConfig;
