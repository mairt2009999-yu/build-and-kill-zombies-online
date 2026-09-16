# Build and Kill Zombies — 建站调研与计划（2026-09-15）

> 调研方式：ego-browser 自动化浏览器（Google Trends / Google 搜索下拉框 / SERP / PAA / YouTube）+ Roblox 官方 API 交叉核验。
> 任务空间：ego-browser `bakz-research`（id 165）。
> 状态：**调研完成；资产已确认（域名 / 仓库）；待用户批准后实施**。

---

## 〇、资产确认（2026-09-15 用户拍板）

| 项 | 值 |
|---|---|
| 用户自有域名 | **build-and-kill-zombies.online**（带连字符；2026-09-15 15:17 UTC 注册，Spaceship；NS 已挂 Cloudflare，尚无网站内容） |
| 代码目录 | **/Users/yujiahong/Documents/GitHub/build-and-kill-zombies-online**（空 git 仓库，仅 .gitattributes） |
| 竞品站归属 | buildandkillzombies.wiki / build-and-kill-zombie.wiki / buildandkillzombies.online **均非用户所有**（第三方） |
| 实现模板 | /Users/yujiahong/Documents/claude design/game-wiki-template（本仓库 buildabluelocksquad-online 即其完整实例，含 CLAUDE.md SOP） |

---

## 一、调研结论速览

| 维度 | 结论 |
|---|---|
| 游戏热度 | **爆发期**：created 2026-08-19，CCU ≈ 18.2K，visits ≈ 357 万，favorites ≈ 12.7 万，昨日（9/14）仍在更新 |
| Google Trends | 品牌词 9/9≈0 → 9/12=21 → 9/13=88 → **9/14=100（峰值）** → 9/15=91；"codes" 词约为品牌词 5–6 成 |
| 增长动能 | Welcome! 徽章持有人 139 万 + 单日新增 ≈ 39.7 万玩家/天（爆发式拉新中） |
| 搜索下拉框 | 新游戏词太新、补全弱；老游戏「Build a Car to Kill Zombies」仍占下滑框（checkpoint/chapter/turret/script/wiki/discord 后缀） |
| PAA（用户也搜） | **全部是通用僵尸问答**，无游戏专属问答 → 专属问答内容 = 蓝海 |
| 内容生态 | YouTube 单日 80K 播放爆款、专用攻略频道（VendoPlus）、脚本频道（Daley Scripts）；主题：codes / 最强车 / 完美车 / 刷钱 / 技能 / 开箱子 |
| 竞争 | codes 查询已有 6+ 文章（PCGamesN、Sportskeeda、Nerd's Chalk、MrGuider、rogamecodes、Aprasi）；**3 个同主题第三方站已上线** |
| 老游戏 | 「Build a Car to Kill Zombies」（3200 万访问）2025-03 停更，词搜索量 max=7 → **不值得做** |
| 建站建议 | **Wiki 实体 + Codes 实时 + 工具（计算器/概率/对照表）的混合站**（= 模板全功能形态），主域名 `build-and-kill-zombies.online` |

---

## 二、游戏本体（Roblox 官方 API，2026-09-15 核验）

| 项 | 值 |
|---|---|
| 官方名 | [🏴☠️] Build and Kill Zombies |
| placeId / universeId | 105011592530400 / 10741654282 |
| 开发者 | Zombie Car Crusher（群组内仅此一款游戏） |
| 创建 / 最近更新 | 2026-08-19 / 2026-09-14 |
| CCU / Visits / Favorites | ≈ 18,189 / 3,572,124 / 127,195 |
| 服务器 | maxPlayers=5（小型房） |
| 官方描述 | Build your car! Add crazy weapons & defenses! Crush waves of zombies! Earn cash and upgrade your build! How far can YOUR car survive? |

