/** @type {import('next').NextConfig} */
const requiredEnvVars = [];

if (requiredEnvVars.length > 0) {
  for (const varName of requiredEnvVars) {
    if (!process.env[varName] && process.env.NEXT_ENVIRONMENT !== "github-actions") {
      throw new Error(`Missing required environment variable: ${varName}`);
    }
  }
}

const nextConfig = {
  reactStrictMode: true,

  env: {},
};

export default nextConfig;
