import type { RobloxData } from "@/content/types";

// ============================================================
// ⭐ 证据存放处 —— 官方 API 快照 + 实机视频观察记录
//
//   official      Roblox API / 官方描述,可直接引用
//   videoObserved 从实机画面逐帧读到的,每条必须带 source(视频 ID + 时间戳)
//
// 正文引用 videoObserved 里的事实时,措辞用 "observed in gameplay footage"。
// openQuestions 里的东西**不要写进正文**,那是还没核实的。
// ============================================================

export const robloxData: RobloxData = {
  fetchedOn: "2026-09-29",

  official: {
    placeId: "105011592530400",
    universeId: "10741654282",
    developer: "Zombie Car Crusher",
    created: "2026-08-19",
    lastUpdated: "2026-09-28T19:16:01.5589984Z",
    genre: "Car-Build Survival",
    maxPlayers: 5,
    visits: 33190940,
    favorites: 877053,
    description:
      "Welcome to Build and Kill Zombies! Build your car! Add crazy weapons & defenses! Crush waves of zombies! Earn cash and upgrade your build! How far can YOUR car survive?",
  },

  videoSources: [
    {
      id: "2Dqojvu48eo",
      title: "NEW CODES & HOW TO PLAY GUIDE! | Build and Kill Zombies ROBLOX (September 16, 2026)",
      watchedOn: "2026-09-16",
    },
    {
      id: "Gru-Kbk3h-Y",
      title: "Build and Kill Zombies GUIDE! (Best Car Build, Tips & Tricks, NOOB To PRO)",
      watchedOn: "2026-09-16",
    },
    {
      id: "mhVHt8oj6-s",
      title: "I Built The PERFECT Zombie Car",
      watchedOn: "2026-09-16",
    },
    {
      id: "jF-FI4vq8hY",
      title: "All Working Codes 2026 in Build and Kill Zombies Roblox",
      watchedOn: "2026-09-16",
    },
  ],

  videoObserved: [
    {
      fact: "The left-side menu buttons are SHOP, SAVES, INDEX, SKILLS, SETTINGS, and Co-Op.",
      source: "2Dqojvu48eo@02:18",
    },
    {
      fact: "The first objective prompts are 'Buy the Build Tool!' followed by 'Open the Build menu'.",
      source: "2Dqojvu48eo@00:12",
    },
    {
      fact: "Build Mode tabs are STRUCTURES, SUPPORTS, and TURRETS with parts such as Wall, Ramp, and Floor; placement keys show E (Place), R (Rotate), and X (Cancel).",
      source: "2Dqojvu48eo@00:24",
    },
    {
      fact: "Roll stations in the map are labelled CAR PARTS and SUPPORTS, and each shows a sign like 'In 20 Rolls' next to a Locked marker.",
      source: "2Dqojvu48eo@02:44",
    },
    {
      fact: "The category picker at a roll station reads 'SELECT CATEGORY — CHOOSE A CATEGORY TO ROLL FROM' with options including BLOCKS, ENGINES, and WHEELS plus a Confirm button.",
      source: "mhVHt8oj6-s@04:12",
    },
    {
      fact: "The Index panel categories are Engines, Fuels, Wheels, Blocks, and Supports, with a Weapons tab visible in other footage.",
      source: "2Dqojvu48eo@02:46",
    },
    {
      fact: "The engine roll ladder reads 1 in 3, 1 in 6, 1 in 14, 1 in 40, 1 in 90, 1 in 150, 1 in 375, 1 in 750, 1 in 10,000, and 1 in 12,500; the first unlocked engine is named Small Engine.",
      source: "2Dqojvu48eo@02:46",
    },
    {
      fact: "A roll result popup reads 'Gold Roll!' followed by the item odds and a Close button.",
      source: "2Dqojvu48eo@04:12",
    },
    {
      fact: "Skill upgrades include Luck II (+20% Luck, cost 250) and Luck III (+25% Luck, cost 625).",
      source: "2Dqojvu48eo@00:42",
    },
    {
      fact: "Skill nodes seen in September 16 footage: Luck II (+20% Luck, 250), Luck III (+25% Luck, 625), Unlock Gold Roll, Gold Roll I (1.20K), and More Support II (3.70K).",
      source: "2Dqojvu48eo@04:12",
    },
    {
      fact: "The Car Builds panel shows blueprint vehicles such as Fast Furious and Blue Monster, each listing Required Parts (icon counts like x10, x1, x4...) and a green Spawn button rather than a cash price.",
      source: "2Dqojvu48eo@09:46",
    },
    {
      fact: "Missing Parts opens when a blueprint's part set is incomplete: 'You need the following parts to spawn Fast Furious', showing the missing counts with a coin top-up price (159 coins observed).",
      source: "2Dqojvu48eo@09:52",
    },
    {
      fact: "A world sign reads 'NEXT BOSS IN:' with a live countdown, and boss encounters show a BOSS FIGHT health bar.",
      source: "2Dqojvu48eo@02:58",
    },
    {
      fact: "A free chest board reads FREE CHEST / LIKE GAME AND JOIN GROUP.",
      source: "2Dqojvu48eo@02:18",
    },
    {
      fact: "The in-game what's-new panel lists: Limited Time Turbo, Limited Edition Turbo, Lucky Blocks, New Vehicle: Scooter, New Weapon: Cursed Katana, New Codes: COMEBACK, and 60% Off Gamepass.",
      source: "2Dqojvu48eo@01:42",
    },
    {
      fact: "Leaving the play area triggers 'Out of bounds! Return to the Battle Field!' with a RETURN button.",
      source: "2Dqojvu48eo@01:12",
    },
    {
      fact: "Driving shows a Distance counter and Checkpoint markers as the car pushes through zombie waves; an in-run timer is also visible.",
      source: "2Dqojvu48eo@03:00",
    },
    {
      fact: "The Exclusive Shop contains Game Passes (2x Luck, 4x Luck) and Cash Packs, a Gift A Player button, and a Community Codes box with a Redeem button and a Crusher reward banner.",
      source: "jF-FI4vq8hY@00:35",
    },
    {
      fact: "Item pickup popups show name, odds, rarity, and value, e.g. Double Barrel — 1 in 10 — Legendary — $2.2K; Wooden Spike — 1 in 3 — $10; Flamethrower — 1 in 9 — $10,000.",
      source: "Gru-Kbk3h-Y@06:01",
    },
    {
      fact: "The plot permission panel offers Player, Other Players, and Alone modes with a Save button.",
      source: "Gru-Kbk3h-Y@05:18",
    },
    {
      fact: "A Global Booster panel shows a 10K booster with a reset countdown.",
      source: "2Dqojvu48eo@02:58",
    },
    {
      fact: "The lobby shows a short countdown before a run starts (LOBBY / 00:08), and the DRIVE button is bound to the F key.",
      source: "2Dqojvu48eo@09:42",
    },
    {
      fact: "Cash is shown alongside a round green token counter at the bottom-left, with small +0% bonus icons at the bottom-right.",
      source: "2Dqojvu48eo@02:18",
    },
    {
      fact: "A boss alert prompts '1x1x1x1 is coming! Press ATTACK to join the battle.'",
      source: "mhVHt8oj6-s@06:11",
    },
    {
      fact: "The vehicle inventory panel separates VEHICLE and WEAPONS tabs and shows owned parts with stack counts, e.g. Glass Slab x6 and Fuel Barrel x3.",
      source: "mhVHt8oj6-s@06:11",
    },
  ],

  openQuestions: [
    "Full item lists and names for the Fuels, Wheels, Blocks, Supports, and Weapons categories are not yet observed (locked entries display as ???).",
    "Robux prices for the cash packs shown in the Exclusive Shop are not yet confirmed frame-by-frame.",
    "Whether the 'In N Rolls' counter on a roll station tracks per-category rolls toward an unlock is not yet confirmed.",
    "Rarity band names beyond 'Legendary' (seen on a Double Barrel pickup) are not yet confirmed.",
    "The exact cash value of Hacker Tokens and how the Hacker Event shop spends them is not yet observed.",
  ],
};
