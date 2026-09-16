import type { CraftingContent } from "@/content/types";

// ============================================================
// 合成模块 —— Build and Kill Zombies 没有合成/融合系统。
// features.crafting 保持 false,recipes 为空数组,页面自动 noindex。
// ============================================================

export const craftingContent: CraftingContent = {
  pageTitle: "Crafting",
  metaDescription: "This game does not have a crafting system.",
  intro: "Not in use on this site.",
  updatedOn: "2026-09-16",
  totalRecipes: undefined,
  recipes: [],
  notes: [],
  faq: [],
};
