/** 区块标题:eyebrow 短标签 + H2 + 说明文字 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
      )}
      <Tag className={Tag === "h1" ? "text-3xl font-extrabold text-ink sm:text-4xl" : "text-2xl font-bold text-ink"}>
        {title}
      </Tag>
      {intro && <p className="mt-3 max-w-3xl leading-relaxed text-ink-dim">{intro}</p>}
    </div>
  );
}
