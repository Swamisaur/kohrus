import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/kohrus',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: false,
  },
} as NextConfig & {
  eslint?: {
    ignoreDuringBuilds?: boolean;
  };
};

// Disable ESLint during builds
(nextConfig as any).eslint = {
  ignoreDuringBuilds: true,
};

export default nextConfig;
