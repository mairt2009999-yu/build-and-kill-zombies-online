import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // 静态导出会为每个页面额外产出一份 RSC Flight 载荷(out/**/index.txt)。
      // 它们以 200 text/plain 可被抓取,内容是给客户端路由用的序列化数据,
      // 对搜索引擎没有价值,只消耗抓取预算。
      disallow: ["/*index.txt$"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
