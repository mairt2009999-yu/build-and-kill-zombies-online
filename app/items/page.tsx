import type { Metadata } from "next";
import Image from "next/image";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import ItemTable from "@/components/ItemTable";
import JsonLd from "@/components/JsonLd";
import SectionHeading from "@/components/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { itemDatasetJsonLd, itemListJsonLd } from "@/lib/jsonld";
import { itemsContent } from "@/content/items";
import { siteConfig } from "@/content/site";

const enabled = siteConfig.features.itemDatabase && itemsContent.items.length > 0;

export const metadata: Metadata = buildMetadata({
  title: itemsContent.pageTitle,
  description: itemsContent.metaDescription,
  path: "/items/",
  noIndex: !enabled,
});

export default function ItemsPage() {
  if (!enabled) {
    return (
      <>
        <Breadcrumbs crumbs={[{ name: siteConfig.labels.items, path: "/items/" }]} />
        <div className="mx-auto max-w-6xl px-4 pt-8 pb-10">
          <SectionHeading as="h1" title={itemsContent.pageTitle} intro="This section is not in use on this site." />
        </div>
      </>
    );
  }

  return (
    <>
      <JsonLd data={itemListJsonLd(itemsContent)} />
      <JsonLd data={itemDatasetJsonLd(itemsContent)} />
      <Breadcrumbs crumbs={[{ name: siteConfig.labels.items, path: "/items/" }]} />
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-10">
        <SectionHeading as="h1" title={itemsContent.pageTitle} intro={itemsContent.intro} />
        <p className="mb-2 text-sm text-ink-dim">
          Updated <time dateTime={itemsContent.updatedOn}>{itemsContent.updatedOn}</time>
        </p>
        {itemsContent.gameVersionNote && (
          <p className="mb-8 max-w-3xl text-sm text-ink-dim">{itemsContent.gameVersionNote}</p>
        )}

        {itemsContent.pageImages && itemsContent.pageImages.length > 0 && (
          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            {itemsContent.pageImages.map((img) => (
              <figure key={img.src} className="overflow-hidden rounded-lg border border-line bg-panel">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1600}
                  height={864}
                  className="h-auto w-full"
                />
                {img.caption && (
                  <figcaption className="px-4 py-3 text-sm leading-relaxed text-ink-dim">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}

        <ItemTable content={itemsContent} />

        {itemsContent.evidencePolicy && itemsContent.evidencePolicy.length > 0 && (
          <section className="mt-12 grid gap-4 sm:grid-cols-2">
            {itemsContent.evidencePolicy.map((note) => (
              <article key={note.heading} className="rounded-lg border border-line bg-panel p-5">
                <h2 className="font-semibold text-ink">{note.heading}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-dim">{note.body}</p>
              </article>
            ))}
          </section>
        )}
      </div>
      <AdSlot slot="items-bottom" />
      <FaqSection heading={`${itemsContent.pageTitle} FAQ`} items={itemsContent.faq} />
    </>
  );
}
