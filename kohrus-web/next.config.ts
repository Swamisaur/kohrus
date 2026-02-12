import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/kohrus',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // @ts-ignore - eslint config for build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
