import categoriesData from "../../data/categories.json";
import toolsData from "../../data/tools.json";
import rankingsData from "../../data/rankings.json";
import type { Category, Ranking, Tool } from "@/types";

const categories = categoriesData as Category[];
const tools = toolsData as Tool[];
const rankings = rankingsData as Ranking[];

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
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(categorySlug: string): Tool[] {
  return tools.filter((t) => t.category === categorySlug);
}

export function getLatestTools(limit = 6): Tool[] {
  return [...tools]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
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
  return [...rankings]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, limit);
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
    description: `${tool.description} Compare features, pros & cons, pricing, and top alternatives to ${tool.name}.`,
  };
}

export function buildRankingMetadata(ranking: Ranking) {
  return {
    title: ranking.title,
    description: ranking.description,
  };
}
