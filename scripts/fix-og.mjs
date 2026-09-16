// 构建后修复:Next 静态导出的 OG 图没有扩展名,
// Cloudflare 静态资产按扩展名返回 Content-Type,会导致
// Facebook/Twitter 抓不到分享图。这里补上 .png 并改写 HTML 引用。
import { readdirSync, readFileSync, writeFileSync, copyFileSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = fileURLToPath(new URL("../out", import.meta.url));

const src = join(OUT, "opengraph-image");
if (existsSync(src) && statSync(src).isFile()) {
  copyFileSync(src, join(OUT, "opengraph-image.png"));
}

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith(".html")) {
      const html = readFileSync(full, "utf8");
      const fixed = html.replace(/opengraph-image(?!\.png)(\?[a-z0-9]*)?/g, "opengraph-image.png");
      if (fixed !== html) writeFileSync(full, fixed);
    }
  }
}
walk(OUT);
console.log("✓ opengraph-image.png fixed for Cloudflare");
