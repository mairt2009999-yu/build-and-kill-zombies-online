# 🎮 新游戏上站信息表(NEW-GAME.md)

> **用法**:复制整个 `game-wiki-template` 目录为新项目 → 填好本表 → 对 Claude 说
> "按 NEW-GAME.md 上站" → Claude 会自动研究、填充内容、构建验证、部署。
> 只有【必填】的 4 项是你必须提供的,其余留空 Claude 会自动调研补全。

---

## 一、必填(2 分钟)

| 字段 | 填写处 | 说明 |
|------|--------|------|
| 游戏英文名 | `` | 玩家搜索时用的名字,如 "Grow a Garden" |
| Roblox 游戏链接 | `` | 官方 game 页 URL(placeId/universeId/开发者/封面图都从这里派生) |
| 部署域名 | `` | 如 `https://growagarden.org`(还没买域名就先留空,用 workers.dev 先上) |
| Worker 名称 | `` | 小写字母和连字符,如 `grow-a-garden-wiki`(决定 xxx.workers.dev 子域名) |

## 二、选填(留空则 Claude 自动调研)

### 游戏信息
- 游戏类型(genre):``
- 核心循环一句话(如 "种植→收获→卖钱→买种子"):``
- 主题强调色(默认黄色 #facc15):``

### 兑换码(不填则 Claude 搜索代码 tracker 站核实)
```
格式:代码 | 奖励 | 状态(active/expired/unverified) | 日期
示例:GROWFAST | 100 Coins | active | 2026-07-13
1.
2.
```

### 机制实体页(不填则 Claude 从 wiki/视频调研 3-6 个)
> 这些会生成顶级页面(如 /pets/、/mutations/),是 SEO 的核心。
> slug 用小写连字符,不能用:codes、tier-list、calculator、guides、wiki、
> trello、updates、sources、about、contact、privacy、terms、disclosure
```
格式:slug | 页面标题 | 一句话说明
示例:pets | Pets | 宠物获取、稀有度和加成
1.
2.
3.
```

### 物品库(收集 / RNG / 抽卡类游戏才填,留空则 Claude 判断是否需要)
> 这类游戏的物品数据库 + 概率计算器是最大的差异化资产,同类站点普遍拿不出来。
> 填了会自动生成 /items/、/rarities/、/crafting/、/odds-calculator/ 四组页面。
> 不是这类游戏就整段留空,行为与没有这个模块时完全一致。

- 物品叫什么(Items / Pets / Fruits / Fish / Weapons):``
- 合成系统叫什么(Crafting / Fusion / Merging,没有就留空):``
- 该游戏的物品数值有哪些(如 `生命, 每秒伤害` 或 `倍率, 每秒金币` 或 `重量, 价值`):``
- 有等级系统吗?上限多少:``

### 官方/社区链接(不填则 Claude 核实后标注状态)
- Discord:``
- Trello:``
- 社区 Wiki(Fandom 等):``
- 开发者/群组页:``

### 站点运营
- 联系邮箱(默认 contact@域名):``
- GA4 Measurement ID(上线后再填也行):``
- AdSense 发布商 ID(过审后再填):``

## 三、图片(可选)

- 不提供:Claude 从 Roblox API 抓官方封面图,favicon/icons 用强调色占位图
- 提供:把图放进 `public/` 覆盖同名文件即可
  (game-cover.png 1200×630、favicon.png 96、icon-192/512、apple-touch-icon.png 180)

---

## ✅ 填完后对 Claude 说

> 按 NEW-GAME.md 上站

Claude 将执行 CLAUDE.md 里的标准流程:调研 → 填充 content/ → 构建校验 → 本地预览给你确认 → 部署 Cloudflare。
