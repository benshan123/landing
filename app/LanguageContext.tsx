'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Locale, Translations, translations } from './i18n';
import { siteMetadata } from './siteMetadata';

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('zh');
  const section = usePathname().split('/')[1];
  const pageLocale = section === 'api-guide' || section === 'boss' ? 'zh' : locale;

  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale;
    if (saved === 'zh' || saved === 'en') {
      setLocale(saved);
    }
  }, []);

  useEffect(() => {
    const metadata = siteMetadata[pageLocale];
    document.documentElement.lang = pageLocale === 'zh' ? 'zh-CN' : 'en';
    document.title = metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', metadata.keywords);
  }, [pageLocale]);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
