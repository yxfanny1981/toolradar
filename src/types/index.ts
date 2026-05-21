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
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
  image: string;
  content: string;
}

/** Normalized tool used across the app */
export interface Tool extends ToolRaw {
  slug: string;
  categorySlug: string;
  logo: string;
  screenshot: string;
  website: string;
  features: string[];
  pros: string[];
  cons: string[];
  pricing: string;
  faq: FAQ[];
  alternatives: string[];
  audience: string;
  featured: boolean;
}

/** Shape stored in data/rankings.json */
export interface RankingRaw {
  id: string;
  title: string;
  slug: string;
  description: string;
  tools: string[];
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
