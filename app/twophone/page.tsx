'use client';

import { useLanguage } from '../LanguageContext';

const BRAND = 'Cheapest Interview';

/* ---- 语言切换 ---- */
function LanguageSwitch() {
  const { locale, setLocale } = useLanguage();
  return (
    <button
      onClick={() => setLocale(locale === 'zh' ? 'en' : 'zh')}
      className="px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-200 hover:border-primary hover:text-primary transition bg-white/80"
    >
      {locale === 'zh' ? 'EN' : '中文'}
    </button>
  );
}

/* ---- 导航栏 ---- */
function Navbar() {
  const { t } = useLanguage();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <span className="font-bold text-lg">{BRAND}</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href="/" className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-primary transition">{t.twophone_back}</a>
          <LanguageSwitch />
        </div>
      </div>
    </nav>
  );
}

/* ---- Hero ---- */
function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="pt-28 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-1.5 bg-purple-50 text-primary text-sm font-medium rounded-full">
          {t.twophone_badge}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-gray-900">
          {t.twophone_title}
        </h1>
        <p className="text-xl md:text-2xl font-semibold gradient-text mb-6">{t.twophone_subtitle}</p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          {t.twophone_desc}
        </p>
      </div>
    </section>
  );
}

/* ---- 架构示意 ---- */
function ArchitectureSection() {
  const { locale } = useLanguage();
  return (
    <section className="pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-2">💻</div>
            <div className="font-bold text-gray-900">{locale === 'zh' ? '电脑' : 'PC'}</div>
            <div className="text-xs text-gray-400 mt-1">{locale === 'zh' ? '无感截屏' : 'Silent Screenshot'}</div>
          </div>
          <div className="text-2xl text-gray-300 rotate-90 md:rotate-0">→</div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl mb-2">☁️</div>
            <div className="font-bold text-gray-900">{locale === 'zh' ? '加密通道' : 'Encrypted'}</div>
            <div className="text-xs text-gray-400 mt-1">WebSocket</div>
          </div>
          <div className="text-2xl text-gray-300 rotate-90 md:rotate-0">→</div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-2">📱</div>
            <div className="font-bold text-gray-900">{locale === 'zh' ? '手机' : 'Phone'}</div>
            <div className="text-xs text-gray-400 mt-1">{locale === 'zh' ? 'AI 答案展示' : 'AI Answers'}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- 使用流程 ---- */
function StepsSection() {
  const { t } = useLanguage();
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{t.twophone_how_title}</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {t.twophone_steps.map((s: any) => (
            <div key={s.step} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                {s.step}
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- 快捷键一览 ---- */
function HotkeySection() {
  const { t } = useLanguage();
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">{t.twophone_hotkey_title}</h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">{t.twophone_hotkey_desc}</p>
        <div className="grid gap-3">
          {t.twophone_hotkeys.map((h: any) => (
            <div key={h.keys} className="flex items-center gap-4 bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:border-purple-200 transition">
              <code className="flex-shrink-0 bg-gray-900 text-green-400 px-4 py-2 rounded-lg text-sm font-mono font-bold min-w-[160px] text-center">
                {h.keys}
              </code>
              <div className="flex-1 min-w-0">
                <span className="font-semibold text-gray-900">{h.action}</span>
                <span className="text-gray-400 mx-2">—</span>
                <span className="text-sm text-gray-500">{h.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- 核心优势 ---- */
function AdvantagesSection() {
  const { t } = useLanguage();
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{t.twophone_advantage_title}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {t.twophone_advantages.map((a: any) => (
            <div key={a.title} className="feature-card rounded-2xl p-6 flex gap-4">
              <div className="text-3xl flex-shrink-0">{a.icon}</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{a.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- 对比标准版 ---- */
function CompareSection() {
  const { t } = useLanguage();
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{t.twophone_vs_title}</h2>
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-3 text-center p-4 bg-gray-50 border-b border-gray-200 font-semibold text-sm">
            <div className="text-left pl-4 text-gray-500">{t.twophone_vs_headers[0]}</div>
            <div className="text-gray-600">{t.twophone_vs_headers[1]}</div>
            <div className="gradient-text">{t.twophone_vs_headers[2]}</div>
          </div>
          {t.twophone_vs_rows.map((r: any, i: number) => (
            <div key={r.label} className={`grid grid-cols-3 text-center p-4 text-sm ${i < t.twophone_vs_rows.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <div className="text-left pl-4 text-gray-600 font-medium">{r.label}</div>
              <div className="text-gray-400">{r.standard}</div>
              <div className="text-primary font-semibold">{r.twophone}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- 下载 ---- */
function DownloadSection() {
  const { t } = useLanguage();
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.twophone_download_title}</h2>
        <p className="text-gray-500 mb-10">{t.twophone_download_desc}</p>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Windows */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="text-4xl mb-3">💻</div>
            <h3 className="font-bold text-lg text-gray-900 mb-4">Windows</h3>
            <a href="https://github.com/benshan123/wdz/releases/download/v1.1.8-twophone/StealthMate-TwoPhone-Setup-1.1.8.exe" className="btn-primary px-6 py-3 rounded-xl font-semibold inline-block w-full text-center hover:opacity-90 transition">
              {t.twophone_download_win}
            </a>
            <p className="text-xs text-gray-400 mt-3">Windows 10+ / 64-bit</p>
          </div>
          {/* Mac */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="text-4xl mb-3">🍎</div>
            <h3 className="font-bold text-lg text-gray-900 mb-4">macOS</h3>
            <a href="https://github.com/benshan123/wdz/releases/download/v1.1.8-twophone/StealthMate-TwoPhone-1.1.8-universal.dmg" className="btn-primary px-6 py-3 rounded-xl font-semibold inline-block w-full text-center hover:opacity-90 transition">
              {t.twophone_download_mac}
            </a>
            <p className="text-xs text-gray-400 mt-3">macOS 12+ / Intel & Apple Silicon</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- 页脚 ---- */
function FooterSection() {
  const { t } = useLanguage();
  return (
    <section className="py-10 px-4 border-t border-gray-200">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs text-gray-300">{t.footer_copyright.replace('{brand}', BRAND)}</p>
      </div>
    </section>
  );
}

/* ---- 主页面 ---- */
export default function TwoPhonePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ArchitectureSection />
      <StepsSection />
      <HotkeySection />
      <AdvantagesSection />
      <CompareSection />
      <DownloadSection />
      <FooterSection />
    </main>
  );
}
