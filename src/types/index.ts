export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

/** Shape stored in data/tools.json */
export interface ToolRaw {
  id: number;
  name: string;
  logo: string;
  category: string;
  description: string;
  features: string[];
  pros: string[];
  cons: string[];
  pricing: string;
  faq: FAQ[];
  alternatives: string[];
}

/** Normalized tool used across the app */
export interface Tool extends ToolRaw {
  slug: string;
  categorySlug: string;
  tags: string[];
  screenshot: string;
  website?: string;
  audience: string;
  featured: boolean;
}

/** Shape stored in data/rankings.json */
export interface RankingRaw {
  id: number;
  title: string;
  slug: string;
  description: string;
  tools: number[];
  image: string;
  seoTitle: string;
  seoDescription: string;
}

export interface RankingItem {
  rank: number;
  toolSlug: string;
  rating: number;
  summary: string;
  image: string;
}

/** Normalized ranking used across the app */
export interface Ranking extends RankingRaw {
  category: string;
  publishedAt: string;
  coverImage: string;
  items: RankingItem[];
}
