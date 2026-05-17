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

export interface Tool {
  slug: string;
  name: string;
  category: string;
  tags: string[];
  logo: string;
  screenshot: string;
  description: string;
  website: string;
  features: string[];
  pros: string[];
  cons: string[];
  audience: string;
  pricing: string;
  faq: FAQ[];
  alternatives: string[];
  featured: boolean;
  createdAt: string;
}

export interface RankingItem {
  rank: number;
  toolSlug: string;
  rating: number;
  summary: string;
  image: string;
}

export interface Ranking {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  coverImage: string;
  items: RankingItem[];
}
