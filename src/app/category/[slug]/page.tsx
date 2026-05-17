import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryFilter } from "@/components/category-filter";
import {
  getCategory,
  getCategorySlugs,
  getToolsByCategory,
  getAllTags,
  getRankingsByCategory,
} from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Category Not Found" };

  return {
    title: `${category.name} AI Tools`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) notFound();

  const tools = getToolsByCategory(slug);
  const categoryTags = [...new Set(tools.flatMap((t) => t.tags))].sort();
  const rankings = getRankingsByCategory(slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <span className="text-3xl">{category.icon}</span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">{category.name}</h1>
        <p className="mt-2 max-w-2xl text-muted">{category.description}</p>
      </div>

      <CategoryFilter tools={tools} allTags={categoryTags.length ? categoryTags : getAllTags()} />

      {rankings.length > 0 && (
        <section className="mt-16 border-t border-card-border pt-12">
          <h2 className="text-lg font-semibold">Related Rankings</h2>
          <ul className="mt-4 space-y-3">
            {rankings.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/rankings/${r.slug}`}
                  className="text-accent hover:underline"
                >
                  {r.title} →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
