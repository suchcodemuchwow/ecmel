// @ts-check
import "./src/env.mjs";
import "@ecmel/auth/env.mjs";

import { withNextDevtools } from "@next-devtools/core/plugin";
// import "@ecmel/api/env"
import withMDX from "@next/mdx";

!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "@ecmel/api",
    "@ecmel/auth",
    "@ecmel/db",
    "@ecmel/common",
    "@ecmel/ui",
    "@ecmel/stripe",
  ],
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: {
    mdxRs: true,
    // serverActions: true,
  },
  images: {
    domains: ["images.unsplash.com", "avatars.githubusercontent.com"],
  },
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  output: "standalone",
};

export default withNextDevtools(withMDX()(config));
