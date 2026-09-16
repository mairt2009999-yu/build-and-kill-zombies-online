import type { Metadata } from "next";
import Link from "next/link";

// 没有这份 metadata 的话,404 页会继承 app/layout.tsx 的根 metadata:
// canonical 指向首页、robots: "index, follow"、标题也是首页标题。
// 结果 Google 看到一个 200 状态、自称是首页、正文却写着 "Page not found"
// 的页面 —— 软 404 的完美触发条件。
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-start px-4 py-24">
      <p className="text-xs font-semibold uppercase tracking-widest text-accent">404</p>
      <h1 className="mt-2 text-3xl font-extrabold text-ink">Page not found</h1>
      <p className="mt-3 max-w-xl text-ink-dim">
        The page you are looking for does not exist or has moved. Try the codes page or the wiki hub.
      </p>
      <div className="mt-6 flex gap-3">
        <Link
          href="/"
          className="rounded-md bg-accent px-4 py-2 text-sm font-bold text-black transition hover:opacity-90"
        >
          Go home
        </Link>
        <Link
          href="/codes/"
          className="rounded-md border border-line bg-panel px-4 py-2 text-sm font-bold text-ink transition hover:border-accent"
        >
          Check codes
        </Link>
      </div>
    </div>
  );
}
