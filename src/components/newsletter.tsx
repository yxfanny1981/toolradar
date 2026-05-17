"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      setStatus("success");
      setEmail("");
    }
  }

  return (
    <section className="rounded-2xl border border-card-border bg-card px-6 py-12 text-center sm:px-12">
      <h2 className="text-2xl font-semibold tracking-tight">Stay in the loop</h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted">
        Get weekly picks of trending AI tools and new rankings — no spam, unsubscribe anytime.
      </p>
      {status === "success" ? (
        <p className="mt-6 text-sm text-accent">Thanks! You&apos;re on the list.</p>
      ) : (
        <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-lg border border-card-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent"
          />
          <button
            type="submit"
            className="rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Subscribe
          </button>
        </form>
      )}
    </section>
  );
}