**核心循环（多源证据）**：抽零件（Car Parts 机 / Supports 机，五档稀有度 Common/Uncommon/Rare/Epic/Legendary，结果卡显示 odds；已知 Small Engine 1/3、Shredder 1/12）→ 组装车（底盘/引擎/车轮/燃料/武器挂载）→ 开车碾僵尸、推进距离（燃油系统）→ 赚现金 → 升级永久技能树（Luck I/II 等）→ 更远/更难的 run。

**变现**：4 个 Game Pass — 2x Cash、Faster Roll、2x Permanent Luck、4x Permanent Luck（全部围绕"抽卡效率+刷钱效率"，Luck 是核心付费点）。

**徽章（badges API）**：
- Welcome! — 1,385,636 持有人（单日 +397,034）
- Hacker Event 2026 — 1,401,774 持有人（9 月限时活动）
- You defeated the King 1x1x1x1 — 121,060 持有人（击败大 Boss，胜率 14.3%）

**Codes 状态（关键）**：游戏内 codes 系统已存在（SHOP → EXCLUSIVE SHOP → COMMUNITY CODES），但**截至 9/13 无任何有效码**——开发者视频实测 Build/Zombies/ZombiesUpd/Update 均返回 "Code does not exist"；开发者称发码会先放视频简介。→ 各 codes 文章站目前都在"瞎写码或标无码"，这是可差异化点。

---

## 三、玩家关心什么（搜索需求证据）

### 3.1 Google Trends
- `build and kill zombies`（全球，近 3 月）：9/9 前≈0 → 9/12=21 → 9/13=88 → **9/14=100** → 9/15=91。典型 **Breakout 暴涨曲线，且仍处高位**。
- `codes` 类词 ≈ 品牌词 5–6 成（高峰段）——codes 是第二大需求。
- `build a car to kill zombies`（老游戏名）：max=7 → 老游戏需求殆尽，**不做**。
- 备注：Trends 数值为相对指数（0–100），不直接等于搜索量；峰值 100 意味着该时段是全量采样窗口内最高。

### 3.2 Google 搜索下拉框 / 自动补全
- 新游戏词补全很弱（上线仅 4 周，查询量积累不足）。
- 老游戏词形仍活跃：`build a car to kill zombies` + checkpoint / chapter / turret / script / wiki / discord。
- 出现词形 `build a car and kill zombies`（玩家习惯混用）。
- 含义：玩家对"造车杀僵尸"题材的长期搜索习惯存在；新游戏正接管这批需求；`script`/`discord`/`wiki` 是题材级稳定后缀需求。

### 3.3 Google PAA（People Also Ask）
直接抓取 + alsoasked.com 交叉验证（数据源同为 Google PAA）：
- "build and kill zombies" 的 PAA **全部是通用僵尸话题**：最有效的杀僵尸方式 / 僵尸的弱点 / Roblox 最佳僵尸游戏 / 最老的 Roblox 僵尸游戏 / 最恐怖的僵尸游戏……
- **没有任何一条游戏专属问答** → Google 尚未识别该词为成熟垂直话题 → 谁是第一个系统性回答"这个游戏怎么玩/零件怎么抽/车怎么配"内容的站，谁就定义这个垂直。
- 机会与风险并存：垂直问答需从 0 建立（PAA 不会自己出现，要等搜索信号+内容被收录）。

### 3.4 YouTube 内容生态（本周）
- OTTER ON ROBLOX "BUILD A CAR and KILL ZOMBIES…" 80K 播放（1 天前）
- Bax "I Built The PERFECT Zombie Car" 72K（4 天前）、"Upgrading The BIGGEST Zombie Bunker" 31K（21 小时前）
- Obit Official（印尼语）39K；多场直播（Lion The Cat 30K）
- **VendoPlus = 专用攻略频道**：How to Play / All Working Codes / 好车+好技能 / 点赞加群开箱
- Daley Scripts：Auto Farm / Auto Skill Upgrade 脚本（2.4K）→ script 需求存在（不建议做）
- 内容主题印证页面规划：codes、怎么玩、最强车配置、完美车、刷钱、技能加点、箱子获取

