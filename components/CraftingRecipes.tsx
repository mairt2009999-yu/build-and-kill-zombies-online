import EvidenceBadge from "@/components/EvidenceBadge";
import type { CraftRecipe } from "@/content/types";

const kindLabel: Record<CraftRecipe["inputs"][number]["kind"], string> = {
  rarity: "any of this rarity",
  item: "specific item",
  relic: "special material",
};

/** 配方卡:输入 -> 产出概率条。百分比直接取自游戏内的产出表 */
export default function CraftingRecipes({ recipes }: { recipes: CraftRecipe[] }) {
  if (recipes.length === 0) {
    return (
      <p className="rounded-lg border border-line bg-panel p-6 text-ink-dim">
        No recipes verified yet. This page fills in as recipes are confirmed from the in-game
        crafting screen.
      </p>
    );
  }

  return (
    <div className="grid gap-5">
      {recipes.map((recipe) => (
        <article key={recipe.id} className="rounded-lg border border-line bg-panel p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-lg font-bold text-ink">{recipe.name}</h3>
            <EvidenceBadge tier={recipe.evidence} source={recipe.source} />
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {recipe.inputs.map((input, i) => (
              <span key={`${recipe.id}-in-${i}`} className="flex items-center gap-2">
                {i > 0 && <span className="text-ink-dim">+</span>}
                <span
                  className="rounded border border-line bg-surface px-3 py-1.5 text-sm text-ink"
                  title={kindLabel[input.kind]}
                >
                  <span className="font-bold">{input.qty}×</span> {input.label}
                </span>
              </span>
            ))}
          </div>

          {recipe.unlockNote && <p className="mt-3 text-sm text-ink-dim">{recipe.unlockNote}</p>}

          <h4 className="mt-5 text-xs font-semibold uppercase tracking-wide text-ink-dim">
            Possible results
          </h4>
          <ul className="mt-2 space-y-2">
            {recipe.outcomes.map((outcome) => (
              <li key={`${recipe.id}-${outcome.name}`}>
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-ink">{outcome.name}</span>
                  <span className="font-semibold text-ink">{outcome.pct}%</span>
                </div>
                <div className="mt-1 h-1.5 overflow-hidden rounded bg-surface" aria-hidden="true">
                  <div className="h-full rounded bg-accent" style={{ width: `${Math.min(100, outcome.pct)}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
