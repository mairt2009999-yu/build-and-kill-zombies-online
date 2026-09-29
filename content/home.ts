import type { FaqItem } from "./types";

// ⭐ 首页 FAQ(会输出 FAQPage 结构化数据)
export const homeFaq: {
  heading: string;
  intro: string;
  items: FaqItem[];
} = {
  heading: "Quick answers",
  intro: "The questions players actually ask before their first drive.",
  items: [
    {
      question: "Is this the official Build and Kill Zombies website?",
      answer:
        "No. This is an unofficial fan resource. For official support, purchases, and account issues, use the Roblox experience page and the developer's channels.",
    },
    {
      question: "Are the codes on this site working?",
      answer:
        "Every active code is cross-checked against multiple independent sources before it is listed, and the page carries the date of the last check. Codes that stop working move to the expired list instead of being deleted.",
    },
    {
      question: "What is the rarest item we know about?",
      answer:
        "On the fully documented Engines ladder, the top slot sits at 1 in 12,500 — with 1 in 10,000 right below it. Other categories have their own ladders; those are still being read from footage and are marked accordingly.",
    },
    {
      question: "Where do the numbers on this site come from?",
      answer:
        "Two places: the official Roblox API (visits, favorites, description, game passes) and frame-by-frame reads of public gameplay footage, each tagged with the clip and timestamp it came from. Unverified values are shown as not yet observed, never guessed.",
    },
    {
      question: "Which page should I read first?",
      answer:
        "Start with Codes for free cash and starter parts, then follow the five-part Walkthrough beginning with Part 1: How the Game Works. After that, the Parts database and the upgrade planner cover the mid-game.",
    },
    {
      question: "How often is the site updated?",
      answer:
        "Whenever the game updates, a code batch drops, or a new gameplay session is reviewed. The updates page logs every check with a date so you can see how fresh the data is.",
    },
  ],
};

// ⭐ 首页 Hero 区块
export const homeHero = {
  /** 徽章短句,展示在 H1 上方 */
  badge: "Source-checked codes, odds, and tools",
  /** 首页 H1 */
  heading: "Build and Kill Zombies codes, part odds, and planner",
  /** H1 下副标题 */
  subtitle:
    "Every number on this site comes from the official API or frame-by-frame footage — roll odds, skill prices, and code status you can actually check.",
  cta: [
    { label: "Check codes", href: "/codes/", primary: true },
    { label: "Start walkthrough", href: "/guides/walkthrough-1-basics/", primary: false },
    { label: "Browse parts", href: "/items/", primary: false },
    { label: "Roll odds", href: "/odds-calculator/", primary: false },
  ],
};

// ⭐ 首页事实栏(Hero 下面的 4 个数据点)
export const homeFacts: { value: string; label: string; note: string }[] = [
  { value: "105011592530400", label: "Roblox place", note: "Official page anchored" },
  { value: "10741654282", label: "Universe", note: "Resolved from Roblox API" },
  { value: "Roll → Build → Drive", label: "Core loop", note: "Confirmed in footage" },
  { value: "5 verified", label: "Codes live", note: "Cross-checked 2026-09-29 (ZEUS, IAMPRO in; HACKER, 1x1x1x1 expired)" },
];

// ⭐ 首页截图画廊(官方截图 + 游戏内取证截图,放 public/screenshots/ 下)
export const homeScreenshots: { src: string; alt: string; caption?: string }[] = [
  {
    src: "/screenshots/shot-1.png",
    alt: "Official Build and Kill Zombies artwork",
    caption: "Official artwork from the Roblox experience page.",
  },
  {
    src: "/screenshots/gameplay-index.webp",
    alt: "In-game Index panel with the engine roll odds ladder",
    caption: "The Index records every roll category — the Engines ladder runs 1 in 3 to 1 in 12,500.",
  },
  {
    src: "/screenshots/gameplay-run.webp",
    alt: "A car build during a run with the distance counter visible",
    caption: "Distance and checkpoints track how far a build survives.",
  },
];
