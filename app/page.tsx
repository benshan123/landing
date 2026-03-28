'use client';

import Image from 'next/image';
import { useState } from 'react';

const API_BASE = 'https://activation-server-puce.vercel.app';
const BRAND = 'Cheapest Interview';
const BRAND_SHORT = 'CI';

/* ==========================================================
   Page Sections
   ========================================================== */

/* ---- 导航栏 ---- */
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt={BRAND} width={36} height={36} className="rounded-lg" />
          <span className="font-bold text-lg">{BRAND}</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="https://www.bilibili.com/video/BV1WuXPB7Esu/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">📺 效果演示</a>
          <a href="#features" className="hover:text-primary transition">功能</a>
          <a href="#stealth" className="hover:text-primary transition">隐身</a>
          <a href="#pricing" className="hover:text-primary transition">价格</a>
          <a href="#download" className="hover:text-primary transition">下载</a>
          <a href="/docs" className="hover:text-primary transition">使用文档</a>
          <a href="#faq" className="hover:text-primary transition">FAQ</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#pricing" className="btn-primary px-5 py-2 rounded-lg text-sm font-medium">立即购买</a>
        </div>
      </div>
    </nav>
  );
}

/* ---- Hero ---- */
function HeroSection() {
  return (
    <section className="pt-28 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-1.5 bg-purple-50 text-primary text-sm font-medium rounded-full">
          🔥 限时优惠 · 首月仅 ¥29.9
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
          助你轻松拿 <span className="gradient-text">Offer</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          {BRAND} 是一款 AI 驱动的笔试/面试助手，截图自动出答案，语音实时识别面试问题。
          <br />不惧任何检测方式：共享屏幕、切屏监控、眼神检测均无法发现。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#pricing" className="btn-primary px-8 py-3.5 rounded-xl text-lg font-semibold text-center">立即购买</a>
          <a href="#download" className="btn-outline px-8 py-3.5 rounded-xl text-lg font-semibold text-center">下载软件</a>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
          <span>🛡️ 完全隐身</span><span>⚡ 秒级响应</span><span>🔑 支持自配 API Key</span><span>💻 Windows + Mac</span>
        </div>
      </div>
    </section>
  );
}

