import categoriesData from "../../data/categories.json";
import toolsData from "../../data/tools.json";
import rankingsData from "../../data/rankings.json";
import type { Category, Ranking, RankingRaw, Tool, ToolRaw } from "@/types";

const categories = categoriesData as Category[];

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function categoryToSlug(categoryName: string): string {
  return slugify(categoryName);
}

function heroImage(image: string): string {
  return image.replace("w=120", "w=1200").replace("q=60", "q=80");
}

function normalizeTool(raw: ToolRaw, index: number): Tool {
  const categorySlug = categoryToSlug(raw.category);

  return {
    ...raw,
    slug: raw.id,
    categorySlug,
    logo: raw.image,
    screenshot: heroImage(raw.image),
    website: raw.url,
    features: raw.tags,
    pros: [
      `Strong ${raw.category} workflows`,
      `Trusted by teams using ${raw.name}`,
      "Regular model and feature updates",
    ],
    cons: [
      "Advanced features may require a paid plan",
      "Learning curve for power-user settings",
    ],
    pricing: "Free tier available / Paid plans for pro features",
    faq: [],
    alternatives: [],
    audience: raw.content,
    featured: index < 8,
  };
}

const tools: Tool[] = (toolsData as ToolRaw[]).map(normalizeTool);

export function getToolById(id: string): Tool | undefined {
  return tools.find((t) => t.id === id || t.slug === id);
}

function normalizeRanking(raw: RankingRaw, index: number): Ranking {
  const items = raw.tools.map((toolId, index) => {
    const tool = getToolById(toolId);
    return {
      rank: index + 1,
      toolSlug: tool?.slug ?? toolId,
      rating: Math.round((4.9 - index * 0.15) * 10) / 10,
      summary: tool?.description ?? "",
      image: tool?.logo ?? raw.image,
    };
  });

  const firstTool = getToolById(raw.tools[0]);

  return {
    ...raw,
    coverImage: raw.image,
    category: firstTool?.categorySlug ?? "",
    publishedAt: `2026-05-${String(11 + index).padStart(2, "0")}`,
    items,
  };
}

const rankings: Ranking[] = (rankingsData as RankingRaw[]).map((raw, index) =>
  normalizeRanking(raw, index),
);

export function findToolByReference(ref: string): Tool | undefined {
  const refSlug = slugify(ref);
  return tools.find(
    (t) =>
      t.id === ref ||
      t.slug === refSlug ||
      t.name.toLowerCase() === ref.toLowerCase() ||
      slugify(t.name) === refSlug,
  );
}

export function getCategories(): Category[] {
  return categories;
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getTools(): Tool[] {
  return tools;
}

export function getTool(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug || t.id === slug);
}

export function getToolsByCategory(categorySlug: string): Tool[] {
  return tools.filter((t) => t.categorySlug === categorySlug);
}

export function getLatestTools(limit = 6): Tool[] {
  return tools.slice(0, limit);
}

export function getFeaturedTools(limit = 6): Tool[] {
  return tools.filter((t) => t.featured).slice(0, limit);
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  tools.forEach((t) => t.tags.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}

export function getRankings(): Ranking[] {
  return rankings;
}

export function getRanking(slug: string): Ranking | undefined {
  return rankings.find((r) => r.slug === slug);
}

export function getLatestRankings(limit = 4): Ranking[] {
  return rankings.slice(0, limit);
}

export function getRankingsByCategory(categorySlug: string): Ranking[] {
  return rankings.filter((r) => r.category === categorySlug);
}

export function getToolSlugs(): string[] {
  return tools.map((t) => t.slug);
}

export function getRankingSlugs(): string[] {
  return rankings.map((r) => r.slug);
}

export function getCategorySlugs(): string[] {
  return categories.map((c) => c.slug);
}

export function buildToolMetadata(tool: Tool) {
  return {
    title: `${tool.name} Review — Features, Pricing & Alternatives`,
    description: `${tool.description} ${tool.content}`,
  };
}

export function buildRankingMetadata(ranking: Ranking) {
  return {
    title: ranking.seoTitle,
    description: ranking.seoDescription,
  };
}
