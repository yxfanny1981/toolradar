import Link from "next/link";
import { ToolCard } from "@/components/tool-card";
import { RankingCard } from "@/components/ranking-card";
import { CategoryNav } from "@/components/category-nav";
import { Newsletter } from "@/components/newsletter";
import { getLatestTools, getLatestRankings } from "@/lib/data";

export default function HomePage() {
  const latestTools = getLatestTools(6);
  const latestRankings = getLatestRankings(4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <section className="text-center">
        <p className="text-sm font-medium text-accent">AI Tools Directory</p>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Discover Trending AI Tools & Apps
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Curated reviews, rankings, and comparisons — find the right AI tool for your workflow.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/category/ai-writing"
            className="rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-white hover:bg-accent-hover"
          >
            Explore Tools
          </Link>
          <Link
            href="/rankings"
            className="rounded-lg border border-card-border px-6 py-2.5 text-sm font-medium hover:border-accent/50"
          >
            View Rankings
          </Link>
        </div>
      </section>

      <section className="mt-20">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Latest AI Tools</h2>
          <Link href="/category/ai-writing" className="text-sm text-accent hover:underline">
            View all →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {latestTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Latest App Rankings</h2>
          <Link href="/rankings" className="text-sm text-accent hover:underline">
            All rankings →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {latestRankings.map((ranking) => (
            <RankingCard key={ranking.slug} ranking={ranking} />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <CategoryNav />
      </section>

      <section className="mt-20">
        <Newsletter />
      </section>
    </div>
  );
}
