# CLAUDE.md — 游戏 Wiki 站模板标准作业流程(SOP)

本项目是可复用的 Roblox 游戏 Wiki 站模板(Next.js 15 静态导出 + Cloudflare Workers Static Assets)。
当用户说"按 NEW-GAME.md 上站"或给出一个新游戏时,严格按以下流程执行。

## 核心约束

- **只改这些文件**:`content/` 全部、`wrangler.jsonc` 的 `name`、`public/` 图片。
  `app/`、`components/`、`lib/` 是通用代码,除非修 bug 否则不要动。
- **内容必须原创英文**:可以参考 Fandom wiki、代码 tracker、YouTube 视频的**事实**,
  但文案必须重写,禁止逐句复制任何网站。
- **三级证据制**(本模板的定位,`EvidenceTier`):

  | 级别 | 来源 | 怎么处理 |
  |------|------|---------|
  | `official` | Roblox API、官方描述 | 直接发布 |
  | `observed` | 实机视频逐帧读到的 | 发布,但**必须**填 `source`(视频 ID + 时间戳,如 `SrRex2ffNRU@05:35`) |
  | `unknown` | 还没核实 | **绝不编造**。数值留空,页面自动渲染 "Not yet observed" |

  这条不是建议,是构建期硬约束:`lib/validate.ts` 会拦截"填了数值但 evidence 是 unknown"
  和"标了 observed 却没填 source"。同类站点普遍在这一步交白卷(页面上直接写
  "odds are not public"),把观察到的数值配上出处发出来,就是最大的差异化。
  兑换码同理:没核实的标 `unverified` 或不收录。
- **计数要打版本戳**:图鉴总数、配方数、技能节点数这类数字会随版本变化(实测见过
  图鉴从 53 变成 56)。写进 `gameVersionNote`,别当成永久事实。
- 日期一律用当天日期,ISO 格式(YYYY-MM-DD)。

## 流程(按序执行)

### 第 1 步:读取输入
读 `NEW-GAME.md`。必填项缺失时问用户;选填项缺失走第 2 步自动调研。

### 第 2 步:调研(agent-browser / WebSearch / curl)
1. **Roblox 官方数据**(必做):
   - 从游戏链接提取 placeId
   - universeId:`curl https://apis.roblox.com/universes/v1/places/{placeId}/universe`
   - 游戏详情(名称/开发者/描述/类型/maxPlayers/visits):`curl "https://games.roblox.com/v1/games?universeIds={universeId}"`
     — **官方描述通常包含玩法、操作键位、兑换码和社交链接,是最高优先级来源**
   - **官方截图**(必做,内页配图全靠它):
     `curl "https://games.roblox.com/v2/games/{universeId}/media"` 拿 imageId 列表,再用
     `curl "https://thumbnails.roblox.com/v1/assets?assetIds={ids}&size=768x432&format=Png"`
     解析 CDN URL,下载到 `public/screenshots/shot-1.png、shot-2.png...`
   - 封面图:媒体 API 的第一张截图存为 `public/game-cover.png`(比 icon 更适合做 Hero 背景)
