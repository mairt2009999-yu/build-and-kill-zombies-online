import Image from "next/image";
import type { ContentImage, GuideSection } from "@/content/types";

function SectionImage({ image }: { image: ContentImage }) {
  return (
    <figure className="mt-5 max-w-3xl overflow-hidden rounded-lg border border-line bg-panel">
      <Image
        src={image.src}
        alt={image.alt}
        width={768}
        height={432}
        className="w-full object-cover"
      />
      {image.caption && (
        <figcaption className="px-4 py-2 text-xs text-ink-dim">{image.caption}</figcaption>
      )}
    </figure>
  );
}

function SectionTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="mt-5 max-w-3xl overflow-x-auto rounded-lg border border-line">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-panel">
            {headers.map((header) => (
              <th key={header} className="px-4 py-2.5 text-left font-semibold text-ink">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-line">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-2.5 text-ink-dim">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** 结构化正文渲染:小节标题 + 段落 + 列表 + 配图 + 表格(guides 与 wiki 实体页共用) */
export default function ArticleSections({ sections }: { sections: GuideSection[] }) {
  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <section key={section.heading}>
          <h2 className="text-2xl font-bold text-ink">{section.heading}</h2>
          {section.paragraphs.map((paragraph, i) => (
            <p key={i} className="mt-3 max-w-3xl leading-relaxed text-ink-dim">
              {paragraph}
            </p>
          ))}
          {section.list && (
            <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-6 text-ink-dim">
              {section.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
          {section.table && <SectionTable {...section.table} />}
          {section.image && <SectionImage image={section.image} />}
        </section>
      ))}
    </div>
  );
}
