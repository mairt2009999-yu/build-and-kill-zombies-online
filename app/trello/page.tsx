import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import LinkCard from "@/components/LinkCard";
import SectionHeading from "@/components/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { communityContent } from "@/content/community";

export const metadata: Metadata = buildMetadata({
  title: communityContent.pageTitle,
  description: communityContent.metaDescription,
  path: "/trello/",
});

export default function TrelloPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: "Trello & Discord", path: "/trello/" }]} />
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-10">
        <SectionHeading as="h1" title={communityContent.pageTitle} intro={communityContent.intro} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {communityContent.links.map((link) => (
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
          {communityContent.notes.map((note) => (
            <article key={note.heading} className="rounded-lg border border-line bg-panel p-5">
              <h2 className="font-semibold text-ink">{note.heading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">{note.body}</p>
            </article>
          ))}
        </div>
      </div>
      <FaqSection heading="Community links FAQ" items={communityContent.faq} />
    </>
  );
}
