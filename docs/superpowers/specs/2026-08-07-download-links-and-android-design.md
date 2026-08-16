# 下载链接与 Android 入口更新设计

## 目标

将落地页的 Windows 和 macOS 下载版本更新至 2.3.9，并新增 Android APK 下载入口。Android 应用用于扫码后直接进入配对页面，避免再次扫码。

## 下载资源

| 平台 | GitHub | 百度网盘 | 提取码 |
| --- | --- | --- | --- |
| Windows | `https://github.com/benshan123/wdz/releases/download/v3.1/mianshikun-Setup-2.3.9.exe` | `https://pan.baidu.com/s/1QdA-DrpeSCbSL8C1jX5ShQ` | `zpk1` |
| macOS | `https://github.com/benshan123/wdz/releases/download/v3.1/mianshikun-2.3.9-universal.dmg` | `https://pan.baidu.com/s/1XUua0GcvrfX5FoSy4p7EsQ` | `tqht` |
| Android | `https://github.com/benshan123/wdz/releases/download/v3.1/app-debug.apk` | `https://pan.baidu.com/s/1u_N4NyBTjMDViaGba_mdOQ` | `84mx` |

## 页面设计

下载区保留现有卡片样式，将两列布局扩展为最多三列：Windows、macOS、Android。窄屏继续按现有响应式规则纵向排列。Android 卡片使用手机图标，并明确说明其用途是扫码后直接进入配对页面，无需再次扫码。

Windows 与 macOS 卡片更新 GitHub、百度网盘链接、提取码和版本文案。Android 卡片同时提供 GitHub 快速下载与百度网盘备用下载。所有新增文案均提供中英文版本，并复用现有按钮、提示和视觉样式。

## 范围

只修改主落地页下载区及其国际化文案，不修改 Boss 专用页面的独立安装包链接，不改动软件包或 GitHub Release。

## 验证

通过静态检查确认六个下载地址、三个提取码和 2.3.9 版本文案均正确；运行项目构建，确保 TypeScript、Next.js 渲染和响应式类名通过编译。
