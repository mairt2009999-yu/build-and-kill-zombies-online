import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

// 构建期生成的 OG 分享图(1200x630),文案自动取自站点配置
export const dynamic = "force-static";
export const alt = siteConfig.seo.defaultTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: siteConfig.themeColor,
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 28,
            fontWeight: 700,
            color: siteConfig.accentColor,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          {siteConfig.game.platform} · Fan Wiki
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 72, fontWeight: 800, lineHeight: 1.1 }}>
          {siteConfig.game.title}
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 34, color: "#a1a1aa" }}>
          Codes · Wiki · Tier List · Tools
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 26,
            fontWeight: 700,
            color: siteConfig.accentColor,
          }}
        >
          {siteConfig.url.replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    { ...size }
  );
}