/* ---- 功能展示 ---- */
function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="flex-1">
            <div className="text-sm font-semibold text-primary mb-2">AI 笔试工具</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">截图自动出答案</h2>
            <p className="text-gray-500 mb-6 leading-relaxed">快捷键一键截图，AI 秒级分析题目并给出完整答案。支持代码题、选择题、行测题等多种题型。</p>
            <div className="space-y-3">
              {['代码题（Python / Java / C++ 等）', '选择题 / 行测题 / 逻辑推理', '资料分析 / 简答题', '支持多张截图连续分析'].map(item => (
                <div key={item} className="flex items-center gap-2 text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-purple-100 text-primary text-xs flex items-center justify-center font-bold">✓</span>{item}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1"><Image src="/exam-demo.png" alt="AI 笔试工具" width={600} height={400} className="rounded-2xl shadow-xl border border-gray-200" /></div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <div className="text-sm font-semibold text-primary mb-2">AI 面试工具</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">面试问题精准识别，AI 秒出答案</h2>
            <p className="text-gray-500 mb-6 leading-relaxed">实时识别面试官的语音问题，智能生成参考回答。本地离线语音引擎，延迟极低。</p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center"><div className="text-2xl font-bold gradient-text">99%+</div><div className="text-xs text-gray-400 mt-1">语音识别准确率</div></div>
              <div className="text-center"><div className="text-2xl font-bold gradient-text">&lt;500ms</div><div className="text-xs text-gray-400 mt-1">平均回答延迟</div></div>
              <div className="text-center"><div className="text-2xl font-bold gradient-text">离线</div><div className="text-xs text-gray-400 mt-1">本地语音引擎</div></div>
            </div>
            <div className="space-y-3">
              {['技术面 / HR 面 / 行为面', '支持自定义岗位和简历', '本地离线识别，不依赖网络'].map(item => (
                <div key={item} className="flex items-center gap-2 text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-purple-100 text-primary text-xs flex items-center justify-center font-bold">✓</span>{item}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1"><Image src="/interview-demo.png" alt="AI 面试工具" width={600} height={400} className="rounded-2xl shadow-xl border border-gray-200" /></div>
        </div>
      </div>
    </section>
  );
}

/* ---- 隐身能力 ---- */
function StealthSection() {
  const defenses = [
    { icon: '🖥️', title: '屏幕共享隐身', desc: '使用 WebRTC 标准协议的不可见模式，共享整个屏幕时也完全不可见。' },
    { icon: '🔒', title: '防切屏检测', desc: '独立浮窗设计，光标焦点始终在笔试平台，不会触发切屏检测。' },
    { icon: '👁️', title: '防眼神检测', desc: '快捷键移动窗口至任意位置，视线自然注视屏幕，不被察觉。' },
    { icon: '⌨️', title: '极简交互', desc: '全程快捷键操作，无需鼠标点击，专心考试不分心。' },
  ];
  const platforms = ['腾讯会议', '飞书', 'Zoom', 'Teams', '牛客', '赛码', '浏览器网页'];
  return (
    <section id="stealth" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">隐身, 安全, 放心使用</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">不惧任何检测方式。在绝大部分平台上实现完全隐身，即使共享整个屏幕，对方也无法看见。</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {defenses.map(d => (
            <div key={d.title} className="feature-card rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">{d.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{d.title}</h3>
              <p className="text-sm text-gray-500">{d.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">支持平台</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {platforms.map(p => <span key={p} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-600">{p}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- 对比优势 ---- */
function CompareSection() {
  const rows = [
    { label: '笔试截图出答案', us: true, them: true },
    { label: '面试语音识别', us: true, them: true },
    { label: '完全隐身', us: true, them: true },
    { label: 'Windows + Mac', us: true, them: false },
    { label: '自配 API Key（不限次数）', us: true, them: false },
    { label: '离线语音识别', us: true, them: false },
    { label: '价格', usText: '月卡 ¥29.9', themText: '¥128+' },
  ];
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">为什么选择 {BRAND}？</h2>
        <p className="text-gray-500 text-center mb-12">对比同类产品，优势明显</p>
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-3 text-center p-4 bg-gray-50 border-b border-gray-200 font-semibold text-sm">
            <div className="text-left pl-4 text-gray-500">功能</div>
            <div className="gradient-text">{BRAND}</div>
            <div className="text-gray-400">其他产品</div>
          </div>
          {rows.map((r, i) => (
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
  const [email, setEmail] = useState('');
  const [step, setStep] = useState<'pay' | 'submitted'>('pay');
  const [orderId, setOrderId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setError('请填写邮箱');
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
        setError(data.error || '创建订单失败');
      }
    } catch {
      setError('网络错误');
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
              <h3 className="text-xl font-bold text-gray-900">购买 {planName}</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 mb-6 text-center">
              <div className="text-sm text-gray-500 mb-1">支付金额</div>
              <div className="text-3xl font-bold text-primary">¥{price}</div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">邮箱</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="用于接收订单联系信息"
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 bg-gray-50 text-gray-900 placeholder-gray-400"
              />
            </div>
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-3 text-center">请扫码支付</p>
              <div className="flex justify-center">
                <div className="text-center">
                  <div className="w-40 h-40 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200 overflow-hidden">
                    <Image src="/wechat-qr.png" alt="收款码" width={144} height={144} className="rounded-lg" />
                  </div>
                  <p className="text-xs text-gray-400 mt-2">微信 / 支付宝 扫码</p>
                </div>
              </div>
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button onClick={handleSubmit} disabled={loading} className="w-full btn-primary py-3 rounded-xl font-semibold disabled:opacity-50">
              {loading ? '提交中...' : '我已付款，提交订单'}
            </button>
            <p className="text-xs text-gray-400 text-center mt-3">提交后请耐心等待确认，通常 5 分钟内处理</p>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">订单已提交</h3>
            <p className="text-gray-500 mb-6">确认付款后将自动分配激活码，请使用下方订单号查询状态</p>
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <div className="text-xs text-gray-400 mb-1">订单号</div>
              <div className="text-lg font-mono font-bold text-primary select-all">{orderId}</div>
            </div>
            <p className="text-sm text-gray-500 mb-4">请保存订单号，后续可在「订单查询」中查看激活码</p>
            <button onClick={onClose} className="btn-primary px-8 py-2.5 rounded-xl font-semibold">我知道了</button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---- 价格 ---- */
function PricingSection() {
  const [modal, setModal] = useState<{ plan: string; planName: string; price: number } | null>(null);
  const plans = [
    {
      name: '月卡',
      plan: 'monthly',
      price: 29.9,
      duration: '30 天有效',
      features: ['笔试 + 面试全功能', '完全隐身模式', '离线语音识别', '基础客服支持'],
      highlight: false,
      tag: '体验首选',
    },
    {
      name: '永久卡',
      plan: 'permanent',
      price: 59.9,
      duration: '永久有效',
      features: ['笔试 + 面试全功能', '完全隐身模式', '离线语音识别', '优先客服支持', '持续版本更新', '永久免费升级'],
      highlight: true,
      tag: '🔥 最划算',
    },
  ];
  return (
    <>
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">选择适合你的方案</h2>
          <p className="text-gray-500 text-center mb-4">购买激活码后即可使用，比同类产品便宜 60%+</p>
          <p className="text-center text-sm text-gray-400 mb-12">💡 内置 Gemini 2.5 Flash Lite 免费模型（每日 1000 次），也支持自配 API Key 使用更强模型</p>
          <div className="grid md:grid-cols-2 gap-6 items-stretch max-w-3xl mx-auto">
            {plans.map(p => (
              <div key={p.name} className={`rounded-2xl p-6 flex flex-col ${p.highlight ? 'bg-white border-2 border-primary shadow-lg shadow-purple-100' : 'bg-white border border-gray-200'}`}>
                <div className={`text-xs font-semibold mb-4 ${p.highlight ? 'text-primary' : 'text-gray-400'}`}>{p.tag}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{p.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{p.duration}</p>
                <div className="flex items-end gap-2 mb-5">
                  <span className="text-sm text-gray-400">¥</span>
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
                  立即购买
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
  return (
    <section id="download" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">下载 {BRAND}</h2>
        <p className="text-gray-500 mb-10">安装后输入激活码即可使用，全程 2 分钟搞定</p>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Windows */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="text-4xl mb-3">💻</div>
            <h3 className="font-bold text-lg text-gray-900 mb-1">Windows</h3>
            <p className="text-sm text-gray-400 mb-4">Windows 10 2004+ · v1.0.0 · 236 MB</p>
            <a href="https://github.com/benshan123/wdz/releases/download/v1.1.3/StealthMate-Setup-1.0.0.exe" target="_blank" rel="noopener noreferrer"
              className="btn-primary px-6 py-3 rounded-xl font-semibold inline-block w-full text-center mb-2">
              快速下载 Windows 版
            </a>
            <p className="text-xs text-gray-400 mb-3">⚡ 快速下载需要 GitHub 账号</p>
            <a href="https://pan.baidu.com/s/1PIwALyc7VPpYWzmhv1h8yw" target="_blank" rel="noopener noreferrer"
              className="btn-outline px-6 py-2.5 rounded-xl font-semibold inline-block w-full text-center text-sm mb-3">
              百度网盘下载（提取码: jfsp）
            </a>
            <p className="text-xs text-gray-400">⚠️ 首次运行点击「更多信息」→「仍要运行」</p>
          </div>
          {/* Mac */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="text-4xl mb-3">🍎</div>
            <h3 className="font-bold text-lg text-gray-900 mb-1">macOS</h3>
            <p className="text-sm text-gray-400 mb-4">macOS 12+ · Apple Silicon & Intel</p>
            <a href="https://github.com/benshan123/wdz/releases/download/v1.1.3/StealthMate-1.0.0-arm64.dmg" target="_blank" rel="noopener noreferrer"
              className="btn-primary px-6 py-3 rounded-xl font-semibold inline-block w-full text-center mb-2">
              快速下载 Mac 版
            </a>
            <p className="text-xs text-gray-400 mb-3">⚡ 快速下载需要 GitHub 账号</p>
            <a href="https://pan.baidu.com/s/1SA6YFI8F53QQZjFUyuZuWA" target="_blank" rel="noopener noreferrer"
              className="btn-outline px-6 py-2.5 rounded-xl font-semibold inline-block w-full text-center text-sm mb-3">
              百度网盘下载（提取码: c2e5）
            </a>
            <p className="text-xs text-gray-400">⚠️ 面试模式需安装 BlackHole 音频驱动</p>
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-8">
          📖 首次使用？请查看 <a href="/docs" className="text-primary hover:underline">使用文档</a>
        </p>
      </div>
    </section>
  );
}

/* ---- 订单查询 ---- */
function OrderQuerySection() {
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
      setOrderResult({ error: '网络错误' });
    } finally {
      setOrderLoading(false);
    }
  };

  return (
    <section id="order-query" className="py-20 px-4">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">订单查询</h2>
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">订单号</label>
              <input
                type="text"
                value={orderId}
                onChange={e => setOrderId(e.target.value.toUpperCase())}
                placeholder="ORD-XXXXX-XXXX"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 bg-gray-50 text-gray-900 placeholder-gray-400"
              />
            </div>
            <button onClick={queryOrder} disabled={orderLoading} className="w-full btn-primary py-3 rounded-xl font-semibold disabled:opacity-50">
              {orderLoading ? '查询中...' : '查询订单'}
            </button>
            {orderResult && (
              <div className={`p-4 rounded-xl text-sm ${orderResult.activation_code ? 'bg-green-50 border border-green-200' : orderResult.error ? 'bg-red-50 border border-red-200 text-red-600' : 'bg-blue-50 border border-blue-200'}`}>
                {orderResult.error ? <p>{orderResult.error}</p> : (
                  <>
                    <p className="font-medium text-gray-700">
                      {orderResult.plan_name} · ¥{orderResult.price} ·
                      <span className={orderResult.status === 'completed' ? ' text-green-600' : ' text-yellow-600'}>
                        {orderResult.status === 'completed' ? ' ✅ 已完成' : ' ⏳ 待确认'}
                      </span>
                    </p>
                    {orderResult.activation_code && (
                      <div className="mt-3 p-3 bg-white rounded-lg border border-green-200">
                        <div className="text-xs text-gray-400 mb-1">你的激活码</div>
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

/* ---- FAQ ---- */
function FAQSection() {
  const faqs = [
    { q: '真的完全隐身吗？', a: '是的。我们使用 WebRTC 标准协议的不可见模式，在腾讯会议、飞书、Zoom 等平台共享整个屏幕时，对方完全看不到窗口。建议正式使用前先和朋友测试一次。' },
    { q: '什么是"自配 API Key"？', a: '软件已内置免费模型，开箱即用。如需更快速度或更强模型，可自行配置 API Key（如通义千问、Kimi、OpenRouter、Gemini），按用量付费，每次只需几分钱。' },
    { q: '如何购买？', a: '加 QQ（1245980446）或进群（1094796213）联系客服，选择套餐后付款即可获得激活码。' },
    { q: '月卡到期后怎么办？', a: '重新购买即可获得新的激活码。推荐直接购买永久卡（¥59.9），一次付费永久使用，无需续费。' },
    { q: '支持哪些系统？', a: 'Windows 10 2004+ 和 macOS 12+。' },
    { q: '安装时弹出安全警告？', a: '暂未购买代码签名证书，Windows SmartScreen 会提示"未知发布者"。点击「更多信息」→「仍要运行」即可。' },
    { q: '一个激活码能在多台电脑上用吗？', a: '不可以。每个激活码绑定一台电脑。换电脑请联系客服重新绑定。' },
    { q: '支持退款吗？', a: '如遇质量问题，购买后 3 天内全额退款。' },
  ];
  return (
    <section id="faq" className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">常见问题</h2>
        <div className="space-y-3">{faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}</div>
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
  return (
    <section id="contact" className="py-16 px-4 border-t border-gray-200">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">联系客服</h2>
        <p className="text-gray-500 mb-8">扫码添加 QQ 好友，咨询购买与使用问题</p>
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col items-center">
            <div className="flex-1 flex items-center">
              <Image src="/qq-qr.png" alt="QQ名片二维码" width={200} height={200} className="rounded-xl" />
            </div>
            <p className="text-sm text-gray-600 mt-3 font-medium">QQ：1245980446</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col items-center">
            <div className="flex-1 flex items-center">
              <Image src="/qq_group.jpg" alt="QQ交流群二维码" width={200} height={200} className="rounded-xl" />
            </div>
            <p className="text-sm text-gray-600 mt-3 font-medium">QQ 交流群：<span className="text-primary font-mono font-bold">1094796213</span></p>
            <p className="text-xs text-gray-400 mt-1">加群获取最新版本、交流使用技巧</p>
          </div>
        </div>
        <div className="text-sm text-gray-400 space-y-2 mt-8">
          <p className="text-xs text-gray-300">© 2026 {BRAND} · 本产品为 AI 学习辅助工具，请合理使用</p>
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
      <FAQSection />
      <FooterSection />
    </main>
  );
}
