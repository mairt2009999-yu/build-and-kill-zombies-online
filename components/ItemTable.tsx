"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import RarityBadge from "@/components/RarityBadge";
import { UnknownValue } from "@/components/EvidenceBadge";
import { formatOdds, formatStat, sortedRarities } from "@/lib/items";
import type { ItemsContent } from "@/content/types";

/**
 * 物品数据库表格(客户端组件)。
 * 排序列由 content.statDefs 动态生成 —— 换游戏不改代码。
 */
export default function ItemTable({ content }: { content: ItemsContent }) {
  const [query, setQuery] = useState("");
  const [rarityId, setRarityId] = useState("all");
  const [category, setCategory] = useState("all");
  const [sortKey, setSortKey] = useState("rarity");
  const [asc, setAsc] = useState(true);

  const rarities = useMemo(() => sortedRarities(content), [content]);
  const rarityOrder = useMemo(
    () => Object.fromEntries(content.rarities.map((r) => [r.id, r.order])),
    [content]
  );

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = content.items.filter((item) => {
      if (q && !item.name.toLowerCase().includes(q)) return false;
      if (rarityId !== "all" && item.rarityId !== rarityId) return false;
      if (category !== "all" && item.category !== category) return false;
      return true;
    });

    const value = (slug: string): number | undefined => {
      const item = content.items.find((i) => i.slug === slug);
      if (!item) return undefined;
      if (sortKey === "rarity") return item.rarityId ? rarityOrder[item.rarityId] : undefined;
      if (sortKey === "odds") return item.odds?.oneIn ?? (item.odds?.percent ? 100 / item.odds.percent : undefined);
      return item.stats?.[sortKey];
    };

    return [...filtered].sort((a, b) => {
      const va = value(a.slug);
      const vb = value(b.slug);
      // 缺失值一律排在最后,不参与升降序,避免"未知"看起来像最小值
      if (va === undefined && vb === undefined) return a.name.localeCompare(b.name);
      if (va === undefined) return 1;
      if (vb === undefined) return -1;
      if (va === vb) return a.name.localeCompare(b.name);
      return asc ? va - vb : vb - va;
    });
  }, [content, query, rarityId, category, sortKey, asc, rarityOrder]);

  const sortOptions = [
    { id: "rarity", label: "Rarity" },
    { id: "odds", label: "Odds" },
    ...content.statDefs.map((def) => ({ id: def.id, label: def.label })),
  ];

  return (
    <div>
      <div className="mb-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <label className="block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink-dim">Search</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Item name"
            className="w-full rounded-md border border-line bg-surface px-3 py-2 text-ink"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink-dim">Rarity</span>
          <select
            value={rarityId}
            onChange={(e) => setRarityId(e.target.value)}
            className="w-full rounded-md border border-line bg-surface px-3 py-2 text-ink"
          >
            <option value="all">All rarities</option>
            {rarities.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink-dim">Category</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-md border border-line bg-surface px-3 py-2 text-ink"
          >
            <option value="all">All categories</option>
            {content.categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink-dim">Sort by</span>
          <div className="flex gap-2">
            <select
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value)}
              className="w-full rounded-md border border-line bg-surface px-3 py-2 text-ink"
            >
              {sortOptions.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.label}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => setAsc((v) => !v)}
              aria-label={asc ? "Sort descending" : "Sort ascending"}
              className="shrink-0 rounded-md border border-line bg-surface px-3 text-ink"
            >
              {asc ? "↑" : "↓"}
            </button>
          </div>
        </label>
      </div>

      <p className="mb-3 text-sm text-ink-dim" aria-live="polite">
        Showing {rows.length} of {content.items.length} items
      </p>

      <div className="overflow-x-auto rounded-lg border border-line">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead className="bg-panel text-left">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold text-ink">Item</th>
              <th scope="col" className="px-4 py-3 font-semibold text-ink">Rarity</th>
              <th scope="col" className="px-4 py-3 font-semibold text-ink">Odds</th>
              {content.statDefs.map((def) => (
                <th key={def.id} scope="col" className="px-4 py-3 font-semibold text-ink">
                  {def.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((item) => (
              <tr key={item.slug} className="border-t border-line">
                <td className="px-4 py-3">
                  <Link
                    href={`/items/${item.slug}/`}
                    className="flex items-center gap-3 font-semibold text-ink hover:text-accent"
                  >
                    {item.icon ? (
                      <Image
                        src={item.icon}
                        alt={item.iconAlt ?? item.name}
                        width={36}
                        height={36}
                        className="h-9 w-9 shrink-0 rounded border border-line bg-surface object-contain"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-line bg-surface text-[10px] text-ink-dim"
                      >
                        —
                      </span>
                    )}
                    {item.name}
                  </Link>
                </td>
                <td className="px-4 py-3">
                  <RarityBadge rarity={content.rarities.find((r) => r.id === item.rarityId)} size="sm" />
                </td>
                <td className="px-4 py-3 text-ink">{formatOdds(item) ?? <UnknownValue />}</td>
                {content.statDefs.map((def) => {
                  const v = item.stats?.[def.id];
                  return (
                    <td key={def.id} className="px-4 py-3 text-ink">
                      {v === undefined ? <UnknownValue /> : formatStat(v, def)}
                    </td>
                  );
                })}
              </tr>
            ))}
            {rows.length === 0 && (
              <tr className="border-t border-line">
                <td colSpan={3 + content.statDefs.length} className="px-4 py-6 text-center text-ink-dim">
                  No items match those filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
