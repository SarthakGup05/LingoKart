import type { NextConfig } from "next";
import { withLingo } from "@lingo.dev/compiler/next";

const nextConfig: NextConfig = {};

export default async function (): Promise<NextConfig> {
  return await withLingo(nextConfig, {
    sourceRoot: "./src/app",
    sourceLocale: "en",
    targetLocales: ["hi", "ta", "bn"],
    models: "lingo.dev",
    dev: {
      usePseudotranslator: true,
    },
    useDirective: true,
  });
}
