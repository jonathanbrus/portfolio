import createMDX from "@next/mdx";

const requiredEnvVars = [];

if (requiredEnvVars.length > 0) {
  for (const varName of requiredEnvVars) {
    if (!process.env[varName] && process.env.NEXT_ENVIRONMENT !== "github-actions") {
      throw new Error(`Missing required environment variable: ${varName}`);
    }
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {},

  pageExtensions: ["mdx", "ts", "tsx"],

  experimental: {
    mdxRs: false,
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm", ["remark-toc", { heading: "The Table" }]],
  },
});

export default withMDX(nextConfig);
