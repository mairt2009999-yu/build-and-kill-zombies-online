import type { FaqItem, SourceLink } from "./types";

// ⭐ Trello / Discord / 社区来源状态页(高频 Roblox 搜索词:"{游戏名} trello")
export const communityContent: {
  pageTitle: string;
  metaDescription: string;
  intro: string;
  links: SourceLink[];
  notes: { heading: string; body: string }[];
  faq: FaqItem[];
} = {
  pageTitle: "Build and Kill Zombies Discord & Community Links",
  metaDescription:
    "Status of the Build and Kill Zombies Discord server, Trello board, and community wikis — separating verified official links from unconfirmed boards.",
  intro:
    "Players search for a Discord, Trello board, and wiki for most Roblox games. This page tracks which of those actually exist and which are unconfirmed — so you never trust a random invite link.",
  links: [
    {
      eyebrow: "Official",
      title: "Official Roblox game page",
      description: "The source of record for the game title, creator, description, and live availability.",
      href: "https://www.roblox.com/games/105011592530400/Build-and-Kill-Zombies",
      status: "verified",
    },
    {
      eyebrow: "Official",
      title: "Discord server",
      description:
        "The game's own codes panel links a social community, and multiple independent trackers confirm a dedicated codes channel in the official Discord where the developer posts new codes.",
      href: "https://www.roblox.com/games/105011592530400/Build-and-Kill-Zombies",
      status: "verified",
    },
    {
      eyebrow: "Community",
      title: "Trello board",
      description:
        "No verified official Trello board has been confirmed. The game ships an in-game Index that already tracks collections, which may be why no official board exists yet.",
      href: "",
      status: "community",
    },
    {
      eyebrow: "Community",
      title: "Community wikis",
      description:
        "Several community wikis for this game appeared within days of its breakout. Treat their numbers as unverified unless they cite footage — this site only publishes values it has read frame-by-frame.",
      href: "",
      status: "community",
    },
  ],
  notes: [
    {
      heading: "Where new codes actually get posted",
      body: "The developer's pattern is to edit an existing message in the Discord's codes channel, which is why code sites struggle to track what is fresh. This site re-verifies against multiple sources before moving anything to the active list.",
    },
    {
      heading: "No fake boards",
      body: "Only links reachable from the official game page or the developer's verified surfaces are marked as verified. Unconfirmed community boards are listed as community status instead.",
    },
  ],
  faq: [
    {
      question: "Is there an official Trello board?",
      answer:
        "Not as of September 16, 2026. The game keeps its own in-game Index for collections, and no official Trello has been confirmed. Trust only a board posted from official channels if one appears.",
    },
    {
      question: "Where do I find new codes first?",
      answer:
        "The official Discord's codes channel, then this site's codes page once a code is cross-verified. The developer edits the same Discord message, so codes can appear there without any announcement.",
    },
    {
      question: "Are the community wikis reliable?",
      answer:
        "They are useful for vocabulary and navigation, but several launched within days of the game's breakout with mixed sourcing. Check whether a claim cites gameplay footage or official data before trusting a number.",
    },
  ],
};
