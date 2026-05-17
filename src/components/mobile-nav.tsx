"use client";

import Link from "next/link";
import { useState } from "react";
import type { Category } from "@/types";

interface MobileNavProps {
  categories: Category[];
}

export function MobileNav({ categories }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-card-border bg-card text-sm"
        aria-label="Menu"
      >
        {open ? "✕" : "☰"}
      </button>
      {open && (
        <nav className="absolute left-0 right-0 top-16 border-b border-card-border bg-background px-4 py-4 shadow-lg">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-muted hover:text-foreground"
            >
              {cat.name}
            </Link>
          ))}
          <Link
            href="/rankings"
            onClick={() => setOpen(false)}
            className="block py-2 text-sm text-muted hover:text-foreground"
          >
            Rankings
          </Link>
        </nav>
      )}
    </div>
  );
}
