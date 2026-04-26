'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './i18n';
import { useRevealAll } from './useReveal';

const API_BASE = 'https://activation-server-puce.vercel.app';
const BRAND = '面试坤';

/* ==========================================================
   Page Sections
   ========================================================== */

/* ---- 语言切换按钮 ---- */
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

/* ---- 导航栏 ---- */
function Navbar() {
  const { t } = useLanguage();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/kunkun.png" alt={BRAND} width={36} height={36} className="rounded-lg" />
          <span className="font-bold text-lg">{BRAND}</span>
        </div>
        <div className="hidden md:flex items-center gap-5 text-sm text-gray-600">
          <a href="https://www.bilibili.com/video/BV1WuXPB7Esu/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">{t.nav_demo}</a>
          <a href="/docs" className="px-3 py-1.5 rounded-lg bg-amber-50 text-amber-700 font-semibold hover:bg-amber-100 transition">{t.nav_docs}</a>
          <a href="/api-guide" className="px-3 py-1.5 rounded-lg bg-purple-50 text-primary font-semibold hover:bg-purple-100 transition">{t.nav_api_guide}</a>
          <a href="#features" className="hover:text-primary transition">{t.nav_features}</a>
          <a href="#stealth" className="hover:text-primary transition">{t.nav_stealth}</a>
          <a href="#download" className="hover:text-primary transition">{t.nav_download}</a>
          <a href="#faq" className="hover:text-primary transition">{t.nav_faq}</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="/docs#twophone" className="px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition">{t.nav_twophone}</a>
          <LanguageSwitch />
          <a href="#pricing" className="btn-primary px-5 py-2 rounded-lg text-sm font-medium">{t.nav_buy}</a>
        </div>
      </div>
    </nav>
  );
}

/* ---- Hero ---- */
function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="relative pt-28 pb-20 px-4 overflow-hidden">
      {/* 背景装饰：blob + 网格 */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 grid-dots opacity-60" />
        <div className="blob blob-purple w-[420px] h-[420px] -top-20 -left-20" />
        <div className="blob blob-blue w-[360px] h-[360px] top-40 right-[-80px]" style={{ animationDelay: '-6s' }} />
        <div className="blob blob-pink w-[300px] h-[300px] bottom-[-60px] left-1/3" style={{ animationDelay: '-12s' }} />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* 左：文字 */}
        <div className="text-center md:text-left">
          <div className="reveal mb-4 inline-flex max-w-2xl items-center justify-center rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 via-white to-orange-50 px-4 py-3 text-sm font-semibold leading-relaxed text-amber-900 shadow-sm shadow-amber-100 md:justify-start md:text-base">
            {t.hero_highlight_pitch}
          </div>
          <div className="reveal inline-block mb-4 px-4 py-1.5 bg-purple-50 text-primary text-sm font-medium rounded-full">
            {t.hero_badge}
          </div>
          <h1 className="reveal reveal-delay-1 text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
            {t.hero_title_prefix}<span className="gradient-text">{t.hero_title_highlight}</span>
          </h1>
          <p className="reveal reveal-delay-2 text-lg md:text-xl text-gray-500 mb-10 leading-relaxed">
            {BRAND} {t.hero_desc.split('\n').map((line, i) => (
              <span key={i}>{i > 0 && <br />}{line}</span>
            ))}
          </p>
          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#pricing" className="btn-primary px-8 py-3.5 rounded-xl text-lg font-semibold text-center">{t.hero_buy}</a>
            <a href="#download" className="btn-outline px-8 py-3.5 rounded-xl text-lg font-semibold text-center">{t.hero_download}</a>
          </div>
          {/* 移动端标签行（桌面端由浮动 chip 替代） */}
          <div className="reveal reveal-delay-4 mt-10 flex flex-wrap justify-center md:hidden gap-x-6 gap-y-3 text-sm text-gray-400">
            <span>{t.hero_tag_stealth}</span><span>{t.hero_tag_fast}</span><span>{t.hero_tag_api}</span><span>{t.hero_tag_platform}</span>
          </div>
          <div className="reveal reveal-delay-4 mt-10 max-w-2xl">
            <p className="text-sm text-gray-400 italic leading-relaxed border-l-2 border-purple-300 pl-4 text-left">
              {t.hero_mission}
            </p>
          </div>
        </div>

        {/* 右：产品 mockup + 浮动 chip */}
        <div className="reveal reveal-delay-2 relative mx-auto md:mx-0 w-full max-w-xl md:max-w-none">
          <div className="mockup-tilt relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-200/50 border border-gray-200 bg-white">
            <Image
              src="/interview-demo.png"
              alt={t.feat_interview_alt}
              width={900}
              height={600}
              priority
              className="w-full h-auto block"
            />
          </div>

          {/* 浮动 chip（仅桌面端） */}
          <div className="hidden md:block absolute -top-4 -left-6 chip-float">
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur border border-purple-100 shadow-lg shadow-purple-100/60 rounded-full px-4 py-2 text-sm font-semibold text-gray-700">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {t.hero_tag_stealth}
            </div>
          </div>
          <div className="hidden md:block absolute -top-2 -right-4 chip-float chip-float-delay-1">
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur border border-purple-100 shadow-lg shadow-purple-100/60 rounded-full px-4 py-2 text-sm font-semibold text-gray-700">
              {t.hero_tag_fast}
            </div>
          </div>
          <div className="hidden md:block absolute -bottom-4 -right-2 chip-float chip-float-delay-2">
            <div className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-300/50 rounded-full px-4 py-2 text-sm font-semibold">
              {t.hero_tag_api}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- 功能展示 ---- */
