// ============================================================
// 内容类型定义 —— 所有 content/*.ts 文件共用的结构
// 换新游戏时不需要改这个文件,只改各个内容文件
// ============================================================

/** 兑换码状态 */
export type CodeStatus = "active" | "expired" | "unverified";

export interface GameCode {
  code: string;
  reward: string;
  status: CodeStatus;
  /** 添加/核实日期,ISO 格式,如 "2026-07-13" */
  addedOn: string;
  note?: string;
}

export interface CodesContent {
  /** 页面 H1 与 meta title 的主关键词部分,如 "{游戏名} Codes" */
  pageTitle: string;
  metaDescription: string;
  intro: string;
  /** 最近一次人工核对的时间说明,展示在"新鲜度"卡片 */
  lastChecked: string;
  /** 当没有任何 active 码时展示的说明 */
  emptyStateTitle: string;
  emptyStateBody: string;
  codes: GameCode[];
  howToRedeem: string[];
  freshnessPolicy: string[];
  faq: FaqItem[];
}

/** Tier 榜单条目 */
export interface TierEntry {
  tier: "S" | "A" | "B" | "C" | "D";
  name: string;
  category: string;
  note: string;
  /** 可选:指向 wiki 实体页的 slug */
  slug?: string;
}

export interface TierListContent {
  pageTitle: string;
  metaDescription: string;
  intro: string;
  updatedOn: string;
  criteria: { heading: string; body: string }[];
  entries: TierEntry[];
  closingHeading: string;
  closingBody: string;
  faq: FaqItem[];
}

/** 计算器/规划器:纯数据驱动的推荐规则 */
export interface PlannerGoal {
  id: string;
  label: string;
}

export interface PlannerSlider {
  id: string;
  label: string;
  min: number;
  max: number;
  defaultValue: number;
}

export interface PlannerRule {
  /** 匹配的目标 id;省略则匹配所有目标 */
  goal?: string;
  /** 全部条件满足才命中;省略则无条件命中 */
  conditions?: { slider: string; op: "lt" | "gte"; value: number }[];
  advice: string;
}

export interface CalculatorContent {
  pageTitle: string;
  metaDescription: string;
  intro: string;
  formHeading: string;
  resultHeading: string;
  goals: PlannerGoal[];
  sliders: PlannerSlider[];
  /** 规则按顺序匹配,第一条命中即返回 */
  rules: PlannerRule[];
  defaultAdvice: string;
  faq: FaqItem[];
}

/** 首页工具卡片 */
export interface ToolCard {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
}

/** 内容图片(官方截图/示意图),src 指向 public/ 下的文件 */
export interface ContentImage {
  src: string;
  alt: string;
  caption?: string;
}

/** 数据表格(物品/徽章/数值等结构化数据,SEO 友好) */
export interface ContentTable {
  headers: string[];
  rows: string[][];
}

/** 指南 */
export interface GuideSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
  /** 可选配图,渲染在段落之后 */
  image?: ContentImage;
  /** 可选数据表格,渲染在列表之后 */
  table?: ContentTable;
}

export interface Guide {
  slug: string;
  /** 卡片上的短标签,如 "First-session guide" */
  label: string;
  title: string;
  metaDescription: string;
  summary: string;
  /** 可选:页面标题下方的题图 */
  heroImage?: ContentImage;
  /** 可选:内容更新日期(展示新鲜度徽章) */
  updatedOn?: string;
  /** 可选:所属系列(如 "walkthrough")——同系列页面自动获得上一部/下一部导航 */
  series?: string;
  /** 可选:系列内序号,从 1 开始 */
  seriesOrder?: number;
  sections: GuideSection[];
  faq?: FaqItem[];
}

/** Wiki 实体页(顶级路由,如 /tokens/、/skill-tree/) */
export interface WikiEntity {
  /** 顶级 URL slug,注意不要与固定页面(codes、guides 等)冲突 */
  slug: string;
  /** 卡片短标签,如 "Economy" */
  eyebrow: string;
  title: string;
  metaDescription: string;
  summary: string;
  /** 可选:页面标题下方的题图 */
  heroImage?: ContentImage;
  /** 可选:内容更新日期(展示新鲜度徽章) */
  updatedOn?: string;
  sections: GuideSection[];
  faq?: FaqItem[];
}

