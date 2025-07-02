import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      hostname: '12nwvhlsfk.ufs.sh' // from uploadthing website check the image url
    }]
  }
};

export default nextConfig;
