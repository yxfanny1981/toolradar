import type { MetadataRoute } from "next";
import { getRankings, getTools } from "@/lib/data";

const BASE_URL = "https://gettoolradar.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/rankings`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const toolEntries: MetadataRoute.Sitemap = getTools().map((tool) => ({
    url: `${BASE_URL}/tools/${tool.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const rankingEntries: MetadataRoute.Sitemap = getRankings().map((ranking) => ({
    url: `${BASE_URL}/rankings/${ranking.slug}`,
    lastModified: new Date(ranking.publishedAt),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticEntries, ...toolEntries, ...rankingEntries];
}
