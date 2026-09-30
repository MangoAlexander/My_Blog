# Codex Master Prompt — Personal Blog

## Mission

你现在是这个项目的：

- Lead Developer
- UI/UX Designer
- Product Designer
- Frontend Architect
- DevOps Engineer
- QA Engineer
- Accessibility Reviewer
- Performance Reviewer
- Content System Designer

你的任务是在当前工作区中，**从零开始完成一个高质量、现代、极具设计感、可长期维护的个人博客系统**。

这个项目最终部署在：

```text
GitHub Pages
```

并绑定：

```text
Custom Domain
```

主要开发环境：

```text
Ubuntu 24.04 LTS
```

日常写博客不能依赖 Ubuntu。

博客完成后，我必须能够：

```text
Windows
macOS
iPhone
iPad
Android
Linux
```

直接通过浏览器编辑、创建、保存和发布文章。

---

# 0. 最重要的执行规则

这是一个：

```text
AUTONOMOUS EXECUTION TASK
```

不要等待我一步一步发送任务。

不要完成一点以后就停止。

不要出现：

```text
“基础已经搭好了”
“如果你愿意我可以继续”
“下一步可以做……”
“需要我继续吗？”
```

你必须：

```text
读取任务
↓
检查环境
↓
制定计划
↓
执行
↓
验证
↓
发现问题
↓
修复
↓
重新验证
↓
继续下一阶段
↓
直到整个项目完成
```

除非遇到真正无法由你代替用户完成的事情，否则：

```text
不要询问用户
不要等待确认
不要中途停止
```

对于没有明确指定的小细节：

```text
自行做出专业判断
```

优先级：

```text
视觉质量
用户体验
代码质量
长期维护性
性能
可访问性
```

---

# 1. 创建长期任务文件

开始任何项目代码之前，在项目根目录创建：

```text
CODEX_PLAN.md
```

这个文件是你执行整个项目的长期任务记录。

至少包含：

```text
Project Goal
Environment
Architecture
Design Direction
Technology Stack
Pages
Content Model
CMS
GitHub Pages
Custom Domain
CI/CD
Testing
Accessibility
Performance
Security
Visual Review
Current Progress
Remaining Tasks
Final Acceptance
```

使用 Checklist：

```text
- [ ] Task
```

完成以后：

```text
- [x] Task
```

每完成一个阶段：

1. 更新 `CODEX_PLAN.md`
2. 保存当前状态
3. 自动进入下一阶段

不要依赖聊天上下文记住进度。

`CODEX_PLAN.md` 是整个任务的主要执行状态来源。

---

# 2. 项目最终目标

构建一个：

```text
Personal Blog
+
Digital Garden
+
Personal Portfolio
+
Writing Platform
```

最终给人的感觉：

```text
安静
聪明
克制
现代
精致
高级
有个人气质
```

而不是：

```text
普通博客模板
程序员默认博客
Astro Theme Demo
SaaS Landing Page
AI 自动生成网站
Dashboard
```

---

# 3. 视觉方向

核心风格：

```text
Editorial Minimalism
+
Digital Garden
+
Modern Typography
+
Personal Portfolio
```

整体设计应该接近：

```text
现代独立杂志
设计师 Portfolio
精致个人主页
高级数字出版物
```

可以吸收：

```text
Apple
Linear
Vercel
Stripe
Notion
高质量独立设计网站
```

的设计原则。

但：

```text
不要直接复制任何品牌
```

必须形成自己的视觉语言。

---

# 4. 最重要的设计原则

牢记：

```text
Typography > Decoration

Spacing > Effects

Hierarchy > Components

Content > UI

Restraint > Complexity
```

如果：

```text
增加功能
```

和：

```text
保持页面优雅
```

产生冲突：

优先：

```text
优雅
清晰
克制
```

---

# 5. 严格避免 AI 网站审美

不要出现以下常见 AI Landing Page 风格：

```text
大面积紫色渐变
蓝紫色 Glow
Gradient Text
满屏 Glassmorphism
巨大圆角
每一个区域都是 Card
每个 Card 都有 Shadow
无意义 Bento
满页面小图标
Hero 下方三个数字统计
Trusted By
无意义 Badge
无意义 CTA
复杂鼠标跟随效果
满屏粒子
3D 球
WebGL 背景
彩色 Cursor
过度 Parallax
```

这是：

```text
个人博客
```

不是：

```text
AI SaaS Startup
```

---

# 6. 开发环境

主要开发环境：

```text
Ubuntu 24.04 LTS
```

首先确认环境：

```bash
uname -a
cat /etc/os-release
node --version
npm --version
git --version
```

如果缺少必要开发工具：

在合理权限范围内完成项目需要的配置。

不要假设环境是：

```text
macOS
Windows
```

所有本地命令必须首先保证：

```text
Ubuntu 24.04
```

兼容。

---

# 7. Node.js

使用当前可靠的：

```text
Node.js LTS
```

项目中创建：

```text
.nvmrc
.node-version
```

明确固定推荐 Node 版本。

README 中说明推荐版本。

---

# 8. Package Manager

优先使用：

```text
pnpm
```

整个项目只能使用一个 Package Manager。

如果使用 pnpm：

保留：

```text
pnpm-lock.yaml
```

不要同时存在：

```text
package-lock.json
yarn.lock
pnpm-lock.yaml
```

