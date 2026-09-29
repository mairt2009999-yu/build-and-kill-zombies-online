import type { CodesContent } from "./types";

// ⭐ 兑换码页内容
export const codesContent: CodesContent = {
  pageTitle: "Build and Kill Zombies Codes",
  metaDescription:
    "Working Build and Kill Zombies codes with verified rewards, redeem steps, and a freshness policy that keeps fake copied codes out of the active list.",
  intro:
    "Active codes are listed only after more than one independent write-up agrees. The 2026-09-29 check used GamesRadar (last updated 28 September 2026), Game Code Guides (last checked September 28, 2026), and Pro Game Guides (September 26, 2026). This site did not retest them in-game. HACKER and 1x1x1x1 are expired. The Hacker Event 2026 badge had a past-day award count of 0 that day, so it is no longer being awarded. ZEUS pays Lightning Tokens, a different currency from Hacker Tokens. Expired codes move to the expired list instead of being deleted.",
  lastChecked: "2026-09-29",
  emptyStateTitle: "No verified public codes",
  emptyStateBody:
    "No official public code was found in the game description or checked sources at the last review. New codes usually appear around updates and social milestones.",
  codes: [
    {
      code: "ZEUS",
      reward: "50 Lightning Tokens",
      status: "active",
      addedOn: "2026-09-28",
      note: "GamesRadar and Pro Game Guides both state 50 Lightning Tokens. Game Code Guides marks ZEUS as NEW. Lightning Tokens are not Hacker Tokens. Not retested in-game on this site.",
    },
    {
      code: "IAMPRO",
      reward: "5,000 Cash",
      status: "active",
      addedOn: "2026-09-29",
      note: "Listed here on the 2026-09-29 editorial check. GamesRadar and Game Code Guides say it requires a best distance of 1,000 studs. Not retested in-game on this site.",
    },
    {
      code: "COMMUNITY",
      reward: "1,000 Cash + 1 Small Engine + 1 Small Tank",
      status: "active",
      addedOn: "2026-09-12",
      note: "Multi-source confirmed; reward matches the car-parts economy directly.",
    },
    {
      code: "CashDrop",
      reward: "500 Cash",
      status: "active",
      addedOn: "2026-09-12",
    },
    {
      code: "MOREFRIENDS",
      reward: "2 Passenger Seats",
      status: "active",
      addedOn: "2026-09-12",
    },
    {
      code: "HACKER",
      reward: "50 Hacker Tokens",
      status: "expired",
      addedOn: "2026-09-12",
      note: "Was 50 Hacker Tokens. GamesRadar, Game Code Guides, and Pro Game Guides now list it expired. Not retested in-game on this site.",
    },
    {
      code: "1x1x1x1",
      reward: "150 Hacker Tokens",
      status: "expired",
      addedOn: "2026-09-12",
      note: "Was 150 Hacker Tokens. Those sources now list it expired. Not the King badge, which is still being awarded. Not retested in-game on this site.",
    },
  ],
  howToRedeem: [
    "Launch Build and Kill Zombies and finish the short starting tutorial.",
    "Open the SHOP menu from the left-side button column.",
    "Inside the Exclusive Shop, scroll down to the COMMUNITY CODES box.",
    "Type a code into the Enter Code field exactly as written — codes are not case-sensitive on some trackers but type them as listed anyway.",
    "Press REDEEM and check that the reward appears before entering the next code.",
  ],
  freshnessPolicy: [
    "A code is only listed as active after it appears in multiple independent sources or is confirmed from in-game footage.",
    "The 2026-09-29 pass used GamesRadar (last updated 28 September 2026), Game Code Guides (last checked September 28, 2026), and Pro Game Guides (September 26, 2026). This site did not retest those codes in-game.",
    "This page is re-checked whenever the game updates or a new code batch drops; the last-checked date is shown at the top.",
    "Expired codes move to the expired list instead of being deleted, so you can tell what was already tried.",
    "Codes posted only by a single anonymous account are never listed as active.",
  ],
  faq: [
    {
      question: "Why is a code that other sites list missing here?",
      answer:
        "Some sites pad their lists with codes copied from each other without testing. Codes only appear as active here after cross-checking, which is why this list starts shorter and stays honest.",
    },
    {
      question: "When do new codes come out?",
      answer:
        "The first batch dropped on September 12, 2026 during the game's breakout week, and the developer's message notes that codes are announced through the community channels first. Check back after every update or follower milestone.",
    },
    {
      question: "What are Hacker Tokens for?",
      answer:
        "Hacker Tokens were the Hacker Event currency. The Hacker Event 2026 badge is no longer being awarded (past day 0 on 2026-09-29). The codes HACKER and 1x1x1x1 are expired. The ZEUS reward is Lightning Tokens, which is a different currency. This site did not retest that distinction in-game.",
    },
    {
      question: "The code worked but I got nothing — what now?",
      answer:
        "Make sure you finished the tutorial first; the redeem box only pays out after it. If a code shows an error, it may have just expired — re-check this page, since expired codes are moved instead of removed.",
    },
  ],
};
