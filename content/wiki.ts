import type { WikiEntity } from "./types";

// ⭐ Wiki 实体页 —— 每个条目生成一个顶级页面 /{slug}/
// 证据分级:official(官方) > observed(实机视频,带 source) > unknown(不编造)
export const wikiContent: {
  heading: string;
  intro: string;
  entities: WikiEntity[];
} = {
  heading: "Wiki pages for how this game actually works",
  intro:
    "Every page here is built from one of two things: the official Roblox data, or moments read frame-by-frame from public gameplay footage. Anything we have not seen yet is labelled instead of guessed.",
  entities: [
    // ============================================================
    {
      slug: "roll-machines",
      eyebrow: "Core mechanic",
      title: "Roll Machines & Part Ladders",
      metaDescription:
        "How the CAR PARTS and SUPPORTS roll stations work in Build and Kill Zombies, with the observed engine ladder and unlock signs.",
      summary: "The roll stations, category picker, and the observed engine odds ladder.",
      updatedOn: "2026-09-16",
      heroImage: {
        src: "/screenshots/gameplay-index.webp",
        alt: "In-game Index panel showing the Engines roll odds ladder",
        caption: "The in-game Index shows each roll category with its odds ladder.",
      },
      sections: [
        {
          heading: "What the roll stations are",
          paragraphs: [
            "Your build starts at the roll stations rather than a shop. Two stations are placed near the spawn area, labelled CAR PARTS and SUPPORTS, and each one gives you a randomised part from the category you pick.",
            "Both stations are visible in gameplay footage from the first minute of a session, and both show a sign above the display reading something like \"In 20 Rolls\" next to a Locked marker — the number counts down as you roll.",
          ],
          list: [
            "CAR PARTS station — rolls engine, fuel, wheel, and block parts for your car.",
            "SUPPORTS station — rolls the weapons and defensive pieces you mount on the car.",
            "Select Category board — lets you choose which category a station rolls from.",
          ],
        },
        {
          heading: "The category picker",
          paragraphs: [
            "Walking up to a station opens a category picker that reads \"SELECT CATEGORY — CHOOSE A CATEGORY TO ROLL FROM\", with options such as BLOCKS, ENGINES, and WHEELS visible in footage, plus a Confirm button.",
            "The in-game Index confirms the full list of categories: Engines, Fuels, Wheels, Blocks, and Supports, with a Weapons tab seen in other footage. Each category keeps its own collection progress, so the picker is how you steer a run toward the part type you actually need.",
          ],
          table: {
            headers: ["Category", "Rolls from the station", "Status"],
            rows: [
              ["Engines", "Car power source", "Observed (names visible)"],
              ["Fuels", "Fuel capacity parts", "Observed (category only)"],
              ["Wheels", "Wheel set", "Observed (category only)"],
              ["Blocks", "Chassis / body parts", "Observed (category only)"],
              ["Supports", "Weapons & defence", "Observed (category only)"],
            ],
          },
        },
        {
          heading: "The engine odds ladder",
          paragraphs: [
            "The Engines category is the only ladder we have read completely so far. The in-game Index displays ten entries for it, from a 1 in 3 first slot up to a 1 in 12,500 top slot, and the first entry is unlocked from the start as the Small Engine.",
            "The ladder reads: 1 in 3, 1 in 6, 1 in 14, 1 in 40, 1 in 90, 1 in 150, 1 in 375, 1 in 750, 1 in 10,000, and 1 in 12,500. Everything past the Small Engine still shows as ??? until the player collects one, which is why the locked slots display as silhouettes.",
          ],
          table: {
            headers: ["Slot", "Odds", "Name"],
            rows: [
              ["1", "1 in 3", "Small Engine"],
              ["2", "1 in 6", "???"],
              ["3", "1 in 14", "???"],
              ["4", "1 in 40", "???"],
              ["5", "1 in 90", "???"],
              ["6", "1 in 150", "???"],
              ["7", "1 in 375", "???"],
              ["8", "1 in 750", "???"],
              ["9", "1 in 10,000", "???"],
              ["10", "1 in 12,500", "???"],
            ],
          },
        },
        {
          heading: "What a roll looks like",
          paragraphs: [
            "When a roll lands, a popup takes over the screen with the result. Footage shows the label \"Gold Roll!\" followed by the item's odds and a Close button — a Gold Roll appears to fire when the result is a gold-tier item rather than a standard one.",
            "Pickups in the world also show a small name card with the item's odds and value, for example Double Barrel at 1 in 10, Wooden Spike at 1 in 3, and Flamethrower at 1 in 9. Those popups are the fastest way to tell what you actually pulled.",
          ],
        },
        {
          heading: "The 'In N Rolls' unlock sign",
          paragraphs: [
            "Each station's display sits behind a sign that reads \"In N Rolls\" with a Locked marker. Footage taken on different days shows counters in the teens and twenties, which is consistent with a per-category roll count that unlocks something — most likely the next display slot at that station.",
            "Because the exact unlock rule has not been confirmed end-to-end, treat the counter as a progress meter: rolling toward the number is safe, and the total shrinks as you play that category.",
          ],
        },
        {
          heading: "Luck and duplicates",
          paragraphs: [
            "Two of the four official game passes are permanent luck multipliers (2x and 4x Luck on rolls), and the skill tree also sells luck upgrades such as Luck II and Luck III. That is a strong signal that luck modifies the roll odds rather than guaranteeing a specific item.",
            "Duplicates are part of the loop rather than a loss: spare parts can be dropped or sold through the shop interface, and value tags like $10 on a Wooden Spike suggest low-tier duplicates are meant to be converted back into cash. The exact sale flow has not been read frame-by-frame yet, so this page will stay conservative until it is.",
          ],
        },
      ],
      faq: [
        {
          question: "What are the best odds in the game?",
          answer:
            "The best slot read so far is the Small Engine at 1 in 3 from the Engines category. The ladder tops out at 1 in 12,500 for the rarest engine we have observed.",
        },
        {
          question: "Does luck change the odds shown in the Index?",
          answer:
            "The Index appears to show base odds. Luck passes and skills are advertised as permanent luck multipliers on rolls, so the practical rate is likely better than the base number — that part is advertised in the shop rather than shown in the Index.",
        },
        {
          question: "Can I choose which category I roll?",
          answer:
            "Yes. Stations show a SELECT CATEGORY picker with options like BLOCKS, ENGINES, and WHEELS before you roll, so you can focus a session on the part type you need.",
        },
      ],
    },

    // ============================================================
    {
      slug: "car-parts",
      eyebrow: "Build system",
      title: "Car Parts & Build Slots",
      metaDescription:
        "The car part types that make up a build in Build and Kill Zombies, the missing-parts shop, and what each slot does on a run.",
      summary: "Slot types, documented parts, and the missing-parts shop.",
      updatedOn: "2026-09-16",
      heroImage: {
        src: "/screenshots/gameplay-build.webp",
        alt: "In-game build mode showing part categories",
        caption: "Build Mode groups parts into tabs such as STRUCTURES, SUPPORTS, and TURRETS.",
      },
      sections: [
        {
          heading: "The parts that make a car",
          paragraphs: [
            "A working build combines several part types before it can drive. Footage of the build flow shows prompts in order: buy the build tool, open the build menu, then place parts onto your plot before pressing DRIVE.",
            "Across sessions, the part set shown in the build menu includes engine, wheel, seat, body, turret, fuel barrel, armour, and boost pieces. The slot counter in build mode (for example 0/8) fills as you place parts, which is how the game communicates that a build has room for a fixed number of pieces.",
          ],
          table: {
            headers: ["Part", "Role on the car", "Seen in"],
            rows: [
              ["Engine", "Power source for the drive", "Roll station + shop"],
              ["Wheel", "Movement", "Build menu"],
              ["Seat", "Lets you actually drive it", "Build menu + codes"],
              ["Fuel Barrel", "Run length before refuelling", "Build menu"],
              ["Body", "The frame everything mounts on", "Build menu"],
              ["Turret", "Mounted weapon", "Build menu"],
              ["Armour", "Soaks zombie hits", "Build menu"],
              ["Boost", "Extra push during a run", "Build menu"],
              ["Spike", "Contact damage on the front face", "Build menu (footage)"],
            ],
          },
        },
        {
          heading: "Where parts come from",
          paragraphs: [
            "Parts arrive three ways. The CAR PARTS station rolls random parts from a category you pick. The Car Builds panel turns owned parts into finished vehicles — each blueprint lists the exact parts it needs. And codes hand out starter parts: the COMMUNITY code alone gives a Small Engine and a Small Tank.",
            "When a blueprint's part set is incomplete, the Missing Parts screen takes over: it reads \"You need the following parts to spawn Fast Furious\" and lists the missing pieces with counts, alongside a coin top-up price (159 coins observed to complete one set). It is the game's shortcut between \"almost have the car\" and driving it.",
          ],
          image: {
            src: "/screenshots/gameplay-missingparts.webp",
            alt: "In-game Missing Parts panel listing the parts needed for a blueprint",
            caption: "Missing Parts shows exactly which pieces a blueprint still needs.",
          },
        },
        {
          heading: "Starter parts and early rolls",
          paragraphs: [
            "The first engine most players see is the Small Engine, the 1 in 3 slot on the Engines ladder, and the codes page confirms it is also handed out directly. A Small Tank comes bundled with the same code, which pairs with the fuel barrel slot.",
            "Early sessions are about covering the basics — engine, wheels, seat, fuel — before spending on weapons. Footage of a first run shows the player buying the build tool, placing a handful of parts, and only then rolling for a weapon.",
          ],
        },
        {
          heading: "Value tags and duplicates",
          paragraphs: [
            "Every part carries a value tag visible in pickup popups and the Index — Wooden Spike shows $10, and Flamethrower shows $10,000. Those numbers track with rarity: the rarer the roll slot, the higher the listed value.",
            "That makes duplicates useful. Extra rolls inevitably produce low-tier parts, and the value tags suggest they can be sold or traded back into cash through the shop interface rather than sitting in a list. The full sale flow has not been captured frame-by-frame yet, so the numbers here stay as observed.",
          ],
        },
        {
          heading: "Build order that works",
          paragraphs: [
            "Footage of successful runs follows a consistent order: chassis pieces and engine first, wheels and seat next, fuel after that, and weapons last. A car with a weapon but no fuel simply cannot go far, and a car with no seat cannot be driven at all.",
            "Once the basics are covered, armour and boost pieces add survivability and reach. Keep an eye on the slot counter — a build that fills every slot with low-tier pieces still beats a build with two great parts and nothing else.",
          ],
        },
      ],
      faq: [
        {
          question: "What is the first part I should place?",
          answer:
            "The chassis/body and an engine. Nothing else moves until those are on the plot, and the tutorial walks through buying the build tool first.",
        },
        {
          question: "How many parts fit on one car?",
          answer:
            "The build counter shows a fixed slot count that has displayed values such as 0/8 during build sessions observed in footage. Slots are also split between part groups, so some pieces compete for the same space.",
        },
        {
          question: "Where do I buy a specific part instead of rolling?",
          answer:
            "Open Car Builds and pick the vehicle you are working toward — its Required Parts list shows exactly what is still missing, and the Missing Parts screen tops the set up with coins (159 coins completed one observed set).",
        },
      ],
    },

    // ============================================================
    {
      slug: "supports",
      eyebrow: "Combat loadout",
      title: "Supports & Weapons",
      metaDescription:
        "Mounted weapons and defence pieces in Build and Kill Zombies, the observed supports, and how support slots expand.",
      summary: "Mounted weapons, observed supports, and support slot capacity.",
      updatedOn: "2026-09-16",
      heroImage: {
        src: "/screenshots/gameplay-run.webp",
        alt: "A car build in a run with mounted weapons",
        caption: "Supports are the weapons and defence pieces you mount before a run.",
      },
      sections: [
        {
          heading: "What supports are",
          paragraphs: [
            "Supports are the second half of a build: everything that kills or blocks zombies once the wheels are moving. They come from the SUPPORTS roll station, and they mount onto the same build as your parts.",
            "The in-game UI treats supports as a limited resource. The bottom bar shows a support count like 2/2, and the skill tree sells a \"More Support\" line that raises it — More Support II is listed at 3.70K in the September 16 build.",
          ],
          list: [
            "Mount supports before pressing DRIVE — mid-run changes are limited.",
            "Front-facing mounts reach zombies first when you drive into a wave.",
            "Support count upgrades let you stack more pieces on the same car.",
          ],
        },
        {
          heading: "Observed supports so far",
          paragraphs: [
            "Support pickups show name cards with odds, rarity, and value, which is how the following entries were read from footage. The list is growing as more sessions are reviewed — anything not yet seen stays off this page rather than being guessed.",
          ],
          table: {
            headers: ["Support", "Odds", "Rarity tag", "Value"],
            rows: [
              ["Wooden Spike", "1 in 3", "—", "$10"],
              ["Flamethrower", "1 in 9", "—", "$10,000"],
              ["Double Barrel", "1 in 10", "Legendary", "$2.2K"],
              ["Tubex", "Not yet observed", "—", "Not yet observed"],
            ],
          },
        },
        {
          heading: "Support slots and capacity",
          paragraphs: [
            "Support capacity starts small. Footage shows a 2/2 support bar in normal play, and the skill tree carries a More Support line — More Support II is listed at 3.70K in the September 16 build.",
            "That pairing suggests capacity upgrades come in tiers, and that heavier builds simply cannot mount everything at once until the skill line is bought up. Plan support purchases around the capacity you actually have.",
          ],
        },
        {
          heading: "Weapons and the Weapons tab",
          paragraphs: [
            "A Weapons tab exists in the Index alongside the part categories, and weapon-style entries appear in pickup popups — Double Barrel is a shotgun-style support with a Legendary tag at 1 in 10.",
            "The fastest way to grow this page is the Index itself: it records every support and weapon you have pulled, locked silhouettes included, so a late-game player's Index screen is effectively the full loot table.",
          ],
        },
        {
          heading: "Choosing between offence and defence",
          paragraphs: [
            "Early runs die to volume, not bosses. A single contact weapon on the front face clears the first waves while a defensive piece like a spike or armour keeps the engine alive, and fuel gives the car the distance to make those choices matter.",
            "Later runs flip that: damage over a wide area starts to matter more than a single front weapon, which is where area effects like a flamethrower earn their slot. The tier list ranks the observed options with notes on when each one earns its place.",
          ],
        },
      ],
      faq: [
        {
          question: "How many supports can I mount?",
          answer:
            "It starts small — footage shows a 2/2 bar in normal play. The skill tree's More Support line raises capacity, with More Support II listed at 3.70K in the latest build we checked.",
        },
        {
          question: "What is the best early support?",
          answer:
            "Anything contact-based on the front face. Wooden Spike at 1 in 3 is the most common pull and does exactly that job while you save for better rolls.",
        },
        {
          question: "Where do supports come from?",
          answer:
            "The SUPPORTS roll station is the main source, and the Exclusive Shop's support-related listings plus skill nodes like Support Items expand what you can field.",
        },
      ],
    },

    // ============================================================
    {
      slug: "skills",
      eyebrow: "Progression",
      title: "Skills & Permanent Upgrades",
      metaDescription:
        "The permanent skill tree in Build and Kill Zombies: luck, support capacity, and combat nodes with observed costs.",
      summary: "The skill tree, luck line, and observed upgrade costs.",
      updatedOn: "2026-09-16",
      heroImage: {
        src: "/screenshots/gameplay-skills.webp",
        alt: "In-game skill tree with upgrade nodes and prices",
        caption: "Skill nodes show their effect and cash cost before you buy.",
      },
      sections: [
        {
          heading: "How skills work",
          paragraphs: [
            "Skills are the permanent layer of progress. Unlike parts, they survive every run and are bought once with cash from the SKILLS menu, which sits in the left-side button column next to SHOP, INDEX, SAVES, and SETTINGS.",
            "Each node shows a name, a one-line effect, and a cash price. Buying the node applies its bonus permanently — footage shows both single-step nodes and multi-tier lines such as Luck II and Luck III.",
          ],
        },
        {
          heading: "The luck line",
          paragraphs: [
            "Luck nodes are the ones most players buy first, because they feed directly back into the roll stations. Observed entries: Luck II grants +20% Luck for 250, and Luck III grants +25% Luck for 625.",
            "Those numbers are deliberately conservative to buy — cheaper than most support upgrades — which fits the game's loop: better rolls produce better parts, and better parts earn faster. The node confirmations were read from a September 16 session and include their prices on screen.",
          ],
          table: {
            headers: ["Node", "Effect", "Cost"],
            rows: [
              ["Luck II", "+20% Luck", "250"],
              ["Luck III", "+25% Luck", "625"],
              ["Unlock Gold Roll", "Opens the Gold Roll line", "—"],
              ["Gold Roll I", "Gives a random gold item", "1.20K"],
              ["More Support II", "Raises support slot capacity", "3.70K"],
            ],
          },
        },
        {
          heading: "Support and combat nodes",
          paragraphs: [
            "The second branch of the tree feeds the car itself. More Support II (3.70K) continues the support-capacity line, and an Unlock Gold Roll node opens the Gold Roll branch before Gold Roll I (1.20K) — described in-game as \"Gives a random gold item\".",
            "Gold Roll I is the headline node of the branch: given that gold results are the ones the game celebrates with the Gold Roll popup during normal rolls, this line converts an unreliable event into a purchasable one and is worth planning for once the cheap luck nodes are done.",
          ],
        },
        {
          heading: "Reading the tree",
          paragraphs: [
            "Nodes are laid out in a grid/hex style with locked entries greyed out until you can afford or unlock them. Because cash is shared between skills and parts, the practical rule is: buy luck nodes until rolls feel productive, then capacity, then comfort nodes.",
            "A reset function exists in the skills UI in some builds of the screen (a RESET SKILLS label was visible during an early session), which would let players re-spend cash if a branch turns out not to fit their build. Its exact cost and rules have not been captured yet, so this page notes it as unverified.",
          ],
          image: {
            src: "/screenshots/gameplay-skilltree.webp",
            alt: "In-game skill tree node web with Luck, Support and Gold Roll branches",
            caption: "The skill tree is a node web: luck and support branches on the left, the Gold Roll line below.",
          },
        },
        {
          heading: "Planned upgrade order",
          paragraphs: [
            "For a fresh account: cover the basic car first (engine, wheels, seat, fuel), then buy the cheap luck nodes, then More Support once you own two supports worth mounting. Gold Roll I and Fast Reload come after — they multiply an already-working loop rather than fixing a broken one.",
            "If your runs keep ending to a lack of fuel rather than a lack of damage, put the next upgrade into the car instead of the tree; the tree cannot fix a build that does not fit together.",
          ],
        },
      ],
      faq: [
        {
          question: "What should I buy first in the skill tree?",
          answer:
            "The cheap luck nodes. Luck II at 250 and Luck III at 625 improve every future roll, which is the highest-leverage purchase available early.",
        },
        {
          question: "Is Gold Roll I worth 1.20K?",
          answer:
            "It gives a random gold item per its in-game description, so it converts luck into a guaranteed quality floor. Buy it once your loop is stable and cheaper luck nodes are done.",
        },
        {
          question: "Can I reset skills?",
          answer:
            "A RESET SKILLS control appeared in one recorded session but its rules were not captured, so treat resets as unverified until confirmed in-game.",
        },
      ],
    },

    // ============================================================
    {
      slug: "vehicles",
      eyebrow: "Garage",
      title: "Vehicles & Car Builds",
      metaDescription:
        "The Car Builds panel in Build and Kill Zombies: blueprint vehicles, their Required Parts lists, and how Missing Parts completes a build.",
      summary: "Blueprint vehicles, Required Parts, and finishing a build.",
      updatedOn: "2026-09-16",
      heroImage: {
        src: "/screenshots/gameplay-carbuilds.webp",
        alt: "In-game Car Builds panel listing blueprint vehicles and their required parts",
        caption: "Car Builds is a blueprint board: parts in, vehicle out.",
      },
      sections: [
        {
          heading: "The Car Builds panel",
          paragraphs: [
            "Car Builds is a blueprint board, not a price list. Each vehicle entry shows a preview, a Required Parts row with icon counts (values like x10, x1, x4, x2, x1 were read from footage), and a green Spawn button that produces the car once the set is complete.",
            "Two blueprints were readable in September footage: Fast Furious and Blue Monster. Their part requirements are listed below exactly as the counts appeared — the icons do not carry text labels, so the part types are recorded as counts rather than names.",
          ],
          table: {
            headers: ["Blueprint", "Required parts (counts)", "Seen"],
            rows: [
              ["Fast Furious", "x10, x1, x4, x2, x1, x1, x1", "2026-09-16 footage"],
              ["Blue Monster", "x1, x5, x2, x5, x1, x13, x1", "2026-09-16 footage"],
            ],
          },
          image: {
            src: "/screenshots/gameplay-carbuilds.webp",
            alt: "Car Builds blueprint list with Required Parts rows",
            caption: "Every blueprint lists the parts it needs before its Spawn button goes live.",
          },
        },
        {
          heading: "What a blueprint changes",
          paragraphs: [
            "A blueprint decides which combination of parts becomes a finished vehicle. Completing the set and pressing Spawn produces the car, so vehicle progression is tied directly to your roll sessions rather than to a cash purchase.",
            "That also means the fastest route to a new vehicle is usually targeting a roll category — the station's SELECT CATEGORY picker is the steering wheel for vehicle progress.",
          ],
        },
        {
          heading: "New vehicles in updates",
          paragraphs: [
            "Vehicles are also a favourite update item. The in-game what's-new panel from September 2026 lists \"New Vehicle: Scooter\" alongside a new weapon (Cursed Katana), limited-time turbo items, and lucky blocks.",
            "Keeping an eye on Car Builds pays off: update vehicles sometimes fill a gap the current blueprints do not cover, like a cheap agile option.",
          ],
        },
        {
          heading: "When to pick your next blueprint",
          paragraphs: [
            "Pick your next blueprint when you are close to completing its part set — the Required Parts view tells you exactly how many pieces you are short. If a set is one or two pieces away, the Missing Parts top-up (paid in coins) can close the gap immediately.",
            "Until then, keep spending on rolls and luck nodes. A blueprint with ten missing pieces is a plan, not a purchase.",
          ],
        },
        {
          heading: "Fuel, distance, and vehicle reach",
          paragraphs: [
            "Blueprints pair with the fuel system: a run lasts as long as your fuel and survivability allow. Footage of runs shows a Distance counter climbing into the hundreds and a checkpoint number updating as you push on, and running dry ends the drive wherever you are.",
            "That makes fuel parts a prerequisite for any serious blueprint — a heavier vehicle that hauls more parts also needs more fuel to reach the same distance.",
          ],
        },
      ],
      faq: [
        {
          question: "How do you unlock new vehicles?",
          answer:
            "By collecting the parts each blueprint lists. The Car Builds panel shows the Required Parts row for every vehicle, and Missing Parts names exactly what is still missing.",
        },
        {
          question: "Can you buy vehicles with cash?",
          answer:
            "Not directly — blueprints are gated by parts rather than a price tag. Missing Parts does let you top up an almost-complete set with coins (159 coins completed one observed set).",
        },
        {
          question: "Was a new vehicle added in an update?",
          answer:
            "Yes — the September 2026 what's-new panel lists a Scooter as a new vehicle alongside a new weapon and limited-time items.",
        },
      ],
    },

    // ============================================================
    {
      slug: "bosses",
      eyebrow: "Events",
      title: "Bosses & Events",
      metaDescription:
        "Boss encounters and limited-time events in Build and Kill Zombies, including the King 1x1x1x1 fight and the Hacker Event.",
      summary: "Boss fights, event seasons, and the badges tied to them.",
      updatedOn: "2026-09-16",
      heroImage: {
        src: "/screenshots/gameplay-boss.webp",
        alt: "Boss countdown timer in the game world",
        caption: "A NEXT BOSS IN countdown runs in the world between encounters.",
      },
      sections: [
        {
          heading: "How bosses appear",
          paragraphs: [
            "Bosses are shared events rather than private instances. The world shows a NEXT BOSS IN countdown, and when it hits zero a boss encounter begins with its own BOSS FIGHT health bar on screen.",
            "When a named boss is due, a banner prompts \"1x1x1x1 is coming! Press ATTACK to join the battle.\" — joining the fight is a deliberate action rather than automatic, so watch for the prompt if you want the kill credit.",
            "Footage from a live session shows the countdown in minutes — including a 51-second and a 10-second frame — so encounters are frequent enough to plan a session around.",
          ],
        },
        {
          heading: "King 1x1x1x1",
          paragraphs: [
            "The named boss in the current event cycle is King 1x1x1x1, a Roblox-lore crossover character. Defeating it awards the badge \"You defeated the King 1x1x1x1\", which by its award count is the hardest of the game's badges — only a small fraction of players who have it have been tracked finishing the fight.",
            "A code on the codes page (1x1x1x1) hands out 150 Hacker Tokens, which ties the boss fight to the Hacker Event economy.",
          ],
        },
        {
          heading: "The Hacker Event",
          paragraphs: [
            "September 2026 ran a Hacker Event layered over normal play. The related badge has been awarded to well over a million accounts, making it the widest-reaching event so far, and its currency is Hacker Tokens — earned from codes now, and from event play during the window.",
            "Event rewards and the token shop layout have not been fully documented yet; what is confirmed is the currency, the badge, and the code grants.",
          ],
        },
        {
          heading: "Admin Abuse nights",
          paragraphs: [
            "A scheduled event board in the world advertises an \"ADMIN ABUSE\" session with a sign-up prompt and a countdown (one observed reminder read \"Wed, Sep 16 at 10:00 PM\"). Players sign up from the board and the game confirms with \"Successfully signed up for this event!\".",
            "Treat these as community night events: exactly what happens during the session is up to whoever runs it, and the sign-up simply reserves your spot.",
          ],
        },
        {
          heading: "Badges as milestones",
          paragraphs: [
            "The game's badge set doubles as a progress map: a Welcome badge for first join (over a million awards, still growing by hundreds of thousands a day), the Hacker Event badge, and the King 1x1x1x1 defeat.",
            "Badge counts are also the best public signal of the game's growth curve — the Welcome badge added roughly 397,000 awards in a single day in mid-September, which is why this site re-checks its numbers weekly.",
          ],
        },
      ],
      faq: [
        {
          question: "How often do bosses spawn?",
          answer:
            "The world runs a live NEXT BOSS IN countdown; observed frames show reminders in the seconds-to-minutes range, so encounters fire regularly during active sessions.",
        },
        {
          question: "How hard is the King 1x1x1x1 fight?",
          answer:
            "The defeat badge is the rarest of the three — its award count is a small fraction of the Welcome badge, making it the game's toughest checked milestone so far.",
        },
        {
          question: "What are Hacker Tokens for?",
          answer:
            "They are the September 2026 Hacker Event currency. Two codes (HACKER and 1x1x1x1) grant them directly; in-event spending details are still being documented.",
        },
      ],
    },

    // ============================================================
    {
      slug: "runs",
      eyebrow: "Gameplay loop",
      title: "Runs, Distance & Fuel",
      metaDescription:
        "How a run works in Build and Kill Zombies: the DRIVE button, distance and checkpoint counters, fuel limits, and going out of bounds.",
      summary: "The run loop: drive, survive waves, push distance, bank cash.",
      updatedOn: "2026-09-16",
      heroImage: {
        src: "/screenshots/gameplay-run.webp",
        alt: "Driving during a run with distance counter visible",
        caption: "Distance and checkpoint counters track how far a build survives.",
      },
      sections: [
        {
          heading: "Starting a run",
          paragraphs: [
            "With a car built and at least one support mounted, the run starts from the green DRIVE button — keyboard F. A short lobby countdown runs before the drive begins, and the HUD switches to run mode.",
            "During a run the screen shows a Distance counter, a checkpoint indicator, a speed readout, and the current BOSS FIGHT bar when an encounter is live. Cash ticks up from kills and from distance travelled, per the store description of the 2x Cash pass.",
          ],
        },
        {
          heading: "Distance and checkpoints",
          paragraphs: [
            "Distance is the run's scoreboard. Footage shows it climbing through values like 58, 352, and 993 as the car pushes through waves, with checkpoint numbers (24, 63, 105…) marking progress along the track.",
            "Reaching deeper checkpoints is the mid-game goal: each stretch adds tougher zombie waves, and the cash per kill rises with them, which is what makes later runs worth attempting with a finished build.",
          ],
        },
        {
          heading: "Fuel is the run timer",
          paragraphs: [
            "Runs end when fuel does. A dry tank stops the car wherever it is — footage shows the player reacting to running out mid-drive — which turns fuel capacity into a direct extension of run length.",
            "That is why fuel barrels and Small Tanks from the codes sit in the early shopping list: more fuel is more distance, and the last stretch of a run is usually the most profitable per metre.",
          ],
        },
        {
          heading: "Out of bounds and returning",
          paragraphs: [
            "Driving off the intended battlefield triggers an \"Out of bounds! Return to the Battle Field!\" warning with a RETURN button. Ignore it and the game pulls you back; treat it as the map's way of keeping runs on the track.",
          ],
        },
        {
          heading: "Co-op runs and plots",
          paragraphs: [
            "The lobby menu includes a Co-Op option, and the build system ships a plot permission panel with Player, Other Players, and Alone modes. That means a plot can be shared: friends can build on or around your base depending on the permission you set.",
            "For co-op planning, the safe default is keeping permissions to yourself until your build is finished, then opening the plot when everyone has a working car and the group is ready to push the same stretch together.",
          ],
        },
        {
          heading: "What ends a run",
          paragraphs: [
            "A run ends when the car is destroyed, fuel runs dry and you return to base, or you drive back deliberately to bank what you earned and rebuild. There is no penalty list visible in footage for a dead run, so pushing one checkpoint further with a fragile build is a legitimate gamble.",
            "The practical loop that footage confirms: build, drive, bank, upgrade, repeat — until the next checkpoint is reachable in one tank.",
          ],
        },
      ],
      faq: [
        {
          question: "What does distance actually do?",
          answer:
            "It is the run's progress and payout driver: cash comes from kills and from distance travelled, and checkpoints mark how deep a build can go.",
        },
        {
          question: "How do I run out of fuel?",
          answer:
            "Fuel drains over the drive; a Small Tank or fuel barrel extends how far you get. When it hits zero the car stops, which ends the push at that point.",
        },
        {
          question: "Can I play with friends?",
          answer:
            "Yes — the Co-Op menu entry and the plot permission panel (Player / Other Players / Alone) indicate shared plots are supported.",
        },
      ],
    },

    // ============================================================
    {
      slug: "economy",
      eyebrow: "Money",
      title: "Cash, Tokens & Boosters",
      metaDescription:
        "Every currency in Build and Kill Zombies: cash sources, Hacker Tokens, global boosters, and the official game passes.",
      summary: "Cash sources, Hacker Tokens, boosters, and the official passes.",
      updatedOn: "2026-09-16",
      heroImage: {
        src: "/screenshots/gameplay-shop.webp",
        alt: "Exclusive Shop with cash packs and codes",
        caption: "The Exclusive Shop carries passes, cash packs, and the community codes box.",
      },
      sections: [
        {
          heading: "Cash is the main currency",
          paragraphs: [
            "Cash buys parts, vehicles, and skill nodes. It is earned during runs from two confirmed taps: killing zombies and covering distance, which the official 2x Cash pass description spells out (\"Works both cash earned by killing zombies and distance travelling\").",
            "The HUD shows cash next to a second green token counter at the bottom-left of the screen. Codes commonly grant cash — CashDrop gives 500 and COMMUNITY hands out 1,000 alongside starter parts.",
          ],
        },
        {
          heading: "Hacker Tokens",
          paragraphs: [
            "Hacker Tokens are the limited event currency attached to the September 2026 Hacker Event. Two of the five current codes grant them (HACKER: 50; 1x1x1x1: 150).",
            "Because they are event-scoped, their long-term value is the event's shop contents; this page tracks the token balance sources and will expand once the event spending options are documented.",
          ],
        },
        {
          heading: "Boosters and bonuses",
          paragraphs: [
            "A Global Booster panel appears in the world showing a 10K booster with a reset countdown, and the bottom-right of the HUD carries small bonus meters (+0% when inactive). Boosters appear to be timed server-wide multipliers that reset on a cycle.",
            "Stacking those windows with a good build is the free-to-play answer to the paid luck passes: roll during a booster, then spend the results on a longer run.",
          ],
        },
        {
          heading: "Official game passes",
          paragraphs: [
            "Four passes exist on the official page, and each one targets the loop directly. Their store descriptions are quoted below as published.",
          ],
          table: {
            headers: ["Game pass", "Official description"],
            rows: [
              ["2x Cash", "Earn more as twice and grind faster! Works both cash earned by killing zombies and distance travelling"],
              ["Faster Roll", "Roll fast, earn fast!"],
              ["2x Permanent Luck", "Permanent 2X Luck on rolls"],
              ["4x Permanent Luck", "Permanent 4X Luck on rolls"],
            ],
          },
        },
        {
          heading: "The Exclusive Shop",
          paragraphs: [
            "In-game, the Exclusive Shop screen carries the pass listings alongside cash packs and a Gift A Player button, plus the Community Codes box. Cash packs observed in the shop are bundles like 50K and 100K with Robux price buttons.",
            "A 60% Off Gamepass promotion was listed in a September what's-new panel, which is the pattern to watch if you are considering a pass: discounts have appeared alongside content updates.",
          ],
        },
      ],
      faq: [
        {
          question: "What is the fastest way to earn cash?",
          answer:
            "Runs that go deep — distance and kills both pay. Stack that with the 2x Cash pass or a global booster window if you have them.",
        },
        {
          question: "Are Hacker Tokens worth collecting?",
          answer:
            "They are the event currency, and two current codes grant them for free. If you play during the event window, redeeming both codes is a no-risk way to bank them.",
        },
        {
          question: "Were game passes ever discounted?",
          answer:
            "Yes — a what's-new panel in September 2026 advertised 60% off Gamepass, so sales do happen around updates.",
        },
      ],
    },
  ],
};
