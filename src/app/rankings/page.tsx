import type { Metadata } from "next";
import { RankingCard } from "@/components/ranking-card";
import { getRankings } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI Tool Rankings & Top Lists",
  description:
    "Curated rankings of the best AI tools and apps in 2026 — writing, video, productivity, and more.",
};

export default function RankingsPage() {
  const rankings = getRankings();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Rankings</h1>
      <p className="mt-2 max-w-2xl text-muted">
        Expert-curated top lists to help you pick the right AI tool faster.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {rankings.map((ranking) => (
          <RankingCard key={ranking.slug} ranking={ranking} />
        ))}
      </div>
    </div>
  );
}
