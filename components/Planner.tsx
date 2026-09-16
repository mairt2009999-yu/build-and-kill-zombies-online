"use client";

import { useMemo, useState } from "react";
import type { CalculatorContent } from "@/content/types";
import { trackEvent } from "@/lib/track";

/**
 * 通用规划器(客户端组件):目标下拉 + 滑块 + 规则匹配。
 * 完全由 content/calculator.ts 的数据驱动,换游戏不用改代码。
 */
export default function Planner({ content }: { content: CalculatorContent }) {
  const [goal, setGoal] = useState(content.goals[0]?.id ?? "");
  const [values, setValues] = useState<Record<string, number>>(() =>
    Object.fromEntries(content.sliders.map((slider) => [slider.id, slider.defaultValue]))
  );

  const advice = useMemo(() => {
    for (const rule of content.rules) {
      if (rule.goal && rule.goal !== goal) continue;
      const conditionsMet = (rule.conditions ?? []).every((cond) => {
        const value = values[cond.slider] ?? 0;
        return cond.op === "lt" ? value < cond.value : value >= cond.value;
      });
      if (conditionsMet) return rule.advice;
    }
    return content.defaultAdvice;
  }, [content, goal, values]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="rounded-lg border border-line bg-panel p-6">
        <h2 className="text-xl font-bold text-ink">{content.formHeading}</h2>
        <div className="mt-5 space-y-6">
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-ink">Current goal</span>
            <select
              value={goal}
              onChange={(e) => {
                setGoal(e.target.value);
                trackEvent("planner_goal", { goal: e.target.value });
              }}
              className="w-full rounded-md border border-line bg-surface px-3 py-2 text-ink"
            >
              {content.goals.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.label}
                </option>
              ))}
            </select>
          </label>
          {content.sliders.map((slider) => (
            <label key={slider.id} className="block">
              <span className="mb-2 flex justify-between text-sm font-semibold text-ink">
                <span>{slider.label}</span>
                <span className="text-accent">
                  {values[slider.id]}/{slider.max}
                </span>
              </span>
              <input
                type="range"
                min={slider.min}
                max={slider.max}
                value={values[slider.id]}
                onChange={(e) =>
                  setValues((prev) => ({ ...prev, [slider.id]: Number(e.target.value) }))
                }
                className="w-full accent-accent"
                aria-label={`${slider.label} ${values[slider.id]}/${slider.max}`}
              />
            </label>
          ))}
        </div>
      </section>
      <section className="rounded-lg border border-accent/40 bg-accent/5 p-6">
        <h2 className="text-xl font-bold text-ink">{content.resultHeading}</h2>
        <p className="mt-4 leading-relaxed text-ink" aria-live="polite">
          {advice}
        </p>
      </section>
    </div>
  );
}
