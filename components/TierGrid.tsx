import Link from "next/link";
import type { TierEntry } from "@/content/types";

const tierColor: Record<TierEntry["tier"], string> = {
  S: "bg-accent text-black",
  A: "bg-orange-400 text-black",
  B: "bg-sky-400 text-black",
  C: "bg-zinc-400 text-black",
  D: "bg-panel text-ink-dim border border-line",
};

function TierBadge({ tier }: { tier: TierEntry["tier"] }) {
  return (
    <span
      className={`inline-flex h-8 w-8 items-center justify-center rounded-md text-sm font-extrabold ${tierColor[tier]}`}
    >
      {tier}
    </span>
  );
}

/** Tier 卡片网格;条目带 slug 时链接到对应 wiki 实体页 */
export default function TierGrid({ entries }: { entries: TierEntry[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {entries.map((entry) => {
        const card = (
          <article className="h-full rounded-lg border border-line bg-panel p-5 transition hover:border-accent">
            <div className="flex items-center gap-3">
              <TierBadge tier={entry.tier} />
              <span className="text-xs font-semibold uppercase tracking-widest text-ink-dim">
                {entry.category}
              </span>
            </div>
            <h3 className="mt-3 text-lg font-bold text-ink">{entry.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-dim">{entry.note}</p>
          </article>
        );
        return entry.slug ? (
          <Link key={entry.name} href={`/${entry.slug}/`}>
            {card}
          </Link>
        ) : (
          <div key={entry.name}>{card}</div>
        );
      })}
    </div>
  );
}
