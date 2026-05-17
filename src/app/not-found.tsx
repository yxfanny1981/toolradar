import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-accent">404</h1>
      <p className="mt-4 text-lg text-muted">Page not found</p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-white hover:bg-accent-hover"
      >
        Back to Home
      </Link>
    </div>
  );
}
