import type { Metadata } from "next";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import CodesList from "@/components/CodesList";
import FaqSection from "@/components/FaqSection";
import SectionHeading from "@/components/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { codesContent } from "@/content/codes";

export const metadata: Metadata = buildMetadata({
  title: codesContent.pageTitle,
  description: codesContent.metaDescription,
  path: "/codes/",
});

export default function CodesPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: "Codes", path: "/codes/" }]} />
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-10">
        <SectionHeading as="h1" title={codesContent.pageTitle} intro={codesContent.intro} />
        <h2 className="mb-4 text-2xl font-bold text-ink">Current best-known codes</h2>
        <CodesList
          codes={codesContent.codes}
          emptyStateTitle={codesContent.emptyStateTitle}
          emptyStateBody={codesContent.emptyStateBody}
          lastChecked={codesContent.lastChecked}
        />
      </div>
      <AdSlot slot="codes-mid" />
      <div className="mx-auto max-w-6xl px-4">
        <section className="py-6">
          <h2 className="text-2xl font-bold text-ink">How to redeem codes</h2>
          <ol className="mt-4 max-w-3xl list-decimal space-y-2 pl-6 text-ink-dim">
            {codesContent.howToRedeem.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </section>
        <section className="py-6">
          <h2 className="text-2xl font-bold text-ink">Code freshness policy</h2>
          <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-6 text-ink-dim">
            {codesContent.freshnessPolicy.map((rule, i) => (
              <li key={i}>{rule}</li>
            ))}
          </ul>
        </section>
      </div>
      <FaqSection heading="Codes FAQ" items={codesContent.faq} />
    </>
  );
}
