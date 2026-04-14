'use client';

import Link from 'next/link';
import { useLanguage } from '../LanguageContext';
import { docsTranslations } from './i18n-docs';

function SectionCard({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="feature-card rounded-3xl border border-gray-200 bg-white p-6 md:p-8 scroll-mt-24">
      <div className="mb-6">
        <p className="text-sm font-semibold text-primary mb-2">{eyebrow}</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
        {description && <p className="text-gray-500 mt-3 leading-7">{description}</p>}
      </div>
      {children}
    </section>
  );
}

function LanguageSwitch() {
  const { locale, setLocale } = useLanguage();
  return (
    <button
      onClick={() => setLocale(locale === 'zh' ? 'en' : 'zh')}
      className="px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-200 hover:border-primary hover:text-primary transition bg-white/80"
      title={locale === 'zh' ? 'Switch to English' : '切换到中文'}
    >
      {locale === 'zh' ? 'EN' : '中文'}
    </button>
  );
}

export default function DocsPage() {
  const { locale } = useLanguage();
  const t = docsTranslations[locale];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto h-16 px-4 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary transition">
            <span aria-hidden="true">←</span>
            <span>{t.back}</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="text-sm font-semibold gradient-text">{t.docsTitle}</div>
            <LanguageSwitch />
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <section className="relative overflow-hidden rounded-[32px] border border-purple-100 bg-gradient-to-br from-purple-50 via-white to-blue-50 px-6 py-10 md:px-10 md:py-14 mb-10">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.10),transparent_32%)]" />
            <div className="relative max-w-4xl">
              <div className="inline-flex items-center rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-primary border border-purple-100 shadow-sm mb-5">
                {t.badge}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                {t.heroTitle_prefix}<span className="gradient-text">Cheapest Interview</span>
              </h1>
              <p className="text-lg text-gray-600 leading-8 max-w-3xl mb-8">{t.heroDesc}</p>
              <div className="flex flex-wrap gap-3">
                <a href="#install" className="btn-primary px-6 py-3 rounded-xl font-semibold">{t.startReading}</a>
                <Link href="/" className="btn-outline px-6 py-3 rounded-xl font-semibold">{t.backHome}</Link>
              </div>
            </div>
          </section>

          {/* Quick Nav */}
          <section className="feature-card rounded-3xl border border-gray-200 bg-white p-6 md:p-8 mb-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
              <div>
                <p className="text-sm font-semibold text-primary mb-2">{t.quickNavTag}</p>
                <h2 className="text-2xl font-bold text-gray-900">{t.quickNavTitle}</h2>
              </div>
              <Link href="/" className="text-sm font-medium text-primary hover:underline">{t.quickNavBackHome}</Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
              {t.quickNavItems.map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 hover:border-purple-200 hover:text-primary hover:bg-purple-50 transition"
                >
                  {label}
                </a>
              ))}
            </div>
          </section>

          <div className="space-y-8">
            {/* 01 Install */}
            <SectionCard id="install" eyebrow={t.s01_eyebrow} title={t.s01_title} description={t.s01_desc}>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.s01_installTitle}</h3>
                  <div className="space-y-4 text-gray-600 leading-7">
                    <div>
                      <p className="font-medium text-gray-900 mb-1">{t.s01_win}</p>
                      <p dangerouslySetInnerHTML={{ __html: t.s01_winDesc }} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">{t.s01_mac}</p>
                      <p dangerouslySetInnerHTML={{ __html: t.s01_macDesc }} />
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-purple-100 bg-purple-50 p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.s01_activateTitle}</h3>
                  <div className="space-y-4">
                    {t.s01_steps.map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary text-sm font-bold border border-purple-100">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 leading-7">{step}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-2xl border border-white/80 bg-white/80 p-4 text-sm text-gray-600 leading-6">
                    {t.s01_codeExample}
                    <code className="ml-2 rounded bg-purple-50 px-2 py-1 text-primary border border-purple-100">SM-XXXX-XXXX-XXXX</code>
                  </div>
                </div>
              </div>
            </SectionCard>

            {/* 02 API */}
            <SectionCard id="api" eyebrow={t.s02_eyebrow} title={t.s02_title} description={t.s02_desc}>
              <div className="rounded-2xl border border-green-200 bg-green-50 p-5 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎉</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{t.s02_freeTitle}</h3>
                    <p className="text-gray-700 leading-7" dangerouslySetInnerHTML={{ __html: t.s02_freeDesc }} />
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-6 mb-6">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl">🟢</span>
                    <h3 className="text-lg font-semibold text-gray-900">{t.s02_qwenTitle}</h3>
                  </div>
                  <p className="text-gray-700 leading-7 mb-3" dangerouslySetInnerHTML={{ __html: t.s02_qwenDesc }} />
                  <a href="https://bailian.console.aliyun.com/?tab=model#/api-key" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline text-sm font-medium">
                    {t.s02_applyKey}
                  </a>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl">🟡</span>
                    <h3 className="text-lg font-semibold text-gray-900">{t.s02_kimiTitle}</h3>
                  </div>
                  <p className="text-gray-700 leading-7 mb-3" dangerouslySetInnerHTML={{ __html: t.s02_kimiDesc }} />
                  <a href="https://platform.moonshot.cn/console/api-keys" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline text-sm font-medium">
                    {t.s02_applyKey}
                  </a>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl">🔵</span>
                    <h3 className="text-lg font-semibold text-gray-900">{t.s02_openrouterTitle}</h3>
                  </div>
                  <p className="text-gray-700 leading-7" dangerouslySetInnerHTML={{ __html: t.s02_openrouterDesc }} />
                </div>
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl">🔵</span>
                    <h3 className="text-lg font-semibold text-gray-900">{t.s02_geminiTitle}</h3>
                  </div>
                  <p className="text-gray-700 leading-7" dangerouslySetInnerHTML={{ __html: t.s02_geminiDesc }} />
                </div>
              </div>
              <div className="rounded-2xl border border-purple-100 bg-purple-50 p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.s02_howToTitle}</h3>
                <div className="space-y-3 text-gray-700 leading-7">
                  {t.s02_howToSteps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary text-sm font-bold border border-purple-100">{i + 1}</div>
                      <span dangerouslySetInnerHTML={{ __html: step }} />
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Link href="/api-guide" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition">
                    📖 查看保姆级 API 配置图文教程 →
                  </Link>
                </div>
              </div>
            </SectionCard>

            {/* 03 Usage */}
            <SectionCard id="usage" eyebrow={t.s03_eyebrow} title={t.s03_title} description={t.s03_desc}>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-xl border border-blue-100">📝</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{t.s03_examTitle}</h3>
                      <p className="text-sm text-gray-500">{t.s03_examSubtitle}</p>
                    </div>
                  </div>
                  <ol className="space-y-4 text-gray-700">
                    {t.s03_examSteps.map(s => (
                      <li key={s.key} className="flex items-start gap-3">
                        <span className="rounded-lg bg-white px-2.5 py-1 text-xs font-bold text-blue-700 border border-blue-100">{s.key}</span>
                        <span className="leading-7">{s.desc}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="rounded-2xl border border-purple-100 bg-purple-50 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-xl border border-purple-100">🎙️</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{t.s03_interviewTitle}</h3>
                      <p className="text-sm text-gray-500">{t.s03_interviewSubtitle}</p>
                    </div>
                  </div>
                  <ol className="space-y-4 text-gray-700">
                    {t.s03_interviewSteps.map(s => (
                      <li key={s.key} className="flex items-start gap-3">
                        <span className="rounded-lg bg-white px-2.5 py-1 text-xs font-bold text-primary border border-purple-100">{s.key}</span>
                        <span className="leading-7">{s.desc}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </SectionCard>

            {/* 04 Shortcuts */}
            <SectionCard id="shortcuts" eyebrow={t.s04_eyebrow} title={t.s04_title} description={t.s04_desc}>
              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-purple-50 to-blue-50 text-gray-700">
                        <th className="px-5 py-4 text-left font-semibold border-b border-gray-200">{t.s04_thFunc}</th>
                        <th className="px-5 py-4 text-left font-semibold border-b border-gray-200">{t.s04_thWin}</th>
                        <th className="px-5 py-4 text-left font-semibold border-b border-gray-200">{t.s04_thMac}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {t.shortcutRows.map(([label, win, mac], index) => (
                        <tr key={label} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'}>
                          <td className="px-5 py-4 border-b border-gray-100 font-medium text-gray-800">{label}</td>
                          <td className="px-5 py-4 border-b border-gray-100">
                            <code className="rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-xs md:text-sm text-gray-700">{win}</code>
                          </td>
                          <td className="px-5 py-4 border-b border-gray-100">
                            <code className="rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-xs md:text-sm text-gray-700">{mac}</code>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-5 rounded-2xl border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-800 leading-7" dangerouslySetInnerHTML={{ __html: t.s04_macTip }} />
            </SectionCard>

            {/* 05 Settings */}
            <SectionCard id="settings" eyebrow={t.s05_eyebrow} title={t.s05_title} description={t.s05_desc}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {t.settingsItems.map((item) => (
                  <div key={item} className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 text-gray-700 flex items-start gap-3">
                    <span className="mt-0.5 text-primary font-bold">✓</span>
                    <span className="leading-7">{item}</span>
                  </div>
                ))}
              </div>
            </SectionCard>

            {/* 06 Mac */}
            <SectionCard id="mac" eyebrow={t.s06_eyebrow} title={t.s06_title}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.s06_shortcutTitle}</h3>
                  <p className="text-gray-700 leading-7" dangerouslySetInnerHTML={{ __html: t.s06_shortcutDesc }} />
                </div>
                <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.s06_audioTitle}</h3>
                  <p className="text-gray-700 leading-7" dangerouslySetInnerHTML={{ __html: t.s06_audioDesc }} />
                </div>
              </div>
            </SectionCard>

            {/* 07 Dual-Device / 双机位 */}
            <SectionCard id="twophone" eyebrow={t.s07_eyebrow} title={t.s07_title} description={t.s07_desc}>
              {/* 配对步骤 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.s07_howTitle}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {t.s07_steps.map((s: any) => (
                    <div key={s.step} className="rounded-2xl border border-purple-100 bg-purple-50 p-5 text-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-3">{s.step}</div>
                      <h4 className="font-bold text-gray-900 mb-1">{s.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* 快捷键 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.s07_hotkeyTitle}</h3>
                <p className="text-gray-500 text-sm mb-4">{t.s07_hotkeyDesc}</p>
                <div className="overflow-hidden rounded-2xl border border-gray-200">
                  <div className="grid gap-0">
                    {t.s07_hotkeys.map((h: any, i: number) => (
                      <div key={h.keys} className={`flex items-center gap-4 p-4 text-sm ${i < t.s07_hotkeys.length - 1 ? 'border-b border-gray-100' : ''} ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'}`}>
                        <code className="flex-shrink-0 bg-gray-900 text-green-400 px-3 py-1.5 rounded-lg text-xs font-mono font-bold min-w-[140px] text-center">{h.keys}</code>
                        <span className="font-semibold text-gray-900">{h.action}</span>
                        <span className="text-gray-400">—</span>
                        <span className="text-gray-500">{h.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* 注意事项 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.s07_tipsTitle}</h3>
                <div className="grid gap-4">
                  {t.s07_tips.map((tip: any) => (
                    <div key={tip.title} className="rounded-2xl border border-amber-200 bg-amber-50 p-5 flex gap-4">
                      <div className="text-2xl flex-shrink-0">{tip.icon}</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{tip.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{tip.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionCard>

            {/* 08 FAQ */}
            <SectionCard id="faq" eyebrow={t.s08_eyebrow} title={t.s08_title}>
              <div className="space-y-4">
                {t.faqItems.map((item) => (
                  <div key={item.q} className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.q}</h3>
                    <p className="text-gray-600 leading-7">{item.a}</p>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>

          {/* Footer */}
          <footer className="mt-10 rounded-3xl border border-gray-200 bg-white px-6 py-8 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-primary mb-1">Cheapest Interview</p>
              <p className="text-gray-500">{t.footerDesc}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/" className="btn-outline px-5 py-3 rounded-xl font-semibold">
                {t.footerBack}
              </Link>
              <a href="/#contact" className="btn-primary px-5 py-3 rounded-xl font-semibold">
                {t.footerContact}
              </a>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
