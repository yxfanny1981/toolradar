import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";
import { getCategories } from "@/lib/data";

export function Header() {
  const categories = getCategories();

  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-background/80 backdrop-blur-md">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Tool<span className="text-accent">Radar</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {cat.name}
            </Link>
          ))}
          <Link
            href="/rankings"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Rankings
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <MobileNav categories={categories} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
