import type { NextConfig } from "next";
import { redirectsList, blogStandaloneRedirects } from "./redirects";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
  {
    key: "Content-Security-Policy",
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' https: data:;
      font-src 'self' https://fonts.gstatic.com data:;
      connect-src 'self' 
        https://blog.nexus-clinic.com 
        https://api.leadconnectorhq.com 
        https://maps.googleapis.com 
        https://places.googleapis.com 
        https://www.googleapis.com 
        https://wa.me 
        https://api.whatsapp.com 
        https://wp.sweetieloveb2b.com;
      frame-src https://api.leadconnectorhq.com https://app.leadconnectorhq.com;
      upgrade-insecure-requests;
      block-all-mixed-content;
    `.replace(/\n/g, "").trim(),
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false, // Security: Don't tell hackers we use Next.js
  reactStrictMode: true,
  trailingSlash: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wp.sweetieloveb2b.com",
      },
    ],
  },

  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },

  async redirects() {
    return [
      { source: "/en/blog/:slug*", destination: "/blogs/:slug*", permanent: true },
      ...blogStandaloneRedirects.map(([src, dest]) => ({ source: src, destination: dest, permanent: true })),
      ...redirectsList.map(([src, dest]) => ({ source: src, destination: dest, permanent: true })),
    ];
  },
};

export default nextConfig;