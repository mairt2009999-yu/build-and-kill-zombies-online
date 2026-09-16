import Link from "next/link";
import type { GameCode } from "@/content/types";

const statusStyle: Record<GameCode["status"], string> = {
  active: "bg-accent/15 text-accent border-accent/40",
  expired: "bg-panel text-ink-dim border-line line-through",
  unverified: "bg-panel text-ink-dim border-line",
};

/** 兑换码列表(带状态徽章);codes 为空时显示 emptyState */
export default function CodesList({
  codes,
  emptyStateTitle,
  emptyStateBody,
  lastChecked,
}: {
  codes: GameCode[];
  emptyStateTitle: string;
  emptyStateBody: string;
  lastChecked: string;
}) {
  const active = codes.filter((code) => code.status === "active");
  const rest = codes.filter((code) => code.status !== "active");

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-accent/40 bg-accent/5 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          Hands check · Checked {lastChecked}
        </p>
      </div>
      {active.length === 0 ? (
        <article className="rounded-lg border border-line bg-panel p-6">
          <h3 className="text-lg font-bold text-accent">{emptyStateTitle}</h3>
          <p className="mt-2 leading-relaxed text-ink-dim">{emptyStateBody}</p>
          <p className="mt-4 text-sm text-ink-dim">
            Meanwhile, use the{" "}
            <Link href="/calculator/" className="text-accent underline">
              upgrade planner
            </Link>{" "}
            and{" "}
            <Link href="/tier-list/" className="text-accent underline">
              tier list
            </Link>{" "}
            to keep progressing.
          </p>
        </article>
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2">
          {active.map((code) => (
            <li key={code.code} className={`rounded-lg border p-4 ${statusStyle[code.status]}`}>
              <code className="text-lg font-bold">{code.code}</code>
              <p className="mt-1 text-sm">{code.reward}</p>
              <p className="mt-2 text-xs opacity-70">Added {code.addedOn}</p>
              {code.note && <p className="mt-1 text-xs opacity-70">{code.note}</p>}
            </li>
          ))}
        </ul>
      )}
      {rest.length > 0 && (
        <details className="rounded-lg border border-line bg-panel p-4">
          <summary className="cursor-pointer text-sm font-semibold text-ink">
            Expired and unverified codes ({rest.length})
          </summary>
          <ul className="mt-3 space-y-2">
            {rest.map((code) => (
              <li key={code.code} className="flex flex-wrap items-center gap-2 text-sm text-ink-dim">
                <code className={code.status === "expired" ? "line-through" : ""}>{code.code}</code>
                <span>— {code.reward}</span>
                <span className="rounded border border-line px-1.5 py-0.5 text-xs uppercase">{code.status}</span>
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  );
}