2. **兑换码**:搜 `"{游戏名} codes"`,交叉核对 ≥2 个 tracker 站;只有多源一致才标 `active`
3. **实机视频取证**(内容深度的关键来源,必做):
   - YouTube 搜 `"{游戏名} roblox"`,找该游戏的实机/通关视频(注意排除同名混淆游戏)。
     **不要只找一个**:8-12 个不同 up 主的视频才能覆盖到各个界面
   - `yt-dlp -f "bv*[height<=720][ext=mp4]+ba[ext=m4a]/b[height<=720]" --merge-output-format mp4 -o gameplay.mp4 <url>`
     ——**720p 起步**,更低清晰度读不出 UI 里的数字
   - 抽帧:`ffmpeg -i gameplay.mp4 -vf "fps=1/5,scale=640:-1" frames/f_%04d.jpg`
   - **接触印相定位**:`montage frames/*.jpg -tile 6x6 -geometry 300x169+2+2 sheet.jpg`,
     一次读 36 帧,快速找出哪些时间点开着 UI 面板。这一步能把审读量降一个数量级
   - **定点精读**:对目标时间戳提原分辨率单帧
     `ffmpeg -ss <秒> -i gameplay.mp4 -frames:v 1 -q:v 2 hi.jpg`
   - **面板扫描**:UI 面板在屏幕上位置固定,把那块区域裁出来放大 2 倍再拼成一张图,
     可以一次读十几个物品卡:
     `ffmpeg -ss <秒> -i v.mp4 -frames:v 1 -vf "crop=W:H:X:Y,scale=iw*2:ih*2:flags=lanczos" crop.png`
     (坐标每个视频要单独校准一次)
   - 重点抓这些界面:图鉴/收藏册(物品名 + 稀有度 + 数值 + 总数)、合成/融合界面
     (配方 + 产出百分比)、技能树(名称 + 价格 + 效果)、商店、滚动动画(概率),
     以及**场上物品头顶的浮动标签**(常带 `1 in N`,终局基地一张图能读到十几个)
   - 精选帧转 webp 存 `public/screenshots/gameplay-*.webp` 作内页配图;物品图标从
     图鉴详情面板裁大图存 `public/items/<slug>.webp`(游戏画面版权属开发商,标注 fan-site 评论用途)
   - 事实写进 `content/roblox-data.ts` 的 `videoObserved` 块,数值写进 `content/items.ts`
     和 `content/crafting.ts`,每条都带 `source`。引用时说 "observed in gameplay footage"
4. **机制实体**:看 Fandom wiki 目录和 YouTube 攻略视频标题,选 5-8 个玩家真实搜索的机制
   (如 pets、mutations、rebirth),确定每个实体页的 slug 和要点
5. **社区链接**:核实 Discord/Trello/Wiki 是否官方(必须能从官方页面或开发者主页跳转到才算 verified)
6. **搜索需求**:Google/YouTube 自动补全 API(suggestqueries.google.com)拿真实搜索词;
   Google Trends 自动化浏览器必 429,需走主 Chrome(chrome-devtools MCP)或跳过

### 第 3 步:填充内容(11 个文件 + 1 个配置)

**⚠️ 内容深度硬标准(低于此标准 = 未完成,这是站点质量的生命线)**:

| 项目 | 最低要求 |
|------|---------|
| wiki 实体页 | ≥6 个实体;每页 ≥6 个 section、450-800 词、heroImage 配官方截图、updatedOn 填当天、FAQ ≥2 条 |
| 指南 | ≥6 篇:beginner、controls(操作/键位)、progression、advanced + ≥2 篇游戏专属(如 badges、multiplayer);深度同上 |
| 结构化数据 | 有明确数值的内容(操作键位、徽章条件、升级列表)用 `table` 字段呈现,别埋在段落里 |
| 首页 | facts 栏 4 项全部用真实数值(物品数/玩家数/时间目标等,来自官方描述);homeScreenshots 填 ≥3 张官方截图;FAQ ≥5 条 |
| 配图 | 官方截图轮流用作各实体页/指南的 heroImage;section 内关键步骤配 image |
| updates.ts | 首条为 "Site launched",之后每次内容核查都追加带日期的条目 |

按此顺序改,每个文件顶部有 ⭐ 注释说明结构:

