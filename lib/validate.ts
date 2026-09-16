import { guidesContent } from "@/content/guides";
import { wikiContent } from "@/content/wiki";
import { tierListContent } from "@/content/tier-list";
import { homeHero } from "@/content/home";
import { toolsContent } from "@/content/tools";
import { itemsContent } from "@/content/items";
import { craftingContent } from "@/content/crafting";
import { siteConfig } from "@/content/site";

// ============================================================
// 内容一致性校验 —— 在构建期(sitemap.ts 引用)自动执行,
// content/ 填错时让 next build 直接失败并给出明确报错,
// 避免带着死链或路由冲突上线。
// ============================================================

/** 固定路由,wiki 实体 slug 不允许与之冲突 */
const RESERVED_SLUGS = new Set([
  "codes",
  "tier-list",
  "calculator",
  "guides",
  "wiki",
  "trello",
  "updates",
  "sources",
  "about",
  "contact",
  "privacy",
  "terms",
  "disclosure",
  // 物品库模块的固定路由
  "items",
  "rarities",
  "crafting",
  "odds-calculator",
]);

export function validateContent(): void {
  const errors: string[] = [];

  // 1. wiki 实体 slug:不与固定路由冲突、不重复
  const entitySlugs = new Set<string>();
  for (const entity of wikiContent.entities) {
    if (RESERVED_SLUGS.has(entity.slug)) {
      errors.push(`content/wiki.ts: 实体 slug "${entity.slug}" 与固定路由冲突,请改名`);
    }
    if (entitySlugs.has(entity.slug)) {
      errors.push(`content/wiki.ts: 实体 slug "${entity.slug}" 重复`);
    }
    entitySlugs.add(entity.slug);
  }

  // 2. 指南 slug 不重复
  const guideSlugs = new Set<string>();
  for (const guide of guidesContent.guides) {
    if (guideSlugs.has(guide.slug)) {
      errors.push(`content/guides.ts: 指南 slug "${guide.slug}" 重复`);
    }
    guideSlugs.add(guide.slug);
  }

  // 3. tier 条目引用的 slug 必须是真实存在的 wiki 实体
  for (const entry of tierListContent.entries) {
    if (entry.slug && !entitySlugs.has(entry.slug)) {
      errors.push(
        `content/tier-list.ts: "${entry.name}" 引用的 slug "${entry.slug}" 在 content/wiki.ts 中不存在`
      );
    }
  }

  // 4. 首页 CTA 和工具卡片的站内链接必须指向真实页面
  const validPaths = new Set<string>(["/"]);
  for (const slug of RESERVED_SLUGS) validPaths.add(`/${slug}/`);
  for (const slug of entitySlugs) validPaths.add(`/${slug}/`);
  for (const slug of guideSlugs) validPaths.add(`/guides/${slug}/`);

  const internalLinks: { source: string; href: string }[] = [
    ...homeHero.cta.map((cta) => ({ source: "content/home.ts (cta)", href: cta.href })),
    ...toolsContent.tools.map((tool) => ({ source: "content/tools.ts", href: tool.href })),
  ];
  for (const link of internalLinks) {
    if (link.href.startsWith("/") && !validPaths.has(link.href)) {
      errors.push(`${link.source}: 链接 "${link.href}" 指向不存在的页面`);
    }
  }

  errors.push(...validateItems());
  errors.push(...validateCrafting());

  if (errors.length > 0) {
    throw new Error(`\n❌ 内容校验失败(检查 content/ 目录):\n- ${errors.join("\n- ")}\n`);
  }
}

