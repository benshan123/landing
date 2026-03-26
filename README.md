# Cheapest Interview - Landing Page

AI 驱动的笔试/面试助手官网，基于 Next.js 构建，部署于 Vercel。

## 功能概览

- **产品首页** — 功能展示、隐身能力、对比优势、定价方案、下载入口、订单查询、FAQ
- **使用文档** (`/docs`) — 安装激活、笔试/面试操作流程、快捷键、设置说明、Mac 须知

## 技术栈

- [Next.js 14](https://nextjs.org/) (App Router, 静态导出)
- [React 18](https://react.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [TypeScript 5](https://www.typescriptlang.org/)
- 部署：[Vercel](https://vercel.com/)

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建静态产物
npm run build
```

开发服务器默认运行在 `http://localhost:3000`。

## 项目结构

```
├── app/
│   ├── layout.tsx        # 根布局 & SEO 元数据
│   ├── page.tsx          # 产品首页
│   ├── globals.css       # 全局样式
│   └── docs/
│       └── page.tsx      # 使用文档页
├── public/               # 静态资源（logo、演示截图、二维码等）
├── next.config.js        # Next.js 配置（静态导出）
├── tailwind.config.js    # Tailwind 配置
├── vercel.json           # Vercel 部署配置
└── package.json
```

## 部署

项目通过 `next export` 生成纯静态文件，推送到 `main` 分支后 Vercel 自动部署。

## License

MIT
