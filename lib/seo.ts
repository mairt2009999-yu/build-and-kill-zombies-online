import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

/**
 * 每个页面的 metadata 工厂:自动生成 canonical、OG、Twitter 卡片。
 * path 必须以 / 开头、以 / 结尾(与 trailingSlash 一致),如 "/codes/"
 */
export function buildMetadata({
  title,
  description,
  path,
  noIndex = false,
}: {
  title?: string;
  description: string;
  path: string;
  /** 关闭的可选模块页面用它挂 noindex,避免空页面被收录 */
  noIndex?: boolean;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = title
    ? siteConfig.seo.titleTemplate.replace("%s", title)
    : siteConfig.seo.defaultTitle;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: "website",
      siteName: siteConfig.name,
      images: ["/opengraph-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/opengraph-image.png"],
    },
  };
}

/** 法务页正文中的占位符替换 */
export function interpolate(text: string): string {
  return text
    .replaceAll("{siteName}", siteConfig.name)
    .replaceAll("{gameTitle}", siteConfig.game.title)
    .replaceAll("{email}", siteConfig.contactEmail);
}
