import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cheapest Interview - AI 笔试面试助手 | 完全隐身 截图秒出答案',
  description: 'AI 驱动的笔试面试辅助工具，截图自动出答案，语音实时识别面试问题。屏幕共享完全隐身，支持腾讯会议、飞书、Zoom 等主流平台。Windows + Mac 双平台支持。',
  keywords: 'AI面试助手,笔试助手,隐身,面试辅助,AI答题,截图出答案,语音识别,cheapest interview',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
