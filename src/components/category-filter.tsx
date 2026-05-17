"use client";

import { useMemo, useState } from "react";
import { ToolCard } from "./tool-card";
import type { Tool } from "@/types";

interface CategoryFilterProps {
  tools: Tool[];
  allTags: string[];
}

export function CategoryFilter({ tools, allTags }: CategoryFilterProps) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch =
        !search ||
        tool.name.toLowerCase().includes(search.toLowerCase()) ||
        tool.description.toLowerCase().includes(search.toLowerCase()) ||
        tool.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

      const matchesTag = !activeTag || tool.tags.includes(activeTag);

      return matchesSearch && matchesTag;
    });
  }, [tools, search, activeTag]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="search"
          placeholder="Search tools..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-card-border bg-card px-4 py-2.5 text-sm outline-none focus:border-accent sm:max-w-xs"
        />
        <p className="text-sm text-muted">
          {filtered.length} tool{filtered.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveTag(null)}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
            activeTag === null
              ? "bg-accent text-white"
              : "border border-card-border bg-card text-muted hover:text-foreground"
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              activeTag === tag
                ? "bg-accent text-white"
                : "border border-card-border bg-card text-muted hover:text-foreground"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-muted">No tools match your filters.</p>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      )}
    </div>
  );
}
