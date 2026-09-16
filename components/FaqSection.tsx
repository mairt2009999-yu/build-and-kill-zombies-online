import JsonLd from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/jsonld";
import type { FaqItem } from "@/content/types";

/** FAQ 区块 + FAQPage 结构化数据 */
export default function FaqSection({
  heading,
  intro,
  items,
}: {
  heading: string;
  intro?: string;
  items: FaqItem[];
}) {
  if (items.length === 0) return null;
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={faqJsonLd(items)} />
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">FAQ</p>
      <h2 className="text-2xl font-bold text-ink">{heading}</h2>
      {intro && <p className="mt-3 max-w-3xl text-ink-dim">{intro}</p>}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <article key={item.question} className="rounded-lg border border-line bg-panel p-5">
            <h3 className="font-semibold text-ink">{item.question}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-dim">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
