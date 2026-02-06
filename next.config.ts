import type { NextConfig } from "next";

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  register: true,
  skipWaiting: true,
  // Recommended: Disable PWA in dev when using Turbopack to avoid issues
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {};

export default withPWA(nextConfig);