---

# 9. 技术栈

优先：

```text
Astro
TypeScript
Tailwind CSS
Markdown / MDX
Astro Content Collections
GitHub Pages
GitHub Actions
Pages CMS
```

如当前 Astro 最新稳定最佳实践发生变化：

可以按照当前稳定官方方案调整。

原则：

```text
静态优先
JS 尽可能少
性能优先
长期维护优先
```

不要为了简单功能引入大型前端框架。

如果少量交互确实需要：

可以使用：

```text
Vanilla JS
Preact
React
Astro Islands
```

但只能在合理范围内使用。

---

# 10. 项目架构原则

目标：

```text
GitHub = Source of Truth

Astro = Static Site Generator

GitHub Pages = Hosting

GitHub Actions = CI/CD

Pages CMS = Browser Authoring

Markdown = Content Format

Codex = Development / Maintenance
```

不要为普通博客内容引入传统数据库。

不要使用：

```text
MySQL
PostgreSQL
MongoDB
Firebase Database
Supabase Database
```

作为主要文章存储。

---

# 11. 最终内容流程

最终系统：

```text
Browser
   │
   ▼
Pages CMS
   │
   ▼
GitHub Repository
   │
   ├── Articles
   ├── Notes
   ├── Projects
   ├── Images
   └── Site Settings
   │
   ▼
GitHub Actions
   │
   ▼
Astro Build
   │
   ▼
GitHub Pages
   │
   ▼
Custom Domain
```

---

# 12. 页面结构

至少完成：

```text
/
```

首页。

```text
/writing
```

正式长文章。

```text
/writing/[slug]
```

文章详情。

```text
/notes
```

短笔记 / Digital Garden。

```text
/projects
```

个人项目。

```text
/about
```

关于。

```text
/now
```

最近正在做什么。

```text
/uses
```

设备、软件和工具。

```text
/archive
```

文章归档。

```text
/tags
```

标签列表。

```text
/tags/[tag]
```

某标签文章。

```text
/admin
```

私人内容编辑入口 Gateway。

```text
/404
```

自定义 404。

如果实现成本合理：

增加：

```text
/search
```

或全局搜索界面。

---

# 13. 首页是最重要页面

首页不能像普通博客：

```text
头像
用户名
简介
文章列表
```

首页需要像：

```text
精心设计的个人数字空间
```

建议结构：

```text
Header

Hero

Featured Writing

Editorial / Bento Grid

Recent Writing

Selected Projects

Now

Selected Notes

Footer
```

---

# 14. Hero

Hero 是品牌感最重要区域。

建议使用大 Typography。

例如：

```text
Thoughts, code,
and things I'm building.
```

副标题：

```text
A quiet corner of the internet.
```

可以提供：

```text
Writing
Projects
About
```

Hero 高度可以约：

```text
70vh - 90vh
```

桌面允许非常大的文字。

要求：

```text
高质量 Typography
大量留白
清晰 hierarchy
极少装饰
微妙 animation
```

不要：

```text
巨大 CTA
多个按钮
营销文案
```

---

# 15. Editorial Grid / Bento

首页中间可以采用：

```text
Editorial Grid
```

而不是：

```text
Dashboard Bento
```

例如：

```text
┌──────────────────────────┐ ┌───────────────┐
│                          │ │               │
│ Featured Writing         │ │ NOW           │
│                          │ │               │
│ Large Typography         │ │ Reading       │
│                          │ │ Building      │
└──────────────────────────┘ └───────────────┘

┌───────────────┐ ┌──────────────────────────┐
│               │ │                          │
│ Projects      │ │ Latest Writing           │
│               │ │                          │
└───────────────┘ └──────────────────────────┘
```

要求：

```text
精致边框
合理圆角
少量 Hover
Typography First
图片比例漂亮
```

不要：

```text
夸张 Shadow
渐变 Border
强烈 Glow
```

---

# 16. Design System

建立完整 Design System。

统一 CSS Variables。

至少：

```css
--background
--foreground
--muted
--muted-foreground
--border
--accent
--card
--card-foreground
--selection
```

不要在组件中散落大量：

```text
Magic Numbers
Random Colors
```

---

# 17. Light Mode

背景不要纯白。

可以考虑：

```text
#F6F5F1
#F7F7F5
#FAF9F6
```

正文不要纯黑。

例如：

```text
#161616
#181818
```

---

# 18. Dark Mode

推荐：

```text
#101010
#111111
#151515
```

正文：

```text
#EAEAEA
```

Dark Mode 不能只是：

```text
invert colors
```

必须单独检查设计品质。

---

# 19. Accent Color

只选一个主要 Accent。

例如：

```text
Burnt Orange
Deep Blue
Muted Green
```

Accent 仅少量使用于：

```text
Link
Hover
Active
Tag
Small detail
```

不要让 Accent 主导整个页面。

---

# 20. Typography

Typography 是整个网站视觉核心。

英文 UI：

优先考虑：

```text
Inter
Geist
Manrope
```

大型英文标题：

可以考虑：

```text
Instrument Serif
DM Serif Display
Cormorant
```

中文：

```text
Noto Sans SC
Noto Serif SC
System Chinese fallback
```

代码：

```text
JetBrains Mono
IBM Plex Mono
Geist Mono
```

避免加载过多字体。

