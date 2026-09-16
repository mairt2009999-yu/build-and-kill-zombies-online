import { siteConfig } from "@/content/site";
import type { CraftRecipe, FaqItem, ItemsContent, TierEntry } from "@/content/types";

// ============================================================
// JSON-LD 结构化数据生成器(与原站一致的 5 种类型)
// ============================================================

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.seo.description,
  };
}

export function videoGameJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: siteConfig.game.title,
    gamePlatform: siteConfig.game.platform,
    genre: siteConfig.game.genre,
    url: siteConfig.game.officialUrl,
    author: { "@type": "Organization", name: siteConfig.game.developer },
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbJsonLd(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${siteConfig.url}${crumb.path}`,
    })),
  };
}

export function tierItemListJsonLd(entries: TierEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: entries.map((entry, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${entry.name} (${entry.tier} tier)`,
    })),
  };
}

/** /items/ 的物品清单 */
export function itemListJsonLd(content: ItemsContent) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${siteConfig.game.title} ${content.pageTitle}`,
    numberOfItems: content.items.length,
    itemListElement: content.items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: `${siteConfig.url}/items/${item.slug}/`,
    })),
  };
}

/**
 * 把物品数值/概率表当结构化 Dataset 发出去。
 * 这是本模块最有价值的 SEO 抓手:同类站点普遍只有散文,没有可机读的数据集。
 */
export function itemDatasetJsonLd(content: ItemsContent) {
  const withOdds = content.items.filter((i) => i.odds?.oneIn !== undefined || i.odds?.percent !== undefined);
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: `${siteConfig.game.title} item stats and drop odds`,
    description: content.metaDescription,
    url: `${siteConfig.url}/items/`,
    dateModified: content.updatedOn,
    creator: { "@type": "Organization", name: siteConfig.name },
    isAccessibleForFree: true,
    variableMeasured: [
      "Rarity",
      "Drop odds",
      ...content.statDefs.map((def) => def.label),
    ],
    about: { "@type": "VideoGame", name: siteConfig.game.title },
    measurementTechnique:
      "Values read from the official Roblox API and from frame-by-frame review of public gameplay recordings; each value records its source.",
    size: `${content.items.length} items, ${withOdds.length} with confirmed drop odds`,
  };
}

/** 每条合成配方一份 HowTo */
export function recipeHowToJsonLd(recipe: CraftRecipe) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: recipe.name,
    supply: recipe.inputs.map((input) => ({
      "@type": "HowToSupply",
      name: `${input.qty}x ${input.label}`,
    })),
    step: [
      {
        "@type": "HowToStep",
        name: "Gather the materials",
        text: recipe.inputs.map((i) => `${i.qty}x ${i.label}`).join(", "),
      },
      {
        "@type": "HowToStep",
        name: "Craft",
        text: `Possible results: ${recipe.outcomes.map((o) => `${o.name} (${o.pct}%)`).join(", ")}.`,
      },
    ],
  };
}

export function calculatorJsonLd(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    operatingSystem: "Web",
    applicationCategory: "GameApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description,
  };
}
