import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import LinkCard from "@/components/LinkCard";
import SectionHeading from "@/components/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { wikiContent } from "@/content/wiki";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: wikiContent.heading,
  description: wikiContent.intro,
  path: "/wiki/",
});

export default function WikiPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: wikiContent.heading, path: "/wiki/" }]} />
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-10">
        <SectionHeading as="h1" title={wikiContent.heading} intro={wikiContent.intro} />
        <div className="grid gap-4 sm:grid-cols-2">
          {wikiContent.entities.map((entity) => (
            <LinkCard
              key={entity.slug}
              eyebrow={entity.eyebrow}
              title={entity.title}
              description={entity.summary}
              href={`/${entity.slug}/`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
