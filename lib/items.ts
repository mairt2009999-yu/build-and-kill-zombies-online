import type { GameItem, ItemsContent, Rarity, StatDef } from "@/content/types";

// ============================================================
// 物品库工具函数 —— 纯计算,无游戏专属逻辑
// ============================================================

/** 按 StatDef.format 格式化数值 */
export function formatStat(value: number, def?: StatDef): string {
  const format = def?.format ?? "number";
  switch (format) {
    case "compact":
      return compact(value);
    case "percent":
      return `${trim(value)}%`;
    case "perSecond":
      return `${compact(value)}/s`;
    default:
      return trim(value);
  }
}

/** 1234567 -> "1.2M";小于 1000 原样输出 */
export function compact(value: number): string {
  const abs = Math.abs(value);
  if (abs >= 1e12) return `${trim(value / 1e12)}T`;
  if (abs >= 1e9) return `${trim(value / 1e9)}B`;
  if (abs >= 1e6) return `${trim(value / 1e6)}M`;
  if (abs >= 1e3) return `${trim(value / 1e3)}K`;
  return trim(value);
}

function trim(value: number): string {
  if (Number.isInteger(value)) return String(value);
  return String(Math.round(value * 10) / 10);
}

/**
 * 某数值在目标等级的值。
 * 默认线性:每升一级加 growth[statId]。
 * 若填了 growthAccel[statId],说明"每级涨的量"自己也在涨,改用二次模型:
 *   value(n) = base + growth*n + accel*n*(n-1)/2
 * 两种模型下 item.level 都是观测基准等级。
 */
export function statAtLevel(item: GameItem, statId: string, targetLevel: number): number | undefined {
  const base = item.stats?.[statId];
  const growth = item.growth?.[statId];
  if (base === undefined) return undefined;
  if (growth === undefined) return base;
  const n = targetLevel - (item.level ?? 1);
  const accel = item.growthAccel?.[statId];
  if (accel === undefined) return base + growth * n;
  return base + growth * n + (accel * n * (n - 1)) / 2;
}

/** 该物品的某个数值用的是哪种模型,用于在页面上如实标注 */
export function growthModel(item: GameItem, statId: string): "quadratic" | "linear" | "none" {
  if (item.growth?.[statId] === undefined) return "none";
  return item.growthAccel?.[statId] !== undefined ? "quadratic" : "linear";
}

/** 该物品是否有任何可随等级成长的数值 */
export function hasGrowth(item: GameItem): boolean {
  return Boolean(item.growth && Object.keys(item.growth).length > 0);
}

export function rarityOf(content: ItemsContent, item: GameItem): Rarity | undefined {
  return content.rarities.find((r) => r.id === item.rarityId);
}

export function statDefOf(content: ItemsContent, statId: string): StatDef | undefined {
  return content.statDefs.find((s) => s.id === statId);
}

/** 稀有度从低到高 */
export function sortedRarities(content: ItemsContent): Rarity[] {
  return [...content.rarities].sort((a, b) => a.order - b.order);
}

/** 概率的人类可读写法:优先游戏内原始印刷写法,其次 1-in-N,再次百分比 */
export function formatOdds(item: GameItem): string | undefined {
  const odds = item.odds;
  if (!odds) return undefined;
  if (odds.text) return odds.text;
  if (odds.oneIn !== undefined) return `1 in ${odds.oneIn.toLocaleString("en-US")}`;
  if (odds.percent !== undefined) return `${trim(odds.percent)}%`;
  return undefined;
}

/** 单次成功概率,用于概率计算器 */
export function successChance(item: GameItem): number | undefined {
  const odds = item.odds;
  if (!odds) return undefined;
  if (odds.oneIn !== undefined && odds.oneIn > 0) return 1 / odds.oneIn;
  if (odds.percent !== undefined) return odds.percent / 100;
  return undefined;
}

/** 抽 n 次至少中一次的概率 */
export function atLeastOnce(p: number, n: number): number {
  if (p <= 0) return 0;
  if (p >= 1) return 1;
  return 1 - Math.pow(1 - p, n);
}

/** 达到目标置信度所需的抽取次数 */
export function rollsForConfidence(p: number, confidence: number): number {
  if (p <= 0 || confidence >= 1) return Infinity;
  return Math.ceil(Math.log(1 - confidence) / Math.log(1 - p));
}

/** 秒数转 "2h 15m" 这类可读时长 */
export function formatDuration(seconds: number): string {
  if (!Number.isFinite(seconds)) return "—";
  const units: [number, string][] = [
    [86400, "d"],
    [3600, "h"],
    [60, "m"],
  ];
  const parts: string[] = [];
  let rest = Math.round(seconds);
  for (const [size, label] of units) {
    if (rest >= size) {
      parts.push(`${Math.floor(rest / size)}${label}`);
      rest %= size;
      if (parts.length === 2) return parts.join(" ");
    }
  }
  if (parts.length === 0) return `${rest}s`;
  if (rest > 0 && parts.length < 2) parts.push(`${rest}s`);
  return parts.join(" ");
}
