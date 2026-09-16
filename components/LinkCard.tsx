import Link from "next/link";

/** 通用卡片:eyebrow + 标题 + 描述,整卡可点 */
export default function LinkCard({
  eyebrow,
  title,
  description,
  href,
  external = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  external?: boolean;
}) {
  const inner = (
    <article className="h-full rounded-lg border border-line bg-panel p-5 transition hover:border-accent">
      <p className="text-xs font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
      <h3 className="mt-2 text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-dim">{description}</p>
    </article>
  );
  if (!href) return inner;
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer nofollow">
      {inner}
    </a>
  ) : (
    <Link href={href}>{inner}</Link>
  );
}
