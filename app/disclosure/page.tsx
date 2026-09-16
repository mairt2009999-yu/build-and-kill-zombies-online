import type { Metadata } from "next";
import LegalBody from "@/components/LegalBody";
import { buildMetadata } from "@/lib/seo";
import { legalPages } from "@/content/legal";

const page = legalPages.find((p) => p.slug === "disclosure")!;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.metaDescription,
  path: "/disclosure/",
});

export default function Page() {
  return <LegalBody page={page} />;
}