必须注意：

```text
font-display
性能
中文字体 fallback
```

---

# 21. 正文 Typography

正文：

```text
17px - 19px
```

行高：

```text
1.7 - 1.9
```

文章正文宽度：

```text
640px - 720px
```

不要让文章正文横跨整个显示器。

---

# 22. Navigation

桌面：

```text
NAME

Writing
Notes
Projects
About

Theme Toggle
```

Header：

```text
Sticky
Subtle
```

滚动时可以出现：

```text
极轻背景
少量 backdrop blur
border
```

但不要做重 Glassmorphism。

移动端：

必须设计优秀的 Mobile Navigation。

---

# 23. Footer

Footer 极简。

例如：

```text
© 2026 Your Name

RSS
GitHub
Email

Built with Astro
```

可以增加：

```text
Back to top
```

---

# 24. Content Collections

优先使用 Astro Content Collections。

至少：

```text
writing
notes
projects
```

另外：

```text
now
uses
site settings
```

可以存为：

```text
Markdown
YAML
JSON
```

根据 Pages CMS 兼容性选择最合理形式。

---

# 25. Writing Schema

文章 Frontmatter：

```yaml
---
title:
slug:
description:
date:
updated:
tags:
cover:
draft:
featured:
---
```

至少支持：

```text
title
slug
description
date
updated
tags
cover
draft
featured
```

---

# 26. Draft

必须支持：

```yaml
draft: true
```

Production 中 Draft 不允许出现在：

```text
Homepage
Writing
Archive
Tags
RSS
Sitemap
Search
Related Posts
```

Development 环境可以合理提供预览。

---

# 27. Future Posts

如果：

```text
date > current date
```

Production 默认：

```text
不要提前公开
```

除非明确配置允许。

---

# 28. Writing 页面

顶部例如：

```text
Writing

Ideas, experiments and long-form thoughts.
```

页面：

```text
Featured Article
+
Article List
```

每篇至少展示：

```text
Date
Title
Description
Tags
Reading Time
```

Hover：

```text
Arrow Translate
Underline
Subtle opacity
```

---

# 29. Article Page

文章详情页至少包含：

```text
Title
Description
Date
Updated Date
Reading Time
Tags
Cover
Article Body
TOC
Previous Article
Next Article
Related Posts
```

桌面可以：

```text
Main Content
+
Sticky TOC
```

不要为了多栏布局导致正文过窄。

---

# 30. Table of Contents

自动解析：

```text
h2
h3
```

要求：

```text
Sticky
Current Section Active
Smooth Scroll
```

移动端：

```text
Collapsible
```

---

# 31. Reading Progress

文章页顶部增加：

```text
Reading Progress
```

设计成：

```text
非常细
非常轻
不抢视觉
```

---

# 32. Markdown Styling

仔细设计：

```text
h1
h2
h3
p
blockquote
code
pre
table
img
ul
ol
hr
a
```

文章阅读体验必须是重点。

---

# 33. Code Blocks

支持：

```text
Syntax Highlighting
Copy Button
Filename Caption
Horizontal Scroll
```

可选：

```text
Line Numbers
```

不要让代码块在手机上破坏布局。

---

# 34. Images

文章图片：

```text
Responsive
Rounded
Caption
Lazy Load
```

如果合理：

```text
Lightbox
```

但不要增加沉重依赖。

---

# 35. Notes

Notes 是：

```text
Digital Garden
```

适合：

```text
想法
代码片段
学习记录
书摘
工具
短评论
```

每条：

```text
Title
Date
Tags
Content
Draft
```

手机上必须容易阅读。

---

# 36. Projects

Projects 页面像 Portfolio。

每个项目：

```text
Name
Description
Year
Cover
Tech Stack
GitHub URL
Demo URL
Featured
Content
```

Featured Project：

可以使用较大的 Editorial Card。

其他项目：

可以使用精致列表。

---

# 37. About

不要做成传统 CV。

结构可包括：

```text
Who I am
What I do
What I care about
What I'm learning
Contact
```

预留头像支持。

保持：

```text
Personal
Editorial
```

---

# 38. Now

实现：

```text
/now
```

内容：

```text
Currently

Reading
Building
Learning
Listening
Thinking
```

显示：

```text
Last Updated
```

---

# 39. Uses

实现：

```text
/uses
```

分类：

```text
Hardware
Software
Development
Desk
Everyday
```

---

# 40. Archive

类似出版物目录。

例如：

```text
2026

Sep 30
Article Name

Aug 21
Article Name
```

按照：

```text
Year
Month / Date
```

清晰排列。

---

# 41. Tags

实现：

```text
/tags
/tags/[tag]
```

Tag Design：

```text
极简
```

不要：

```text
每个标签不同颜色
大面积 Pill UI
```

---

# 42. Search

如果实现成本合理：

优先：

```text
Pagefind
```

支持：

```text
Full Text Search
Keyboard Navigation
Article Excerpts
```

可考虑：

```text
Cmd + K
Ctrl + K
```

搜索必须适合：

```text
Desktop
Mobile
```

---

# 43. Theme

必须支持：

```text
Light
Dark
System
```

正确处理：

```text
prefers-color-scheme
localStorage
SSR / Static Flash
```

避免页面加载时主题闪烁。

---

# 44. Animation

原则：

