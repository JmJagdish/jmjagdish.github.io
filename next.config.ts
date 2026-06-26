import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/jmjagdish.github.io",
  assetPrefix: "/jmjagdish.github.io/",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["192.168.*.*"],
};

export default nextConfig;
