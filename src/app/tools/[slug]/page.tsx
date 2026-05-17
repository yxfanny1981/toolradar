import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  buildToolMetadata,
  getTool,
  getToolSlugs,
  getTools,
} from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getToolSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return { title: "Tool Not Found" };

  const meta = buildToolMetadata(tool);
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [tool.screenshot],
    },
  };
}

export default async function ToolDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getTool(slug);

  if (!tool) notFound();

  const allTools = getTools();
  const alternatives = tool.alternatives
    .map((altSlug) => allTools.find((t) => t.slug === altSlug))
    .filter(Boolean);

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <header className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <Image
          src={tool.logo}
          alt={`${tool.name} logo`}
          width={80}
          height={80}
          className="rounded-2xl"
          unoptimized
        />
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{tool.name}</h1>
          <p className="mt-2 text-lg text-muted">{tool.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tool.tags.map((tag) => (
              <Link
                key={tag}
                href={`/category/${tool.category}?tag=${tag}`}
                className="rounded-full border border-card-border px-3 py-0.5 text-xs text-muted hover:border-accent"
              >
                {tag}
              </Link>
            ))}
          </div>
          <a
            href={tool.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-white hover:bg-accent-hover"
          >
            Visit Website →
          </a>
        </div>
      </header>

      <div className="mt-10 overflow-hidden rounded-2xl border border-card-border">
        <Image
          src={tool.screenshot}
          alt={`${tool.name} screenshot`}
          width={1200}
          height={630}
          className="w-full object-cover"
          unoptimized
        />
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Features</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {tool.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm">
              <span className="text-accent">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        <section className="rounded-xl border border-card-border bg-card p-6">
          <h2 className="font-semibold text-green-600 dark:text-green-400">Pros</h2>
          <ul className="mt-4 space-y-2">
            {tool.pros.map((pro) => (
              <li key={pro} className="text-sm text-muted">
                + {pro}
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-xl border border-card-border bg-card p-6">
          <h2 className="font-semibold text-red-600 dark:text-red-400">Cons</h2>
          <ul className="mt-4 space-y-2">
            {tool.cons.map((con) => (
              <li key={con} className="text-sm text-muted">
                − {con}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Who It&apos;s For</h2>
        <p className="mt-3 text-muted">{tool.audience}</p>
      </section>

      <section className="mt-12 rounded-xl border border-card-border bg-card p-6">
        <h2 className="text-xl font-semibold">Pricing</h2>
        <p className="mt-3 text-muted">{tool.pricing}</p>
      </section>

      {tool.faq.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold">FAQ</h2>
          <div className="mt-6 space-y-4">
            {tool.faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-card-border bg-card"
              >
                <summary className="cursor-pointer px-5 py-4 font-medium">
                  {item.question}
                </summary>
                <p className="border-t border-card-border px-5 py-4 text-sm text-muted">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}

      {alternatives.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold">Alternatives</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {alternatives.map(
              (alt) =>
                alt && (
                  <Link
                    key={alt.slug}
                    href={`/tools/${alt.slug}`}
                    className="flex items-center gap-2 rounded-lg border border-card-border bg-card px-4 py-2 text-sm hover:border-accent/50"
                  >
                    <Image
                      src={alt.logo}
                      alt={alt.name}
                      width={24}
                      height={24}
                      className="rounded"
                      unoptimized
                    />
                    {alt.name}
                  </Link>
                )
            )}
          </div>
        </section>
      )}
    </article>
  );
}