```text
Motion supports hierarchy.
Motion is not decoration.
```

允许：

```text
fade
translateY
underline animation
arrow movement
image scale 1.01
```

动画：

```text
150ms - 500ms
```

优先：

```text
ease-out
```

不要：

```text
复杂 Spring
大量 stagger
持续动画
```

---

# 45. Reduced Motion

必须支持：

```css
prefers-reduced-motion
```

用户开启 Reduced Motion 时：

明显减少或关闭非必要动画。

---

# 46. Hover

Clickable 元素必须有反馈。

例如：

```text
Title →
```

hover：

```text
Arrow translateX(4px)
```

图片：

```text
scale(1.01)
```

边框：

```text
subtle change
```

不要：

```text
scale(1.1)
```

---

# 47. Responsive

重点测试：

```text
375px
390px
768px
1024px
1440px
1920px
```

目标不是：

```text
能显示
```

而是：

```text
每个尺寸都好看
```

---

# 48. Browser CMS

这是项目核心要求之一。

我平时写博客时：

```text
不能依赖 Ubuntu
不能依赖 SSH
不能依赖 Terminal
```

需要：

```text
Browser-based Content Management
```

让我可以：

```text
打开浏览器
↓
GitHub 登录
↓
创建文章
↓
写文章
↓
上传图片
↓
保存 Draft
↓
Publish
↓
GitHub 自动更新
↓
GitHub Actions Build
↓
博客上线
```

---

# 49. CMS 首选

优先使用：

```text
Pages CMS
```

理由：

```text
Git-based
File-based
GitHub-native
Markdown-native
No database
```

不要自行开发完整 CMS。

优先级：

```text
Pages CMS
>
成熟的 Git-based 替代方案
>
自行开发 CMS
```

---

# 50. CMS Configuration

如果 Pages CMS：

创建：

```text
.pages.yml
```

至少管理：

```text
Writing
Notes
Projects
Now
Uses
Site Settings
```

---

# 51. Writing CMS Fields

后台 Writing：

```text
Title
Slug
Description
Publish Date
Updated Date
Cover Image
Tags
Featured
Draft
Content
```

不要要求用户手写 YAML Frontmatter。

---

# 52. Notes CMS

后台：

```text
Notes
```

字段：

```text
Title
Date
Tags
Draft
Content
```

重点优化：

```text
手机快速记录
```

---

# 53. Projects CMS

字段：

```text
Name
Description
Year
Cover
Tech Stack
GitHub URL
Demo URL
Featured
Content
```

---

# 54. Now CMS

`/now` 内容不能写死在 Component。

后台可编辑：

```text
Reading
Building
Learning
Listening
Thinking
Updated Date
```

---

# 55. Uses CMS

后台可编辑：

```text
Hardware
Software
Development
Desk
Everyday
```

不要要求编辑代码。

---

# 56. Site Settings CMS

后台可以编辑：

```text
Site Name
Author
Tagline
Description
Email
GitHub
Social Links
Hero Text
Hero Subtitle
Footer
```

这些设置存入：

```text
Git repository
```

而不是外部数据库。

---

# 57. Image Upload

CMS 必须支持浏览器上传图片。

建议路径：

```text
public/images/uploads/
```

或者根据 Astro Image 最佳实践选择：

```text
src/assets/uploads/
```

目标：

```text
Browser
↓
Select Image
↓
CMS
↓
GitHub Repository
↓
Article
```

不要要求：

```text
FTP
scp
SSH
手动拷贝
```

---

# 58. 图片 URL

确保：

```text
URL Safe
跨平台兼容
GitHub Pages 正常
Custom Domain 正常
```

如果 CMS 支持自动处理文件名：

优先生成合理文件名。

---

# 59. CMS Authentication

真正写权限必须基于：

```text
GitHub Authentication
+
Repository Permission
```

不要自己实现：

```text
username/password
```

不要创建自定义密码数据库。

---

# 60. Secrets

绝对不要提交：

```text
GitHub PAT
OAuth Secret
Private Key
Password
API Secret
```

不要暴露到：

```text
Client-side JS
public/
Repository
```

---

# 61. /admin

实现：

```text
/admin
```

作为：

```text
Editor Gateway
```

普通导航：

```text
不要显示 Admin
```

Footer：

```text
不要显示 Admin
```

我可以直接记住：

```text
https://domain.com/admin
```

---

# 62. /admin 不是安全边界

不要认为：

```text
别人不知道 /admin
```

就是安全。

真正权限来自：

```text
GitHub Authentication
Repository Write Permission
```

即：

```text
知道 Admin URL
≠
有权编辑内容
```

---

# 63. Admin Gateway Design

`/admin` 页面也必须漂亮。

例如：

```text
Content Studio

Write anywhere.

Create and publish writing,
notes and projects from your browser.

Continue with GitHub →
```

下面可以有小字：

```text
Repository-backed.
No separate content database.
```

整体风格：

```text
Editorial Minimal
```

支持：

```text
Dark
Light
Mobile
Desktop
```

---

# 64. CMS Mobile Experience

考虑：

```text
iPhone
iPad
Android
```

至少保证基本流程：

```text
Login
Open Post
Edit Text
Upload Image
Save
Publish
```

可使用。

---

# 65. CMS 与本地 Git 共用内容

网页 CMS 和本地开发必须编辑：

