import type { CodesContent } from "./types";

// ⭐ 兑换码页内容
export const codesContent: CodesContent = {
  pageTitle: "Build and Kill Zombies Codes",
  metaDescription:
    "Working Build and Kill Zombies codes with verified rewards, redeem steps, and a freshness policy that keeps fake copied codes out of the active list.",
  intro:
    "Every code below was confirmed against multiple independent sources before it went live. Rewards are listed exactly as the game hands them out. If a code stops working, it moves to the expired list instead of being quietly deleted.",
  lastChecked: "2026-09-16",
  emptyStateTitle: "No verified public codes",
  emptyStateBody:
    "No official public code was found in the game description or checked sources at the last review. New codes usually appear around updates and social milestones.",
  codes: [
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
      status: "active",
      addedOn: "2026-09-12",
      note: "Hacker Tokens are the Hacker Event currency.",
    },
    {
      code: "1x1x1x1",
      reward: "150 Hacker Tokens",
      status: "active",
      addedOn: "2026-09-12",
      note: "Named after the King 1x1x1x1 boss.",
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
        "Hacker Tokens are the currency tied to the Hacker Event that ran through September 2026. Spending details come from the in-game event area; this page lists the token rewards exactly as the codes give them.",
    },
    {
      question: "The code worked but I got nothing — what now?",
      answer:
        "Make sure you finished the tutorial first; the redeem box only pays out after it. If a code shows an error, it may have just expired — re-check this page, since expired codes are moved instead of removed.",
    },
  ],
};
