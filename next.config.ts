import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 纯静态导出:构建产物在 ./out,直接交给 Cloudflare Workers Static Assets 托管
  output: "export",
  // 与 Cloudflare 的 auto-trailing-slash 行为保持一致,URL 统一为 /page/ 形式
  trailingSlash: true,
  images: {
    // 静态导出没有图片优化服务,使用原图
    unoptimized: true,
  },
};

export default nextConfig;
