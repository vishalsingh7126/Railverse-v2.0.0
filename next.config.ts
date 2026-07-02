import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    // Automatically remove console logs in production, except for errors/warnings
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
  experimental: {
    // Prepare for streaming and partial prerendering configurations in the future
  },
};

const config = process.env.ANALYZE === "true" 
  ? withBundleAnalyzer({ enabled: true })(nextConfig) 
  : nextConfig;

export default config;
