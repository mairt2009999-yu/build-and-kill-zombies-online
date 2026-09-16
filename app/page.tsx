import Image from "next/image";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import FaqSection from "@/components/FaqSection";
import LinkCard from "@/components/LinkCard";
import SectionHeading from "@/components/SectionHeading";
import TierGrid from "@/components/TierGrid";
import { siteConfig } from "@/content/site";
import { homeHero, homeFacts, homeFaq, homeScreenshots } from "@/content/home";
import { codesContent } from "@/content/codes";
import { tierListContent } from "@/content/tier-list";
import { toolsContent } from "@/content/tools";
import { guidesContent } from "@/content/guides";
import { wikiContent } from "@/content/wiki";
import { sourcesContent } from "@/content/sources";
import { updatesContent } from "@/content/updates";

/** 双栏区块里的箭头行(比大卡片更密,能放下更多入口) */
function ArrowRow({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-4 rounded-lg border border-line bg-panel px-5 py-4 transition hover:border-accent"
    >
      <div>
        <p className="font-bold text-ink">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-ink-dim">{description}</p>
      </div>
      <span className="text-ink-dim transition group-hover:translate-x-1 group-hover:text-accent" aria-hidden="true">
        →
      </span>
    </Link>
  );
}

export default function HomePage() {
  const activeCodes = codesContent.codes.filter((code) => code.status === "active");
  const tierPreview = tierListContent.entries.slice(0, 3);
  const latestUpdates = updatesContent.entries.slice(0, 3);
  const lastUpdated = updatesContent.entries[0]?.date ?? codesContent.lastChecked;

  return (
    <>
      {/* ===== Hero:明亮截图 + 左侧渐变压字 ===== */}
      <section className="relative overflow-hidden border-b border-line">
        {/* 背景用 CSS background-image,不用 <Image>。
            踩过的坑:Next 的 <Image fill> 会以 decoding="async" 渲染,图片解码完成后
            并不总会触发合成层重绘 —— 首屏能拿到正确的布局和样式,但那一块就是不画,
            要等用户滚动才出现。CSS 背景随元素一起绘制,没有这个失败模式。
            项目本来就是 images.unoptimized,用 <Image> 也没有优化收益。 */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${siteConfig.game.coverImage})` }}
          role="img"
          aria-label={siteConfig.game.coverImageAlt}
        >
          {/* 左侧压深保证标题可读,右侧留出画面 */}
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/30" />
          <div className="absolute inset-0 bg-surface/30 sm:bg-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20">
          <p className="mb-3 inline-block rounded-full border border-accent/50 bg-surface/80 px-3 py-1 text-xs font-semibold text-accent">
            Updated {lastUpdated} — game facts and link status checked
          </p>
          <div>
            <span className="block">
              <span className="inline-block rounded-md bg-accent px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-black">
                {homeHero.badge}
              </span>
            </span>
            <h1 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight text-ink drop-shadow-lg sm:text-5xl">
              {homeHero.heading}
            </h1>
            <p className="mt-4 max-w-xl leading-relaxed text-ink drop-shadow">
              {homeHero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {homeHero.cta.map((cta) => (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className={
                    cta.primary
                      ? "rounded-md bg-accent px-4 py-2 text-sm font-bold text-black shadow-lg transition hover:opacity-90"
                      : "rounded-md border border-line bg-surface/90 px-4 py-2 text-sm font-bold text-ink shadow-lg backdrop-blur transition hover:border-accent"
                  }
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 事实栏 ===== */}
      <section className="border-b border-line bg-panel/40">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {homeFacts.map((fact) => (
            <div key={fact.label}>
              <p className="text-2xl font-extrabold text-accent">{fact.value}</p>
              <p className="mt-1 text-sm font-semibold text-ink">{fact.label}</p>
              <p className="text-xs text-ink-dim">{fact.note}</p>
            </div>
          ))}
        </div>
      </section>

      <AdSlot slot="home-top" />

      {/* ===== 兑换码状态 ===== */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Freshness center"
            title={`${siteConfig.game.title} codes and update status`}
            intro="The homepage surfaces the latest verified set and sends players into the dedicated codes page."
          />
          <Link
            href="/codes/"
            className="mb-8 rounded-md border border-line bg-panel px-4 py-2 text-sm font-bold text-ink transition hover:border-accent"
          >
            View all codes
          </Link>
        </div>
        <article className="rounded-lg border border-line bg-panel p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Hands check · {codesContent.lastChecked}
          </p>
          {activeCodes.length === 0 ? (
            <>
              <h3 className="mt-3 text-xl font-bold text-accent">{codesContent.emptyStateTitle}</h3>
              <p className="mt-2 max-w-3xl leading-relaxed text-ink-dim">{codesContent.emptyStateBody}</p>
            </>
          ) : (
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {activeCodes.slice(0, 6).map((code) => (
                <li key={code.code} className="rounded-md border border-accent/40 bg-accent/5 p-3">
                  <code className="font-bold text-accent">{code.code}</code>
                  <p className="mt-1 text-sm text-ink-dim">{code.reward}</p>
                </li>
              ))}
            </ul>
          )}
        </article>
      </section>

      {/* ===== 最近更新 ===== */}
      {latestUpdates.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Updates"
              title="Updates and changing answers"
              intro="Game facts, code status, and official links each have a dated entry so changes are easy to spot."
            />
            <Link
              href="/updates/"
              className="mb-8 rounded-md border border-line bg-panel px-4 py-2 text-sm font-bold text-ink transition hover:border-accent"
            >
              All updates
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {latestUpdates.map((entry) => (
              <article key={`${entry.date}-${entry.title}`} className="rounded-lg border border-line bg-panel p-5">
                <time dateTime={entry.date} className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {entry.date}
                </time>
                <h3 className="mt-2 text-lg font-bold text-ink">{entry.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-dim">{entry.body}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <AdSlot slot="home-mid-1" />

      {/* ===== Tier 预览 ===== */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <SectionHeading
          eyebrow="Tier preview"
          title={`${siteConfig.game.title} tier list preview`}
          intro="Start with the strongest current picks, then use the full tier list when you need ranking notes and update dates."
        />
        <TierGrid entries={tierPreview} />
        <Link href="/tier-list/" className="mt-6 inline-block text-sm font-bold text-accent hover:underline">
          See the full tier list →
        </Link>
      </section>

      {/* ===== 截图画廊 ===== */}
      {homeScreenshots.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-10">
          <SectionHeading
            eyebrow="Screenshots"
            title={`${siteConfig.game.title} in action`}
            intro="Official screenshots from the Roblox experience page."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {homeScreenshots.map((shot) => (
              <figure key={shot.src} className="overflow-hidden rounded-lg border border-line bg-panel">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={768}
                  height={432}
                  className="aspect-video w-full object-cover transition hover:scale-[1.02]"
                />
                {shot.caption && (
                  <figcaption className="px-4 py-2 text-xs text-ink-dim">{shot.caption}</figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      )}

      <AdSlot slot="home-mid-2" />

      {/* ===== 核心工具 ===== */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <SectionHeading eyebrow="Core tools" title={toolsContent.heading} intro={toolsContent.intro} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {toolsContent.tools.map((tool) => (
            <LinkCard key={tool.href} {...tool} />
          ))}
        </div>
      </section>

      {/* ===== 指南 + Wiki 双栏 ===== */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Guides" title={guidesContent.heading} intro={guidesContent.intro} />
            <div className="space-y-3">
              {guidesContent.guides.map((guide) => (
                <ArrowRow
                  key={guide.slug}
                  title={guide.label}
                  description={guide.summary}
                  href={`/guides/${guide.slug}/`}
                />
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Wiki coverage" title={wikiContent.heading} intro={wikiContent.intro} />
            <div className="space-y-3">
              {wikiContent.entities.map((entity) => (
                <ArrowRow
                  key={entity.slug}
                  title={entity.title}
                  description={entity.summary}
                  href={`/${entity.slug}/`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 来源核查 ===== */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <SectionHeading eyebrow="Source check" title={sourcesContent.heading} intro={sourcesContent.intro} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sourcesContent.links.map((link) => (
            <LinkCard
              key={link.title}
              eyebrow={link.eyebrow}
              title={link.title}
              description={link.description}
              href={link.href}
              external
            />
          ))}
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {sourcesContent.notes.map((note) => (
            <article key={note.heading} className="rounded-lg border border-line bg-panel p-5">
              <h3 className="font-semibold text-ink">{note.heading}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">{note.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== 视频参考 ===== */}
      {sourcesContent.videos.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-10">
          <SectionHeading
            eyebrow="Community research"
            title={sourcesContent.videosHeading}
            intro={sourcesContent.videosIntro}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sourcesContent.videos.map((video) => (
              <LinkCard
                key={video.title}
                eyebrow={video.label}
                title={video.title}
                description={video.description}
                href={video.href ?? ""}
                external
              />
            ))}
          </div>
        </section>
      )}

      {/* ===== FAQ ===== */}
      <FaqSection heading={homeFaq.heading} intro={homeFaq.intro} items={homeFaq.items} />
    </>
  );
}
