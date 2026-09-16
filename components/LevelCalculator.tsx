"use client";

import { useState } from "react";
import { formatStat, growthModel, hasGrowth, statAtLevel } from "@/lib/items";
import type { GameItem, ItemsContent } from "@/content/types";

/**
 * 等级投影计算器(客户端组件)。
 * 只在物品声明了 growth 时才渲染 —— 没有等级系统的游戏自动不出现。
 */
export default function LevelCalculator({
  item,
  content,
}: {
  item: GameItem;
  content: ItemsContent;
}) {
  const cap = content.levelSystem?.cap;
  const label = content.levelSystem?.label ?? "Level";
  const from = item.level ?? 1;
  const [level, setLevel] = useState(cap ?? from);

  if (!hasGrowth(item)) return null;

  const max = cap ?? Math.max(from * 10, 100);
  const grown = content.statDefs.filter((def) => item.growth?.[def.id] !== undefined);

  return (
    <section className="rounded-lg border border-line bg-panel p-6">
      <h2 className="text-xl font-bold text-ink">{label} calculator</h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-dim">
        Values were read at {label.toLowerCase()} {from}. This projects them linearly using the
        observed per-{label.toLowerCase()} growth.
      </p>

      <label className="mt-5 block">
        <span className="mb-2 flex justify-between text-sm font-semibold text-ink">
          <span>Target {label.toLowerCase()}</span>
          <span className="text-accent">
            {level}
            {cap ? ` / ${cap}` : ""}
          </span>
        </span>
        <input
          type="range"
          min={from}
          max={max}
          value={level}
          onChange={(e) => setLevel(Number(e.target.value))}
          className="w-full accent-accent"
          aria-label={`Target ${label.toLowerCase()} ${level}`}
        />
      </label>

      <dl className="mt-5 grid gap-3 sm:grid-cols-2">
        {grown.map((def) => {
          const value = statAtLevel(item, def.id, level);
          return (
            <div key={def.id} className="rounded border border-line bg-surface px-3 py-2">
              <dt className="text-xs uppercase tracking-wide text-ink-dim">
                {def.icon && <span aria-hidden="true">{def.icon} </span>}
                {def.label}
              </dt>
              <dd className="mt-0.5 text-lg font-bold text-ink" aria-live="polite">
                {value === undefined ? "—" : formatStat(value, def)}
              </dd>
            </div>
          );
        })}
      </dl>

      <p className="mt-4 text-xs leading-relaxed text-ink-dim">
        {grown.some((def) => growthModel(item, def.id) === "quadratic")
          ? "Where three readings of the same object were available, the per-level gain turns out to rise with level as well, so those stats use the curve rather than a straight line."
          : "Straight-line projection from one reading. Objects we have measured at three levels grow faster than this near the cap, so treat a high target as a floor."}
      </p>
    </section>
  );
}
