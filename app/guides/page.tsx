import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import LinkCard from "@/components/LinkCard";
import SectionHeading from "@/components/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { guidesContent } from "@/content/guides";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.game.title} Guides`,
  description: `All ${siteConfig.game.title} guides: beginner routes, progression priorities, and advanced strategy.`,
  path: "/guides/",
});

export default function GuidesPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: "Guides", path: "/guides/" }]} />
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-10">
        <SectionHeading
          as="h1"
          title={`${siteConfig.game.title} Guides`}
          intro={guidesContent.intro}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {guidesContent.guides.map((guide) => (
            <LinkCard
              key={guide.slug}
              eyebrow={guide.label}
              title={guide.title}
              description={guide.summary}
              href={`/guides/${guide.slug}/`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
