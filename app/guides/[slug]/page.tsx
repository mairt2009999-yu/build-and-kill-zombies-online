import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import ArticleSections from "@/components/ArticleSections";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import SectionHeading from "@/components/SectionHeading";
import TrackedLink from "@/components/TrackedLink";
import { buildMetadata } from "@/lib/seo";
import { guidesContent } from "@/content/guides";

export const dynamicParams = false;

export function generateStaticParams() {
  return guidesContent.guides.map((guide) => ({ slug: guide.slug }));
}

/**
 * 系列导航:同 series 的页面按 seriesOrder 排序,给出上一部/下一部 + 全系列清单。
 * data 里加 series/seriesOrder 两个字段即可生效,没有系列的指南不受影响。
 */
function seriesNav(slug: string) {
  const guide = guidesContent.guides.find((g) => g.slug === slug);
  if (!guide?.series) return null;
  const parts = guidesContent.guides
    .filter((g) => g.series === guide.series)
    .sort((a, b) => (a.seriesOrder ?? 0) - (b.seriesOrder ?? 0));
  const idx = parts.findIndex((g) => g.slug === guide.slug);
  if (idx < 0 || parts.length < 2) return null;
  return {
    position: idx + 1,
    total: parts.length,
    prev: idx > 0 ? parts[idx - 1] : null,
    next: idx < parts.length - 1 ? parts[idx + 1] : null,
    all: parts,
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = guidesContent.guides.find((g) => g.slug === slug);
  if (!guide) return {};
  return buildMetadata({
    title: guide.title,
    description: guide.metaDescription,
    path: `/guides/${guide.slug}/`,
  });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guidesContent.guides.find((g) => g.slug === slug);
  if (!guide) notFound();
  const nav = seriesNav(slug);

  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Guides", path: "/guides/" },
          { name: guide.title, path: `/guides/${guide.slug}/` },
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-10">
        {nav && (
          <p className="mb-4 inline-flex flex-wrap items-center gap-2 rounded-md border border-accent/40 bg-accent/5 px-3 py-1.5 text-xs font-semibold text-accent">
            Walkthrough · Part {nav.position} of {nav.total}
            <span className="text-ink-dim">·</span>
            <Link href="/guides/" className="underline decoration-dotted underline-offset-2 hover:text-ink">
              All guides
            </Link>
          </p>
        )}
        <SectionHeading as="h1" eyebrow={guide.label} title={guide.title} intro={guide.summary} />
        {guide.updatedOn && (
          <p className="-mt-4 mb-6 text-sm text-ink-dim">
            Updated <time dateTime={guide.updatedOn}>{guide.updatedOn}</time>
          </p>
        )}
        {guide.heroImage && (
          <figure className="mb-8 max-w-3xl overflow-hidden rounded-lg border border-line bg-panel">
            <Image
              src={guide.heroImage.src}
              alt={guide.heroImage.alt}
              width={768}
              height={432}
              priority
              className="w-full object-cover"
            />
            {guide.heroImage.caption && (
              <figcaption className="px-4 py-2 text-xs text-ink-dim">{guide.heroImage.caption}</figcaption>
            )}
          </figure>
        )}
        <ArticleSections sections={guide.sections} />

        {nav && (
          <nav aria-label="Walkthrough navigation" className="mt-12 rounded-lg border border-line bg-panel p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Walkthrough · Part {nav.position} of {nav.total}
            </p>
            <div className="mt-3 flex flex-wrap items-stretch gap-3">
              {nav.prev ? (
                <TrackedLink
                  href={`/guides/${nav.prev.slug}/`}
                  event="walkthrough_nav"
                  params={{ direction: "prev", part: nav.position }}
                  className="flex-1 rounded-md border border-line bg-surface px-4 py-3 text-sm font-semibold text-ink transition hover:border-accent"
                >
                  ← Part {nav.position - 1}: {nav.prev.title}
                </TrackedLink>
              ) : (
                <span className="flex-1 rounded-md border border-dashed border-line px-4 py-3 text-sm text-ink-dim">
                  You are at the start of the walkthrough.
                </span>
              )}
              {nav.next ? (
                <TrackedLink
                  href={`/guides/${nav.next.slug}/`}
                  event="walkthrough_nav"
                  params={{ direction: "next", part: nav.position }}
                  className="flex-1 rounded-md border border-accent/60 bg-accent/10 px-4 py-3 text-sm font-semibold text-accent transition hover:bg-accent/20"
                >
                  Next — Part {nav.position + 1}: {nav.next.title} →
                </TrackedLink>
              ) : (
                <span className="flex-1 rounded-md border border-dashed border-line px-4 py-3 text-sm text-ink-dim">
                  You have reached the final part.
                </span>
              )}
            </div>
            <ol className="mt-4 flex flex-wrap gap-2">
              {nav.all.map((part, i) => (
                <li key={part.slug}>
                  {part.slug === slug ? (
                    <span className="inline-block rounded border border-accent/60 bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                      {i + 1}. {part.title}
                    </span>
                  ) : (
                    <Link
                      href={`/guides/${part.slug}/`}
                      className="inline-block rounded border border-line bg-surface px-2.5 py-1 text-xs text-ink-dim transition hover:border-accent hover:text-ink"
                    >
                      {i + 1}. {part.title}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
      <AdSlot slot="guide-bottom" />
      {guide.faq && <FaqSection heading={`${guide.title} FAQ`} items={guide.faq} />}
    </>
  );
}
