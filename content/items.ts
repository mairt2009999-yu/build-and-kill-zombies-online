import type { ItemsContent, OddsCalculatorContent } from "@/content/types";

// ============================================================
// ⭐ Parts & Items 数据库 —— 本站在同类站点中的差异化资产
//
// ⚠️ evidence 红线:
//   official -> 官方来源,直接写
//   observed -> 实机视频读到的,必须填 source(视频 ID + 时间戳)
//   unknown  -> 没核实的,**不要编数字**,留空即可
//
// 稀有度数组保持为空:游戏的分档名称尚未逐帧确认(唯一确认的文本标签是
// Double Barrel 上的 "Legendary"),宁可不建分档页也不猜。
// ============================================================

export const itemsContent: ItemsContent = {
  pageTitle: "Parts & Items Database",
  metaDescription:
    "Every Build and Kill Zombies part and support documented so far, with roll odds, values, and the timestamped footage each number came from.",
  intro:
    "A source-checked list of parts and supports. Values read from gameplay footage carry the clip and timestamp they came from; anything not yet seen stays visibly blank rather than guessed.",
  updatedOn: "2026-09-16",
  gameVersionNote:
    "The game updates weekly and the loot table grows with it. Entries here reflect the build seen in footage dated 2026-09-16; locked slots in other categories still show as ??? in-game and are not listed until they can be read.",

  // 该游戏有哪些数值。改游戏时只改这一段。
  statDefs: [
    { id: "value", label: "Value", icon: "💰", format: "number", hasGrowth: false },
  ],

  // 分档名称未确认(见文件头注释),保持为空。
  rarities: [],

  categories: [
    { id: "engines", label: "Engines" },
    { id: "fuels", label: "Fuels" },
    { id: "wheels", label: "Wheels" },
    { id: "blocks", label: "Blocks" },
    { id: "supports", label: "Supports" },
    { id: "weapons", label: "Weapons" },
  ],

  // 无等级系统,留空数组之外的字段省略。
  items: [
    {
      slug: "small-engine",
      name: "Small Engine",
      category: "engines",
      summary:
        "The starter engine and the only named entry on the fully-read Engines ladder. Grantable from the COMMUNITY code for free.",
      odds: { oneIn: 3, evidence: "observed", source: "2Dqojvu48eo@02:46" },
      evidence: "observed",
      source: "2Dqojvu48eo@02:46 (Index, Engines category)",
      faq: [
        {
          question: "How rare is the Small Engine?",
          answer:
            "It sits on the 1 in 3 slot — the first entry of the Engines ladder and the most common engine roll in the game.",
        },
        {
          question: "Is there a free Small Engine?",
          answer:
            "Yes — the COMMUNITY code (verified 2026-09-16) grants one Small Engine and one Small Tank alongside 1,000 cash.",
        },
      ],
      relatedLinks: [
        { label: "Roll machines & odds", href: "/roll-machines/" },
        { label: "Codes", href: "/codes/" },
      ],
    },
    {
      slug: "small-tank",
      name: "Small Tank",
      category: "fuels",
      summary:
        "A starter fuel tank handed out with the COMMUNITY code. Fuel capacity is what extends every run, so this is a direct income item.",
      evidence: "observed",
      source: "Codes cross-check 2026-09-16 (Pocket Tactics / GameRant / Dexerto / PCGamesN reward listings)",
      relatedLinks: [
        { label: "Runs, distance & fuel", href: "/runs/" },
        { label: "Codes", href: "/codes/" },
      ],
    },
    {
      slug: "wooden-spike",
      name: "Wooden Spike",
      category: "supports",
      summary:
        "A cheap contact support that sits on the front face and damages zombies on impact. The most common support pull seen so far.",
      odds: { oneIn: 3, evidence: "observed", source: "mhVHt8oj6-s@00:36" },
      stats: { value: 10 },
      evidence: "observed",
      source: "mhVHt8oj6-s@00:36 (pickup popup: 1 in 3, Value: $10)",
      faq: [
        {
          question: "Is Wooden Spike worth mounting?",
          answer:
            "Early on, yes — it is the most common support roll (1 in 3) and gives new builds a way to clear the first waves while saving for better pieces.",
        },
      ],
      relatedLinks: [
        { label: "Supports & weapons", href: "/supports/" },
        { label: "Beginner guide", href: "/guides/beginner/" },
      ],
    },
    {
      slug: "flamethrower",
      name: "Flamethrower",
      category: "supports",
      summary:
        "A high-value support pull with area damage potential. Its $10,000 value tag makes it one of the most valuable observed picks.",
      odds: { oneIn: 9, evidence: "observed", source: "mhVHt8oj6-s@00:36" },
      stats: { value: 10000 },
      evidence: "observed",
      source: "mhVHt8oj6-s@00:36 (pickup popup: 1 in 9, Value: 10,000)",
      relatedLinks: [
        { label: "Supports & weapons", href: "/supports/" },
        { label: "Tier list", href: "/tier-list/" },
      ],
    },
    {
      slug: "double-barrel",
      name: "Double Barrel",
      category: "weapons",
      summary:
        "A shotgun-style weapon with a Legendary tag — the only named rarity band confirmed so far. Pulled at 1 in 10 in footage.",
      odds: { oneIn: 10, evidence: "observed", source: "Gru-Kbk3h-Y@06:01" },
      stats: { value: 2200 },
      evidence: "observed",
      source: "Gru-Kbk3h-Y@06:01 (pickup popup: 1 in 10, Legendary, $2.2K)",
      faq: [
        {
          question: "What does Legendary mean for Double Barrel?",
          answer:
            "It is the rarity tag printed on the pickup card. It is the only band name we have read from the game so far, which is why this site does not publish a full rarity ladder yet.",
        },
      ],
      relatedLinks: [
        { label: "Supports & weapons", href: "/supports/" },
        { label: "Roll machines & odds", href: "/roll-machines/" },
      ],
    },
    {
      slug: "tubex",
      name: "Tubex",
      category: "supports",
      summary:
        "A support piece spotted mounted beside a player's build during a September 15 session. Odds and value not yet read.",
      evidence: "observed",
      source: "mhVHt8oj6-s@04:12 (visible in world, odds not shown)",
      relatedLinks: [{ label: "Supports & weapons", href: "/supports/" }],
    },
    {
      slug: "passenger-seat",
      name: "Passenger Seat",
      category: "blocks",
      summary:
        "Mounted seating that lets another player ride along. The MOREFRIENDS code grants two of them for free.",
      evidence: "observed",
      source: "Codes cross-check 2026-09-16 (MOREFRIENDS reward listing)",
      relatedLinks: [
        { label: "Car parts & build slots", href: "/car-parts/" },
        { label: "Codes", href: "/codes/" },
      ],
    },
    {
      slug: "glass-slab",
      name: "Glass Slab",
      category: "blocks",
      summary:
        "A chassis/body part that stacks in the vehicle inventory. Seen held as a stack of six during a September session.",
      evidence: "observed",
      source: "mhVHt8oj6-s@06:11 (vehicle inventory, VEHICLE tab)",
      relatedLinks: [{ label: "Car parts & build slots", href: "/car-parts/" }],
    },
    {
      slug: "fuel-barrel",
      name: "Fuel Barrel",
      category: "fuels",
      summary:
        "A fuel part listed among the slot types a build expects before a run can go the distance. Held as a stack in the inventory.",
      evidence: "observed",
      source: "mhVHt8oj6-s@08:44 (vehicle inventory, VEHICLE tab)",
      relatedLinks: [{ label: "Runs, distance & fuel", href: "/runs/" }],
    },
    {
      slug: "cursed-katana",
      name: "Cursed Katana",
      category: "weapons",
      summary:
        "Listed as a new weapon in the game's September what's-new panel. Odds and value not yet read from footage.",
      evidence: "observed",
      source: "2Dqojvu48eo@01:42 (what's-new panel: 'New Weapon: Cursed Katana')",
      relatedLinks: [
        { label: "Supports & weapons", href: "/supports/" },
        { label: "Updates", href: "/updates/" },
      ],
    },
  ],

  evidencePolicy: [
    {
      heading: "Where these numbers come from",
      body: "Official values come from the game's own API and store description. Observed values were read frame by frame from public gameplay recordings, and each one records the clip and timestamp it came from.",
    },
    {
      heading: "What we do not do",
      body: "We never estimate a stat we have not seen. Missing values stay visibly empty so you can tell the difference between a small number and an unknown one. This is why the rarity ladder is not published yet — only one band name has been read from the game.",
    },
  ],

  faq: [
    {
      question: "Why are some stats blank?",
      answer:
        "Because we have not seen them yet. A blank cell means no verified source, not a value of zero — most locked slots also show as ??? in the game itself.",
    },
    {
      question: "Where is the full rarity ladder?",
      answer:
        "Not published yet. The only band name read from the game so far is Legendary on a Double Barrel pickup, so a full ladder would be guesswork. It will be added when footage confirms the bands.",
    },
    {
      question: "Which categories are fully documented?",
      answer:
        "Only Engines — the ladder runs 1 in 3 to 1 in 12,500 across ten slots. Other categories show their ladders in the in-game Index, but the locked entries still display as ??? until collected.",
    },
  ],
};

