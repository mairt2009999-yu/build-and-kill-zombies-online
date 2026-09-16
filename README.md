# 游戏 Wiki 站点模板(Game Wiki Template)

一个可复用的 **Roblox 游戏 Wiki/工具站模板**,基于对 drainthelake.org 的结构分析构建。
换新游戏时**只需修改 `content/` 目录 + 替换几张图片**,即可一条命令部署到 Cloudflare。

## 技术栈

| 项目 | 选型 | 说明 |
|------|------|------|
| 框架 | Next.js 15(App Router) | 与原站一致 |
| 样式 | Tailwind CSS v4 | 深色主题,强调色可配置 |
| 渲染 | `output: 'export'` 纯静态导出 | 无服务器成本、全球 CDN、免费额度内跑满 |
| 部署 | Cloudflare Workers Static Assets | `wrangler deploy` 一条命令 |
| SEO | 全套内置 | canonical、OG/Twitter 卡片、JSON-LD、sitemap、robots、manifest、构建期 OG 图 |

## 快速开始

```bash
npm install          # 安装依赖
npm run dev          # 本地开发 http://localhost:3000
npm run build        # 构建静态站点到 ./out
npm run preview      # 本地预览 Cloudflare 部署效果
npm run deploy       # 构建并部署到 Cloudflare(首次先 npx wrangler login)
```

## 🤖 推荐用法:让 Claude 自动上站

1. 复制整个目录为新项目
2. 填 [NEW-GAME.md](NEW-GAME.md)(只有 4 个必填项:游戏名、Roblox 链接、域名、Worker 名)
3. 对 Claude 说 **"按 NEW-GAME.md 上站"**

Claude 会按 [CLAUDE.md](CLAUDE.md) 的 SOP 自动执行:调研游戏资料(Roblox API、
代码 tracker、社区 wiki)→ 填充全部内容 → 构建校验 → 本地预览给你确认 → 部署。
以下手动流程仅供了解细节或自己动手时参考。

## ⭐ 新游戏上站流程(约 1-2 小时)

### 第 1 步:改站点配置(5 分钟)

编辑 [content/site.ts](content/site.ts):

- `name` / `shortName`:站点名
- `url`:你的域名(canonical / sitemap 全部依赖它,**必改**)
- `accentColor` / `themeColor`:配色
- `game.*`:游戏名、placeId、universeId、官方链接、开发者
- `seo.*`:首页标题、描述、关键词
- `contactEmail`:联系邮箱

编辑 [wrangler.jsonc](wrangler.jsonc):改 `name`(决定 `*.workers.dev` 子域名)。

### 第 2 步:替换图片(10 分钟)

替换 `public/` 下的占位图(保持文件名不变):

| 文件 | 尺寸 | 用途 |
|------|------|------|
| `game-cover.png` | 1200×630 | 首页 Hero 背景(用游戏官方缩略图) |
| `favicon.png` | 96×96 | 浏览器标签图标 |
| `icon-192.png` | 192×192 | PWA 图标 |
| `icon-512.png` | 512×512 | PWA 图标 |
| `apple-touch-icon.png` | 180×180 | iOS 图标 |

### 第 3 步:填游戏内容(1 小时,核心工作)

`content/` 目录下每个文件对应一类页面,文件里都有 `⭐` 注释说明:

| 文件 | 生成的页面 | 内容 |
|------|-----------|------|
| `home.ts` | `/` 首页 | Hero 文案、事实栏、FAQ |
| `codes.ts` | `/codes/` | 兑换码列表(active/expired/unverified)、兑换步骤 |
| `tier-list.ts` | `/tier-list/` | Tier 榜单(S/A/B/C/D) |
| `calculator.ts` | `/calculator/` | 规划器:目标+滑块+推荐规则(纯数据,不用写代码) |
| `wiki.ts` | `/wiki/` + **每个实体一个顶级页面** | 游戏机制实体页(如 /tokens/、/pets/) |
| `guides.ts` | `/guides/` + `/guides/{slug}/` | 攻略指南 |
| `community.ts` | `/trello/` | Trello/Discord/Wiki 状态(高频搜索词) |
| `updates.ts` | `/updates/` | 更新日志 |
| `sources.ts` | `/sources/` + 首页来源区块 | 官方/社区来源核查 |
| `tools.ts` | 首页工具卡片 | 站内工具导航 |
| `legal.ts` | about/contact/privacy/terms/disclosure | 法务页(自动替换站点名/邮箱) |