```text
同一份内容
```

例如：

```text
Browser CMS → GitHub → git pull
```

也支持：

```text
Local Editor → git push → Browser CMS
```

不要维护两份内容系统。

---

# 66. Source of Truth

最终：

```text
GitHub Repository
```

必须是唯一 Source of Truth。

这样：

```text
文章
图片
Notes
Projects
Settings
```

都有 Git 历史。

---

# 67. Git History

CMS 修改必须产生：

```text
Git Commit
```

这样误删内容可以：

```text
Git history restore
```

---

# 68. SEO

实现：

```text
title
description
canonical
OpenGraph
Twitter Card
robots.txt
sitemap.xml
RSS
```

文章：

增加：

```text
Article Structured Data
```

如果合适：

```text
JSON-LD
```

---

# 69. OG Image

至少提供统一：

```text
1200 × 630
```

OG Image。

如果当前技术实现合理：

可自动生成文章 OG。

视觉必须与网站统一。

---

# 70. RSS

实现：

```text
/rss.xml
```

Draft 与 Future Post 不得进入 RSS。

---

# 71. Sitemap

自动生成：

```text
sitemap.xml
```

Draft 与 Future Post 不得泄漏。

---

# 72. Site Config

创建统一：

```text
site.config.ts
```

或者当前 Astro 项目更合理的 Config 架构。

至少统一管理：

```text
name
title
description
url
author
email
github
social
navigation
```

不要散落在几十个组件里。

---

# 73. Project Structure

保持专业。

例如：

```text
src/
├── components/
├── content/
├── layouts/
├── pages/
├── styles/
├── utils/
├── config/
└── data/
```

根据实际 Astro 架构调整。

---

# 74. Components

合理拆分：

```text
Header
Footer
Hero
Container
SectionHeading
ArticleCard
ProjectCard
NoteCard
Tag
ThemeToggle
Search
TableOfContents
ReadingProgress
CodeBlock
```

不要：

```text
一个组件 1000 行
```

也不要：

```text
过度拆成几十个无意义组件
```

---

# 75. Example Content

为了真正验证页面：

至少创建：

```text
6 篇示例 Writing
8 条 Notes
4 个 Projects
```

不要使用：

```text
Lorem ipsum
```

使用真实感内容。

可以：

```text
英文
中文
中英混合
```

确保中文排版同样好看。

---

# 76. GitHub Pages

最终必须支持：

```text
GitHub Pages
```

创建：

```text
.github/workflows/deploy.yml
```

Push 到：

```text
main
```

自动：

```text
Install
Validate
Build
Deploy
```

---

# 77. Deploy Safety

如果：

```text
Type Check
Content Validation
Build
```

失败：

```text
DO NOT DEPLOY
```

不能部署损坏版本。

---

# 78. GitHub Actions Permissions

所有 Actions：

遵循：

```text
Least Privilege
```

不要使用：

```yaml
permissions: write-all
```

除非绝对必要。

---

# 79. CI

创建：

```text
.github/workflows/ci.yml
```

PR 和 Push 执行：

```text
Install
Format Check
Lint
Type Check
Content Validation
Unit Tests
Build
```

---

# 80. Custom Domain

支持：

```text
Custom Domain
```

创建：

```text
public/CNAME
```

初始：

```text
example.com
```

只是占位符。

README 中说明替换方法。

---

# 81. Domain Documentation

创建：

```text
docs/DOMAIN_SETUP.md
```

解释：

```text
GitHub Pages Settings
Custom Domain
CNAME
A Records
AAAA Records
HTTPS
Enforce HTTPS
Domain Verification
DNS Propagation
```

只记录正确、必要内容。

---

# 82. GitHub Pages Base Path

正确考虑：

```text
username.github.io
```

和：

```text
username.github.io/repository
```

以及：

```text
Custom Domain
```

使用 Custom Domain 后：

确保不会出现：

```text
CSS 404
JS 404
Image 404
Wrong Base URL
```

---

# 83. README

创建专业 README。

至少：

```text
Project Overview
Technology Stack
Requirements
Ubuntu 24.04 Setup
Install
Development
Production Build
Preview
Create Writing
Create Notes
Create Project
Browser CMS
Site Settings
Custom Domain
GitHub Pages
GitHub Actions
DNS Setup
Directory Structure
Troubleshooting
```

半年后回来：

我仍然应该知道这个项目怎么运行。

---

# 84. CMS Documentation

创建：

```text
docs/CMS_SETUP.md
```

说明：

```text
为什么选择当前 CMS
如何连接 GitHub
如何授权 Repository
如何打开 Editor
如何新建文章
如何编辑文章
如何上传图片
如何 Draft
如何 Publish
如何删除
如何恢复 Git 历史
如何修改 CMS Schema
```

---

# 85. Writing Guide

创建：

```text
docs/WRITING.md
```

目标是非技术日常使用。

说明：

```text
如何用浏览器写文章
如何创建标题
如何写 Markdown
如何上传图片
如何设置 Tags
如何 Featured
如何 Draft
如何 Publish
如何撤回
```

---

# 86. Content Validation

创建内容验证。

例如：

```text
scripts/validate-content.ts
```

检查：

```text
title exists
valid description
valid date
valid slug
valid tags
duplicate slug
cover exists
broken internal references
```

发现：

