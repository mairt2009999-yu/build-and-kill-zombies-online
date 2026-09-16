import Link from "next/link";
import { siteConfig } from "@/content/site";
import { itemsContent } from "@/content/items";
import { craftingContent } from "@/content/crafting";

/**
 * 可选模块的导航项自动追加 —— 打开 site.ts 的 features 开关即可,
 * 不用再手动维护 nav 数组。开关关闭时数组为空,导航与加模块前完全一致。
 */
function featureNav() {
  const links: { label: string; href: string }[] = [];
  if (siteConfig.features.itemDatabase && itemsContent.items.length > 0) {
    links.push({ label: siteConfig.labels.items, href: "/items/" });
  }
  if (siteConfig.features.crafting && craftingContent.recipes.length > 0) {
    links.push({ label: siteConfig.labels.crafting, href: "/crafting/" });
  }
  return links;
}

export default function Header() {
  const nav = [...siteConfig.nav, ...featureNav()];
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="shrink-0 text-sm font-bold text-ink">
          {siteConfig.name}
        </Link>
        <nav aria-label="Primary navigation" className="hidden gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-sm text-ink-dim transition hover:bg-panel hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-2">
          {siteConfig.headerCta.map((cta, i) => (
            <Link
              key={cta.href}
              href={cta.href}
              className={
                i === 0
                  ? "rounded-md bg-accent px-3 py-1.5 text-sm font-semibold text-black transition hover:opacity-90"
                  : "rounded-md border border-line bg-panel px-3 py-1.5 text-sm font-semibold text-ink transition hover:border-accent"
              }
            >
              {cta.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
