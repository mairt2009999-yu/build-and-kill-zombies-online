import { siteConfig } from "@/content/site";

/**
 * 广告位:ads.enabled 为 false 时渲染占位框(保持版式稳定),
 * 配置 AdSense 后自动切换为真实广告位。
 * AdSense 的加载脚本在 app/layout.tsx 中按需注入。
 */
export default function AdSlot({ slot }: { slot?: string }) {
  if (siteConfig.ads.enabled && siteConfig.ads.adsenseClientId) {
    return (
      <aside aria-label="Advertisement" className="mx-auto my-8 w-full max-w-6xl px-4">
        <ins
          className="adsbygoogle block min-h-[90px]"
          data-ad-client={siteConfig.ads.adsenseClientId}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: "(adsbygoogle = window.adsbygoogle || []).push({});",
          }}
        />
      </aside>
    );
  }
  return (
    <aside aria-label="Advertisement" className="mx-auto my-8 w-full max-w-6xl px-4">
      <div className="flex min-h-[90px] items-center justify-center rounded-lg border border-dashed border-line bg-panel/50">
        <span className="text-[10px] uppercase tracking-widest text-ink-dim">Advertisement</span>
      </div>
    </aside>
  );
}
