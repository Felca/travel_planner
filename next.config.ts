import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      hostname: 'i9s7ewn30w.ufs.sh' // from uploadthing website check the image url
    }]
  }
};

export default nextConfig;