```text
Duplicate Slug
Invalid Date
```

应该导致 CI / Build 失败。

---

# 87. Reading Time

实现稳定 Reading Time。

需要考虑：

```text
English
Chinese
```

不要完全依赖英文 word count 导致中文阅读时间明显错误。

---

# 88. Related Posts

可以按照：

```text
Tags
Category similarity
```

生成 Related Posts。

不要引入复杂推荐系统。

---

# 89. Previous / Next

Article 页面：

提供：

```text
Previous
Next
```

按文章日期排序。

---

# 90. Accessibility

必须使用：

```text
Semantic HTML
Keyboard Navigation
Focus States
Alt Text
Correct Labels
ARIA when needed
Heading Hierarchy
Contrast
Reduced Motion
```

不要：

```text
过度 ARIA
```

优先正确 HTML。

---

# 91. Focus Styles

Focus 必须：

```text
明显
美观
与设计系统一致
```

不能：

```text
完全去掉 outline
```

---

# 92. Performance

目标 Lighthouse：

```text
Performance >= 95
Accessibility >= 95
Best Practices >= 95
SEO >= 95
```

尽量做到：

```text
100 / 100 / 100 / 100
```

不要为了追求 100：

破坏设计或功能。

---

# 93. Images Performance

合理使用：

```text
Astro Image
Responsive Images
WebP / AVIF
Lazy Loading
Correct Sizes
```

避免：

```text
巨大的原图
```

---

# 94. JavaScript

客户端 JS：

```text
越少越好
```

不要因为：

```text
Theme Toggle
Search
Mobile Menu
```

而把整个网站变成 SPA。

---

# 95. 404

设计漂亮 404。

例如：

```text
404

Looks like this page wandered off.

Back home →
```

必须与整个站统一。

---

# 96. Security

最终检查 Repository：

确认没有：

```text
.env
GitHub PAT
OAuth Secret
Private Key
Password
Debug Secret
```

增加合理：

```text
.gitignore
```

---

# 97. Dependabot

如果合理：

创建：

```text
.github/dependabot.yml
```

针对：

```text
npm
github-actions
```

使用合理更新频率。

不要制造大量无意义 PR。

---

# 98. Formatting

配置：

```text
Prettier
```

包括合理 Astro 支持。

运行：

```bash
pnpm format:check
```

---

# 99. Lint

使用当前生态中可靠的：

```text
ESLint
```

或 Astro 当前合理 Lint 方案。

运行：

```bash
pnpm lint
```

---

# 100. Type Check

运行：

```bash
pnpm astro check
```

或项目实际对应命令。

目标：

```text
0 errors
```

---

# 101. Unit Tests

优先：

```text
Vitest
```

至少测试：

```text
Post Filtering
Draft Filtering
Future Post Filtering
Sorting
Reading Time
Slug Handling
Related Posts
```

---

# 102. Browser Tests

优先：

```text
Playwright
```

覆盖：

```text
Home
Writing
Article
Notes
Projects
About
Now
Uses
Archive
Tags
Admin Gateway
404
```

---

# 103. Interaction Tests

测试：

```text
Navigation
Theme Toggle
Search
Article Links
TOC
Mobile Navigation
Previous / Next
Tags
404
```

---

# 104. Production Testing

不要只测试：

```text
astro dev
```

必须：

```bash
pnpm build
pnpm preview
```

然后针对：

```text
Production Output
```

进行测试。

---

# 105. Responsive Tests

Playwright 或对应浏览器测试至少：

```text
390 × 844
1440 × 900
```

最好额外：

```text
768
1920
```

---

# 106. Screenshots

完成主要页面以后：

如果环境支持浏览器自动化：

创建：

```text
artifacts/screenshots/
```

例如：

```text
home-desktop-light.png
home-desktop-dark.png
home-mobile-light.png
home-mobile-dark.png

writing-desktop.png

post-desktop-light.png
post-desktop-dark.png
post-mobile.png

projects-desktop.png
about-mobile.png
```

---

# 107. Visual Review

不要因为：

```text
Tests Passed
```

就认为设计完成。

你必须主动检查：

```text
Typography
Spacing
Alignment
Hierarchy
Whitespace
Card Design
Border
Radius
Animation
Image Ratio
Navigation
Footer
Dark Mode
Mobile
Article Reading Experience
Code Blocks
```

---

# 108. Visual Review Questions

至少问自己：

```text
这像认真设计的网站吗？

是否存在模板感？

是否存在 AI Landing Page 感？

Hero 是否有记忆点？

Typography 是否有层级？

Spacing 是否统一？

首页是否太像 Dashboard？

Cards 是否太多？

正文宽度舒服吗？

中文排版舒服吗？

移动端是不是精致？

Dark Mode 是否真的漂亮？

代码块是否破坏布局？

页面是不是过度设计？

有没有地方可以删掉元素反而更高级？
```

发现问题：

```text
继续修改
```

---

# 109. Visual Polish 必须两轮

所有功能完成以后：

执行：

```text
Visual Polish Pass 1
```

修改。

重新截图 / 检查。

然后执行：

```text
Visual Polish Pass 2
```

再次优化。

不要做一次就结束。

---

# 110. Browser-based Writing 最终体验

最终我要能够：

