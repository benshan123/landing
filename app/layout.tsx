import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from './LanguageContext';

export const metadata: Metadata = {
  title: '面试坤 - AI 面试助手 | 截图题目 智能解析',
  description: 'AI 驱动的面试助手，截图题目智能解析，语音面试实时生成参考回答。支持腾讯会议、飞书、Zoom 等主流平台。Windows + Mac 双平台支持。',
  keywords: 'AI面试助手,面试,AI答题,截图解析,语音识别,cheapest interview',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
