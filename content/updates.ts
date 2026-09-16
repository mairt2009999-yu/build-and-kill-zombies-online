import type { UpdateEntry } from "./types";

// ⭐ 更新记录页 —— 保持时间倒序(最新在前)
export const updatesContent: {
  pageTitle: string;
  metaDescription: string;
  intro: string;
  entries: UpdateEntry[];
} = {
  pageTitle: "Build and Kill Zombies Updates",
  metaDescription:
    "Update log for this site: which checks ran, what changed in the game, and which pages were re-verified.",
  intro:
    "Every entry notes what changed in the game and which pages on this site were re-checked as a result. Newest first.",
  entries: [
    {
      date: "2026-09-16",
      title: "Google Search Console and GA4 connected",
      body: "The domain is verified in Search Console via DNS and the sitemap has been submitted. GA4 is live with stream G-FHZLV97L80, including custom events: planner_goal (upgrade planner use), odds_target (roll odds calculator use), and walkthrough_nav (walkthrough prev/next clicks) alongside GA4's enhanced-measurement events.",
      tags: ["site", "analytics"],
    },
    {
      date: "2026-09-16",
      title: "Five-part walkthrough published",
      body: "A complete path for brand-new players: Part 1 covers how the game works and every UI element, Part 2 the parts and progression systems, Part 3 the first run step by step, Part 4 the mid-game loop, and Part 5 blueprints, bosses and endgame. Eight topic guides remain for deep dives.",
      tags: ["site", "guides"],
    },
    {
      date: "2026-09-16",
      title: "SEO fixes: www redirect, sitemap, keyword split",
      body: "www subdomain now 301s to the apex domain, the sitemap no longer lists noindex pages, and page titles were adjusted so each page targets one primary keyword.",
      tags: ["site", "seo"],
    },
    {
      date: "2026-09-16",
      title: "Site launched",
      body: "Initial coverage: verified codes, the full engine odds ladder (1 in 3 to 1 in 12,500), parts database, skill prices, shop lists, boss and event pages, six guides, and the upgrade planner. All observed values carry video IDs and timestamps.",
      tags: ["site"],
    },
    {
      date: "2026-09-16",
      title: "Codes cross-verified",
      body: "Five codes (COMMUNITY, CashDrop, MOREFRIENDS, HACKER, 1x1x1x1) confirmed against multiple independent sources plus in-game footage before listing. No expired codes currently on record.",
      tags: ["codes"],
    },
    {
      date: "2026-09-16",
      title: "Game update check",
      body: "The in-game what's-new panel lists: limited-time turbo items, lucky blocks, a Scooter vehicle, a Cursed Katana weapon, a COMEBACK code, and a 60% Gamepass sale. Pages re-checked: codes, vehicles, supports.",
      tags: ["game-update"],
    },
  ],
};
