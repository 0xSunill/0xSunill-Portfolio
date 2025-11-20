import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', 'react-icons'],
  },
  images: {
    remotePatterns: [], // Add domains if you load images externally
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;