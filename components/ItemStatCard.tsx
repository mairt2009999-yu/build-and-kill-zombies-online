import Image from "next/image";
import EvidenceBadge, { UnknownValue } from "@/components/EvidenceBadge";
import RarityBadge from "@/components/RarityBadge";
import { formatOdds, formatStat, rarityOf } from "@/lib/items";
import type { GameItem, ItemsContent } from "@/content/types";

/**
 * 物品数值卡。渲染哪些数值完全由 content.statDefs 决定,
 * 组件本身不认识 health/dps 之类的具体字段。
 */
export default function ItemStatCard({
  item,
  content,
}: {
  item: GameItem;
  content: ItemsContent;
}) {
  const rarity = rarityOf(content, item);
  const odds = formatOdds(item);
  const levelLabel = content.levelSystem?.label ?? "Level";

  return (
    <article className="rounded-lg border border-line bg-panel p-5">
      <div className="flex items-start gap-4">
        {item.icon ? (
          <Image
            src={item.icon}
            alt={item.iconAlt ?? item.name}
            width={96}
            height={96}
            className="rounded border border-line bg-surface object-contain"
            style={rarity ? { borderColor: rarity.color } : undefined}
          />
        ) : (
          <div className="flex h-24 w-24 items-center justify-center rounded border border-line bg-surface text-xs text-ink-dim">
            No icon
          </div>
        )}
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-bold text-ink">{item.name}</h3>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <RarityBadge rarity={rarity} size="sm" />
            {item.variantLabel && (
              <span className="rounded border border-line px-2 py-0.5 text-xs text-ink-dim">
                {item.variantLabel} variant
              </span>
            )}
            <EvidenceBadge tier={item.evidence} source={item.source} />
          </div>
        </div>
      </div>

      {item.summary && <p className="mt-4 text-sm leading-relaxed text-ink-dim">{item.summary}</p>}

      <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <div className="rounded border border-line bg-surface px-3 py-2">
          <dt className="text-xs uppercase tracking-wide text-ink-dim">Odds</dt>
          <dd className="mt-0.5 font-semibold text-ink">{odds ?? <UnknownValue />}</dd>
        </div>
        {content.statDefs.map((def) => {
          const value = item.stats?.[def.id];
          const growth = item.growth?.[def.id];
          return (
            <div key={def.id} className="rounded border border-line bg-surface px-3 py-2">
              <dt className="text-xs uppercase tracking-wide text-ink-dim">
                {def.icon && <span aria-hidden="true">{def.icon} </span>}
                {def.label}
              </dt>
              <dd className="mt-0.5 font-semibold text-ink">
                {value === undefined ? <UnknownValue /> : formatStat(value, def)}
              </dd>
              {growth !== undefined && (
                <dd className="text-xs text-ink-dim">+{formatStat(growth, def)} per {levelLabel.toLowerCase()}</dd>
              )}
            </div>
          );
        })}
        {item.level !== undefined && (
          <div className="rounded border border-line bg-surface px-3 py-2">
            <dt className="text-xs uppercase tracking-wide text-ink-dim">Read at</dt>
            <dd className="mt-0.5 font-semibold text-ink">
              {levelLabel} {item.level}
            </dd>
          </div>
        )}
        {item.upgradeCost !== undefined && (
          <div className="rounded border border-line bg-surface px-3 py-2">
            <dt className="text-xs uppercase tracking-wide text-ink-dim">Next upgrade</dt>
            <dd className="mt-0.5 font-semibold text-ink">{formatStat(item.upgradeCost, { id: "cost", label: "Cost", format: "compact" })}</dd>
          </div>
        )}
      </dl>
    </article>
  );
}