```text
手机 / iPad / Mac / Windows
↓
打开浏览器
↓
访问 Editor
↓
Login with GitHub
↓
Writing
↓
New Post
↓
填写 Title
↓
写正文
↓
上传图片
↓
Save Draft 或 Publish
↓
GitHub Commit
↓
GitHub Actions
↓
自动部署
↓
文章上线
```

不能要求：

```text
SSH Ubuntu
cd repo
vim
git add
git commit
git push
```

除非我主动选择本地方式。

---

# 111. Clean Install Verification

项目完成以后：

模拟新机器。

删除：

```text
node_modules
```

然后：

```bash
pnpm install --frozen-lockfile
```

重新进行关键验证。

确保项目不是依赖当前机器里的临时状态。

---

# 112. Final Acceptance

项目进入 Final Acceptance 时：

依次执行：

```text
Environment Check
↓
Clean Install
↓
Format Check
↓
Lint
↓
Type Check
↓
Content Validation
↓
Unit Tests
↓
Production Build
↓
Production Preview
↓
Playwright
↓
Desktop Review
↓
Mobile Review
↓
Light Mode Review
↓
Dark Mode Review
↓
Accessibility Review
↓
SEO Review
↓
CMS Configuration Review
↓
GitHub Pages Review
↓
Custom Domain Review
↓
Security Review
↓
Visual Polish Pass 1
↓
Visual Polish Pass 2
↓
Final Build
```

---

# 113. 不允许虚假验证

这是硬性要求。

不要写：

```text
PASS
```

除非真的执行并验证。

例如：

不要写：

```text
Tests: PASS
```

如果没运行 Tests。

不要写：

```text
Mobile: PASS
```

如果没有检查 Mobile。

不要写：

```text
CMS: PASS
```

如果最终 GitHub 登录必须等待我的授权。

这种情况下应该记录：

```text
CMS Configuration: PASS
CMS Schema: PASS
GitHub Authorization: USER ACTION REQUIRED
```

---

# 114. USER ACTION REQUIRED

整个项目过程中：

尽量不要求用户参与。

只有真正无法代替用户的事项：

才可以列入：

```text
USER ACTION REQUIRED
```

例如：

```text
GitHub OAuth Authorization
Repository Permission
GitHub Pages Settings
Custom Domain DNS Changes
Domain Registrar Configuration
```

不要把以下事情扔给用户：

```text
npm install
写代码
建文件
配置 Astro
配置 CMS
运行测试
Build
Lint
Type Check
```

这些都是你的任务。

---

# 115. Git Status

最终检查：

```bash
git status
```

确认：

```text
没有意外 secret
没有无用 debug 文件
没有临时文件
没有不必要 build artifact
重要配置均被纳入 Git
```

---

# 116. CODEX_PLAN Final Status

最终更新：

```text
CODEX_PLAN.md
```

写：

```text
STATUS: COMPLETE
```

并记录真实状态。

例如：

```text
Environment: PASS
Install: PASS
Format: PASS
Lint: PASS
TypeCheck: PASS
Content Validation: PASS
Unit Tests: PASS
Build: PASS
E2E: PASS
Desktop: PASS
Mobile: PASS
Light Mode: PASS
Dark Mode: PASS
Accessibility: PASS
SEO: PASS
CMS Configuration: PASS
GitHub Pages: PASS
Security Review: PASS
Visual Review 1: PASS
Visual Review 2: PASS
```

如果某项无法执行：

写：

```text
NOT EXECUTED
```

并说明原因。

不要伪造结果。

---

# 117. Final Report

任务真正完成以后：

输出简洁但完整的 Final Report。

至少说明：

```text
完成了什么
技术栈
设计特点
项目如何运行
如何通过网页写文章
如何本地写文章
如何发布
如何配置 GitHub Pages
如何绑定域名
还有哪些 USER ACTION REQUIRED
最终测试状态
```

---

# 118. 完成标准 Checklist

最终至少确认：

```text
[ ] Astro Project Created
[ ] TypeScript Configured
[ ] Styling System Complete
[ ] Design System Complete
[ ] Homepage Complete
[ ] Writing Complete
[ ] Article Page Complete
[ ] Notes Complete
[ ] Projects Complete
[ ] About Complete
[ ] Now Complete
[ ] Uses Complete
[ ] Archive Complete
[ ] Tags Complete
[ ] Search Complete or deliberately omitted with reason
[ ] Admin Gateway Complete
[ ] Browser CMS Configured
[ ] Image Upload Configured
[ ] Draft Support Complete
[ ] Future Post Filtering Complete
[ ] Dark Mode Complete
[ ] Light Mode Complete
[ ] Responsive Complete
[ ] RSS Complete
[ ] Sitemap Complete
[ ] SEO Complete
[ ] OG Complete
[ ] 404 Complete
[ ] Accessibility Complete
[ ] GitHub Pages Configured
[ ] GitHub Actions CI Complete
[ ] GitHub Actions Deploy Complete
[ ] Custom Domain Support Complete
[ ] README Complete
[ ] CMS Documentation Complete
[ ] Writing Documentation Complete
[ ] Domain Documentation Complete
[ ] Content Validation Complete
[ ] Unit Tests Complete
[ ] E2E Tests Complete
[ ] Build PASS
[ ] Type Check PASS
[ ] Lint PASS
[ ] Mobile Review Complete
[ ] Desktop Review Complete
[ ] Dark Review Complete
[ ] Light Review Complete
[ ] Security Review Complete
[ ] Visual Polish Pass 1 Complete
[ ] Visual Polish Pass 2 Complete
```

