import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
    ],
  },

  // importante para Ads / SEO
  compress: true, // gzip/brotli
  poweredByHeader: false, // oculta x-powered-by (mejor seguridad/score)

  experimental: {
    optimizePackageImports: ["lucide-react"], // ya que usas libs modernas
  },
};

export default nextConfig;