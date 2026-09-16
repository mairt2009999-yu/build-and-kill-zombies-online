import type { SourceLink, SourceNote, VideoRef } from "./types";

// ⭐ 来源核查页 + 首页"来源"区块
export const sourcesContent: {
  heading: string;
  intro: string;
  pageTitle: string;
  metaDescription: string;
  links: SourceLink[];
  notes: SourceNote[];
  videosHeading: string;
  videosIntro: string;
  videos: VideoRef[];
} = {
  pageTitle: "Sources",
  metaDescription:
    "How claims on this site are verified: the official Roblox API, gameplay footage with timestamps, and clearly labelled community reports.",
  heading: "Official and community sources",
  intro:
    "Every number on this site is traceable. This page explains what each evidence tier means and links the sources behind the data.",
  links: [
    {
      eyebrow: "Official",
      title: "Official Roblox game page",
      description: "Source of record for title, creator, description, live player counts, and the four game passes.",
      href: "https://www.roblox.com/games/105011592530400/Build-and-Kill-Zombies",
      status: "verified",
    },
    {
      eyebrow: "Official",
      title: "Roblox games API (universe 10741654282)",
      description: "The API snapshot behind the facts bar: visits, favorites, max players, and update timestamps.",
      href: "https://games.roblox.com/v1/games?universeIds=10741654282",
      status: "verified",
    },
    {
      eyebrow: "Community",
      title: "Community wikis and code trackers",
      description:
        "Used as a cross-check signal only — a claim from a single community source is never published as verified here.",
      href: "",
      status: "community",
    },
  ],
  notes: [
    {
      heading: "How a number gets published",
      body: "Official data comes from the Roblox API. Everything else must be read frame-by-frame from public gameplay footage and carries the video ID and timestamp it came from — like '1 in 12,500 on the engine ladder, seen at 2Dqojvu48eo@02:46'.",
    },
    {
      heading: "What we do not do",
      body: "We never estimate a value we have not seen. Missing numbers are shown as 'not yet observed' rather than as zero or a guess, and no price is listed without a frame or API behind it.",
    },
    {
      heading: "No fake code list",
      body: "The codes page states exactly which codes are cross-verified and when they were last checked, instead of padding the list with copied rewards that were never tested.",
    },
    {
      heading: "Freshness policy",
      body: "The game updates weekly. Every page carries the date it was last re-checked, and the updates log records what changed — so you can judge how much to trust a number before relying on it.",
    },
  ],
  videosHeading: "Video sources reviewed",
  videosIntro:
    "Gameplay footage reviewed for this site's observed values. These are community videos, credited as research sources — treat them as the evidence trail, not as official patch notes.",
  videos: [
    {
      label: "Guide",
      title: "NEW CODES & HOW TO PLAY GUIDE (September 16, 2026)",
      description: "Source of the Index odds ladder, skill prices, shop lists, and the codes panel capture.",
      href: "https://www.youtube.com/watch?v=2Dqojvu48eo",
    },
    {
      label: "Guide",
      title: "Build and Kill Zombies GUIDE! (Best Car Build, NOOB To PRO)",
      description: "Source of the Gold Roll skill node, support-slot upgrades, and item pickup popups.",
      href: "https://www.youtube.com/watch?v=Gru-Kbk3h-Y",
    },
    {
      label: "Gameplay",
      title: "I Built The PERFECT Zombie Car",
      description: "Source of the category picker capture and additional support item popups.",
      href: "https://www.youtube.com/watch?v=mhVHt8oj6-s",
    },
    {
      label: "Codes",
      title: "All Working Codes 2026 in Build and Kill Zombies",
      description: "Source of the Exclusive Shop and Community Codes box layout.",
      href: "https://www.youtube.com/watch?v=jF-FI4vq8hY",
    },
  ],
};