---

## 四、竞争格局

### 4.1 codes 查询 SERP（"build and kill zombies codes"）
- PCGamesN（大媒体）、Sportskeeda（大媒体）、Nerd's Chalk、MrGuider、rogamecodes、Aprasi（AI 站）→ **6 篇 codes 文章**。
- 但：目前游戏中无有效码，这些站内容全是"过期/错误码"或"暂无码"——流量在、内容价值低，**实时核验是破局点**。

### 4.2 已存在的同主题站（全部第三方，9/12–9/15 三天内上线）
| 域名 | 注册时间 | 技术/内容 | 观察 |
|---|---|---|---|
| buildandkillzombies.wiki | 09-12 | Next.js 模板族；Tier List / Codes / Guides / Wiki / Tools + Cash calculator；GA G-BYJ2GFGBFD | 功能最全（含工具页），更新至 09-12 |
| build-and-kill-zombie.wiki | 09-13 | 148 页 + pt-br 葡语版；Progression/Builds & Parts/Supports/Rolls & Luck/Economy/Runs/Boss Events | 覆盖面最广的"准 Wiki"，事实有出处、质量较高 |
| buildandkillzombies.online | 09-15 | Next.js 模板结构：/codes/ /parts/ /weapons/ /skills/ /car-builds/ /bosses/ /controls/ /wiki/ /guides/ | 今天刚上线 |

三个站均为 Spaceship 注册 + Cloudflare 解析（与用户系同注册模式，但**经用户确认均非用户资产**）。全部是 0 权重新站，窗口期仍在。

### 4.3 域名状态（2026-09-15 核验）
| 域名 | 状态 |
|---|---|
| **build-and-kill-zombies.online（用户自有）** | 已注册（Spaceship，CF NS 已挂，尚无内容）——**域名即品牌词连字符形态** |
| buildandkillzombies.com / build-and-kill-zombies.com | 可用（whois: No match） |
| bakz.wiki / killzombies.wiki / buildandkillzombies.info | 无 NS，大概率可用（未做 whois 最终确认） |
| buildandkillzombies.online / .wiki / build-and-kill-zombie.wiki | 已被第三方占用 |

---

## 五、建站建议

### 结论：Wiki 实体 + Codes 实时页 + 工具页 的混合站（游戏 Wiki 模板全功能形态），主域名 `build-and-kill-zombies.online`

### 为什么（排除法）
1. **纯 codes 站 — 不建议**：该查询已有 6 个大站+AI 站竞争，且当前无有效码；但 codes 页必须做（第二大需求、天然流量入口），定位"核验过的实时状态"。
2. **纯 Wiki 站 — 不建议**：`build-and-kill-zombie.wiki` 已用 148 页全覆盖（含 pt-br），正面刚 = 同质化苦战；它缺的是工具与实时性。
3. **纯工具站 — 不建议**：搜索量主体仍是品牌词与 codes；工具页单独撑不起流量。
4. **混合站 — 推荐**：模板自带完整形态（wiki 实体 + codes + tier-list + calculator + guides + tools + community），正好覆盖"Wiki 的深度 + 工具的功能 + codes 的实时"三个差异化点；`build-and-kill-zombie.wiki` 有深度但无工具无实时，`buildandkillzombies.wiki` 有工具但更新停在 9/12。

