import type { ToolCard } from "./types";

// ⭐ 首页"核心工具"卡片 —— 指向站内页面
export const toolsContent: {
  heading: string;
  intro: string;
  tools: ToolCard[];
} = {
  heading: "Tools players can use right now",
  intro:
    "Start with codes, then the roll odds, the parts database, and the upgrade planner before pushing deeper.",
  tools: [
    {
      eyebrow: "Fresh every update",
      title: "Codes",
      description: "Five cross-verified codes with exact rewards and the date of the last check.",
      href: "/codes/",
    },
    {
      eyebrow: "Probability tool",
      title: "Roll Odds Calculator",
      description: "Work out how many rolls a target needs, from 1 in 3 up to the 1 in 12,500 top slots.",
      href: "/odds-calculator/",
    },
    {
      eyebrow: "Database",
      title: "Parts & Items",
      description: "Every part and support documented so far, with odds, values, and evidence tags.",
      href: "/items/",
    },
    {
      eyebrow: "Planner",
      title: "Upgrade Planner",
      description: "Answer two questions and get a source-checked next purchase for your stage.",
      href: "/calculator/",
    },
    {
      eyebrow: "Strategy",
      title: "Tier List",
      description: "Every observed upgrade ranked by how much it improves future runs.",
      href: "/tier-list/",
    },
    {
      eyebrow: "Research",
      title: "Sources",
      description: "See exactly where each number came from — API snapshots and timestamped footage.",
      href: "/sources/",
    },
  ],
};
