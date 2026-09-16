"use client";

import { useMemo, useState } from "react";
import {
  atLeastOnce,
  formatDuration,
  formatOdds,
  rollsForConfidence,
  successChance,
} from "@/lib/items";
import type { ItemsContent, OddsCalculatorContent } from "@/content/types";
import { trackEvent } from "@/lib/track";

/**
 * 概率计算器(客户端组件)。
 * 与 components/Planner.tsx 的区别:Planner 是"目标+滑块->规则查表",
 * 这里是真的做数学 —— P(至少一次) = 1 - (1 - p)^n。
 * 数据全部来自 items[].odds,没有 odds 的物品不会出现在下拉里。
 */
export default function OddsCalculator({
  items,
  content,
}: {
  items: ItemsContent;
  content: OddsCalculatorContent;
}) {
  const rollable = useMemo(
    () => items.items.filter((i) => successChance(i) !== undefined),
    [items]
  );

  const [slug, setSlug] = useState(
    content.defaultItemSlug && rollable.some((i) => i.slug === content.defaultItemSlug)
      ? content.defaultItemSlug
      : rollable[0]?.slug ?? ""
  );
  const [rolls, setRolls] = useState(100);

  const item = rollable.find((i) => i.slug === slug);
  const p = item ? successChance(item) : undefined;

  if (rollable.length === 0) {
    return (
      <p className="rounded-lg border border-line bg-panel p-6 text-ink-dim">
        No verified drop odds have been recorded yet, so there is nothing to calculate. This section
        fills in as soon as odds are confirmed.
      </p>
    );
  }

  const chance = p !== undefined ? atLeastOnce(p, Math.max(0, rolls)) : undefined;
  const expected = p !== undefined && p > 0 ? 1 / p : undefined;
  const targets = [0.5, 0.9, 0.99];
  const secs = content.secondsPerRoll;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="rounded-lg border border-line bg-panel p-6">
        <h2 className="text-xl font-bold text-ink">Pick a target</h2>
        <div className="mt-5 space-y-6">
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-ink">Item</span>
            <select
              value={slug}
              onChange={(e) => {
                setSlug(e.target.value);
                trackEvent("odds_target", { item: e.target.value });
              }}
              className="w-full rounded-md border border-line bg-surface px-3 py-2 text-ink"
            >
              {rollable.map((i) => (
                <option key={i.slug} value={i.slug}>
                  {i.name} — {formatOdds(i)}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="mb-2 flex justify-between text-sm font-semibold text-ink">
              <span>Rolls</span>
              <span className="text-accent">{rolls.toLocaleString("en-US")}</span>
            </span>
            <input
              type="number"
              min={0}
              step={1}
              value={rolls}
              onChange={(e) => setRolls(Math.max(0, Number(e.target.value) || 0))}
              className="w-full rounded-md border border-line bg-surface px-3 py-2 text-ink"
            />
          </label>
        </div>
        {content.luckNote && <p className="mt-6 text-sm leading-relaxed text-ink-dim">{content.luckNote}</p>}
      </section>

      <section className="rounded-lg border border-accent/40 bg-accent/5 p-6">
        <h2 className="text-xl font-bold text-ink">Result</h2>
        <p className="mt-4 text-3xl font-extrabold text-ink" aria-live="polite">
          {chance !== undefined ? `${(chance * 100).toFixed(2)}%` : "—"}
        </p>
        <p className="mt-1 text-sm text-ink-dim">
          chance of seeing {item?.name} at least once in {rolls.toLocaleString("en-US")} rolls
        </p>

        <dl className="mt-6 space-y-3 text-sm">
          <div className="flex justify-between gap-4 border-t border-line pt-3">
            <dt className="text-ink-dim">Average rolls needed</dt>
            <dd className="font-semibold text-ink">
              {expected ? Math.round(expected).toLocaleString("en-US") : "—"}
            </dd>
          </div>
          {targets.map((t) => {
            const n = p !== undefined ? rollsForConfidence(p, t) : Infinity;
            return (
              <div key={t} className="flex justify-between gap-4 border-t border-line pt-3">
                <dt className="text-ink-dim">Rolls for {Math.round(t * 100)}% confidence</dt>
                <dd className="text-right font-semibold text-ink">
                  {Number.isFinite(n) ? n.toLocaleString("en-US") : "—"}
                  {secs && Number.isFinite(n) && (
                    <span className="ml-2 font-normal text-ink-dim">≈ {formatDuration(n * secs)}</span>
                  )}
                </dd>
              </div>
            );
          })}
        </dl>

        <p className="mt-6 text-xs leading-relaxed text-ink-dim">
          Hitting the average does not mean the item is guaranteed — at that point you are only about
          63% likely to have it. Plan against the confidence rows instead.
        </p>
      </section>
    </div>
  );
}
