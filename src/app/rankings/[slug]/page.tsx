import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  buildRankingMetadata,
  getRanking,
  getRankingSlugs,
  getTool,
} from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getRankingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ranking = getRanking(slug);
  if (!ranking) return { title: "Ranking Not Found" };

  const meta = buildRankingMetadata(ranking);
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [ranking.coverImage],
    },
  };
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;

  return (
    <span className="flex items-center gap-0.5 text-sm" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={
            i < full ? "text-amber-400" : i === full && half ? "text-amber-400/60" : "text-card-border"
          }
        >
          ★
        </span>
      ))}
      <span className="ml-1 text-muted">{rating.toFixed(1)}</span>
    </span>
  );
}

export default async function RankingDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const ranking = getRanking(slug);

  if (!ranking) notFound();

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <header>
        <p className="text-sm text-muted">
          {new Date(ranking.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          {ranking.title}
        </h1>
        <p className="mt-3 text-lg text-muted">{ranking.description}</p>
      </header>

      <div className="mt-8 overflow-hidden rounded-2xl border border-card-border">
        <Image
          src={ranking.coverImage}
          alt={ranking.title}
          width={1200}
          height={630}
          className="w-full object-cover"
          unoptimized
        />
      </div>

      <ol className="mt-12 space-y-10">
        {ranking.items.map((item) => {
          const tool = getTool(item.toolSlug);

          return (
            <li
              key={`${item.rank}-${item.toolSlug}`}
              className="flex flex-col gap-6 border-b border-card-border pb-10 last:border-0 sm:flex-row"
            >
              <div className="flex shrink-0 items-start gap-4 sm:w-48">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                  {item.rank}
                </span>
                {tool && (
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    width={48}
                    height={48}
                    className="rounded-lg"
                    unoptimized
                  />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-xl font-semibold">
                    {tool ? (
                      <Link href={`/tools/${tool.slug}`} className="hover:text-accent">
                        {tool.name}
                      </Link>
                    ) : (
                      item.toolSlug
                    )}
                  </h2>
                  <StarRating rating={item.rating} />
                </div>
                <p className="mt-2 text-muted">{item.summary}</p>
                {tool && (
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="mt-3 inline-block text-sm text-accent hover:underline"
                  >
                    Read full review →
                  </Link>
                )}
              </div>
              <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-xl border border-card-border sm:w-56">
                <Image
                  src={item.image}
                  alt={tool?.name ?? item.toolSlug}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </li>
          );
        })}
      </ol>
    </article>
  );
}
