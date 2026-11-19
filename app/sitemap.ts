export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { posts } from "@/content/posts";

const pages = [
  "", "about-us", "testimonials", "join-noc-tenants", "join-noc-apartments", "network-of-communities",
  "rental-assistance-or-eviction-avoidance-application", "network-of-communities-application-for-properties",
  "housing-scholars-program", "housing-scholars-application", "financial-literacy-workshops", "rent-subsidy-program", "shop",
  "corporate-partnerships", "donate-now", "volunteer", "our-events", "blog", "magazine", "resources", "contact",
  "privacy-policy", "refund-and-returns-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map((p) => ({ url: `${SITE_URL}/${p ? p + "/" : ""}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.7 })),
    ...posts.map((p) => ({ url: `${SITE_URL}/${p.slug}/`, lastModified: p.date, changeFrequency: "yearly" as const, priority: 0.5 })),
  ];
}
