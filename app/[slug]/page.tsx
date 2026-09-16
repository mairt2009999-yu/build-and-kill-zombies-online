import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import ArticleSections from "@/components/ArticleSections";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import SectionHeading from "@/components/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { wikiContent } from "@/content/wiki";

// Wiki 实体页:每个 content/wiki.ts 里的实体生成一个顶级页面 /{slug}/
// (静态路由优先级更高,不会与 /codes/ 等固定页面冲突)
export const dynamicParams = false;

export function generateStaticParams() {
  return wikiContent.entities.map((entity) => ({ slug: entity.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entity = wikiContent.entities.find((e) => e.slug === slug);
  if (!entity) return {};
  return buildMetadata({
    title: entity.title,
    description: entity.metaDescription,
    path: `/${entity.slug}/`,
  });
}

export default async function WikiEntityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entity = wikiContent.entities.find((e) => e.slug === slug);
  if (!entity) notFound();

  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Wiki", path: "/wiki/" },
          { name: entity.title, path: `/${entity.slug}/` },
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-10">
        <SectionHeading as="h1" eyebrow={entity.eyebrow} title={entity.title} intro={entity.summary} />
        {entity.updatedOn && (
          <p className="-mt-4 mb-6 text-sm text-ink-dim">
            Updated <time dateTime={entity.updatedOn}>{entity.updatedOn}</time>
          </p>
        )}
        {entity.heroImage && (
          <figure className="mb-8 max-w-3xl overflow-hidden rounded-lg border border-line bg-panel">
            <Image
              src={entity.heroImage.src}
              alt={entity.heroImage.alt}
              width={768}
              height={432}
              priority
              className="w-full object-cover"
            />
            {entity.heroImage.caption && (
              <figcaption className="px-4 py-2 text-xs text-ink-dim">{entity.heroImage.caption}</figcaption>
            )}
          </figure>
        )}
        <ArticleSections sections={entity.sections} />
      </div>
      <AdSlot slot="wiki-bottom" />
      {entity.faq && <FaqSection heading={`${entity.title} FAQ`} items={entity.faq} />}
    </>
  );
}
