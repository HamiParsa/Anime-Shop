import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,    // Enable React strict mode
  trailingSlash: true,      // Ensure URLs include a trailing slash (e.g., /about/)
  images: {
    unoptimized: true,      // Disable Next.js image optimization
  },
};

export default nextConfig;
