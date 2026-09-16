/**
 * GA4 事件追踪工具。
 * gtag 由 app/layout.tsx 在 googleAnalyticsId 非空时注入到 window;
 * 这里做一次存在性检查,GA 未配置的站点不会报错。
 */
export function trackEvent(name: string, params?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === "function") {
    w.gtag("event", name, params ?? {});
  }
}
