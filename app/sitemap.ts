import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mnsomalis.com";
  return ["", "/population", "/economy", "/history", "/methodology"].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));
}
