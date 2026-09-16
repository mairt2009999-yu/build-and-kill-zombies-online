import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EvidenceBadge from "@/components/EvidenceBadge";
import RarityBadge from "@/components/RarityBadge";
import SectionHeading from "@/components/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { formatOdds, sortedRarities } from "@/lib/items";
import { itemsContent } from "@/content/items";
import { siteConfig } from "@/content/site";

const enabled = siteConfig.features.itemDatabase && itemsContent.rarities.length > 0;

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.labels.rarities} explained`,
  description: `Every rarity tier in ${siteConfig.game.title}, in order, with the in-game colour and the items confirmed at each tier.`,
  path: "/rarities/",
  noIndex: !enabled,
});

export default function RaritiesPage() {
  if (!enabled) {
    return (
      <>
        <Breadcrumbs crumbs={[{ name: siteConfig.labels.rarities, path: "/rarities/" }]} />
        <div className="mx-auto max-w-6xl px-4 pt-8 pb-10">
          <SectionHeading as="h1" title={siteConfig.labels.rarities} intro="This section is not in use on this site." />
        </div>
      </>
    );
  }

  const tiers = sortedRarities(itemsContent);

  return (
    <>
      <Breadcrumbs crumbs={[{ name: siteConfig.labels.rarities, path: "/rarities/" }]} />
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-10">
        <SectionHeading
          as="h1"
          title={`${siteConfig.game.title} ${siteConfig.labels.rarities.toLowerCase()}`}
          intro={`The full tier ladder in order, using the colours the game itself uses. Tiers we have seen named are marked as such; the rest are listed by colour only rather than guessed at.`}
        />

        <ol className="space-y-4">
          {tiers.map((rarity) => {
            const items = itemsContent.items.filter((i) => i.rarityId === rarity.id);
            return (
              <li key={rarity.id} className="rounded-lg border border-line bg-panel p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md text-sm font-extrabold text-black"
                    style={{ backgroundColor: rarity.color }}
                    aria-hidden="true"
                  >
                    {rarity.order}
                  </span>
                  <RarityBadge rarity={rarity} />
                  <code className="rounded border border-line bg-surface px-2 py-0.5 text-xs text-ink-dim">
                    {rarity.color}
                  </code>
                  <EvidenceBadge tier={rarity.evidence} source={rarity.source} />
                </div>

                {rarity.note && <p className="mt-3 text-sm leading-relaxed text-ink-dim">{rarity.note}</p>}

                {items.length > 0 ? (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/items/${item.slug}/`}
                          className="inline-block rounded border border-line bg-surface px-3 py-1 text-sm text-ink hover:border-accent"
                        >
                          {item.name}
                          {formatOdds(item) && (
                            <span className="ml-2 text-xs text-ink-dim">{formatOdds(item)}</span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-sm text-ink-dim">No items confirmed at this tier yet.</p>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}