function FeaturesSection() {
  const { t } = useLanguage();
  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="flex-1 reveal">
            <div className="text-sm font-semibold text-primary mb-2">{t.feat_exam_tag}</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.feat_exam_title}</h2>
            <p className="text-gray-500 mb-6 leading-relaxed">{t.feat_exam_desc}</p>
            <div className="space-y-3">
              {t.feat_exam_items.map(item => (
                <div key={item} className="flex items-center gap-2 text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-purple-100 text-primary text-xs flex items-center justify-center font-bold">✓</span>{item}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 reveal reveal-delay-2"><Image src="/exam-demo.png" alt={t.feat_exam_alt} width={600} height={400} className="rounded-2xl shadow-xl border border-gray-200 transition-transform duration-500 hover:scale-[1.02]" /></div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1 reveal">
            <div className="text-sm font-semibold text-primary mb-2">{t.feat_interview_tag}</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.feat_interview_title}</h2>
            <p className="text-gray-500 mb-6 leading-relaxed">{t.feat_interview_desc}</p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center"><div className="text-2xl font-bold gradient-text">{t.feat_interview_stat1}</div><div className="text-xs text-gray-400 mt-1">{t.feat_interview_stat1_label}</div></div>
              <div className="text-center"><div className="text-2xl font-bold gradient-text">{t.feat_interview_stat2}</div><div className="text-xs text-gray-400 mt-1">{t.feat_interview_stat2_label}</div></div>
              <div className="text-center"><div className="text-2xl font-bold gradient-text">{t.feat_interview_stat3}</div><div className="text-xs text-gray-400 mt-1">{t.feat_interview_stat3_label}</div></div>
            </div>
            <div className="space-y-3">
              {t.feat_interview_items.map(item => (
                <div key={item} className="flex items-center gap-2 text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-purple-100 text-primary text-xs flex items-center justify-center font-bold">✓</span>{item}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 reveal reveal-delay-2"><Image src="/interview-demo.png" alt={t.feat_interview_alt} width={600} height={400} className="rounded-2xl shadow-xl border border-gray-200 transition-transform duration-500 hover:scale-[1.02]" /></div>
        </div>
      </div>
    </section>
  );
}

/* ---- 隐身能力 ---- */
function StealthSection() {
  const { t } = useLanguage();
  return (
    <section id="stealth" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.stealth_title}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">{t.stealth_desc}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {t.stealth_cards.map((d, i) => (
            <div key={d.title} className={`feature-card reveal reveal-delay-${(i % 4) + 1} rounded-2xl p-6 text-center`}>
              <div className="text-3xl mb-3">{d.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{d.title}</h3>
              <p className="text-sm text-gray-500">{d.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">{t.stealth_platforms_title}</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {t.stealth_platforms.map(p => <span key={p} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-600">{p}</span>)}
          </div>
        </div>
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl px-6 py-4 text-sm text-amber-800 leading-relaxed">
          {t.stealth_lockscreen_warn}
        </div>
      </div>
    </section>
  );
}

/* ---- 对比优势 ---- */
function CompareSection() {
  const { t } = useLanguage();
  const rows = [
    ...t.compare_rows,
    { label: t.compare_price_label, us: false, them: false, usText: t.compare_price_us, themText: t.compare_price_them },
  ];
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="reveal text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">{t.compare_title}{BRAND}？</h2>
        <p className="reveal reveal-delay-1 text-gray-500 text-center mb-12">{t.compare_desc}</p>
        <div className="reveal reveal-delay-2 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-3 text-center p-4 bg-gray-50 border-b border-gray-200 font-semibold text-sm">
            <div className="text-left pl-4 text-gray-500">{t.compare_header_feature}</div>
            <div className="gradient-text">{BRAND}</div>
            <div className="text-gray-400">{t.compare_header_them}</div>
          </div>
          {rows.map((r: any, i) => (
            <div key={r.label} className={`grid grid-cols-3 text-center p-4 text-sm ${i < rows.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <div className="text-left pl-4 text-gray-600">{r.label}</div>
              <div>{r.usText ? <span className="font-bold text-primary">{r.usText}</span> : r.us ? <span className="text-green-500 font-bold">✓</span> : <span className="text-red-400">✗</span>}</div>
              <div>{r.themText ? <span className="text-gray-400">{r.themText}</span> : r.them ? <span className="text-green-500">✓</span> : <span className="text-red-400">✗</span>}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- 购买弹窗 ---- */
function PurchaseModal({ plan, planName, price, onClose }: {
  plan: string; planName: string; price: number; onClose: () => void;
}) {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [step, setStep] = useState<'pay' | 'submitted'>('pay');
  const [orderId, setOrderId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setError(t.modal_email_required);
      return;
    }

    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_BASE}/api/order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'create', plan, contact: trimmedEmail }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setOrderId(data.order_id);
        setStep('submitted');
      } else {
        setError(data.error || t.modal_create_failed);
      }
    } catch {
      setError(t.modal_network_error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl" onClick={e => e.stopPropagation()}>
        {step === 'pay' ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">{t.modal_buy_prefix}{planName}</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 mb-6 text-center">
              <div className="text-sm text-gray-500 mb-1">{t.modal_pay_amount}</div>
              <div className="text-3xl font-bold text-primary">¥{price}</div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.modal_email_label}</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={t.modal_email_placeholder}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 bg-gray-50 text-gray-900 placeholder-gray-400"
              />
            </div>
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-3 text-center">{t.modal_scan_prompt}</p>
              <div className="flex justify-center">
                <div className="text-center">
                  <div className="w-40 h-40 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200 overflow-hidden">
                    <Image src="/wechat-pay.png" alt="QR" width={144} height={144} className="rounded-lg" />
                  </div>
                  <p className="text-xs text-gray-400 mt-2">{t.modal_scan_note}</p>
                </div>
              </div>
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button onClick={handleSubmit} disabled={loading} className="w-full btn-primary py-3 rounded-xl font-semibold disabled:opacity-50">
              {loading ? t.modal_submitting : t.modal_submit}
            </button>
            <p className="text-xs text-gray-400 text-center mt-3">{t.modal_submit_note}</p>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t.modal_success_title}</h3>
            <p className="text-gray-500 mb-6">{t.modal_success_desc}</p>
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <div className="text-xs text-gray-400 mb-1">{t.modal_order_id}</div>
              <div className="text-lg font-mono font-bold text-primary select-all">{orderId}</div>
            </div>
            <p className="text-sm text-gray-500 mb-4">{t.modal_save_note}</p>
            <button onClick={onClose} className="btn-primary px-8 py-2.5 rounded-xl font-semibold">{t.modal_ok}</button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---- 价格 ---- */
function PricingSection() {
  const { t } = useLanguage();
  const [modal, setModal] = useState<{ plan: string; planName: string; price: number } | null>(null);
  return (
    <>
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="reveal text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">{t.pricing_title}</h2>
          <p className="reveal reveal-delay-1 text-gray-500 text-center mb-4">{t.pricing_desc}</p>
          <p className="reveal reveal-delay-1 text-center text-sm text-gray-400 mb-12">{t.pricing_note}</p>
          <div className="grid md:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
            {t.pricing_plans.map((p, i) => {
              const plan = p as typeof p & { priceText?: string; contactOnly?: boolean };
              return (
              <div key={plan.name} className={`reveal reveal-delay-${(i % 3) + 1} rounded-2xl p-6 flex flex-col transition-transform duration-300 hover:-translate-y-1 ${plan.highlight ? 'bg-white border-2 border-primary shadow-lg shadow-purple-100 hover:shadow-xl hover:shadow-purple-200' : 'bg-white border border-gray-200 hover:shadow-lg'}`}>
                <div className={`text-xs font-semibold mb-4 ${plan.highlight ? 'text-primary' : 'text-gray-400'}`}>{plan.tag}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{plan.duration}</p>
                {plan.contactOnly ? (
                  <div className="flex items-end gap-2 mb-5 min-h-[3rem]">
                    <span className="text-2xl font-bold gradient-text">{plan.priceText}</span>
                  </div>
                ) : (
                  <div className="flex items-end gap-2 mb-5 min-h-[3rem]">
                    <span className="text-sm text-gray-400">{t.pricing_currency}</span>
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  </div>
                )}
                <hr className="my-5 border-gray-100" />
                <ul className="space-y-3 mb-6 flex-1">
                  {plan.features.map(f => <li key={f} className="text-sm text-gray-600 flex items-center gap-2"><span className="text-primary font-bold">✓</span> {f}</li>)}
                </ul>
                {plan.contactOnly ? (
                  <a
                    href="#contact"
                    className={`block w-full text-center py-3 rounded-xl font-semibold transition mt-auto btn-outline`}
                  >
                    {t.pricing_buy_contact}
                  </a>
                ) : (
                  <button
                    onClick={() => setModal({ plan: plan.plan, planName: plan.name, price: plan.price })}
                    className={`block w-full text-center py-3 rounded-xl font-semibold transition mt-auto ${plan.highlight ? 'btn-primary' : 'btn-outline'}`}
                  >
                    {t.pricing_buy}
                  </button>
                )}
              </div>
              );
            })}
          </div>
        </div>
      </section>
      {modal && <PurchaseModal {...modal} onClose={() => setModal(null)} />}
    </>
  );
}

/* ---- 下载 ---- */
function DownloadSection() {
  const { t } = useLanguage();
  return (
    <section id="download" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="reveal text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.download_title}{BRAND}</h2>
        <p className="reveal reveal-delay-1 text-gray-500 mb-10">{t.download_desc}</p>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Windows */}
          <div className="reveal reveal-delay-1 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="text-4xl mb-3">💻</div>
            <h3 className="font-bold text-lg text-gray-900 mb-1">{t.download_win_title}</h3>
            <p className="text-sm text-gray-400 mb-4">{t.download_win_spec}</p>
            <a href="https://github.com/benshan123/wdz/releases/download/v1.20.1/StealthMate-Setup-2.0.0.exe" target="_blank" rel="noopener noreferrer"
              className="btn-primary px-6 py-3 rounded-xl font-semibold inline-block w-full text-center mb-2">
              {t.download_win_btn}
            </a>
            <p className="text-xs text-gray-400 mb-3">{t.download_win_note}</p>
            <a href="https://pan.baidu.com/s/1uQXtsVO0eYnllLgdNhwlwg" target="_blank" rel="noopener noreferrer"
              className="btn-outline px-6 py-2.5 rounded-xl font-semibold inline-block w-full text-center text-sm mb-3">
              {t.download_win_baidu}
            </a>
            <p className="text-xs text-gray-400">{t.download_win_warn}</p>
          </div>
          {/* Mac */}
          <div className="reveal reveal-delay-2 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="text-4xl mb-3">🍎</div>
            <h3 className="font-bold text-lg text-gray-900 mb-1">{t.download_mac_title}</h3>
            <p className="text-sm text-gray-400 mb-4">{t.download_mac_spec}</p>
            <a href="https://github.com/benshan123/wdz/releases/download/v1.20.1/StealthMate-2.0.0-universal.dmg" target="_blank" rel="noopener noreferrer"
              className="btn-primary px-6 py-3 rounded-xl font-semibold inline-block w-full text-center mb-2">
              {t.download_mac_btn}
            </a>
            <p className="text-xs text-gray-400 mb-3">{t.download_mac_note}</p>
            <a href="https://pan.baidu.com/s/1rCBhEjZYARgcIiKoFNbpjQ" target="_blank" rel="noopener noreferrer"
              className="btn-outline px-6 py-2.5 rounded-xl font-semibold inline-block w-full text-center text-sm mb-3">
              {t.download_mac_baidu}
            </a>
            <p className="text-xs text-gray-400">{t.download_mac_warn}</p>
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-6">
          {t.download_docs_prefix}<a href="/docs" className="text-primary hover:underline">{t.download_docs_link}</a>
        </p>
      </div>
    </section>
  );
}

function OrderQuerySection() {
  const { t } = useLanguage();
  const [orderId, setOrderId] = useState('');
  const [orderResult, setOrderResult] = useState<any>(null);
  const [orderLoading, setOrderLoading] = useState(false);

  const queryOrder = async () => {
    if (!orderId.trim()) return;
    setOrderLoading(true);
    setOrderResult(null);
    try {
      const res = await fetch(`${API_BASE}/api/order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'query', order_id: orderId.trim() }),
      });
      setOrderResult(await res.json());
    } catch {
      setOrderResult({ error: t.order_network_error });
    } finally {
      setOrderLoading(false);
    }
  };

  return (
    <section id="order-query" className="py-20 px-4">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">{t.order_title}</h2>
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.order_label}</label>
              <input
                type="text"
                value={orderId}
                onChange={e => setOrderId(e.target.value.toUpperCase())}
                placeholder={t.order_placeholder}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 bg-gray-50 text-gray-900 placeholder-gray-400"
              />
            </div>
            <button onClick={queryOrder} disabled={orderLoading} className="w-full btn-primary py-3 rounded-xl font-semibold disabled:opacity-50">
              {orderLoading ? t.order_loading : t.order_btn}
            </button>
            {orderResult && (
              <div className={`p-4 rounded-xl text-sm ${orderResult.activation_code ? 'bg-green-50 border border-green-200' : orderResult.error ? 'bg-red-50 border border-red-200 text-red-600' : 'bg-blue-50 border border-blue-200'}`}>
                {orderResult.error ? <p>{orderResult.error}</p> : (
                  <>
                    <p className="font-medium text-gray-700">
                      {orderResult.plan_name} · ¥{orderResult.price} ·
                      <span className={orderResult.status === 'completed' ? ' text-green-600' : ' text-yellow-600'}>
                        {orderResult.status === 'completed' ? t.order_completed : t.order_pending}
                      </span>
                    </p>
                    {orderResult.activation_code && (
                      <div className="mt-3 p-3 bg-white rounded-lg border border-green-200">
                        <div className="text-xs text-gray-400 mb-1">{t.order_code_label}</div>
                        <div className="text-lg font-mono font-bold text-primary select-all">{orderResult.activation_code}</div>
                      </div>
                    )}
                    {orderResult.message && <p className="mt-2 text-gray-500">{orderResult.message}</p>}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- 注意事项 ---- */
function TipsSection() {
  const { locale } = useLanguage();
  if (locale !== 'zh') return null;
  const tips = (translations as any).zh;
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">⚠️ {tips.tips_title}</h2>
          <p className="text-gray-500">{tips.tips_desc}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {tips.tips_items.map((item: any) => (
            <div key={item.title} className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- FAQ ---- */
function FAQSection() {
  const { t } = useLanguage();
  return (
    <section id="faq" className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="reveal text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{t.faq_title}</h2>
        <div className="reveal reveal-delay-1 space-y-3">{t.faq_items.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}</div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 transition">
        <span className="font-semibold text-gray-900 pr-4">{q}</span>
        <span className={`text-gray-400 transition-transform flex-shrink-0 ${open ? 'rotate-180' : ''}`}>▾</span>
      </button>
      {open && <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">{a}</div>}
    </div>
  );
}

/* ---- 页脚 ---- */
function FooterSection() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-16 px-4 border-t border-gray-200">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.footer_title}</h2>
        <p className="text-gray-500 mb-8">{t.footer_desc}</p>
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col items-center">
            <div className="flex-1 flex items-center">
              <Image src="/qq-qr.png" alt="QQ" width={200} height={200} className="rounded-xl" />
            </div>
            <p className="text-sm text-gray-600 mt-3 font-medium">{t.footer_qq}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col items-center">
            <div className="flex-1 flex items-center">
              <Image src="/qq_group.jpg" alt="QQ Group" width={200} height={200} className="rounded-xl" />
            </div>
            <p className="text-sm text-gray-600 mt-3 font-medium">{t.footer_group_label}<span className="text-primary font-mono font-bold">1094796213</span></p>
            <p className="text-xs text-gray-400 mt-1">{t.footer_group_note}</p>
          </div>
        </div>
        <div className="text-sm text-gray-400 space-y-2 mt-8">
          <p className="text-xs text-gray-300">{t.footer_copyright.replace('{brand}', BRAND)}</p>
        </div>
      </div>
    </section>
  );
}

/* ---- 主页面 ---- */
export default function Home() {
  useRevealAll();
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <StealthSection />
      <CompareSection />
      <PricingSection />
      <DownloadSection />
      <OrderQuerySection />
      <TipsSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
