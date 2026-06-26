import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "https", hostname: "storage.efferd.com" },
      { protocol: "https", hostname: "pub-940ccf6255b54fa799a9b01050e6c227.r2.dev" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "@phosphor-icons/react", "gsap"],
  },
};

export default nextConfig;