| 顺序 | 文件 | 要点 |
|------|------|------|
| 1 | `content/site.ts` | 站点名、url、游戏信息、SEO 标题/描述/关键词、配色、邮箱 |
| 2 | `wrangler.jsonc` | `name` 改为 NEW-GAME.md 里的 Worker 名称 |
| 3 | `content/wiki.ts` | 实体页(SEO 核心);slug 不得与固定路由冲突 |
| 4 | `content/codes.ts` | 兑换码 + 兑换步骤(按游戏实际 UI 描述) |
| 5 | `content/tier-list.ts` | 3-6 条升级/角色优先级;引用的 slug 必须存在于 wiki.ts |
| 6 | `content/calculator.ts` | 目标 2-4 个、滑块 2 个、规则 4-6 条,围绕核心循环设计 |
| 7 | `content/home.ts` | Hero 文案、事实栏(placeId/universeId/核心循环/代码状态)、首页 FAQ |
| 8 | `content/guides.ts` | 3 篇指南:新手/进阶/后期 |
| 9 | `content/community.ts` | Trello/Discord 状态(调研结果如实标 verified/community) |
| 10 | `content/sources.ts` | 官方链接 + 来源政策说明 |
| 11 | `content/tools.ts` | 一般只需改文案里的游戏词汇 |
| 12 | `content/updates.ts` | 一条 "Site launched" 记录 |
| 13 | `content/legal.ts` | 通常不用改(占位符自动替换) |
| 14 | `content/roblox-data.ts` | 第 2 步的调研结果:官方 API 快照 + `videoObserved` 证据块 |

**可选模块(收集 / RNG / 抽卡类游戏才填)**:这类游戏的物品库是最大的差异化资产,
同类站点普遍没有,填了就赢。不是这类游戏就跳过,保持 `site.ts` 的 `features` 全 false。

| 顺序 | 文件 | 要点 |
|------|------|------|
| 15 | `content/items.ts` | 先声明 `statDefs`(该游戏有哪些数值)和 `rarities`(档位 + 游戏内色值),再填 `items`。同时改 `oddsCalculatorContent` |
| 16 | `content/crafting.ts` | 合成/融合配方 + 产出百分比(照抄游戏内的产出表,别改写成散文) |
| 17 | `content/site.ts` | 打开对应的 `features` 开关,并把 `labels` 改成该游戏的用词(Items→Pets/Fruits/Fish,Crafting→Fusion/Merging) |

⚠️ `statDefs` 是通用性的关键:代码不认识 health/dps,只认识"这个游戏声明了哪些数值"。
塔防填 health/dps,宠物模拟填 multiplier/coinsPerSecond,钓鱼填 weight/value。
没有等级系统就把 `levelSystem` 留空,等级计算器会自动隐藏。

图片:封面图已在第 2 步抓取;favicon/icons 若用户未提供,用强调色生成纯色占位
(参考 git 历史里的 Python 脚本写法)。

### 第 4 步:构建验证(必做,不能跳过)
```bash
npm install        # 首次
npm run build      # 内置内容校验:slug 冲突/死链会直接报错
```
构建失败先看报错里的"内容校验失败"提示。构建成功后抽查:
```bash
grep -o '<title>[^<]*</title>' out/index.html out/codes/index.html
ls out/opengraph-image.png   # 必须存在
```
确认没有上一个游戏的残留:`grep -ri "上个游戏名" content/ out/ | head`

### 第 5 步:本地预览给用户确认
`npm run preview`(wrangler dev),截图首页给用户看,**用户确认后再部署**。

### 第 6 步:部署
```bash
npm run deploy     # 首次需 npx wrangler login
```
部署后提醒用户:
1. Dashboard 绑定自定义域名(Workers & Pages → Settings → Domains & Routes)
2. 绑完域名后确认 `content/site.ts` 的 `url` 是正式域名,再 deploy 一次
3. Google Search Console 提交 `https://域名/sitemap.xml`

## 常见坑

- `og:image` 依赖 `scripts/fix-og.mjs`(构建后自动跑),不要删 build 脚本里的这一步
- 新增固定路由时,面包屑要放在正文容器 **之前**(`<><Breadcrumbs …/><div className="mx-auto max-w-6xl px-4 pt-8 pb-10">…`)。
  它是紧贴 Header 的通栏条,塞进容器会浮在空白里,塞进 hero 会被背景压住;漏放的话
  `scripts/check-breadcrumbs.mjs` 在构建后直接报错
- 换域名后忘了改 `site.ts` 的 `url` → canonical/sitemap 全错
- wiki 实体 slug 与固定路由重名 → 构建期校验会拦截,按报错改名即可
- 本机 3000/8787 端口常被占用,预览用其他端口
