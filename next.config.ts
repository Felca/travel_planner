import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  /* config options here */
  images: {
    remotePatterns: [{
      hostname: 'i9s7ewn30w.ufs.sh' // from uploadthing website check the image url
    }]
  }
};

export default nextConfig;
