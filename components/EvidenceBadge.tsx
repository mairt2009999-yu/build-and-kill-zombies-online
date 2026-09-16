import type { EvidenceTier } from "@/content/types";

const meta: Record<EvidenceTier, { label: string; dot: string; hint: string }> = {
  official: {
    label: "Official",
    dot: "bg-emerald-400",
    hint: "From the game's own API or store description.",
  },
  observed: {
    label: "Observed",
    dot: "bg-sky-400",
    hint: "Read from public gameplay footage.",
  },
  unknown: {
    label: "Not yet observed",
    dot: "bg-zinc-500",
    hint: "No verified source yet. Deliberately left blank rather than estimated.",
  },
};

/**
 * 证据徽章 —— 本模板的定位标识。
 * 每个数字都要能回答"这是哪来的",source 里放视频 ID + 时间戳。
 */
export default function EvidenceBadge({
  tier,
  source,
  className = "",
}: {
  tier: EvidenceTier;
  source?: string;
  className?: string;
}) {
  const m = meta[tier];
  const title = source ? `${m.hint} Source: ${source}` : m.hint;
  return (
    <span
      title={title}
      className={`inline-flex items-center gap-1.5 rounded border border-line bg-panel px-2 py-0.5 text-xs text-ink-dim ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${m.dot}`} aria-hidden="true" />
      {m.label}
      {source && <span className="hidden font-mono text-[10px] text-ink-dim sm:inline">{source}</span>}
    </span>
  );
}

/** 数值缺失时的统一占位,避免读者把空白误读成 0 */
export function UnknownValue() {
  return (
    <span className="text-ink-dim" title="No verified source yet">
      —
    </span>
  );
}
