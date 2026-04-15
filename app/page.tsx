'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './i18n';

const API_BASE = 'https://activation-server-puce.vercel.app';
const BRAND = 'Cheapest Interview';

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
          <Image src="/logo.png" alt={BRAND} width={36} height={36} className="rounded-lg" />
          <span className="font-bold text-lg">{BRAND}</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="https://www.bilibili.com/video/BV1WuXPB7Esu/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">{t.nav_demo}</a>
          <a href="#features" className="hover:text-primary transition">{t.nav_features}</a>
          <a href="#stealth" className="hover:text-primary transition">{t.nav_stealth}</a>
          <a href="#pricing" className="hover:text-primary transition">{t.nav_pricing}</a>
          <a href="#download" className="hover:text-primary transition">{t.nav_download}</a>
          <a href="/docs" className="hover:text-primary transition">{t.nav_docs}</a>
          <a href="/api-guide" className="hover:text-primary transition">{t.nav_api_guide}</a>
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
    <section className="pt-28 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-1.5 bg-purple-50 text-primary text-sm font-medium rounded-full">
          {t.hero_badge}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
          {t.hero_title_prefix}<span className="gradient-text">{t.hero_title_highlight}</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          {BRAND} {t.hero_desc.split('\n').map((line, i) => (
            <span key={i}>{i > 0 && <br />}{line}</span>
          ))}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#pricing" className="btn-primary px-8 py-3.5 rounded-xl text-lg font-semibold text-center">{t.hero_buy}</a>
          <a href="#download" className="btn-outline px-8 py-3.5 rounded-xl text-lg font-semibold text-center">{t.hero_download}</a>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
          <span>{t.hero_tag_stealth}</span><span>{t.hero_tag_fast}</span><span>{t.hero_tag_api}</span><span>{t.hero_tag_platform}</span>
        </div>
        <div className="mt-10 max-w-2xl mx-auto">
          <p className="text-sm text-gray-400 italic leading-relaxed border-l-2 border-purple-300 pl-4 text-left">
            {t.hero_mission}
          </p>
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
          <div className="flex-1">
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
          <div className="flex-1"><Image src="/exam-demo.png" alt={t.feat_exam_alt} width={600} height={400} className="rounded-2xl shadow-xl border border-gray-200" /></div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
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
          <div className="flex-1"><Image src="/interview-demo.png" alt={t.feat_interview_alt} width={600} height={400} className="rounded-2xl shadow-xl border border-gray-200" /></div>
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.stealth_title}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">{t.stealth_desc}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {t.stealth_cards.map(d => (
            <div key={d.title} className="feature-card rounded-2xl p-6 text-center">
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
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">{t.compare_title}{BRAND}？</h2>
        <p className="text-gray-500 text-center mb-12">{t.compare_desc}</p>
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">{t.pricing_title}</h2>
          <p className="text-gray-500 text-center mb-4">{t.pricing_desc}</p>
          <p className="text-center text-sm text-gray-400 mb-12">{t.pricing_note}</p>
          <div className="grid md:grid-cols-2 gap-6 items-stretch max-w-3xl mx-auto">
            {t.pricing_plans.map(p => (
              <div key={p.name} className={`rounded-2xl p-6 flex flex-col ${p.highlight ? 'bg-white border-2 border-primary shadow-lg shadow-purple-100' : 'bg-white border border-gray-200'}`}>
                <div className={`text-xs font-semibold mb-4 ${p.highlight ? 'text-primary' : 'text-gray-400'}`}>{p.tag}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{p.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{p.duration}</p>
                <div className="flex items-end gap-2 mb-5">
                  <span className="text-sm text-gray-400">{t.pricing_currency}</span>
                  <span className="text-4xl font-bold text-gray-900">{p.price}</span>
                </div>
                <hr className="my-5 border-gray-100" />
                <ul className="space-y-3 mb-6 flex-1">
                  {p.features.map(f => <li key={f} className="text-sm text-gray-600 flex items-center gap-2"><span className="text-primary font-bold">✓</span> {f}</li>)}
                </ul>
                <button
                  onClick={() => setModal({ plan: p.plan, planName: p.name, price: p.price })}
                  className={`block w-full text-center py-3 rounded-xl font-semibold transition mt-auto ${p.highlight ? 'btn-primary' : 'btn-outline'}`}
                >
                  {t.pricing_buy}
                </button>
              </div>
            ))}
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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.download_title}{BRAND}</h2>
        <p className="text-gray-500 mb-10">{t.download_desc}</p>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Windows */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="text-4xl mb-3">💻</div>
            <h3 className="font-bold text-lg text-gray-900 mb-1">{t.download_win_title}</h3>
            <p className="text-sm text-gray-400 mb-4">{t.download_win_spec}</p>
            <a href="https://github.com/benshan123/wdz/releases/download/v1.20.1/StealthMate-ProMax-Setup-1.20.1.exe" target="_blank" rel="noopener noreferrer"
              className="btn-primary px-6 py-3 rounded-xl font-semibold inline-block w-full text-center mb-2">
              {t.download_win_btn}
            </a>
            <p className="text-xs text-gray-400 mb-3">{t.download_win_note}</p>
            <a href="https://pan.baidu.com/s/1WO71D3osyvGHxvKfgMJ3xw" target="_blank" rel="noopener noreferrer"
              className="btn-outline px-6 py-2.5 rounded-xl font-semibold inline-block w-full text-center text-sm mb-3">
              {t.download_win_baidu}
            </a>
            <p className="text-xs text-gray-400">{t.download_win_warn}</p>
          </div>
          {/* Mac */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="text-4xl mb-3">🍎</div>
            <h3 className="font-bold text-lg text-gray-900 mb-1">{t.download_mac_title}</h3>
            <p className="text-sm text-gray-400 mb-4">{t.download_mac_spec}</p>
            <a href="https://github.com/benshan123/wdz/releases/download/v1.20.1/StealthMate-ProMax-1.20.1-arm64.dmg" target="_blank" rel="noopener noreferrer"
              className="btn-primary px-6 py-3 rounded-xl font-semibold inline-block w-full text-center mb-2">
              {t.download_mac_btn}
            </a>
            <p className="text-xs text-gray-400 mb-3">{t.download_mac_note}</p>
            <a href="https://pan.baidu.com/s/1VEGdF0wWfEQgndbORsc9Rw" target="_blank" rel="noopener noreferrer"
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
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{t.faq_title}</h2>
        <div className="space-y-3">{t.faq_items.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}</div>
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
