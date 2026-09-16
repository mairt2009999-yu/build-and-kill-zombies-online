import type { Guide } from "./types";

// ⭐ 指南内容 —— 每个 Guide 生成一个 /guides/{slug}/ 页面,首页自动列出
export const guidesContent: {
  heading: string;
  intro: string;
  guides: Guide[];
} = {
  heading: "A five-part walkthrough, plus topic guides",
  intro:
    "Start with the Walkthrough (Part 1 to 5) for a complete path from your first spawn to endgame — then use the topic guides when you need depth on controls, money, badges, or builds.",
  guides: [
    // ============================================================
    // ⭐ 主线攻略(Walkthrough)—— 按新玩家旅程组织,建议按顺序读:
    //   Part 1 游戏怎么玩/元素功能 → Part 2 物品与等级 → Part 3 第一次跑(第一关)
    //   → Part 4 中期循环(第二关) → Part 5 蓝图/Boss/终局
    // ============================================================
    {
      slug: "walkthrough-1-basics",
      label: "Walkthrough · Part 1",
      series: "walkthrough",
      seriesOrder: 1,
      title: "How the Game Works: Start Here",
      metaDescription:
        "A brand-new player's guide to Build and Kill Zombies: the premise, every button and panel on screen, the core loop, and what to do in your first five minutes.",
      summary: "The premise, every UI element, the core loop, and your first five minutes.",
      updatedOn: "2026-09-16",
      heroImage: {
        src: "/screenshots/gameplay-build.png",
        alt: "In-game Build Mode with part categories",
        caption: "Your first job in the game: turn a plot into a car that moves.",
      },
      sections: [
        {
          heading: "The premise in one paragraph",
          paragraphs: [
            "Build and Kill Zombies is a car-building survival game on Roblox. You assemble a vehicle out of rolled parts, mount weapons and defences on it, then drive it into endless waves of zombies — and you get paid for how far you go and how many you flatten.",
            "Nothing is thrown away: the cash from every run buys better parts and permanent upgrades, which make the next run deeper, which pays more. That single loop is the entire game, and everything else is a system that feeds it.",
          ],
        },
        {
          heading: "Your screen, decoded",
          paragraphs: [
            "Before touching anything, learn where things live. The interface is compact and every button matters, so here is the full map from the moment you spawn.",
          ],
          table: {
            headers: ["Where", "What it is", "What it does"],
            rows: [
              ["Left column", "SHOP button", "Car Builds blueprints, sold parts, and the codes box"],
              ["Left column", "INDEX button", "Your collection: every roll category and what you own"],
              ["Left column", "SKILLS button", "The permanent upgrade tree"],
              ["Left column", "SAVES button", "Stored build slots"],
              ["Left column", "SETTINGS / Co-Op", "Options and multiplayer sessions"],
              ["Top middle", "DRIVE button (F key)", "Starts a run from a finished car"],
              ["Bottom centre", "B key", "Opens Build Mode anywhere"],
              ["Bottom left", "Coin + Cash counters", "Your two wallet numbers"],
              ["World", "CAR PARTS & SUPPORTS stations", "Where you roll parts and weapons"],
              ["World", "FREE CHEST board", "Free reward: like the game + join the group"],
              ["World", "NEXT BOSS IN sign", "Countdown to the next shared boss fight"],
            ],
          },
        },
        {
          heading: "The core loop",
          paragraphs: [
            "Roll → Build → Drive → Earn → Upgrade. You roll at a station (pick a category, get a random part), build your car on the plot, drive it into zombies until the run ends, and bank whatever you earned.",
            "Then you spend. Two thirds of your cash historically goes into rolls and the skill tree, the rest fills gaps in your build. The fastest accounts are not the ones with the best luck — they are the ones that never leave cash idle.",
          ],
          list: [
            "Roll: CAR PARTS for car pieces, SUPPORTS for weapons and defence.",
            "Build: fill the core slots first — engine, wheels, seat, fuel.",
            "Drive: press F, collect cash from distance and kills.",
            "Upgrade: skills first (they compound), then better parts.",
          ],
        },
        {
          heading: "What to do in your first five minutes",
          paragraphs: [
            "The game's own tutorial sets the order and it is worth following exactly: collect your starting cash, buy the Build Tool, open the Build menu, and place your first parts.",
            "Then redeem the COMMUNITY code before anything else — it hands you 1,000 cash plus a Small Engine and a Small Tank, which covers half of your first car for free. CashDrop's 500 goes to whatever is still missing.",
          ],
        },
        {
          heading: "The vocabulary you will see",
          paragraphs: [
            "Three words carry most of the game's meaning, and the rest of this walkthrough leans on them constantly.",
          ],
          table: {
            headers: ["Word", "Means"],
            rows: [
              ["Roll", "A randomised pull from a category ladder (odds like 1 in 3 up to 1 in 12,500)"],
              ["Support", "A mounted weapon or defence piece — your car's combat power"],
              ["Blueprint", "A vehicle recipe in Car Builds; complete its Required Parts to spawn it"],
              ["Run", "One drive, from the green DRIVE button to a dead car or empty tank"],
              ["Checkpoint", "A distance marker a run passes; deeper checkpoints mean bigger payouts"],
            ],
          },
        },
      ],
      faq: [
        {
          question: "What kind of game is this exactly?",
          answer:
            "A car-build survival game: you roll parts, assemble a vehicle, and drive it through zombie waves for cash — distance and kills both pay.",
        },
        {
          question: "Do I need Robux to play properly?",
          answer:
            "No. Everything can be earned with cash from runs; the game passes (2x Cash, luck multipliers, Faster Roll) simply speed things up.",
        },
        {
          question: "What is the single most important button?",
          answer:
            "DRIVE (F) — it is the moment your build starts earning. If you are ever unsure what to do next, finishing the car and pressing it is never a mistake.",
        },
      ],
    },

    // ============================================================
    {
      slug: "walkthrough-2-items",
      label: "Walkthrough · Part 2",
      series: "walkthrough",
      seriesOrder: 2,
      title: "Parts, Skills, Vehicles and Levels Explained",
      metaDescription:
        "The full item and progression system in Build and Kill Zombies: the six part families, how rolls work, the skill tree tiers, vehicle blueprints, and every currency.",
      summary: "The six part families, roll ladders, skill tiers, blueprints and currencies.",
      updatedOn: "2026-09-16",
      heroImage: {
        src: "/screenshots/gameplay-index.png",
        alt: "In-game Index showing the Engines category and its odds",
        caption: "The Index is your collection record — each category has its own ladder.",
      },
      sections: [
        {
          heading: "The six part families",
          paragraphs: [
            "Everything you roll belongs to one of six categories, and the in-game Index tracks each separately: Engines, Fuels, Wheels, Blocks, Supports, and Weapons.",
            "That split matters because the station's SELECT CATEGORY picker lets you choose which family a roll comes from — so the question is never just \"what did I get\" but \"which family do I need next\".",
          ],
          table: {
            headers: ["Family", "What it feeds", "Where you see it"],
            rows: [
              ["Engines", "The car's power", "CAR PARTS station, Index"],
              ["Fuels", "Run length (fuel capacity)", "CAR PARTS station, Index"],
              ["Wheels", "Movement", "CAR PARTS station, Index"],
              ["Blocks", "Body and chassis pieces", "CAR PARTS station, Index"],
              ["Supports", "Weapons and defence mounts", "SUPPORTS station, Index"],
              ["Weapons", "Offensive pieces", "Index (Weapons tab)"],
            ],
          },
        },
        {
          heading: "How rolls and odds work",
          paragraphs: [
            "Each category hides a fixed ladder of ten odds bands — the Engines family runs 1 in 3, 1 in 6, 1 in 14, 1 in 40, 1 in 90, 1 in 150, 1 in 375, 1 in 750, 1 in 10,000, and 1 in 12,500. The Index shows every band; locked ones display as silhouttes until you pull them.",
            "Your odds are not fixed in place: luck passes (2x and 4x) and skill nodes like Luck II / Luck III multiply your effective rate, and the roll stations themselves carry an \"In N Rolls\" counter that ticks toward something as you play a category.",
          ],
        },
        {
          heading: "The skill tree: where levels live",
          paragraphs: [
            "There is no character level in this game — progression lives in the skill tree's node tiers. Lines upgrade in Roman-numeral steps: Luck I → Luck II (+20%) → Luck III (+25%), and More Support I → More Support II, each tier costing more than the last.",
            "Skills are permanent and bought with cash: the cheap luck nodes (250 and 625) compound into every future roll, while the Gold Roll line (Unlock → Gold Roll I at 1.20K) guarantees a quality floor.",
          ],
        },
        {
          heading: "Vehicles are blueprints, not purchases",
          paragraphs: [
            "In Car Builds you will not find price tags — you find Required Parts lists. Each vehicle (Fast Furious, Blue Monster and more) is a collecting challenge: finish the list, press Spawn, get the car.",
            "When a set is one or two pieces short, the Missing Parts screen offers a coin top-up (159 coins completed one observed set), which is the difference between waiting a session and driving now.",
          ],
        },
        {
          heading: "Every currency in your wallet",
          paragraphs: [
            "The bottom-left corner shows two numbers, and the game adds a third during live events. Knowing what each one buys prevents the classic new-player mistake of hoarding the wrong one.",
          ],
          table: {
            headers: ["Currency", "Earned from", "Spent on"],
            rows: [
              ["Cash", "Distance + kills, codes", "Rolls' shop purchases, skill nodes, Missing Parts gaps"],
              ["Coins (round, green)", "Session rewards", "Completing missing-part sets"],
              ["Hacker Tokens", "HACKER and 1x1x1x1 codes, event play", "Hacker Event rewards"],
            ],
          },
        },
      ],
      faq: [
        {
          question: "Is there a level system?",
          answer:
            "Not a character level. Progression shows up as skill-tree tiers (Luck I→III, More Support I→II) and as your Index collections filling up.",
        },
        {
          question: "What are the best odds in the game?",
          answer:
            "The most common band we have read is 1 in 3 (the Small Engine on the Engines ladder); the rarest confirmed is 1 in 12,500 at the top of that same ladder.",
        },
        {
          question: "How do I choose which category to roll?",
          answer:
            "Use the SELECT CATEGORY picker at the station. Target the family your current blueprint is missing — random rolling spreads progress across six collections.",
        },
      ],
    },

    // ============================================================
    {
      slug: "walkthrough-3-first-run",
      label: "Walkthrough · Part 3",
      series: "walkthrough",
      seriesOrder: 3,
      title: "Your First Run, Step by Step",
      metaDescription:
        "Walkthrough of your first drive in Build and Kill Zombies: from buying the build tool through your first checkpoint and the upgrades you buy with the payout.",
      summary: "From buying the build tool to banking your first payout.",
      updatedOn: "2026-09-16",
      heroImage: {
        src: "/screenshots/gameplay-run.png",
        alt: "A first run in progress with the distance counter visible",
        caption: "Run one has one job: come back with money.",
      },
      sections: [
        {
          heading: "What run one is for",
          paragraphs: [
            "Your first run is not supposed to go far. Its job is to prove the loop works end-to-end — car moves, zombies die, cash comes home — and to fund the next round of upgrades.",
            "Players who expect a deep first run get frustrated and start spending in the wrong places. The correct mental model: run one is the tutorial's final exam, and passing means reaching your first checkpoint and banking the result.",
          ],
        },
        {
          heading: "The step-by-step",
          paragraphs: [
            "Follow the same order the game's tutorial teaches — footage of fresh accounts shows this exact sequence working.",
          ],
          list: [
            "Buy the Build Tool (the tutorial prompts you: 'Buy the Build Tool!').",
            "Open Build Mode (B) on your plot — a clean grid where the car goes.",
            "Roll CAR PARTS until you hold an engine, wheels, a seat, and fuel.",
            "Place the engine and chassis first, then wheels and seat, then fuel.",
            "Redeem COMMUNITY for a free Small Engine + Small Tank; keep CashDrop's 500 as backup.",
            "Mount one support (even a Wooden Spike) on the front face.",
            "Press DRIVE (F) and steer into the wave — hold on and watch the distance counter.",
          ],
        },
        {
          heading: "What the first checkpoint looks like",
          paragraphs: [
            "As you drive, a Distance counter climbs and checkpoint markers pass — footage of early runs shows the counter crossing values like 24, 58, and 82 before the run ends.",
            "Each stretch of road adds tougher zombies and better pay. A run that dies at distance 60 still pays enough to buy your first skill node, which is the actual goal of run one.",
          ],
        },
        {
          heading: "Your first run, minute by minute",
          paragraphs: [
            "Here is how a first drive usually plays out, timed for a starter build. This is a recommended pacing rather than an official game timeline — your exact speed depends on your car — but the shape holds for almost every first run.",
          ],
          table: {
            headers: ["Moment", "What happens", "What you do"],
            rows: [
              ["Before you press F", "Final build check", "Engine, wheels, seat and fuel placed; one support mounted; tank full"],
              ["0:00 – 1:00", "The easy stretch", "Drive straight and feel the steering; the first zombies fall to your front support"],
              ["1:00 – 2:00", "Distance climb (20–60)", "Cash starts ticking from kills; keep the car centred on the road"],
              ["2:00 – 3:00", "First checkpoint (60–90)", "Waves tighten up; note the distance where the car starts taking real hits"],
              ["3:00 until fuel is half", "The decision point", "Keep pushing — fuel is the timer, not your nerve. Turn back only if the car is falling apart"],
              ["Run end", "Banked payout", "Remember the distance you finished at; that number is your next build's benchmark"],
            ],
          },
          list: [
            "The one number worth remembering from run one: your ending distance.",
            "Second run's only goal is to beat it — even by ten metres.",
            "If the car died to damage before the tank ran dry, your first upgrade is armour; if it ran dry, it is fuel.",
          ],
        },
        {
          heading: "The four classic first-run mistakes",
          paragraphs: [
            "Almost every failed first run dies to one of four avoidable causes. Check your build against this list before pressing DRIVE.",
          ],
          table: {
            headers: ["Mistake", "Symptom", "Fix"],
            rows: [
              ["No fuel", "Car stops early, cash left on the table", "Place a fuel part — Small Tank is free from the COMMUNITY code"],
              ["No seat", "Cannot drive at all", "Seats drop from rolls; the shop's missing-part gap can supply one"],
              ["Weapons before basics", "Beautiful car, no engine", "Engine → wheels → seat → fuel → THEN weapons"],
              ["Turning around early", "Banked almost nothing", "Fuel is the timer, not your nerve — push until the tank is nearly dry"],
            ],
          },
        },
        {
          heading: "After the run: spend like it is a checklist",
          paragraphs: [
            "First purchase after run one is Luck II at 250 — the cheapest permanent multiplier in the game. Second is whatever part your car is still missing (the blueprint's Required Parts list tells you).",
            "Do not buy cosmetics, do not chase a second weapon, and do not save toward a vehicle blueprint yet. The next parts of this walkthrough cover exactly when those become the right calls.",
          ],
        },
      ],
      faq: [
        {
          question: "How far should my first run go?",
          answer:
            "Distance in the tens is normal — early footage shows runs ending around 24 to 90. Banking anything at all in run one means you played it correctly.",
        },
        {
          question: "What if I cannot afford the Build Tool?",
          answer:
            "Your starting cash covers it (footage shows the tool affordable at the very first prompt). If you spent it, a single short walk to the roll stations and back is all the tutorial expects.",
        },
        {
          question: "Should I save for a vehicle before upgrading skills?",
          answer:
            "No. Vehicles are blueprint-gated (parts, not prices), and skills are permanent while your first car is temporary. Luck II first, blueprint later.",
        },
      ],
    },

    // ============================================================
    {
      slug: "walkthrough-4-midgame",
      label: "Walkthrough · Part 4",
      series: "walkthrough",
      seriesOrder: 4,
      title: "The Mid-Game Loop: Going Deeper",
      metaDescription:
        "Mid-game walkthrough for Build and Kill Zombies: the compounding upgrade order, targeted rolling, checkpoint pushing, and when co-op pays off.",
      summary: "Compounding upgrades, targeted rolls, and deeper checkpoints.",
      updatedOn: "2026-09-16",
      heroImage: {
        src: "/screenshots/gameplay-skilltree.webp",
        alt: "Skill tree node web with Luck and Support branches",
        caption: "The mid-game is decided in this tree.",
      },
      sections: [
        {
          heading: "The goal of the middle game",
          paragraphs: [
            "Once runs reliably bank a payout, the game changes question from \"how do I start\" to \"how do I make every lap faster.\" The answer is almost always compounding purchases, not bigger one-offs.",
            "A mid-game account should be able to name the next three things it is buying and why. If you cannot, this part gives you the order.",
          ],
        },
        {
          heading: "The compounding order",
          paragraphs: [
            "Buy in this sequence and stop when your cash runs out; resume next run.",
          ],
          table: {
            headers: ["Order", "Purchase", "Cost", "Why it compounds"],
            rows: [
              ["1", "Luck II", "250", "Every future roll improves"],
              ["2", "Luck III", "625", "Same line, bigger percentage"],
              ["3", "Unlock Gold Roll + Gold Roll I", "1.20K", "Guarantees a gold item per description"],
              ["4", "More Support II", "3.70K", "More weapons on the same car"],
              ["5", "Missing Parts top-ups", "~159 coins", "Finishes blueprints that are nearly done"],
            ],
          },
        },
        {
          heading: "Roll with a target, not a mood",
          paragraphs: [
            "The single biggest mid-game efficiency jump is using the SELECT CATEGORY picker on every station visit. Random rolling spreads your collection across six families; targeted rolling completes one ladder and finishes blueprints.",
            "Choose your target by opening Car Builds first: whichever blueprint is missing the fewest pieces decides which family you roll for the rest of the session.",
          ],
        },
        {
          heading: "Pushing the next checkpoint",
          paragraphs: [
            "Deeper checkpoints are a fuel-and-survival problem before they are a damage problem. Footage of mid-distance runs shows cars passing checkpoints in the sixties and hundreds with a full tank and armour doing most of the work.",
            "The formula that works: one reliable front support, fuel to reach the stretch, armour for the contact damage. If a run keeps dying at the same checkpoint, add the missing half of that formula rather than rolling for a bigger weapon.",
          ],
        },
        {
          heading: "When co-op earns its place",
          paragraphs: [
            "The Co-Op menu and plot permissions turn the game into a two-role exercise: one player builds for marathon distance, one builds for damage, and both bank inside shared booster windows.",
            "Run co-op when you have a stable build and a friend at the same stage — before that, solo runs fund upgrades faster than shared ones.",
          ],
        },
      ],
      faq: [
        {
          question: "What should I upgrade first in the mid-game?",
          answer:
            "Luck II (250), then Luck III (625), then the Gold Roll line. Skill multipliers improve every roll; parts only improve one car.",
        },
        {
          question: "Why do my runs keep ending at the same distance?",
          answer:
            "That stall is a missing ingredient, not bad luck — usually fuel (you run dry) or armour (you die on contact). Add whichever your failure screen shows.",
        },
        {
          question: "Is it worth rolling randomly?",
          answer:
            "Almost never past the first hour. Targeted rolling with the category picker completes blueprints and ladders far faster than spreading pulls everywhere.",
        },
      ],
    },

    // ============================================================
    {
      slug: "walkthrough-5-endgame",
      label: "Walkthrough · Part 5",
      series: "walkthrough",
      seriesOrder: 5,
      title: "Blueprints, Bosses and Endgame",
      metaDescription:
        "Endgame walkthrough for Build and Kill Zombies: completing your first vehicle blueprint, preparing for the King 1x1x1x1 fight, and the event calendar.",
      summary: "First blueprint, the 1x1x1x1 fight, and living on the event calendar.",
      updatedOn: "2026-09-16",
      heroImage: {
        src: "/screenshots/gameplay-boss.png",
        alt: "Boss countdown visible in the game world",
        caption: "Endgame: blueprints on the board, bosses on the clock.",
      },
      sections: [
        {
          heading: "The endgame checklist",
          paragraphs: [
            "By this point your runs are long, your skill tree has real depth, and the remaining goals sit on three boards: Car Builds (blueprints), the boss clock, and the event calendar.",
            "None of them is a grind in the boring sense — each one feeds the others. Blueprints need parts from rolls; rolls need cash from runs; the best runs happen during booster windows and events.",
          ],
        },
        {
          heading: "Completing your first blueprint",
          paragraphs: [
            "Pick the blueprint with the fewest missing pieces (Fast Furious and Blue Monster are the two currently readable, with Required Parts lists in the x5–x17 range per slot).",
            "Roll only that blueprint's missing families, and when the set is one or two pieces short, pay the coin top-up rather than grinding extra sessions for a common part. Spawn it, equip it, and note how much deeper the new car takes you before spending further.",
          ],
        },
        {
          heading: "Preparing for King 1x1x1x1",
          paragraphs: [
            "The King fight runs on the shared boss clock; when it fires, a banner reads '1x1x1x1 is coming! Press ATTACK to join the battle.' — you opt in with ATTACK, so stay near your car and watch the countdown if you want the kill.",
            "Build for the fight specifically: damage-heavy supports, armour enough to survive the arena, and fuel for the approach. The defeat badge's award count (far rarer than the join badges) tells you this is the game's hardest milestone — treat it as a build check, not a lottery.",
          ],
        },
        {
          heading: "Living on the event calendar",
          paragraphs: [
            "The game runs layered events — September 2026 carried the Hacker Event with Hacker Tokens as currency, and the world board advertises scheduled sessions like admin-abuse nights for sign-up.",
            "Event rewards are time-boxed, so the endgame habit is simple: check the world board and the community channels weekly, bank event currencies while the window is open, and keep doing normal runs in between.",
          ],
        },
        {
          heading: "What endgame looks like",
          paragraphs: [
            "There is no final boss screen that rolls credits — endgame is a collection state: every ladder partially filled, blueprints completed, boss badges earned, and the deepest checkpoints within reach of a finished build.",
            "The site re-checks the game weekly, and this walkthrough updates with it. When a new vehicle, weapon, or event lands, the relevant part gets re-verified before the next patch of advice goes up.",
          ],
        },
      ],
      faq: [
        {
          question: "What do I do after my first blueprint car?",
          answer:
            "Repeat the pattern: pick the next-nearest blueprint, target its missing families, and fold boss fights into sessions when the countdown is short.",
        },
        {
          question: "How hard is the King 1x1x1x1 fight really?",
          answer:
            "Its defeat badge has been earned by a small fraction of the accounts that carry the join badges, making it the toughest verified milestone in the game so far.",
        },
        {
          question: "Do events ever come back?",
          answer:
            "Events are time-boxed and this site does not invent return dates. The updates page logs each event window as it is observed so you can see the pattern for yourself.",
        },
      ],
    },

    // ============================================================
    // 专题指南(可按需查阅,不必按顺序)
    // ============================================================
    {
      slug: "beginner",
      label: "First-session guide",
      title: "Beginner Guide",
      metaDescription:
        "Your first session in Build and Kill Zombies: from the build tool to your first banked run, in the order gameplay footage shows it working.",
      summary: "From an empty plot to your first banked run.",
      updatedOn: "2026-09-16",
      heroImage: {
        src: "/screenshots/gameplay-build.png",
        alt: "Build mode with part categories",
        caption: "The build menu is where your first car comes together.",
      },
      sections: [
        {
          heading: "Your first ten minutes",
          paragraphs: [
            "The game walks new players through a fixed opening: pick up the starting cash, buy the build tool, and open the build menu. Footage of a fresh account shows those exact prompts in that order, so follow them before improvising.",
            "Once the build menu is open, the goal is a car that can physically move: an engine, wheels, a seat, and fuel. Nothing else matters until those four exist — a beautiful turret on a car that cannot drive earns nothing.",
          ],
          list: [
            "Finish the tutorial prompts (build tool → build menu).",
            "Roll the CAR PARTS station until an engine, wheels, seat, and fuel are on the plot.",
            "Redeem the COMMUNITY code for a free Small Engine and Small Tank.",
            "Mount one support, then press the green DRIVE button (F).",
          ],
        },
        {
          heading: "The first run",
          paragraphs: [
            "Your first drive will not go far, and that is fine — its job is to bank a payout. Kills and distance both pay cash, so even a short run funds the next round of rolls.",
            "Keep an eye on the Distance counter and the fuel level. When the run ends, head to the SKILLS menu and buy Luck II at 250 if you can afford it; it is the cheapest permanent improvement in the game.",
          ],
        },
        {
          heading: "What to avoid early",
          paragraphs: [
            "Do not chase vehicle blueprints too early. Finishing a blueprint means completing its whole part set, and while you are still rolling basics, every part you collect also improves the car you already drive. Fill the parts you have first.",
            "Also resist stacking multiple cheap weapons before you have fuel. Footage of failed early runs usually ends with the car dry and stationary, not out-damaged.",
          ],
        },
        {
          heading: "Your first hour checklist",
          paragraphs: [
            "By the end of the first hour a comfortable account has: a working car, one or two supports mounted, Luck II bought, the COMMUNITY and CashDrop codes redeemed, and a second run that reached a checkpoint the first one did not.",
            "From there the game opens up — the progression guide covers the mid-game order, and the tier list ranks every purchase against every other.",
          ],
          table: {
            headers: ["Checkpoint", "You should have"],
            rows: [
              ["10 minutes", "Build tool, engine, wheels, seat, fuel"],
              ["20 minutes", "One support mounted, first drive taken"],
              ["40 minutes", "Luck II bought, CashDrop + COMMUNITY redeemed"],
              ["60 minutes", "Second run reaches a deeper checkpoint than the first"],
            ],
          },
        },
      ],
      faq: [
        {
          question: "What should I build first?",
          answer:
            "A car that moves: engine, wheels, seat, and fuel. The tutorial order in footage is exactly that, and the tier list ranks engine rolls as the top early priority.",
        },
        {
          question: "Should I buy a car from the shop immediately?",
          answer:
            "No — vehicles come from completing part sets rather than from cash purchases. Save early cash for luck skills and missing parts; the blueprint you can finish with your current collection becomes your next car.",
        },
      ],
    },

    // ============================================================
    {
      slug: "controls",
      label: "Controls & UI",
      title: "Controls and Hotkeys",
      metaDescription:
        "Every Build and Kill Zombies control seen in footage: DRIVE, BUILD, placement keys, the menu column, and the run HUD explained.",
      summary: "Every key and menu button, mapped from footage.",
      updatedOn: "2026-09-16",
      heroImage: {
        src: "/screenshots/gameplay-skills.png",
        alt: "In-game UI with the skills panel open",
        caption: "The left menu column holds SHOP, SAVES, INDEX, SKILLS, SETTINGS, and Co-Op.",
      },
      sections: [
        {
          heading: "The important keys",
          paragraphs: [
            "Build and Kill Zombies keeps its key bindings minimal, and footage shows the same bindings across sessions. The two you will press constantly are DRIVE and BUILD.",
          ],
          table: {
            headers: ["Key", "Action", "When"],
            rows: [
              ["F", "DRIVE — start the run", "Standing by a finished car"],
              ["B", "BUILD — open the build menu", "Any time outside a run"],
              ["E", "Place — put the selected part down", "Inside build mode"],
              ["R", "Rotate — spin the previewed part", "Inside build mode"],
              ["X", "Cancel — back out of placement", "Inside build mode"],
            ],
          },
        },
        {
          heading: "The left menu column",
          paragraphs: [
            "All permanent menus live in a column of buttons on the left edge: SHOP, SAVES, INDEX, SKILLS, SETTINGS, and Co-Op. Each opens a full-screen panel over the world.",
            "SHOP contains the Car Builds and Missing Parts tabs plus the Exclusive Shop with the codes box. INDEX is your collection record — every roll category and every item you have pulled. SKILLS is the permanent upgrade tree. SAVES stores builds, and Co-Op handles friend sessions.",
          ],
        },
        {
          heading: "The run HUD",
          paragraphs: [
            "Once you press DRIVE the interface switches to run mode: a Distance counter, a checkpoint indicator, a speed readout, and the BOSS FIGHT bar when an encounter is live. Cash ticks up in the bottom-left as you earn.",
            "The town sign NEXT BOSS IN keeps counting down even outside runs, so you can plan whether to launch a fresh drive before or after the next boss spawns.",
          ],
        },
        {
          heading: "Build mode keys in practice",
          paragraphs: [
            "Build mode is a preview system: pick a part, aim, and the ghost outline shows where it will land. E confirms, R spins it, X backs out. The slot counter (values like 0/8 have been observed) fills as parts land, and CLEAR PLOT resets the whole plot if a build goes wrong.",
            "The PLOT PERMISSION panel (Player / Other Players / Alone) gates who can touch your plot — in public sessions, leave it on Player until you trust the lobby.",
          ],
        },
        {
          heading: "Panel habits that save time",
          paragraphs: [
            "Roll, place, drive is the rhythm. Keep the INDEX open during a rolling session to watch which slots you still need, and check the SKILLS panel between runs so cash never idles.",
            "Everything is clickable with the mouse as well — none of the observed actions require a hotkey except the placement confirmations, which need E.",
          ],
        },
      ],
      faq: [
        {
          question: "What is the drive key?",
          answer: "F, or the green DRIVE button at the top of the screen — both start the run from a finished car.",
        },
        {
          question: "How do I open the build menu?",
          answer: "Press B, or walk to the build prompt in the world. The tutorial introduces it as 'Open the Build menu'.",
        },
        {
          question: "Why can't I place a part?",
          answer:
            "Check you are out of a run and that X was not pressed — X cancels placement. The ghost outline only follows the ground where placement is allowed.",
        },
      ],
    },

    // ============================================================
    {
      slug: "progression",
      label: "Progression route",
      title: "Progression Route",
      metaDescription:
        "The Build and Kill Zombies mid-game order: which upgrades to buy in which order, from first thousands to five-figure cash.",
      summary: "The purchase order that keeps every run improving.",
      updatedOn: "2026-09-16",
      heroImage: {
        src: "/screenshots/gameplay-shop.png",
        alt: "Shop panels with cars and cash bundles",
        caption: "Car Builds, Missing Parts, and the Exclusive Shop are the three shop tabs.",
      },
      sections: [
        {
          heading: "The shape of progression",
          paragraphs: [
            "Everything in the game converts into one of two things: better rolls or better runs. The mid-game is about alternating between them instead of dumping cash into one lane.",
            "A healthy pattern from footage and shop prices: bank a run, buy the cheapest luck node available, bank another run, add the missing car part, repeat. Each lap makes the next one faster.",
          ],
        },
        {
          heading: "Priority order (with prices)",
          paragraphs: [
            "These are the observed prices, ordered by compounding value — the same order the tier list ranks.",
          ],
          table: {
            headers: ["Buy", "Price", "Why now"],
            rows: [
              ["Luck II", "250", "Cheapest permanent multiplier"],
              ["Luck III", "625", "Second tier of the same line"],
              ["Unlock Gold Roll", "—", "Opens the Gold Roll branch"],
              ["Gold Roll I", "1.20K", "A guaranteed gold item per its description"],
              ["More Support II", "3.70K", "Raises support capacity once you own good supports"],
              ["Blueprint completion", "Parts, not cash", "Finish a missing part set to spawn a new vehicle"],
            ],
          },
        },
        {
          heading: "When to stop grinding one lane",
          paragraphs: [
            "If every run ends at the same checkpoint, the fix is usually a part, not a skill. If every roll feels useless, the fix is a luck node, not a bigger car. Switching lanes when one stalls is the whole skill of the mid-game.",
            "The Index is the decision tool: it shows which collection slots are still locked in each category, so you can target the category whose next unlock would most improve the car.",
          ],
        },
        {
          heading: "The five-figure stretch",
          paragraphs: [
            "Past roughly 10K cash decisions get expensive — the next meaningful upgrade usually costs thousands. By then runs should be reaching deep checkpoints regularly, and the question becomes whether distance or kills is the weaker earner for your build.",
            "That is also the point where event currencies matter: Hacker Tokens from codes and events add alongside your cash income without competing for it.",
          ],
        },
      ],
      faq: [
        {
          question: "What is the single best early purchase?",
          answer: "Luck II at 250 — it is the cheapest permanent multiplier and it improves every roll from then on.",
        },
        {
          question: "When should I buy my second support?",
          answer:
            "As soon as a second good roll arrives. Capacity upgrades like More Support II (3.70K) only pay off once you have pieces worth mounting.",
        },
      ],
    },

    // ============================================================
    {
      slug: "advanced",
      label: "Advanced strategy",
      title: "Advanced Strategy",
      metaDescription:
        "Advanced Build and Kill Zombies strategy: luck stacking, booster windows, category targeting, and boss-night planning.",
      summary: "Luck stacking, boosters, and squeezing the most from each session.",
      updatedOn: "2026-09-16",
      heroImage: {
        src: "/screenshots/gameplay-index.png",
        alt: "Index panel with the engine odds ladder",
        caption: "Late-game Index screens are effectively the full loot table.",
      },
      sections: [
        {
          heading: "Stack every multiplier you have",
          paragraphs: [
            "Luck arrives from three places: the two permanent luck passes (2x, 4x), the skill line (Luck II and III), and whatever the global booster window is running. They are all advertised as multipliers on rolls, so the rational time to spend on rolls is during a booster with your skill line bought up.",
            "Even without the paid passes, planning rolls for booster windows is free value — the Global Booster panel in the world shows its reset countdown.",
          ],
        },
        {
          heading: "Target categories, not vibes",
          paragraphs: [
            "The station's SELECT CATEGORY picker is the most under-used feature in footage: random rollers spread progress across five collections, while targeted rollers complete one ladder at a time.",
            "Target the category whose next unlock directly upgrades your car. Late-game builds chase the top of a single ladder (1 in 10,000 and beyond) rather than filling middles everywhere.",
          ],
        },
        {
          heading: "Build for the run you are actually running",
          paragraphs: [
            "Deep pushes fail to fuel, bosses fail to damage. If the NEXT BOSS countdown is short, mount damage supports and fight where the spawn happens; if the countdown is long, take the long-distance build out for a farming drive instead.",
            "One run, one purpose. Splitting a build between boss damage and marathon fuel often fails at both.",
          ],
        },
        {
          heading: "Boss nights and events",
          paragraphs: [
            "The world board runs sign-up events (an ADMIN ABUSE session was advertised with a sign-up prompt in September 2026), and event currencies like Hacker Tokens only drop during their window. Play during the window if the rewards matter to you — they are time-boxed.",
            "For the King 1x1x1x1 fight, the defeat badge's rarity says it plainly: this is the hardest checked milestone, best attempted with a finished build and a support loadout that leans damage.",
          ],
        },
        {
          heading: "Co-op and plots",
          paragraphs: [
            "Co-op multiplayer changes the economy: two players can cover two styles of run (one farmer, one boss build) and share a plot with the right permission setting.",
            "Keep plots Player-only during build sessions and open them when the group is ready to launch together — the permission panel (Player / Other Players / Alone) is one click.",
          ],
        },
      ],
      faq: [
        {
          question: "When is the best time to roll?",
          answer:
            "During a global booster window with your luck skills bought. Boosters are free multipliers, and the world panel shows when the next reset comes.",
        },
        {
          question: "How do late players finish a category ladder?",
          answer:
            "Targeted rolling: use SELECT CATEGORY to keep rolling one category until the top slots land, instead of spreading every session across five collections.",
        },
      ],
    },

    // ============================================================
    {
      slug: "badges",
      label: "Badges & milestones",
      title: "Badges and Milestones",
      metaDescription:
        "All three Build and Kill Zombies badges with award counts, what each one takes, and how badge numbers track the game's growth.",
      summary: "Every badge, its award count, and what it takes.",
      updatedOn: "2026-09-16",
      heroImage: {
        src: "/screenshots/gameplay-boss.png",
        alt: "Boss countdown visible in the world",
        caption: "Boss defeat is the rarest badge milestone in the game so far.",
      },
      sections: [
        {
          heading: "The badge set",
          paragraphs: [
            "The game ships three badges, and each one maps to a milestone: joining, the September 2026 Hacker Event, and defeating the King 1x1x1x1 boss.",
          ],
          table: {
            headers: ["Badge", "Type", "Award count"],
            rows: [
              ["Welcome!", "Join the game", "1,385,636 (still climbing fast)"],
              ["Hacker Event 2026", "Event participation", "1,401,774"],
              ["You defeated the King 1x1x1x1", "Boss defeat", "121,060"],
            ],
          },
        },
        {
          heading: "Reading the numbers",
          paragraphs: [
            "Badge award counts are the cleanest public growth signal the game has. In mid-September the Welcome badge was adding roughly 397,000 awards per day — that is the breakout curve the search trend data mirrors.",
            "The gap between the Welcome badge and the King defeat badge is also the clearest difficulty statement in the game: roughly one in eleven accounts that have joined have banked the boss kill.",
          ],
        },
        {
          heading: "How to earn the boss badge",
          paragraphs: [
            "The King 1x1x1x1 fight spawns on the shared boss timer, so the first step is watching the NEXT BOSS IN countdown and being in the world when it fires.",
            "Damage is the currency of that fight: bring a build with supports that hit hard, keep fuel in reserve to reposition, and treat the BOSS FIGHT bar as the one health bar that matters. The badge lands on the kill, not the attempt.",
          ],
        },
        {
          heading: "Event badges and their windows",
          paragraphs: [
            "The Hacker Event badge was earned by over 1.4 million accounts during its September window, making it the broadest event run so far. Event badges are usually time-boxed — if a new event appears on the world board, treat the badge as earning it while it lasts.",
            "Watch the game's community channels for event announcements; new-code drops and events have been landing in the same update notes.",
          ],
        },
      ],
      faq: [
        {
          question: "How many badges are there?",
          answer: "Three as of September 2026: Welcome!, Hacker Event 2026, and You defeated the King 1x1x1x1.",
        },
        {
          question: "Which badge is hardest?",
          answer:
            "The King 1x1x1x1 defeat — its award count is roughly a ninth of the Welcome badge's, marking it as the toughest milestone tracked so far.",
        },
      ],
    },

    // ============================================================
    {
      slug: "money",
      label: "Cash farming",
      title: "Cash Farming Guide",
      metaDescription:
        "How to earn cash faster in Build and Kill Zombies: the two confirmed income taps, run length, boosters, and cash codes.",
      summary: "The two income taps and how to stretch both.",
      updatedOn: "2026-09-16",
      heroImage: {
        src: "/screenshots/gameplay-run.png",
        alt: "A farming run in progress",
        caption: "Distance and kills both pay; long runs collect from both taps at once.",
      },
      sections: [
        {
          heading: "Where cash comes from",
          paragraphs: [
            "Cash has exactly two confirmed sources, straight from the store description of the 2x Cash pass: killing zombies and covering distance. Every farming decision is really a question of which tap you are scaling.",
            "That is why long, survivable runs beat short, violent ones early: a marathon run collects the distance tap the entire way while still killing whatever the track puts in front of it.",
          ],
        },
        {
          heading: "Stretching each run",
          paragraphs: [
            "Run length is capped by fuel, so tank parts are literally income parts — a Small Tank from the COMMUNITY code is a direct income upgrade on day one.",
            "The second lever is armour and spacing: a build that takes less damage per wave spends less time stopped, and every metre travelled is money.",
          ],
          list: [
            "Fuel first — a dry tank ends the run's income instantly.",
            "Armour second — stops the run ending early to a lucky zombie.",
            "One strong support — clears the road so the car keeps moving.",
          ],
        },
        {
          heading: "Booster windows",
          paragraphs: [
            "The world's Global Booster panel runs timed multipliers with a reset countdown. Farming runs launched inside a booster window collect more per metre for the same build, so check the panel before starting a long drive.",
            "Boosters affect everyone in the server, so they are also the best time to join a Co-Op session — the whole group farms faster.",
          ],
        },
        {
          heading: "Free cash from codes",
          paragraphs: [
            "Codes are the fastest legal cash in the game for a new account: CashDrop pays 500 and COMMUNITY pays 1,000 plus car parts that would otherwise cost you rolls — the Small Engine and Small Tank alone save a fresh account its first two roll sessions.",
            "Redeem before your first serious run — every one of those parts is a direct upgrade to the car that will earn the money back.",
          ],
        },
        {
          heading: "Spending the farm",
          paragraphs: [
            "Farm cash has one job: buy the next compounding upgrade. Luck II (250) and Luck III (625) turn farming into better rolls, and better rolls replace the parts the farming build has been making do with.",
            "Keep a floor of a few hundred cash for Missing Parts fill-ins between runs; getting back on the road fast beats saving for a luxury purchase while the car sits broken.",
          ],
        },
      ],
      faq: [
        {
          question: "What is the fastest way to earn cash?",
          answer:
            "Long, survivable runs through a booster window. Distance pays continuously, and the 2x Cash pass doubles both taps if you have it.",
        },
        {
          question: "Do codes give cash?",
          answer:
            "Yes — CashDrop grants 500 cash and COMMUNITY grants 1,000 cash plus a Small Engine and Small Tank, all confirmed across multiple sources.",
        },
      ],
    },

    // ============================================================
    {
      slug: "best-car",
      label: "Best car builds",
      title: "Best Car Build Guide",
      metaDescription:
        "How to build the best car in Build and Kill Zombies: the blueprint path, a working slot checklist, and the fuel-versus-damage trade every build faces.",
      summary: "The blueprint path, a slot checklist, and fuel-vs-damage trade-offs.",
      updatedOn: "2026-09-16",
      heroImage: {
        src: "/screenshots/gameplay-carbuilds.webp",
        alt: "Car Builds blueprint board with required parts",
        caption: "Every serious build starts by picking a blueprint and counting its parts.",
      },
      sections: [
        {
          heading: "What \"best\" means in this game",
          paragraphs: [
            "There is no single best car, because the game runs on two different win conditions: distance (how far a build survives) and boss fights (whether you can take the shared boss encounter down). A build that excels at one usually sacrifices the other.",
            "So the honest answer is a framework: pick the blueprint you can actually complete, fill the mandatory slots first, then specialise for the runs you play most.",
          ],
          list: [
            "Marathon build: fuel and armour heavy, one reliable front weapon.",
            "Boss build: damage-heavy supports, enough fuel for the arena approach.",
            "Collection build: whatever completes your nearest blueprint fastest.",
          ],
        },
        {
          heading: "The blueprint path",
          paragraphs: [
            "Vehicles themselves are gated by Required Parts sets — Fast Furious and Blue Monster are the two blueprints readable in current footage, each wanting a specific pile of parts (counts like x10, x1, x4, x2, x1 were read off the blueprint board).",
            "The practical rule: open Car Builds, find the blueprint with the fewest pieces you are missing, and roll toward that category. The Missing Parts board tells you exactly what is left, and a coin top-up can finish a set that is one or two pieces away.",
          ],
        },
        {
          heading: "The mandatory slot checklist",
          paragraphs: [
            "Whatever blueprint you chase, a drivable build always needs the same core slots filled. Footage of working cars shows this set again and again: engine, wheels, seat, and fuel before any weapon goes on.",
            "After the core, the next layer is purpose: armour to survive contact, a front-facing support to clear the road, and boost for reach. If a slot is empty while cash sits in the bank, that is your next purchase.",
          ],
          table: {
            headers: ["Priority", "Slot", "Why"],
            rows: [
              ["1", "Engine", "Nothing moves without it"],
              ["2", "Wheels + Seat", "Steer and drive — the tutorial's own order"],
              ["3", "Fuel", "The run timer; a dry tank ends the payout"],
              ["4", "Front support", "Clears the wave the car is driving into"],
              ["5", "Armour", "Keeps the engine alive on deep runs"],
              ["6", "Boost", "Stretches distance when fuel allows"],
            ],
          },
        },
        {
          heading: "Fuel versus damage",
          paragraphs: [
            "Every build spends its slots on one of two currencies: fuel (metres) and damage (kills). Both pay cash — distance and kills are the two confirmed income taps — so the trade is about which one your runs are currently bottlenecked on.",
            "If runs end dry at the same checkpoint every time, add fuel. If runs end in a zombie pile-up with the tank half full, add damage. Upgrading the weaker half is always cheaper than upgrading the stronger one.",
          ],
        },
        {
          heading: "A practical build order",
          paragraphs: [
            "Start with the rolled basics, target one blueprint's part list, fill missing pieces through that category's roll station, then specialise once the vehicle spawns.",
            "Redeem the COMMUNITY code before your first serious push — its Small Engine and Small Tank cover two of the six checklist slots for free, and CashDrop's 500 funds the first missing-piece gap.",
          ],
        },
      ],
      faq: [
        {
          question: "What is the best car in Build and Kill Zombies?",
          answer:
            "The best car is the best blueprint you can actually complete. Fast Furious and Blue Monster are the two readable blueprints; pick whichever your current parts are closest to finishing.",
        },
        {
          question: "Should I build for distance or for bosses?",
          answer:
            "Build for whichever blocks you today. Dry-tank endings mean more fuel; dying in the wave means more damage. One run, one purpose.",
        },
        {
          question: "What parts do I need at minimum?",
          answer:
            "Engine, wheels, seat, and fuel before anything else — that is the tutorial's own order and the difference between a rolling car and a parked pile of parts.",
        },
      ],
    },

    // ============================================================
    {
      slug: "free-rewards",
      label: "Free rewards",
      title: "Free Chest and Rewards Guide",
      metaDescription:
        "Every free reward in Build and Kill Zombies: the free chest board, like-and-join bonuses, codes, event tokens, and where global boosters come from.",
      summary: "The free chest, like-and-join bonuses, codes, and event tokens.",
      updatedOn: "2026-09-16",
      heroImage: {
        src: "/screenshots/gameplay-shop.png",
        alt: "Exclusive Shop with the community codes box",
        caption: "The Exclusive Shop holds the codes box and the paid listings side by side.",
      },
      sections: [
        {
          heading: "The free chest board",
          paragraphs: [
            "A chest board in the world reads FREE CHEST with the condition LIKE GAME AND JOIN GROUP. It is the game's most literal free reward: meet the two social conditions and the board pays out without any gameplay requirement.",
            "It is also the only repeatable free reward confirmed in footage, which makes it the first stop of every session. If the board shows as locked, check that your Roblox account has liked the game and joined the developer's group — the game checks both.",
          ],
        },
        {
          heading: "Codes: the biggest single payout",
          paragraphs: [
            "Five cross-verified codes are live right now, and the rewards are front-loaded for new accounts: COMMUNITY alone hands out 1,000 cash plus a Small Engine and a Small Tank — two of the six core build slots.",
            "Codes are usually one-time per account and do not expire on a fixed schedule — the developer edits the same community message when new ones drop — so the honest strategy is to redeem the full list on day one and re-check after every update. The codes page tracks this with a last-checked date.",
          ],
        },
        {
          heading: "Event tokens and limited rewards",
          paragraphs: [
            "The Hacker Event ran through September 2026 with its own currency, Hacker Tokens, handed out by two of the current codes (HACKER gives 50, 1x1x1x1 gives 150). Event currencies only matter during their window — if a new event appears on the world board, treat its tokens as a use-it-while-it-lasts resource.",
            "Scheduled events like the admin-abuse nights also carry rewards; signing up from the world board costs nothing and the game confirms with a message.",
          ],
        },
        {
          heading: "Global boosters: free multipliers",
          paragraphs: [
            "The world's Global Booster panel runs timed multipliers with a reset countdown — one observed booster showed 10K with a reset timer. Boosters are free and server-wide, and they stack with everything else you own.",
            "The optimal free-play pattern: bank a run inside a booster window, then spend the winnings during the same window while luck is highest.",
          ],
        },
        {
          heading: "Like and follower milestones",
          paragraphs: [
            "The game's code history shows the pattern clearly: the first batch dropped during the breakout week, and codes tend to accompany social milestones, updates, and fixes.",
            "That makes the community channels the highest-value free subscription in the game — following the social links the codes panel points to is how new drops arrive without checking third-party sites.",
          ],
        },
      ],
      faq: [
        {
          question: "How do I get the free chest?",
          answer:
            "Like the game and join the developer's group, then collect from the FREE CHEST board in the world. Both conditions are checked together — one of them missing keeps it locked.",
        },
        {
          question: "Do codes expire?",
          answer:
            "They can, but they are not on a fixed timer — the developer edits an existing message rather than announcing each drop. The codes page only lists codes after cross-verification and marks the last-checked date at the top.",
        },
        {
          question: "What are the best free rewards for a new account?",
          answer:
            "The five current codes (cash and parts), the free chest, and any live event tokens. Together they cover the first hour of progress without a single run.",
        },
      ],
    },
  ],
};
