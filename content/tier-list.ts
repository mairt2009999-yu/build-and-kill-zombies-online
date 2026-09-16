import type { TierListContent } from "./types";

// ⭐ Tier 榜单内容
export const tierListContent: TierListContent = {
  pageTitle: "Build and Kill Zombies Tier List",
  metaDescription:
    "Build and Kill Zombies tier list ranking the upgrades that actually move runs forward, with notes and update dates tied to observed gameplay.",
  intro:
    "This ranking answers one question: what should you buy next? It is ordered by how much each purchase improves every future run, using only mechanics confirmed in official data or gameplay footage.",
  updatedOn: "2026-09-16",
  criteria: [
    {
      heading: "Compounding value",
      body: "Rankings favour upgrades that improve every run from then on — luck, capacity, and cash speed — over one-time comforts.",
    },
    {
      heading: "Observed, not assumed",
      body: "Only entries seen in official data or footage are ranked. Where a price is known it is listed; where it is not, the entry says so.",
    },
    {
      heading: "Early-game realism",
      body: "A tier that needs a finished blueprint to matter is ranked accordingly, because most players meet the list with barely any parts on the plot.",
    },
  ],
  entries: [
    {
      tier: "S",
      name: "Luck skills (Luck II → Luck III)",
      category: "Skill tree",
      note: "Cheapest compounding purchase in the game: +20% for 250 and +25% for 625. Every roll afterwards improves, which feeds parts, runs, and cash in one line.",
      slug: "skills",
    },
    {
      tier: "S",
      name: "CAR PARTS rolls (engine first)",
      category: "Roll stations",
      note: "Your build literally cannot move without an engine, and the ladder starts at 1 in 3. Rolling engines early is the fastest route from naked plot to first drive.",
      slug: "roll-machines",
    },
    {
      tier: "A",
      name: "Fuel capacity",
      category: "Run length",
      note: "Fuel is the run timer — a dry tank ends a push wherever it is. Small Tanks from codes and fuel barrels from the shop convert directly into more distance per run.",
      slug: "runs",
    },
    {
      tier: "A",
      name: "A working front support",
      category: "Combat",
      note: "One contact weapon on the front face clears early waves; Wooden Spike at 1 in 3 does it while you save. Supports multiply the value of every metre once the car survives.",
      slug: "supports",
    },
    {
      tier: "B",
      name: "More Support II",
      category: "Skill tree",
      note: "Worth 3.70K once you actually own two supports worth mounting. Before that it is capacity with nothing to fill it.",
      slug: "skills",
    },
    {
      tier: "B",
      name: "Blueprint completion",
      category: "Garage",
      note: "Vehicles are gated by part sets, not price tags. Chase the blueprint you are closest to finishing — a set that is one or two Missing Parts away is the sweet spot.",
      slug: "vehicles",
    },
    {
      tier: "C",
      name: "Cosmetic-ish extras and convenience",
      category: "Comfort",
      note: "Faster Roll and similar quality-of-life purchases help once cash flow is strong, but they do not change what a run earns. Save them for when the loop is already fast.",
      slug: "economy",
    },
  ],
  closingHeading: "Re-check after every update",
  closingBody:
    "The developer has shown a pattern of adding content weekly — new vehicles, weapons, and limited-time turrets. Prices and odds on this page carry the date they were last verified so you can spot what changed.",
  faq: [
    {
      question: "How often is this tier list updated?",
      answer:
        "After every game update and whenever new gameplay footage confirms or contradicts a ranking. Every entry shows the date the page was last re-checked.",
    },
    {
      question: "Why are luck skills ranked above weapons?",
      answer:
        "Because they improve every future roll at a cost (250–625) far below weapons, and better rolls are what produce better weapons. The maths compounds; a single weapon does not.",
    },
  ],
};
