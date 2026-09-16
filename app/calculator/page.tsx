import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import Planner from "@/components/Planner";
import SectionHeading from "@/components/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { calculatorJsonLd } from "@/lib/jsonld";
import { calculatorContent } from "@/content/calculator";

export const metadata: Metadata = buildMetadata({
  title: calculatorContent.pageTitle,
  description: calculatorContent.metaDescription,
  path: "/calculator/",
});

export default function CalculatorPage() {
  return (
    <>
      <JsonLd
        data={calculatorJsonLd(calculatorContent.pageTitle, calculatorContent.metaDescription)}
      />
      <Breadcrumbs crumbs={[{ name: "Calculator", path: "/calculator/" }]} />
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-10">
        <SectionHeading as="h1" title={calculatorContent.pageTitle} intro={calculatorContent.intro} />
        <Planner content={calculatorContent} />
      </div>
      <FaqSection heading="Calculator FAQ" items={calculatorContent.faq} />
    </>
  );
}
