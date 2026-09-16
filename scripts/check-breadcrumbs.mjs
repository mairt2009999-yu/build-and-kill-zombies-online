// 构建后校验:除首页和 404 外,每个页面都必须有面包屑导航条
// (可见的 <nav aria-label="Breadcrumb"> + BreadcrumbList 结构化数据)。
// 新增固定路由时最容易漏掉这一步,漏了就在这里报错,别等上线后才发现内页没有出口。
import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = fileURLToPath(new URL("../out", import.meta.url));

/** 不需要面包屑的页面:首页本身是根,404 不在层级里
 *  (trailingSlash 导出会同时生成 404.html 和 404/index.html,两个都要放行) */
const EXEMPT = new Set(["index.html", "404.html", join("404", "index.html")]);

/** 站点根目录的搜索引擎验证文件(如 google88696aa22b711ac5.html)不是内容页,不参与面包屑校验 */
const EXEMPT_FILE = /^(google|bing|yandex)[a-z0-9]+\.html$/i;

const missing = [];

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (!entry.name.endsWith(".html")) continue;

    const rel = relative(OUT, full);
    if (EXEMPT.has(rel)) continue;
    if (EXEMPT_FILE.test(rel)) continue;

    const html = readFileSync(full, "utf8");
    const problems = [];
    if (!html.includes('aria-label="Breadcrumb"')) problems.push("缺少面包屑导航条");
    if (!html.includes("BreadcrumbList")) problems.push("缺少 BreadcrumbList 结构化数据");
    if (problems.length > 0) missing.push(`/${rel}: ${problems.join(" + ")}`);
  }
}

walk(OUT);

if (missing.length > 0) {
  console.error(
    `\n❌ 面包屑校验失败:\n- ${missing.join("\n- ")}\n\n` +
      "修法:在页面最外层(正文容器之前)加 <Breadcrumbs crumbs={[...]} />,\n" +
      "参考 components/Breadcrumbs.tsx 顶部的位置约定。\n"
  );
  process.exit(1);
}

console.log("✓ breadcrumbs present on all inner pages");
