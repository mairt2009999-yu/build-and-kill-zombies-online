import type { Metadata } from "next";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import SectionHeading from "@/components/SectionHeading";
import TierGrid from "@/components/TierGrid";
import { buildMetadata } from "@/lib/seo";
import { tierItemListJsonLd } from "@/lib/jsonld";
import { tierListContent } from "@/content/tier-list";

export const metadata: Metadata = buildMetadata({
  title: tierListContent.pageTitle,
  description: tierListContent.metaDescription,
  path: "/tier-list/",
});

export default function TierListPage() {
  return (
    <>
      <JsonLd data={tierItemListJsonLd(tierListContent.entries)} />
      <Breadcrumbs crumbs={[{ name: "Tier List", path: "/tier-list/" }]} />
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-10">
        <SectionHeading as="h1" title={tierListContent.pageTitle} intro={tierListContent.intro} />
        <p className="mb-8 text-sm text-ink-dim">
          Updated <time dateTime={tierListContent.updatedOn}>{tierListContent.updatedOn}</time>
        </p>
        <section className="mb-10 grid gap-4 sm:grid-cols-2">
          {tierListContent.criteria.map((criterion) => (
            <article key={criterion.heading} className="rounded-lg border border-line bg-panel p-5">
              <h2 className="font-semibold text-ink">{criterion.heading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">{criterion.body}</p>
            </article>
          ))}
        </section>
        <h2 className="mb-4 text-2xl font-bold text-ink">Best current priorities</h2>
        <TierGrid entries={tierListContent.entries} />
      </div>
      <AdSlot slot="tier-mid" />
      <div className="mx-auto max-w-6xl px-4 py-6">
        <h2 className="text-2xl font-bold text-ink">{tierListContent.closingHeading}</h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-ink-dim">{tierListContent.closingBody}</p>
      </div>
      <FaqSection heading="Tier list FAQ" items={tierListContent.faq} />
    </>
  );
}