// ============================================================
// 概率计算器 —— 由 items[].odds 驱动
// ============================================================

export const oddsCalculatorContent: OddsCalculatorContent = {
  pageTitle: "Roll Odds Calculator",
  metaDescription:
    "Work out how many rolls a Build and Kill Zombies target needs, using the game's own odds ladder from 1 in 3 up to 1 in 12,500.",
  intro:
    "Pick a documented item and a number of rolls. The maths treats each roll as independent at the game's listed base rate, which is the same assumption the in-game Index odds display implies.",
  defaultItemSlug: "small-engine",
  secondsPerRoll: 4,
  luckNote:
    "Luck passes (2x, 4x) and the Luck II / III skills multiply the effective rate — the figures here use the base ladder, so treat them as a floor rather than a promise. Roll during a Global Booster window for the best practical odds.",
  faq: [
    {
      question: "How is the chance calculated?",
      answer:
        "For a 1-in-N item the chance of missing it once is 1 - 1/N, so after n rolls the chance of having seen it at least once is 1 - (1 - 1/N)^n.",
    },
    {
      question: "Does hitting the average number of rolls guarantee the item?",
      answer:
        "No. At the average you are only around 63% likely to have it. The table shows the counts for 50%, 90%, and 99% so you can plan against a real target instead of a coin flip.",
    },
    {
      question: "Why do some items show no odds?",
      answer:
        "Because their ladder position has not been read from the game yet. Listing a made-up number would be worse than leaving it blank — this site only quotes odds that appear in footage or the Index.",
    },
  ],
};
