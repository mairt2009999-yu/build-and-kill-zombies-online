// ============================================================
// ⭐ 站点主配置 —— Build and Kill Zombies
// ============================================================

export const siteConfig = {
  // ---------- 站点身份 ----------
  /** 站点名,出现在 Header、Footer、JSON-LD */
  name: "Build and Kill Zombies Wiki",
  /** PWA 短名 */
  shortName: "BAKZ Wiki",
  /** 部署域名(不带末尾斜杠),canonical / sitemap / OG 全部依赖它 */
  url: "https://build-and-kill-zombies.online",
  locale: "en",

  // ---------- 主题 ----------
  /** 页面背景主题色(浏览器地址栏着色) */
  themeColor: "#101114",
  /** 强调色(按钮、徽章、高亮)—— 取自游戏内 DRIVE 按钮的绿色 */
  accentColor: "#22c55e",

  // ---------- 游戏信息 ----------
  game: {
    /** 游戏名,大量用于标题、正文、JSON-LD */
    title: "Build and Kill Zombies",
    platform: "Roblox",
    /** Roblox place id(展示在首页事实栏) */
    placeId: "105011592530400",
    /** Roblox universe id */
    universeId: "10741654282",
    /** 官方游戏页链接 */
    officialUrl: "https://www.roblox.com/games/105011592530400/Build-and-Kill-Zombies",
    /** 开发者/群组名 */
    developer: "Zombie Car Crusher",
    genre: "Car-Build Survival",
    /** 封面图,放在 public/ 下 */
    coverImage: "/game-cover.png",
    coverImageAlt: "Build and Kill Zombies official Roblox artwork",
  },

  // ---------- SEO ----------
  seo: {
    /** 首页 <title> —— 主页只做品牌+wiki 词,codes/tier-list 等栏目词交给专门页面(避免页间抢词) */
    defaultTitle: "Build and Kill Zombies Wiki, Guides and Tools",
    /** 内页标题模板,%s 会被替换为页面标题 */
    titleTemplate: "%s | Build and Kill Zombies",
    description:
      "Build and Kill Zombies wiki with source-checked codes status, part roll odds, skill planning, tier list, guides, and official-link status for the Roblox game.",
    keywords: [
      "Build and Kill Zombies",
      "Build and Kill Zombies codes",
      "Build and Kill Zombies wiki",
      "Build and Kill Zombies tier list",
      "Build and Kill Zombies guide",
      "Build and Kill Zombies parts",
      "Build and Kill Zombies calculator",
      "Build and Kill Zombies trello",
      "Roblox",
    ],
  },

  // ---------- 可选模块开关 ----------
  // 关掉的模块不进导航、不进 sitemap、页面自动 noindex。
  features: {
    /** /items/ 与 /items/[slug]/ 与 /rarities/ */
    itemDatabase: true as boolean,
    /** /crafting/ —— 该游戏没有合成系统,保持关闭 */
    crafting: false as boolean,
    /** /odds-calculator/ */
    oddsCalculator: true as boolean,
  },

  // ---------- 模块用词 ----------
  // 路由路径固定,但显示文案跟着游戏走
  labels: {
    items: "Parts",
    rarities: "Rarities",
    crafting: "Crafting",
    oddsCalculator: "Roll Odds",
  },

  // ---------- 导航 ----------
  // 注意:Header 会自动追加可选模块的入口(/items/ 的 Parts),不要在 nav 里重复。
  nav: [
    { label: "Home", href: "/" },
    { label: "Codes", href: "/codes/" },
    { label: "Tools", href: "/calculator/" },
    { label: "Wiki", href: "/wiki/" },
  ],
  /** Header 右侧的两个高亮按钮 */
  headerCta: [
    { label: "Tier List", href: "/tier-list/" },
    { label: "Codes", href: "/codes/" },
  ],

  // ---------- 变现 / 统计(默认关闭,填入 ID 并置 enabled: true 即生效) ----------
  ads: {
    enabled: false,
    /** AdSense 发布商 ID,如 "ca-pub-1234567890123456" */
    adsenseClientId: "",
  },
  analytics: {
    /** GA4 Measurement ID,如 "G-XXXXXXXXXX";留空则不注入 */
    googleAnalyticsId: "G-FHZLV97L80",
  },

  // ---------- 站点法务信息 ----------
  contactEmail: "contact@build-and-kill-zombies.online",
  /** 免责声明短句,展示在 Footer */
  disclaimer:
    "This site is an unofficial fan-made resource and is not endorsed by the game developer or Roblox.",
} as const;

export type SiteConfig = typeof siteConfig;
