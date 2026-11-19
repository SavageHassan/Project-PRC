import type { NextConfig } from "next";

const shop = "https://project-prc-shop.printify.me/";
const wp = (process.env.NEXT_PUBLIC_WP_URL || "https://projectprc.org").replace(/\/$/, "");
const mediaBase = process.env.NEXT_PUBLIC_MEDIA_BASE || "https://projectprc.org/wp-content/uploads";
const remote = /^https?:\/\//.test(mediaBase) ? new URL(mediaBase) : null;

const isPreviewExport = process.env.PREVIEW_EXPORT === "1";

const config: NextConfig = {
  ...(isPreviewExport ? { output: "export" as const } : {}),
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      ...(remote ? [{ protocol: remote.protocol.replace(":", "") as "https", hostname: remote.hostname, pathname: `${remote.pathname.replace(/\/$/, "")}/**` }] : []),
      { protocol: "https" as const, hostname: "i.vimeocdn.com", pathname: "/video/**" },
      { protocol: "https" as const, hostname: "i.ytimg.com", pathname: "/vi/**" },
    ],
    unoptimized: isPreviewExport || process.env.NEXT_IMAGE_UNOPTIMIZED === "1",
  },
  ...(isPreviewExport ? {} : { redirects, headers }),
};

async function redirects() {
    const r = [
      { source: "/about", destination: "/about-us/", permanent: true },
      { source: "/donate", destination: "/donate-now/", permanent: true },
      { source: "/shop", destination: shop, permanent: false },
      { source: "/cart", destination: shop, permanent: false },
      { source: "/checkout", destination: shop, permanent: false },
      { source: "/my-account", destination: shop, permanent: false },
      { source: "/scholarships", destination: "/housing-scholars-program/", permanent: true },
    ];
    // GiveWP system pages stay on WordPress once it moves to its own host.
    if (wp !== "https://projectprc.org") {
      for (const p of ["donor-dashboard", "donation-confirmation", "donation-failed"]) {
        r.push({ source: `/${p}`, destination: `${wp}/${p}/`, permanent: false });
      }
    }
    return r;
}

async function headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
}

export default config;
