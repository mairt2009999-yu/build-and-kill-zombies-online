import Breadcrumbs from "@/components/Breadcrumbs";
import { interpolate } from "@/lib/seo";
import type { LegalPage } from "@/content/legal";

/** 法务/信息页共用渲染:以 "## " 开头的段落渲染为小节标题 */
export default function LegalBody({ page }: { page: LegalPage }) {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: page.title, path: `/${page.slug}/` }]} />
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-10">
        <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">{page.title}</h1>
        <div className="mt-6 max-w-3xl space-y-4">
          {page.body.map((block, i) =>
            block.startsWith("## ") ? (
              <h2 key={i} className="pt-4 text-2xl font-bold text-ink">
                {block.slice(3)}
              </h2>
            ) : (
              <p key={i} className="leading-relaxed text-ink-dim">
                {interpolate(block)}
              </p>
            )
          )}
        </div>
      </div>
    </>
  );
}
