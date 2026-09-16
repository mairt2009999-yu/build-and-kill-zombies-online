import Link from "next/link";
import { siteConfig } from "@/content/site";
import { wikiContent } from "@/content/wiki";
import { sourcesContent } from "@/content/sources";

const corePages = [
  { label: "Codes", href: "/codes/" },
  { label: "Tier List", href: "/tier-list/" },
  { label: "Calculator", href: "/calculator/" },
  { label: "Guides", href: "/guides/" },
  { label: "Wiki", href: "/wiki/" },
  { label: "Trello/Discord", href: "/trello/" },
  { label: "Updates", href: "/updates/" },
];

const siteInfoPages = [
  { label: "About Us", href: "/about/" },
  { label: "Sources", href: "/sources/" },
  { label: "Contact Us", href: "/contact/" },
  { label: "Privacy Policy", href: "/privacy/" },
  { label: "Terms of Service", href: "/terms/" },
  { label: "Fan-made disclosure", href: "/disclosure/" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-sm font-bold text-ink">{siteConfig.name}</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-dim">
            {siteConfig.name} is an unofficial fan-made resource for{" "}
            {siteConfig.game.title} on {siteConfig.game.platform}.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-ink">Core pages</h3>
          <ul className="mt-3 space-y-2">
            {corePages.map((page) => (
              <li key={page.href}>
                <Link href={page.href} className="text-sm text-ink-dim transition hover:text-accent">
                  {page.label}
                </Link>
              </li>
            ))}
            {wikiContent.entities.map((entity) => (
              <li key={entity.slug}>
                <Link href={`/${entity.slug}/`} className="text-sm text-ink-dim transition hover:text-accent">
                  {entity.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-ink">Sources</h3>
          <ul className="mt-3 space-y-2">
            {sourcesContent.links
              .filter((link) => link.href)
              .map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    className="text-sm text-ink-dim transition hover:text-accent"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            <li>
              <Link href="/sources/" className="text-sm text-ink-dim transition hover:text-accent">
                Source checklist
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-ink">Site info</h3>
          <ul className="mt-3 space-y-2">
            {siteInfoPages.map((page) => (
              <li key={page.href}>
                <Link href={page.href} className="text-sm text-ink-dim transition hover:text-accent">
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-5">
        <p className="mx-auto max-w-6xl px-4 text-xs text-ink-dim">{siteConfig.disclaimer}</p>
      </div>
    </footer>
  );
}
