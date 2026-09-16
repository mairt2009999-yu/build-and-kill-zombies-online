import type { Rarity } from "@/content/types";

/**
 * 稀有度徽章。颜色来自数据(游戏自定义色值),所以走内联样式而不是
 * Tailwind class —— 档数和色值都是每个游戏自己定的,无法预先生成 class。
 */
export default function RarityBadge({ rarity, size = "md" }: { rarity?: Rarity; size?: "sm" | "md" }) {
  if (!rarity) {
    return (
      <span className="inline-flex items-center rounded border border-line px-2 py-0.5 text-xs text-ink-dim">
        Unknown
      </span>
    );
  }
  const pad = size === "sm" ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-sm";
  return (
    <span
      className={`inline-flex items-center rounded font-semibold ${pad}`}
      style={{
        color: rarity.color,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: rarity.color,
        backgroundColor: `${rarity.color}1a`,
      }}
    >
      {rarity.name}
    </span>
  );
}
