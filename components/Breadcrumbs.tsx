import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";

/**
 * 面包屑导航条 + BreadcrumbList 结构化数据。
 *
 * ⚠️ 位置约定:放在页面最外层、正文容器 *之前* —— 它是紧贴 Header 的一条通栏导航条,
 * 自己带左右留白和下边框,和 Header 一起构成"两层顶栏"。
 *   ✅ <><Breadcrumbs .../><div className="mx-auto max-w-6xl px-4 pt-8 pb-10">…</div></>
 *   ❌ 塞进 max-w-6xl 容器里 → 它会浮在 header 和标题之间的空白里,和 eyebrow 挤成两行小字
 *   ❌ 塞进 hero 里 → 被背景图压住看不清,hero 一换配图就失效,内页起始位置也会随 hero 高度乱跳
 *
 * crumbs 不含首页,组件会自动加上 Home。
 */
export default function Breadcrumbs({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  const all = [{ name: "Home", path: "/" }, ...crumbs];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(all)} />
      <nav aria-label="Breadcrumb" className="border-b border-line bg-panel/40">
        <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-2 gap-y-1 px-4 py-2.5 text-sm text-ink-dim">
          {all.map((crumb, i) => (
            <li key={crumb.path} className="flex items-center gap-2">
              {i === all.length - 1 ? (
                <span aria-current="page" className="font-medium text-ink">
                  {crumb.name}
                </span>
              ) : (
                <>
                  <Link href={crumb.path} className="transition hover:text-accent">
                    {crumb.name}
                  </Link>
                  {/* 分隔符跟在自己这一节后面:窄屏换行时新起一行是标题,不会是一个孤零零的斜杠 */}
                  <span aria-hidden="true" className="select-none opacity-50">
                    /
                  </span>
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
