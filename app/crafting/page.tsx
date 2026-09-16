import type { Metadata } from "next";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import CraftingRecipes from "@/components/CraftingRecipes";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import SectionHeading from "@/components/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { recipeHowToJsonLd } from "@/lib/jsonld";
import { craftingContent } from "@/content/crafting";
import { siteConfig } from "@/content/site";

const enabled = siteConfig.features.crafting && craftingContent.recipes.length > 0;

export const metadata: Metadata = buildMetadata({
  title: craftingContent.pageTitle,
  description: craftingContent.metaDescription,
  path: "/crafting/",
  noIndex: !enabled,
});

export default function CraftingPage() {
  if (!enabled) {
    return (
      <>
        <Breadcrumbs crumbs={[{ name: siteConfig.labels.crafting, path: "/crafting/" }]} />
        <div className="mx-auto max-w-6xl px-4 pt-8 pb-10">
          <SectionHeading as="h1" title={craftingContent.pageTitle} intro="This section is not in use on this site." />
        </div>
      </>
    );
  }

  const coverage =
    craftingContent.totalRecipes !== undefined
      ? `${craftingContent.recipes.length} of ${craftingContent.totalRecipes} recipes verified so far.`
      : undefined;

  return (
    <>
      {craftingContent.recipes.map((recipe) => (
        <JsonLd key={recipe.id} data={recipeHowToJsonLd(recipe)} />
      ))}
      <Breadcrumbs crumbs={[{ name: siteConfig.labels.crafting, path: "/crafting/" }]} />
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-10">
        <SectionHeading as="h1" title={craftingContent.pageTitle} intro={craftingContent.intro} />
        <p className="mb-8 text-sm text-ink-dim">
          Updated <time dateTime={craftingContent.updatedOn}>{craftingContent.updatedOn}</time>
          {coverage && <span className="ml-2">{coverage}</span>}
        </p>

        <CraftingRecipes recipes={craftingContent.recipes} />

        {craftingContent.notes && craftingContent.notes.length > 0 && (
          <section className="mt-10 grid gap-4 sm:grid-cols-2">
            {craftingContent.notes.map((note) => (
              <article key={note.heading} className="rounded-lg border border-line bg-panel p-5">
                <h2 className="font-semibold text-ink">{note.heading}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-dim">{note.body}</p>
              </article>
            ))}
          </section>
        )}
      </div>
      <AdSlot slot="crafting-bottom" />
      <FaqSection heading={`${craftingContent.pageTitle} FAQ`} items={craftingContent.faq} />
    </>
  );
}
