import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const source = join(".next", "server", "app", "sitemap.xml.body");
const target = join("public", "sitemap_v1.xml");

if (!existsSync(source)) {
  console.error(
    "sync-sitemap-v1: missing build output. Run `npm run build` first.",
  );
  process.exit(1);
}

copyFileSync(source, target);
console.log("sync-sitemap-v1: wrote public/sitemap_v1.xml");
