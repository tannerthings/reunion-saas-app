import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dependable-ram-176.convex.cloud",
      },
    ],
  }
};

export default nextConfig;