### 差异化打法定向（全部有需求证据）
| 差异点 | 证据 | 落点 |
|---|---|---|
| Codes 实时核验（无码就如实写"breakout 前无有效码"） | codes 词 = 品牌词 5–6 成；6 个竞品全在瞎写 | content/codes.ts + 更新机制 |
| 零件/稀有度/概率数据表 | 抽卡是核心循环；已证实存在 5 档稀有度与结果卡 odds | content/wiki.ts 实体页 + calculator |
| 工具：现金计算器 / Luck 概率对照 | 竞品已有 Cash calculator 先例；无概率工具 | content/calculator.ts + tools.ts |
| 玩法实体全覆盖（零件/武器/技能/徽章/Boss） | YT 标题即这些实体 | content/wiki.ts ≥6 实体 + guides ≥6 |
| 快照级数据新鲜度（CCU/徽章/更新时间随更新） | 游戏日增 40 万玩家、一周两更 | home facts 栏 + updates.ts |

### 明确不做
- 不做 script/exploit 内容（政策风险，虽有搜索需求）。
- 不追老游戏词「build a car to kill zombies」（需求≈0）。
- 不做 pt-br 本地化（竞品已有；英语区优先）。

---

## 六、实施计划（待批准后执行）

**Phase 0 — 环境准备（30 分钟）**
1. 确认 build-and-kill-zombies-online 仓库 remote（git remote -v / 是否已关联 GitHub）。
2. 确认域名在 Cloudflare 的工作区、DNS 记录现状（本机 fake-ip 代理干扰，经 CF API / dashboard 核实）。
3. 复制 /Users/yujiahong/Documents/claude design/game-wiki-template 为项目基底（仅代码，不含 content）。

**Phase 1 — 初始化**
- 填 NEW-GAME.md 必填项：游戏名、Roblox 链接、域名 build-and-kill-zombies.online、Worker 名（建议 build-and-kill-zombies）。
- 确认 wrangler.jsonc / 部署凭据（沿用 planetrng-wiki 新版 wrangler 流程：项目内 wrangler 版本需能读加密凭据）。

**Phase 2 — 内容调研与取证（按模板 SOP）**
- 官方截图（games/v2 media API → thumbnails CDN → public/screenshots/）。
- 实机视频取证（yt-dlp 抽帧）：确认零件清单、技能树、机器 UI、箱子机制、Boss 机制——只写 "observed in gameplay footage" 级事实，不抄竞品站点文本。
- 机制实体定稿（≥6 实体，候选：Parts / Weapons / Skills / Rarities & Rolls / Bosses / Badges / Codes / Chest）。

**Phase 3 — 填充内容（13 文件 + wrangler.jsonc）**
- 按模板内容深度硬标准：每实体页 ≥6 section / 450–800 词 / FAQ ≥2；guides ≥6；home facts 用真实数值（placeId/universeId/CCU/codes 状态）；calculator 围绕 抽奖概率+现金收益 设计；updates.ts 首条 "Site launched"。

**Phase 4 — 构建验证**
- `npm run build`（slug 冲突/死链校验）→ `grep title out/` → 检查无旧游戏残留。

**Phase 5 — 本地预览 → 用户确认 → 部署**
- `npm run preview` 截图首页；用户确认后 `npm run deploy`。
- 部署后：确认域名 DNS 指向 Cloudflare Worker（build-and-kill-zombies.online 已在 CF zone）→ 确认 site.ts url → 再 deploy → GSC 提交 sitemap。

**Phase 6 — 上线后（建议）**
- 接入 GA4；codes 页建立周更核验节奏（与 roblox-site-auto 雷达联动可选）；Game Pass/徽章/CCU 数据快照化。

---

## 七、实施前唯一待确认项

1. **是否现在开始实施** —— 用户此前要求"先分析计划不实施"；资产已全部确认，获批后按 Phase 1–6 执行。
2. Worker 名称偏好（默认 build-and-kill-zombies）与 GitHub 远程仓库推送策略（默认：本地构建 + wrangler 部署，不自动 push）。

---

*数据新鲜度：Roblox API / whois / DNS 核验于 2026-09-15；Google Trends / SERP / PAA / YT 采集于 2026-09-15（Trends 为滚动近 3 月窗口）。Google 侧数据为采样证据，不构成官方总量。*