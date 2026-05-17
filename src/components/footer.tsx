import Link from "next/link";
import { getCategories } from "@/lib/data";

export function Footer() {
  const categories = getCategories();

  return (
    <footer className="mt-auto border-t border-card-border">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-semibold">
              Tool<span className="text-accent">Radar</span>
            </p>
            <p className="mt-2 text-sm text-muted">
              Discover trending AI tools and apps. Curated, updated, and free to browse.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">Categories</p>
            <ul className="mt-3 space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="text-sm text-muted hover:text-foreground"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium">Resources</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/rankings" className="text-sm text-muted hover:text-foreground">
                  Rankings
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-muted">
          © {new Date().getFullYear()} ToolRadar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