**Wiki 实体是模板的核心机制**:在 `wiki.ts` 的 `entities` 里加一个条目
(如 `slug: "pets"`),就自动生成 `/pets/` 页面并进入 sitemap、页脚导航。
注意 slug 不要与固定路由冲突(codes、tier-list、calculator、guides、wiki、
trello、updates、sources、about、contact、privacy、terms、disclosure)。

### 第 4 步:部署到 Cloudflare(10 分钟)

```bash
npx wrangler login    # 首次:浏览器授权 Cloudflare 账号
npm run deploy        # 构建 + 部署,得到 https://<name>.workers.dev
```

**绑定自定义域名**(在 Cloudflare Dashboard):

1. 域名 DNS 托管到 Cloudflare(如果还没有)
2. Workers & Pages → 你的 Worker → Settings → Domains & Routes → Add → Custom Domain
3. 输入你的域名(如 `mygame.org`),自动配置 DNS 和 HTTPS
4. 确认 `content/site.ts` 的 `url` 已改成这个域名后重新 `npm run deploy`

### 第 5 步:上线后(可选)

- **收录**:到 [Google Search Console](https://search.google.com/search-console) 提交 `https://你的域名/sitemap.xml`
- **统计**:`site.ts` → `analytics.googleAnalyticsId` 填 GA4 ID
- **广告**:`site.ts` → `ads.enabled: true` + `adsenseClientId`(广告位已预留在各页面)

## 项目结构

```
content/     ⭐ 换游戏只改这里(+ public/ 图片)
app/         页面路由(通用,读 content 渲染;不需要动)
components/  共享组件(Header/Footer/卡片/规划器等)
lib/         SEO 工具(metadata 工厂、JSON-LD 生成器)
public/      图片资源(换游戏时替换)
```

## 内置 SEO 清单

- ✅ 每页独立 title/description/canonical(`lib/seo.ts` 统一生成)
- ✅ Open Graph + Twitter 卡片
- ✅ 构建期生成 1200×630 OG 分享图(`app/opengraph-image.tsx`,自动取配置文案)
- ✅ JSON-LD:WebSite、VideoGame、FAQPage、BreadcrumbList、ItemList(tier 榜)、SoftwareApplication(计算器)
- ✅ 每个内页都有面包屑导航条(紧贴 Header 的通栏条,窄屏下是唯一的层级出口),构建期校验漏页
- ✅ sitemap.xml 自动包含所有页面(含动态生成的 wiki 实体和指南)
- ✅ robots.txt、manifest.webmanifest、404 页
- ✅ URL 统一 trailing slash,避免重复收录

## 常见问题

**Q: 想加一种新页面类型(比如地图页)?**
在 `content/wiki.ts` 加实体即可;需要特殊布局时,参考 `app/[slug]/page.tsx` 复制一个新路由。
新路由记得在正文容器 *之前* 放 `<Breadcrumbs crumbs={[...]} />`(不要放进容器或 hero 里),
漏了的话 `npm run build` 会在面包屑校验这一步直接失败。

**Q: 构建报错 "Page is missing param"?**
`content/` 里某处引用的 slug 不存在。检查 tier-list.ts 的 `slug` 字段和 home.ts 的 CTA 链接是否都指向真实存在的实体/指南。

**Q: 部署后样式丢失?**
确认部署的是 `out/` 目录(`npm run deploy` 会自动先构建),不要手动上传 `.next/`。
