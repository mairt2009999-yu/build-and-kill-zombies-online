import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import ArticleSections from "@/components/ArticleSections";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import ItemStatCard from "@/components/ItemStatCard";
import LevelCalculator from "@/components/LevelCalculator";
import RarityBadge from "@/components/RarityBadge";
import SectionHeading from "@/components/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { formatOdds, rarityOf } from "@/lib/items";
import { itemsContent } from "@/content/items";
import { siteConfig } from "@/content/site";

// 物品详情页。
// output: "export" 要求动态路由必须至少产出一个静态参数,所以物品库为空时
// 用一个占位 slug 兜底(该页 noindex、不进 sitemap),而不是返回空数组 ——
// 返回空数组会让 next build 直接报 "missing generateStaticParams()"。
export const dynamicParams = false;

const EMPTY_SLUG = "not-available";
const enabled = siteConfig.features.itemDatabase && itemsContent.items.length > 0;

export function generateStaticParams() {
  if (itemsContent.items.length === 0) return [{ slug: EMPTY_SLUG }];
  return itemsContent.items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = itemsContent.items.find((i) => i.slug === slug);
  if (!item) {
    return buildMetadata({
      title: siteConfig.labels.items,
      description: "This section is not in use on this site.",
      path: `/items/${EMPTY_SLUG}/`,
      noIndex: true,
    });
  }
  const odds = formatOdds(item);
  return buildMetadata({
    title: item.pageTitle ?? item.name,
    description:
      item.summary ??
      `${item.name} stats, rarity${odds ? ` and ${odds} drop odds` : ""} in ${siteConfig.game.title}, with the source for every value.`,
    path: `/items/${item.slug}/`,
    noIndex: !enabled,
  });
}

export default async function ItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = itemsContent.items.find((i) => i.slug === slug);
  if (!item) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10">
        <SectionHeading
          as="h1"
          title={siteConfig.labels.items}
          intro="This section is not in use on this site."
        />
      </div>
    );
  }

  const rarity = rarityOf(itemsContent, item);
  const base = item.variantOf
    ? itemsContent.items.find((i) => i.slug === item.variantOf)
    : undefined;
  const variants = itemsContent.items.filter((i) => i.variantOf === item.slug);
  const sameRarity = itemsContent.items
    .filter((i) => i.rarityId === item.rarityId && i.slug !== item.slug)
    .slice(0, 8);

  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: siteConfig.labels.items, path: "/items/" },
          { name: item.name, path: `/items/${item.slug}/` },
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-10">
        <SectionHeading
          as="h1"
          eyebrow={rarity?.name}
          title={item.pageTitle ?? item.name}
          intro={item.summary}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <ItemStatCard item={item} content={itemsContent} />
          <LevelCalculator item={item} content={itemsContent} />
        </div>

        {(base || variants.length > 0) && (
          <section className="mt-10">
            <h2 className="mb-4 text-2xl font-bold text-ink">Variants</h2>
            <ul className="flex flex-wrap gap-3">
              {base && (
                <li>
                  <Link
                    href={`/items/${base.slug}/`}
                    className="inline-flex items-center gap-2 rounded-lg border border-line bg-panel px-4 py-2 text-ink hover:border-accent"
                  >
                    {base.name}
                    <span className="text-xs text-ink-dim">base version</span>
                  </Link>
                </li>
              )}
              {variants.map((v) => (
                <li key={v.slug}>
                  <Link
                    href={`/items/${v.slug}/`}
                    className="inline-flex items-center gap-2 rounded-lg border border-line bg-panel px-4 py-2 text-ink hover:border-accent"
                  >
                    {v.name}
                    {v.variantLabel && <span className="text-xs text-ink-dim">{v.variantLabel}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {sameRarity.length > 0 && (
          <section className="mt-10">
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-ink">
              Others at this rarity <RarityBadge rarity={rarity} size="sm" />
            </h2>
            <ul className="flex flex-wrap gap-3">
              {sameRarity.map((i) => (
                <li key={i.slug}>
                  <Link
                    href={`/items/${i.slug}/`}
                    className="inline-block rounded-lg border border-line bg-panel px-4 py-2 text-ink hover:border-accent"
                  >
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {item.extraSections && item.extraSections.length > 0 && (
          <div className="mt-10">
            <ArticleSections sections={item.extraSections} />
          </div>
        )}

        {item.faq && item.faq.length > 0 && (
          <div className="mt-10">
            <FaqSection heading={`${item.name} FAQ`} items={item.faq} />
          </div>
        )}

        <p className="mt-10 text-sm text-ink-dim">
          {(item.relatedLinks ?? []).map((link) => (
            <Link key={link.href} href={link.href} className="mr-4 text-accent hover:underline">
              {link.label}
            </Link>
          ))}
          <Link href="/items/" className="text-accent hover:underline">
            ← Back to the full {siteConfig.labels.items.toLowerCase()} list
          </Link>
        </p>
      </div>
      <AdSlot slot="item-bottom" />
    </>
  );
}
