import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { updatesContent } from "@/content/updates";

export const metadata: Metadata = buildMetadata({
  title: updatesContent.pageTitle,
  description: updatesContent.metaDescription,
  path: "/updates/",
});

export default function UpdatesPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: "Updates", path: "/updates/" }]} />
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-10">
        <SectionHeading as="h1" title={updatesContent.pageTitle} intro={updatesContent.intro} />
        <ol className="space-y-4">
          {updatesContent.entries.map((entry) => (
            <li key={`${entry.date}-${entry.title}`} className="rounded-lg border border-line bg-panel p-5">
              <div className="flex flex-wrap items-center gap-3">
                <time dateTime={entry.date} className="text-sm font-bold text-accent">
                  {entry.date}
                </time>
                {entry.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-line px-1.5 py-0.5 text-xs uppercase text-ink-dim"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="mt-2 text-lg font-bold text-ink">{entry.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">{entry.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
