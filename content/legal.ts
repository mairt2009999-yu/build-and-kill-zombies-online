// ⭐ 法务与站点信息页(about / contact / privacy / terms / disclosure)
// 正文里的 {siteName}、{gameTitle}、{email} 会被自动替换为 site.ts 中的值

export interface LegalPage {
  slug: string;
  title: string;
  metaDescription: string;
  /** 每个元素是一个段落;以 "## " 开头的元素渲染为小节标题 */
  body: string[];
}

export const legalPages: LegalPage[] = [
  {
    slug: "about",
    title: "About Us",
    metaDescription: "What this fan site covers and how claims are verified.",
    body: [
      "{siteName} is a fan-made resource for {gameTitle}. It tracks code status, upgrade priorities, guides, and the status of official and community links.",
      "## What we do",
      "Every claim on this site is tied to a source: the official game page, creator-owned channels, or clearly labelled community reports. When something cannot be verified, the page says so instead of guessing.",
      "## Contact",
      "Questions and corrections are welcome at {email}.",
    ],
  },
  {
    slug: "contact",
    title: "Contact Us",
    metaDescription: "How to reach the site maintainers with corrections and questions.",
    body: [
      "For corrections, takedown requests, or questions, email {email}.",
      "Corrections with a source link are prioritized — if a code has expired or a claim is outdated, include where you saw the change.",
    ],
  },
  {
    slug: "privacy",
    title: "Privacy Policy",
    metaDescription: "Privacy policy for this website.",
    body: [
      "This site does not require an account and does not collect personal information directly.",
      "## Analytics",
      "If analytics are enabled, anonymous usage statistics (page views, approximate region, device type) may be collected to understand which pages are useful. No personally identifying profile is built.",
      "## Advertising",
      "If advertising is enabled, third-party ad networks (such as Google AdSense) may use cookies to serve ads. You can control ad personalization in your Google account settings and through your browser's cookie controls.",
      "## Contact",
      "Privacy questions: {email}.",
    ],
  },
  {
    slug: "terms",
    title: "Terms of Service",
    metaDescription: "Terms of service for this website.",
    body: [
      "By using this site you agree to these terms.",
      "## Content",
      "Content is provided for information only, with no guarantee of accuracy. Game mechanics change with updates; always verify against the official game.",
      "## Intellectual property",
      "{gameTitle} and related assets belong to their respective owners. This site is an unofficial fan resource and claims no ownership of game content.",
      "## Liability",
      "This site is provided as-is without warranties. We are not liable for losses arising from use of the information here.",
    ],
  },
  {
    slug: "disclosure",
    title: "Fan-made Disclosure",
    metaDescription: "This site is an unofficial, fan-made resource.",
    body: [
      "{siteName} is an unofficial, fan-made website. It is not endorsed by, affiliated with, or sponsored by the developer of {gameTitle} or by Roblox Corporation.",
      "All trademarks, game names, and images belong to their respective owners and are used for identification and commentary only.",
      "For official support, purchases, moderation, and account issues, use the official Roblox page and the creator's verified channels.",
    ],
  },
];
