import type { NextConfig } from "next";
import { redirectsList, blogStandaloneRedirects } from "./redirects";

const isDev = process.env.NODE_ENV !== "production";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value: `
      default-src 'self';
      img-src 'self' https: data:;
      script-src 'self' 'unsafe-inline' ${
        isDev ? "'unsafe-eval'" : ""
      } https://maps.googleapis.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      connect-src 'self'
        https://blog.nexus-clinic.com
        https://api.leadconnectorhq.com
        https://maps.googleapis.com
        https://places.googleapis.com
        https://www.googleapis.com
        https://wa.me
        https://api.whatsapp.com;
        http://wp.sweetieloveb2b.com;
      frame-src
        https://api.leadconnectorhq.com
        https://app.leadconnectorhq.com;
      font-src 'self' https://fonts.gstatic.com https: data:;
      frame-ancestors 'none';
      base-uri 'self';
      form-action 'self'
        https://api.whatsapp.com
        https://wa.me
        https://api.leadconnectorhq.com;
      object-src 'none';
    `.replace(/\n/g, ""),
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,

  // ✅ Important for your redirects
  trailingSlash: true,

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "wp.sweetieloveb2b.com",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

    async redirects() {
      if (!redirectsList || redirectsList.length === 0) return [];

      return [
          // Blog folder
          {
            source: "/en/blog/:slug*",
            destination: "/blogs/:slug*",
            permanent: true,
          },
          ...blogStandaloneRedirects.map(([source, destination]) => ({
              source,
              destination,
              permanent: true,
            })),

        // ✅ Your manual redirects
        ...redirectsList.map(([source, destination]) => ({
          source,
          destination,
          permanent: true,
        })),
      ];
    }

};

export default nextConfig;