/** 更新记录 */
export interface UpdateEntry {
  date: string;
  title: string;
  body: string;
  tags?: string[];
}

/** 来源链接 */
export interface SourceLink {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  /** verified: 官方确认 | community: 社区来源待核实 */
  status: "verified" | "community";
}

export interface SourceNote {
  heading: string;
  body: string;
}

/** 视频参考 */
export interface VideoRef {
  label: string;
  title: string;
  description: string;
  href?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

// ============================================================
// 物品库 / 稀有度 / 概率 —— 通用收集类游戏模块
// 全部由 content/items.ts + content/crafting.ts 驱动,代码不含任何
// 游戏专属字段。没填这些内容的站不受影响(见 site.ts 的 features 开关)。
// ============================================================

/**
 * 证据等级 —— 本模板的核心定位。
 * official: 官方来源(Roblox API / 官方描述),可直接发布
 * observed: 实机视频截帧读到的,必须填 source(视频 ID + 时间戳)
 * unknown:  尚未观察到。**绝不编造**,页面显式渲染 "Not yet observed"
 */
export type EvidenceTier = "official" | "observed" | "unknown";

/** 稀有度档位。颜色是任意色值(游戏自定义),不走 Tailwind class */
export interface Rarity {
  /** 稳定 id,被 GameItem.rarityId 引用 */
  id: string;
  /** 游戏内显示名,如 "Legendary" / "Mythic" */
  name: string;
  /** 十六进制色值,如 "#ab8000" */
  color: string;
  /** 从低到高排序,必须唯一 */
  order: number;
  evidence: EvidenceTier;
  source?: string;
  note?: string;
}

/**
 * 数值字段定义 —— 每个游戏自己声明有哪些数值。
 * 塔防填 health/dps,宠物模拟填 multiplier/coins,钓鱼填 weight/value。
 * 代码只认这份声明,不认具体字段名。
 */
export interface StatDef {
  /** 在 GameItem.stats / growth 里作为 key */
  id: string;
  label: string;
  /** 可选前缀图标(emoji 即可) */
  icon?: string;
  /** number: 原样 | compact: 1.5K/2.3M | percent: 12% | perSecond: 100/s */
  format?: "number" | "compact" | "percent" | "perSecond";
  /** 排序与对比时哪边算更好,默认 true */
  higherIsBetter?: boolean;
  /** 该数值是否随等级成长(决定是否出现在等级计算器里) */
  hasGrowth?: boolean;
}

/** 掉落概率。1-in-N 与百分比二选一或都填 */
export interface ItemOdds {
  oneIn?: number;
  percent?: number;
  /** 游戏内印刷的原始赔率写法(含后缀),存在时优先于 oneIn 显示 */
  text?: string;
  evidence?: EvidenceTier;
  source?: string;
}

export interface GameItem {
  slug: string;
  name: string;
  /** 引用 ItemsContent.rarities[].id */
  rarityId?: string;
  /** 引用 ItemsContent.categories[].id */
  category?: string;
  /** public/ 下的图标路径,如 "/items/wood-block.webp" */
  icon?: string;
  iconAlt?: string;
  summary?: string;
  odds?: ItemOdds;
  /** 观察到这组数值时物品的等级(有等级系统时必填) */
  level?: number;
  /** 数值快照,key 必须是 StatDef.id */
  stats?: Record<string, number>;
  /** 每级成长量,key 必须是 StatDef.id */
  growth?: Record<string, number>;
  /**
   * 成长量本身每级的增量(二次成长)。
   * 有的游戏数值不是线性涨,而是"每级涨的量"也在涨。
   * 填了就用二次模型,不填退回线性。需要同一物品至少三个等级的读数才能定这个值。
   */
  growthAccel?: Record<string, number>;
  /** 升到下一级的花费 */
  upgradeCost?: number;
  /** 变体物品指向本体,如 galaxy-wood-block -> wood-block */
  variantOf?: string;
  /** 变体标签,如 "Galaxy" / "Shiny" / "Gold" */
  variantLabel?: string;
  evidence: EvidenceTier;
  /** 证据出处,如 "SrRex2ffNRU@05:35" 或官方 API */
  source?: string;
  /**
   * Optional H1 / metadata title when the search query is not the item name
   * (e.g. "what does X do"). Falls back to `name`.
   */
  pageTitle?: string;
  /** Optional long-form sections rendered below stats on the item page */
  extraSections?: GuideSection[];
  /** Optional item-page FAQ; also keeps high-intent questions on the ranking URL */
  faq?: FaqItem[];
  /** Optional related links (wiki, guides) shown under the item */
  relatedLinks?: { label: string; href: string }[];
}

/** 等级系统(没有等级的游戏留空,等级计算器自动隐藏) */
export interface LevelSystem {
  cap?: number;
  /** 显示用词,如 "Level" / "Stage" */
  label?: string;
  note?: string;
}

export interface ItemsContent {
  pageTitle: string;
  metaDescription: string;
  intro: string;
  updatedOn: string;
  /** 计数会随版本变化时在这里说明,避免页面过期后失真 */
  gameVersionNote?: string;
  /** 页面配图(可选):渲染在 intro 之后 */
  pageImages?: { src: string; alt: string; caption?: string }[];
  statDefs: StatDef[];
  rarities: Rarity[];
  categories: { id: string; label: string }[];
  items: GameItem[];
  levelSystem?: LevelSystem;
  /** 证据政策说明,渲染在页面底部 */
  evidencePolicy?: { heading: string; body: string }[];
  faq: FaqItem[];
}

/** 合成 / 融合 / 合并 配方 */
export interface RecipeInput {
  label: string;
  qty: number;
  /** rarity: 消耗任意该稀有度物品 | item: 指定物品 | relic: 特殊材料 */
  kind: "rarity" | "item" | "relic";
  /** kind 为 item 时可指向 GameItem.slug */
  slug?: string;
}

export interface CraftRecipe {
  id: string;
  name: string;
  inputs: RecipeInput[];
  /** 产出及其百分比,合计应约等于 100 */
  outcomes: { name: string; pct: number; slug?: string }[];
  unlockNote?: string;
  evidence: EvidenceTier;
  source?: string;
}

export interface CraftingContent {
  pageTitle: string;
  metaDescription: string;
  intro: string;
  updatedOn: string;
  /** 已知配方总数(游戏内显示的),用于说明覆盖度 */
  totalRecipes?: number;
  recipes: CraftRecipe[];
  notes?: { heading: string; body: string }[];
  faq: FaqItem[];
}

/**
 * 官方 API 快照 + 实机视频观察记录。
 * CLAUDE.md 的调研流程会写入这里,是 official / observed 两级证据的存放处。
 */
export interface VideoSource {
  /** YouTube video id 或其它可追溯的标识 */
  id: string;
  title: string;
  /** 观察日期 ISO */
  watchedOn?: string;
}

export interface ObservedFact {
  /** 事实本身,一句话 */
  fact: string;
  /** 出处,如 "SrRex2ffNRU@05:35" */
  source: string;
}

export interface RobloxData {
  /** 抓取日期 ISO */
  fetchedOn: string;
  official: {
    placeId?: string;
    universeId?: string;
    developer?: string;
    created?: string;
    lastUpdated?: string;
    genre?: string;
    maxPlayers?: number;
    visits?: number;
    favorites?: number;
    /** 官方描述原文,通常含玩法/键位/活动信息,是最高优先级来源 */
    description?: string;
  };
  videoSources: VideoSource[];
  /** 从实机画面读到的事实,引用时说明 "observed in gameplay footage" */
  videoObserved: ObservedFact[];
  /** 尚未核实、明确不写进正文的问题清单 */
  openQuestions?: string[];
}

export interface OddsCalculatorContent {
  pageTitle: string;
  metaDescription: string;
  intro: string;
  /** 默认选中的物品 slug */
  defaultItemSlug?: string;
  /** 每次滚动耗时(秒),用于把次数换算成时间;留空则不显示时间估算 */
  secondsPerRoll?: number;
  /** 关于幸运/加成如何影响概率的说明 */
  luckNote?: string;
  faq: FaqItem[];
}
