import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/kohrus',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
