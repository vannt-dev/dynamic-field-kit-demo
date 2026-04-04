import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    root: __dirname,
  },
  basePath: '/react-app',
  output: 'export',
};

export default nextConfig;
