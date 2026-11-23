import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from './LanguageContext';
import { siteMetadata } from './siteMetadata';

export const metadata: Metadata = siteMetadata.zh;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