/** 物品库校验。features.itemDatabase 关闭且没填数据时整段跳过 */
function validateItems(): string[] {
  const errors: string[] = [];
  const c = itemsContent;
  if (!siteConfig.features.itemDatabase && c.items.length === 0) return errors;

  // 模块开启后,示例物品会进 sitemap 并被收录。占位内容太薄,Google 会判软 404
  if (siteConfig.features.itemDatabase) {
    const placeholders = c.items.filter((item) => item.slug.startsWith("example-"));
    if (placeholders.length > 0) {
      errors.push(
        `content/items.ts: features.itemDatabase 已开启,但还留着模板示例物品 ${placeholders
          .map((item) => `"${item.slug}"`)
          .join("、")} —— 换成真实物品或删掉,否则占位页会进 sitemap 被判软 404`
      );
    }
  }

  // 稀有度:id 与 order 都必须唯一
  const rarityIds = new Set<string>();
  const orders = new Set<number>();
  for (const rarity of c.rarities) {
    if (rarityIds.has(rarity.id)) errors.push(`content/items.ts: 稀有度 id "${rarity.id}" 重复`);
    if (orders.has(rarity.order)) errors.push(`content/items.ts: 稀有度 order ${rarity.order} 重复`);
    rarityIds.add(rarity.id);
    orders.add(rarity.order);
  }

  const statIds = new Set(c.statDefs.map((s) => s.id));
  const categoryIds = new Set(c.categories.map((cat) => cat.id));
  const itemSlugs = new Set<string>();

  for (const item of c.items) {
    if (itemSlugs.has(item.slug)) errors.push(`content/items.ts: 物品 slug "${item.slug}" 重复`);
    itemSlugs.add(item.slug);

    if (item.rarityId && !rarityIds.has(item.rarityId)) {
      errors.push(`content/items.ts: "${item.name}" 的 rarityId "${item.rarityId}" 不存在于 rarities`);
    }
    if (item.category && !categoryIds.has(item.category)) {
      errors.push(`content/items.ts: "${item.name}" 的 category "${item.category}" 不存在于 categories`);
    }
    for (const key of Object.keys(item.stats ?? {})) {
      if (!statIds.has(key)) {
        errors.push(`content/items.ts: "${item.name}" 的 stats.${key} 未在 statDefs 中声明`);
      }
    }
    for (const key of Object.keys(item.growth ?? {})) {
      if (!statIds.has(key)) {
        errors.push(`content/items.ts: "${item.name}" 的 growth.${key} 未在 statDefs 中声明`);
      }
      if (item.stats?.[key] === undefined) {
        errors.push(
          `content/items.ts: "${item.name}" 声明了 growth.${key} 但没有对应的 stats.${key},等级计算器无从起算`
        );
      }
    }
    if (item.growth && Object.keys(item.growth).length > 0 && item.level === undefined) {
      errors.push(`content/items.ts: "${item.name}" 有成长数值但没填 level,等级投影会算错`);
    }

    // ⭐ 定位红线:有数字就必须有出处
    const hasNumbers =
      item.odds !== undefined ||
      Object.keys(item.stats ?? {}).length > 0 ||
      item.upgradeCost !== undefined;
    if (hasNumbers && item.evidence === "unknown") {
      errors.push(
        `content/items.ts: "${item.name}" 填了具体数值但 evidence 是 unknown。要么补 source,要么删掉数值 —— 不要编`
      );
    }
    if (item.evidence === "observed" && !item.source) {
      errors.push(`content/items.ts: "${item.name}" 标了 observed 但没填 source(视频 ID + 时间戳)`);
    }
  }

  // 变体必须指向真实物品,且不能指向自己
  for (const item of c.items) {
    if (!item.variantOf) continue;
    if (item.variantOf === item.slug) {
      errors.push(`content/items.ts: "${item.name}" 的 variantOf 指向了自己`);
    } else if (!itemSlugs.has(item.variantOf)) {
      errors.push(`content/items.ts: "${item.name}" 的 variantOf "${item.variantOf}" 不存在`);
    }
  }

  if (c.levelSystem?.cap !== undefined) {
    for (const item of c.items) {
      if (item.level !== undefined && item.level > c.levelSystem.cap) {
        errors.push(
          `content/items.ts: "${item.name}" 的 level ${item.level} 超过了 levelSystem.cap ${c.levelSystem.cap}`
        );
      }
    }
  }

  return errors;
}

/** 合成配方校验 */
function validateCrafting(): string[] {
  const errors: string[] = [];
  const recipes = craftingContent.recipes;
  if (!siteConfig.features.crafting && recipes.length === 0) return errors;

  const itemSlugs = new Set(itemsContent.items.map((i) => i.slug));
  const ids = new Set<string>();

  for (const recipe of recipes) {
    if (ids.has(recipe.id)) errors.push(`content/crafting.ts: 配方 id "${recipe.id}" 重复`);
    ids.add(recipe.id);

    if (recipe.inputs.length === 0) {
      errors.push(`content/crafting.ts: 配方 "${recipe.name}" 没有任何材料`);
    }
    if (recipe.outcomes.length === 0) {
      errors.push(`content/crafting.ts: 配方 "${recipe.name}" 没有任何产出`);
    }

    // 百分比合计。允许 ±2 的取整误差,差得多说明漏抄了一行
    const total = recipe.outcomes.reduce((sum, o) => sum + o.pct, 0);
    if (recipe.outcomes.length > 0 && Math.abs(total - 100) > 2) {
      errors.push(
        `content/crafting.ts: 配方 "${recipe.name}" 产出百分比合计 ${total}%,偏离 100% 太多,可能漏了一条`
      );
    }

    for (const input of recipe.inputs) {
      if (input.kind === "item" && input.slug && !itemSlugs.has(input.slug)) {
        errors.push(`content/crafting.ts: 配方 "${recipe.name}" 的材料 slug "${input.slug}" 不存在于 items`);
      }
    }
    for (const outcome of recipe.outcomes) {
      if (outcome.slug && !itemSlugs.has(outcome.slug)) {
        errors.push(`content/crafting.ts: 配方 "${recipe.name}" 的产出 slug "${outcome.slug}" 不存在于 items`);
      }
    }
    if (recipe.evidence === "observed" && !recipe.source) {
      errors.push(`content/crafting.ts: 配方 "${recipe.name}" 标了 observed 但没填 source`);
    }
  }

  if (craftingContent.totalRecipes !== undefined && recipes.length > craftingContent.totalRecipes) {
    errors.push(
      `content/crafting.ts: 收录了 ${recipes.length} 条配方,超过了 totalRecipes ${craftingContent.totalRecipes}`
    );
  }

  return errors;
}
