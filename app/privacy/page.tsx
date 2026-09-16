import type { Metadata } from "next";
import LegalBody from "@/components/LegalBody";
import { buildMetadata } from "@/lib/seo";
import { legalPages } from "@/content/legal";

const page = legalPages.find((p) => p.slug === "privacy")!;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.metaDescription,
  path: "/privacy/",
});

export default function Page() {
  return <LegalBody page={page} />;
}