---

# 119. 推荐执行顺序

按照下面顺序自主执行。

## Phase 1 — Discovery

```text
检查 Ubuntu 环境
检查当前目录
检查 Git 状态
检查已有文件
确定 Node / pnpm
```

然后更新：

```text
CODEX_PLAN.md
```

---

## Phase 2 — Architecture

确定：

```text
Astro Structure
Content Collections
CMS Structure
Routing
Site Config
GitHub Pages Architecture
```

---

## Phase 3 — Bootstrap

初始化：

```text
Astro
TypeScript
Styling
Formatting
Lint
Testing
```

确认基本 Build。

---

## Phase 4 — Design System

完成：

```text
Colors
Typography
Spacing
Layout
Container
Breakpoints
Light / Dark
Interaction
Motion
```

---

## Phase 5 — Core Layout

完成：

```text
Header
Navigation
Mobile Navigation
Footer
Theme Toggle
Global Layout
```

---

## Phase 6 — Homepage

重点完成：

```text
Hero
Featured Writing
Editorial Grid
Latest Writing
Projects
Now
Notes
Footer
```

首页完成以后：

进行第一次基本视觉检查。

---

## Phase 7 — Writing System

完成：

```text
Content Schema
Writing List
Article Page
Markdown Styles
TOC
Reading Progress
Reading Time
Previous / Next
Related Posts
```

---

## Phase 8 — Secondary Content

完成：

```text
Notes
Projects
About
Now
Uses
Archive
Tags
```

---

## Phase 9 — Search

如果合理：

完成：

```text
Pagefind
Search UI
Keyboard Shortcut
```

---

## Phase 10 — CMS

完成：

```text
.pages.yml
Writing
Notes
Projects
Now
Uses
Site Settings
Image Upload
Draft
```

完成：

```text
/admin
```

Gateway。

---

## Phase 11 — SEO

完成：

```text
Meta
Canonical
OpenGraph
Twitter
JSON-LD
RSS
Sitemap
Robots
```

---

## Phase 12 — GitHub

完成：

```text
CI
Deploy
Pages
CNAME
Dependabot
```

---

## Phase 13 — Documentation

完成：

```text
README.md
docs/CMS_SETUP.md
docs/WRITING.md
docs/DOMAIN_SETUP.md
```

---

## Phase 14 — Validation

实际执行：

```text
Format
Lint
Type Check
Content Validate
Tests
Build
Preview
```

修复所有能修复的问题。

---

## Phase 15 — Browser QA

实际检查：

```text
Desktop
Mobile
Light
Dark
Navigation
Article
Search
Admin Gateway
404
```

---

## Phase 16 — Visual Polish Pass 1

根据真实页面：

优化：

```text
Typography
Spacing
Sizes
Grid
Cards
Borders
Images
Hover
Motion
Mobile
Dark Mode
```

---

## Phase 17 — Visual Polish Pass 2

重新检查：

```text
Consistency
Elegance
Restraint
Hierarchy
Readability
```

继续优化。

---

## Phase 18 — Clean Install

删除依赖。

重新：

```text
pnpm install --frozen-lockfile
```

重新：

```text
Test
Build
```

---

## Phase 19 — Final Acceptance

完成所有可完成验证。

更新：

```text
CODEX_PLAN.md
```

---

# 120. 设计最终目标

完成后的博客不应该让人第一反应是：

```text
“这是 Astro。”
```

而应该是：

```text
“这是这个人的网站。”
```

网站应该有明显个人气质。

内容是核心。

设计应该：

```text
增强内容
```

而不是：

```text
抢走内容注意力
```

---

# 121. 最终产品应该做到

```text
Beautiful
Fast
Readable
Personal
Responsive
Accessible
Git-native
Browser-editable
No traditional database
Easy to maintain
Easy to backup
Easy to deploy
Easy to write anywhere
```

---

# 122. 最终日常工作流

我的日常使用应该只有：

```text
打开浏览器
↓
打开 Content Editor
↓
GitHub 登录
↓
写文章
↓
上传图片
↓
Publish
↓
完成
```

网站发布流程由：

```text
GitHub Actions
```

自动完成。

Ubuntu 24.04：

主要用于：

```text
Codex 开发
高级维护
本地调试
```

而不是日常写文章的必要条件。

---

# 123. 最后一条执行命令

现在立即开始。

第一步：

```text
检查当前工作区和 Ubuntu 24.04 环境
```

第二步：

创建：

```text
CODEX_PLAN.md
```

第三步：

把整个项目拆解成完整 Checklist。

第四步：

**立即开始执行。**

之后：

```text
每完成一个阶段
↓
更新 CODEX_PLAN.md
↓
验证
↓
自动进入下一阶段
```

不要等待我的下一条消息。

不要中途停止。

不要仅完成 MVP。

持续执行直到：

```text
网站完整
+
设计打磨完成
+
Production Build 成功
+
自动验证完成
+
GitHub Pages 可部署
+
Browser CMS 配置完成
+
文档完整
```

然后才可以将：

```text
STATUS: COMPLETE
```

写入 `CODEX_PLAN.md`。