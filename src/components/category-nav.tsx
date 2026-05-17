import Link from "next/link";
import { getCategories } from "@/lib/data";

export function CategoryNav() {
  const categories = getCategories();

  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight">Browse by Category</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="group rounded-xl border border-card-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
          >
            <span className="text-3xl">{cat.icon}</span>
            <h3 className="mt-3 font-semibold group-hover:text-accent">{cat.name}</h3>
            <p className="mt-1 text-sm text-muted line-clamp-2">{cat.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
