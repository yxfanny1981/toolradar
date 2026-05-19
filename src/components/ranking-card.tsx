import Image from "next/image";
import Link from "next/link";
import type { Ranking } from "@/types";

interface RankingCardProps {
  ranking: Ranking;
}

export function RankingCard({ ranking }: RankingCardProps) {
  return (
    <Link
      href={`/rankings/${ranking.slug}`}
      className="group overflow-hidden rounded-xl border border-card-border bg-card transition-all hover:border-accent/40"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={ranking.coverImage}
          alt={ranking.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          unoptimized
        />
      </div>
      <div className="p-5">
        <p className="text-xs text-muted">
          {new Date(ranking.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <h3 className="mt-1 font-semibold group-hover:text-accent">{ranking.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted">{ranking.description}</p>
        <p className="mt-3 text-xs text-accent">{ranking.tools.length} tools ranked →</p>
      </div>
    </Link>
  );
}
