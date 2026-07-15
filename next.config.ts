import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "onuhhxanpusynbicxdyw.supabase.co",
      },
    ],
  },
};

export default nextConfig;
