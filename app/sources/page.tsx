import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import LinkCard from "@/components/LinkCard";
import SectionHeading from "@/components/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { sourcesContent } from "@/content/sources";

export const metadata: Metadata = buildMetadata({
  title: sourcesContent.pageTitle,
  description: sourcesContent.metaDescription,
  path: "/sources/",
});

export default function SourcesPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: "Sources", path: "/sources/" }]} />
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-10">
        <SectionHeading as="h1" title={sourcesContent.heading} intro={sourcesContent.intro} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sourcesContent.links.map((link) => (
            <LinkCard
              key={link.title}
              eyebrow={link.status === "verified" ? `✓ ${link.eyebrow}` : link.eyebrow}
              title={link.title}
              description={link.description}
              href={link.href}
              external
            />
          ))}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {sourcesContent.notes.map((note) => (
            <article key={note.heading} className="rounded-lg border border-line bg-panel p-5">
              <h2 className="font-semibold text-ink">{note.heading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">{note.body}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
