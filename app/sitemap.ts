import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { guidesContent } from "@/content/guides";
import { wikiContent } from "@/content/wiki";
import { itemsContent } from "@/content/items";
import { craftingContent } from "@/content/crafting";
import { validateContent } from "@/lib/validate";

export const dynamic = "force-static";

// sitemap.xml —— 固定页面 + 所有指南 + 所有 wiki 实体自动收录
export default function sitemap(): MetadataRoute.Sitemap {
  // 构建期内容校验:content/ 填错时直接让构建失败
  validateContent();

  const now = new Date();
  const base = siteConfig.url;

  const staticPages: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" }[] = [
    { path: "/", priority: 1, changeFrequency: "daily" },
    { path: "/codes/", priority: 0.95, changeFrequency: "daily" },
    { path: "/tier-list/", priority: 0.9, changeFrequency: "weekly" },
    { path: "/calculator/", priority: 0.85, changeFrequency: "weekly" },
    { path: "/guides/", priority: 0.8, changeFrequency: "weekly" },
    { path: "/wiki/", priority: 0.8, changeFrequency: "weekly" },
    { path: "/updates/", priority: 0.75, changeFrequency: "daily" },
    { path: "/trello/", priority: 0.72, changeFrequency: "weekly" },
    { path: "/sources/", priority: 0.5, changeFrequency: "monthly" },
    { path: "/about/", priority: 0.4, changeFrequency: "monthly" },
    { path: "/contact/", priority: 0.3, changeFrequency: "monthly" },
    { path: "/privacy/", priority: 0.2, changeFrequency: "monthly" },
    { path: "/terms/", priority: 0.2, changeFrequency: "monthly" },
    { path: "/disclosure/", priority: 0.2, changeFrequency: "monthly" },
  ];

  // 可选模块:关闭时不进 sitemap(页面本身也是 noindex)
  const itemsOn = siteConfig.features.itemDatabase && itemsContent.items.length > 0;
  if (itemsOn) {
    staticPages.push(
      { path: "/items/", priority: 0.95, changeFrequency: "weekly" }
    );
  }
  // rarities 页只有在稀有度档位确认后才启用;未确认时不进 sitemap(避免 sitemap 与 noindex 矛盾)
  if (itemsOn && itemsContent.rarities.length > 0) {
    staticPages.push({ path: "/rarities/", priority: 0.85, changeFrequency: "weekly" });
  }
  if (siteConfig.features.crafting && craftingContent.recipes.length > 0) {
    staticPages.push({ path: "/crafting/", priority: 0.85, changeFrequency: "weekly" });
  }
  if (siteConfig.features.oddsCalculator && itemsOn) {
    staticPages.push({ path: "/odds-calculator/", priority: 0.88, changeFrequency: "weekly" });
  }

  return [
    ...(itemsOn
      ? itemsContent.items.map((item) => ({
          url: `${base}/items/${item.slug}/`,
          lastModified: now,
          changeFrequency: "weekly" as const,
          priority: 0.75,
        }))
      : []),
    ...staticPages.map((page) => ({
      url: `${base}${page.path}`,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...wikiContent.entities.map((entity) => ({
      url: `${base}/${entity.slug}/`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.82,
    })),
    ...guidesContent.guides.map((guide) => ({
      url: `${base}/guides/${guide.slug}/`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
