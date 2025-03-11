import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "wary-dodo-454.convex.cloud", protocol: "https" },
      { hostname: "wary-dodo-454.convex.cloud", protocol: "https" },
    ],
  },
};

export default nextConfig;
