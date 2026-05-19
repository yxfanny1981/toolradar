import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dicebear.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
      },
      {
        protocol: "https",
        hostname: "static.canva.com",
      },
      {
        protocol: "https",
        hostname: "app.runwayml.com",
      },
      {
        protocol: "https",
        hostname: "www.notion.so",
      },
      {
        protocol: "https",
        hostname: "otter.ai",
      },
      {
        protocol: "https",
        hostname: "elevenlabs.io",
      },
      {
        protocol: "https",
        hostname: "writesonic.com",
      },
      {
        protocol: "https",
        hostname: "pictory.ai",
      },
      {
        protocol: "https",
        hostname: "replit.com",
      },
      {
        protocol: "https",
        hostname: "github.githubassets.com",
      },
      {
        protocol: "https",
        hostname: "www.tabnine.com",
      },
      {
        protocol: "https",
        hostname: "www.beautiful.ai",
      },
      {
        protocol: "https",
        hostname: "www.visme.co",
      },
    ],
  },
};

export default nextConfig;
