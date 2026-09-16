import type { CalculatorContent } from "./types";

// ⭐ 计算器/规划器内容 —— 纯数据驱动:目标 + 滑块 + 规则
// 规则按顺序匹配,第一条命中即作为推荐结果
export const calculatorContent: CalculatorContent = {
  pageTitle: "Build and Kill Zombies Upgrade Planner",
  metaDescription:
    "Free Build and Kill Zombies planner: pick your goal and get a source-checked next upgrade direction based on observed prices and mechanics.",
  intro:
    "Choose what you want next and rate where your build stands. The planner returns a conservative next step based on prices and mechanics that have actually been observed — no invented formulas.",
  formHeading: "Plan your next purchase",
  resultHeading: "Recommended next step",
  goals: [
    { id: "first-run", label: "Get my first run working" },
    { id: "more-cash", label: "Earn cash faster" },
    { id: "better-rolls", label: "Improve my roll results" },
    { id: "go-deeper", label: "Push deeper checkpoints" },
  ],
  sliders: [
    { id: "cash", label: "Cash on hand", min: 0, max: 50000, defaultValue: 2500 },
    { id: "supports", label: "Supports mounted", min: 0, max: 4, defaultValue: 1 },
  ],
  rules: [
    {
      goal: "first-run",
      conditions: [{ slider: "supports", op: "lt", value: 1 }],
      advice:
        "Roll the CAR PARTS station until you have an engine, wheels, a seat, and fuel, then mount one support before buying anything else. The COMMUNITY code also hands you a Small Engine and Small Tank for free.",
    },
    {
      goal: "first-run",
      advice:
        "Your build has its basics. Take the drive and bank a payout — the first run pays for the next round of rolls.",
    },
    {
      goal: "more-cash",
      conditions: [{ slider: "cash", op: "lt", value: 1000 }],
      advice:
        "At this cash level, run distance is your income. Add a fuel part so runs last longer and aim at the next checkpoint; distance and kills are the two confirmed cash taps.",
    },
    {
      goal: "more-cash",
      conditions: [{ slider: "cash", op: "gte", value: 1000 }],
      advice:
        "With cash in hand, the compounding buys are the luck nodes — Luck II at 250 and Luck III at 625 — before any weapon. Better rolls produce the parts that earn faster.",
    },
    {
      goal: "better-rolls",
      conditions: [{ slider: "cash", op: "lt", value: 625 }],
      advice:
        "Buy Luck II at 250 first — it is the cheapest permanent multiplier. If your rolls feel cold, target one category at a time with the SELECT CATEGORY picker instead of rolling randomly.",
    },
    {
      goal: "better-rolls",
      advice:
        "Buy Luck III at 625 next, then consider the Unlock Gold Roll node and Gold Roll I at 1.20K — its description promises a random gold item, turning luck into a guaranteed quality floor.",
    },
    {
      goal: "go-deeper",
      conditions: [
        { slider: "supports", op: "lt", value: 2 },
        { slider: "cash", op: "lt", value: 20000 },
      ],
      advice:
        "Deeper checkpoints need a fuller car before a bigger bank. Mount a second support, cover fuel, then stretch one checkpoint at a time — the run timer is fuel, not damage.",
    },
    {
      goal: "go-deeper",
      advice:
        "Your build and bank can support a push. Move one checkpoint deeper, bank the payout, and only then buy the next vehicle tier — each Car Builds tier roughly doubles in price.",
    },
  ],
  defaultAdvice:
    "Improve whichever is weaker: your build (parts and supports) or your income (luck nodes and run length). A balanced account reaches every checkpoint cheaper than a specialised one.",
  faq: [
    {
      question: "Does this planner use exact in-game formulas?",
      answer:
        "No — it uses observed prices (labels from gameplay footage) and conservative priorities instead of invented maths, so the advice stays safe across updates. Verified prices are listed with each recommendation.",
    },
    {
      question: "Why does it not tell me exact roll odds for weapons?",
      answer:
        "Because most category ladders have not been read completely from the game yet. Only the Engines ladder (1 in 3 up to 1 in 12,500) is fully documented so far; the planner will not quote numbers it cannot source.",
    },
    {
      question: "Is the 2x Cash pass worth it?",
      answer:
        "Its official description doubles both cash taps (kills and distance), so it scales with how much you already play. The planner ranks free luck nodes above it for most early accounts.",
    },
  ],
};
