import Image from "next/image";
import Link from "next/link";
import type { Tool } from "@/types";

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group flex flex-col rounded-xl border border-card-border bg-card p-5 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
    >
      <div className="flex items-start gap-4">
        <Image
          src={tool.logo}
          alt={`${tool.name} logo`}
          width={48}
          height={48}
          className="rounded-lg"
          unoptimized
        />
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold group-hover:text-accent">{tool.name}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-muted">{tool.description}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {tool.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-background px-2 py-0.5 text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
