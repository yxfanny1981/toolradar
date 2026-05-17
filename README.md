# ToolRadar — AI Tools Navigation

A minimalist AI tools directory built with **Next.js** and **Tailwind CSS**. Discover trending AI tools, browse categories, read detailed reviews, and explore curated rankings.

## Features

- **Home** — Hero, latest tools, app rankings, category navigation, newsletter
- **Categories** — Card grid with search and tag filtering (`/category/[slug]`)
- **Tool details** — Full reviews with SEO metadata (`/tools/[slug]`)
- **Rankings** — Top lists with ratings and images (`/rankings/[slug]`)
- **Dark mode** — System preference + manual toggle
- **JSON data** — No database required (`data/*.json`)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Data

Edit these files to add or update content:

- `data/tools.json` — Tool listings and detail content
- `data/categories.json` — Category definitions
- `data/rankings.json` — Ranking articles

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/ai-tools-nav)

1. Push this repo to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Deploy — no environment variables required

Or use the CLI:

```bash
npx vercel
```

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- next-themes
- TypeScript

## Project Structure

```
data/           # JSON content
src/
  app/          # Routes (pages)
  components/   # UI components
  lib/          # Data helpers
  types/        # TypeScript types
```

## License

MIT
