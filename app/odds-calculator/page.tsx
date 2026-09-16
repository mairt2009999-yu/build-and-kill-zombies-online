import type { Metadata } from "next";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import OddsCalculator from "@/components/OddsCalculator";
import SectionHeading from "@/components/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { calculatorJsonLd } from "@/lib/jsonld";
import { successChance } from "@/lib/items";
import { itemsContent, oddsCalculatorContent } from "@/content/items";
import { siteConfig } from "@/content/site";

const hasOdds = itemsContent.items.some((i) => successChance(i) !== undefined);
const enabled = siteConfig.features.oddsCalculator && hasOdds;

export const metadata: Metadata = buildMetadata({
  title: oddsCalculatorContent.pageTitle,
  description: oddsCalculatorContent.metaDescription,
  path: "/odds-calculator/",
  noIndex: !enabled,
});

export default function OddsCalculatorPage() {
  if (!enabled) {
    return (
      <>
        <Breadcrumbs crumbs={[{ name: siteConfig.labels.oddsCalculator, path: "/odds-calculator/" }]} />
        <div className="mx-auto max-w-6xl px-4 pt-8 pb-10">
          <SectionHeading
            as="h1"
            title={oddsCalculatorContent.pageTitle}
            intro="This section is not in use on this site."
          />
        </div>
      </>
    );
  }

  return (
    <>
      <JsonLd
        data={calculatorJsonLd(oddsCalculatorContent.pageTitle, oddsCalculatorContent.metaDescription)}
      />
      <Breadcrumbs crumbs={[{ name: siteConfig.labels.oddsCalculator, path: "/odds-calculator/" }]} />
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-10">
        <SectionHeading
          as="h1"
          title={oddsCalculatorContent.pageTitle}
          intro={oddsCalculatorContent.intro}
        />
        <OddsCalculator items={itemsContent} content={oddsCalculatorContent} />
      </div>
      <AdSlot slot="odds-bottom" />
      <FaqSection heading={`${oddsCalculatorContent.pageTitle} FAQ`} items={oddsCalculatorContent.faq} />
    </>
  );
}
