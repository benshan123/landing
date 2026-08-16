'use client';

import Link from 'next/link';

const WIN_DOWNLOAD = 'https://github.com/benshan123/wdz/releases/download/2.3.2/geekgeekrun-ui_0.17.4_x64_setup.exe';
const WIN_BAIDU = 'https://pan.baidu.com/s/1QdA-DrpeSCbSL8C1jX5ShQ';
const WIN_BAIDU_CODE = 'zpk1';
const BRAND = 'AI辅助投递';

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

function Figure({ src, caption }: { src: string; caption: string }) {
  return (
    <figure className="mt-5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={caption}
        loading="lazy"
        className="w-full rounded-2xl border border-gray-200 shadow-sm"
      />
      <figcaption className="mt-2 text-center text-xs text-gray-400">{caption}</figcaption>
    </figure>
  );
}

const quickNav: [string, string][] = [
  ['#features', '核心功能'],
  ['#tools', '辅助功能'],
  ['#requirements', '系统要求'],
  ['#download', '下载安装'],
  ['#how', '工作原理'],
  ['#notice', '使用须知'],
];

const tools = [
  { icon: '🔑', title: 'BOSS 登录助手', desc: '用极简单的方式登录 BOSS 直聘，无需手动处理 Cookie、登录凭证、JSON 等技术细节。', img: '/boss/login-helper.png' },
  { icon: '🧠', title: '大语言模型设置', desc: '配置运行过程中使用的大模型；支持配置多个备用模型，让生成内容更随机，并在某个模型不可用时自动切换。', img: '/boss/llm-settings.png' },
  { icon: '✏️', title: '提示词模板编辑', desc: '对自动复聊生成的提醒消息不满意？可自行编辑提示词，获得你期望的效果。', img: '/boss/prompt-template.png' },
  { icon: '🧪', title: '复聊过程模拟', desc: '测试所配置的模型是否可用，并预览当前配置生成内容的实际效果。', img: '/boss/reply-simulation.png' },
  { icon: '📦', title: '配置模板', desc: '为期望公司、职位筛选、大模型等关键配置提供开箱即用的模板，新手也能快速完成配置。', img: '/boss/config-template-1.png' },
];

const requirements = [
  { icon: '💻', title: 'Windows（x86_64）', desc: '最低 Windows 10 1507（2016 年后出厂、默认安装 Windows 10 的电脑一般可用）。' },
  { icon: '🐧', title: 'Linux（x86_64）', desc: '支持含默认桌面环境的 Ubuntu 20.04；其它发行版与桌面环境暂未测试。' },
  { icon: '🍎', title: 'macOS（Apple Silicon / x86_64）', desc: '支持 Sonoma 14.0 及以上；更早的系统暂未测试。' },
];

const noticeItems = [
  {
    title: '辅助工具风险',
    desc: '本程序属于辅助工具，可能与《BOSS 直聘用户协议》相关条款相违背；若非正常用户行为被风控监测到，可能导致账号被强制退出登录、被限制使用、被封禁等。使用本程序即表示你愿意接受以上风险，并自行承担相关后果。',
  },
  {
    title: 'Cookie 与隐私',
    desc: '程序需要存储你的登录凭据（Cookie）以模拟开聊行为，仅会把 Cookie 存储在本地，并在访问 BOSS 直聘时传输，不会泄露给第三方；请勿向他人泄露你的 Cookie。',
  },
  {
    title: '注意节制',
    desc: '程序会尽量模仿真人行为以规避风控，但不能保证完全规避。建议注意节制使用，当天开聊次数用尽后隔几天再用，并建议注册一个专用的 BOSS 直聘账号进行求职。',
  },
  {
    title: '网站改版可能失效',
    desc: '程序原理是模拟用户在网页上查找关键元素并点击；BOSS 直聘经常改版且可能包含 A/B 实验，可能导致脚本失效（典型表现为运行到某一步后浏览器反复「闪退、重启」）。',
  },
  {
    title: '公司网络监控',
    desc: '你所在公司可能部署上网行为监控工具或网关，从而审计、跟踪你的行为。如不希望上级 / IT / HR 了解你正在求职，建议不要在公司提供的设备或网络上使用本程序。',
  },
  {
    title: '隐私承诺',
    desc: '本程序尊重你的隐私：不参与任何钓鱼活动、不上报能识别你身份的信息、不向你所在公司及上级 / IT / HR 报告你的求职行为、不向任何猎头公司泄露你的个人信息。',
  },
  {
    title: '不对求职结果负责',
    desc: '本程序不对你的求职过程与结果负责；为你开聊的职位均在 BOSS 直聘上发布，信息真实性由 BOSS 直聘负责，请自行甄别公司、认真决定是否参加面试、慎重选择 Offer。',
  },
  {
    title: '自行屏蔽公司',
    desc: '请在 BOSS 直聘上自行屏蔽不期望投递的公司；如不希望当前公司有招聘账号的同事看到你的活跃，请屏蔽当前公司及与之关联的公司。',
  },
  {
    title: '稳定性说明',
    desc: '程序经过多次测试，大部分情况下可正常运行，但可能存在测试覆盖不到的情况。如有顾虑，建议通过 VMware、VirtualBox、Hyper-V 等虚拟化技术运行本程序。',
  },
];

export default function BossPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto h-16 px-4 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary transition">
            <span aria-hidden="true">←</span>
            <span>返回首页</span>
          </Link>
          <div className="text-sm font-semibold gradient-text">{BRAND}</div>
        </div>
      </nav>

      <div className="pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* 面试坤广告条 */}
          <p className="mb-2 text-xs text-gray-400">诚实地说，下面打个广告 👇</p>
          <a
            href="/"
            className="group mb-6 flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-3.5 text-white shadow-sm transition hover:opacity-95"
          >
            <div className="flex items-center gap-3 min-w-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/kunkun.png" alt="面试坤" className="h-9 w-9 flex-shrink-0 rounded-lg bg-white/20" />
              <div className="leading-tight min-w-0">
                <div className="text-sm font-bold">面试坤 · AI 模拟面试助手</div>
                <div className="truncate text-xs text-white/85">截图练习智能解析 · 语音模拟面试实时生成参考回答，助你轻松拿 Offer</div>
              </div>
            </div>
            <span className="flex-shrink-0 whitespace-nowrap text-sm font-semibold">
              立即了解 <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </span>
          </a>
          {/* Hero */}
          <section className="relative overflow-hidden rounded-[32px] border border-purple-100 bg-gradient-to-br from-purple-50 via-white to-blue-50 px-6 py-10 md:px-10 md:py-14 mb-10">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.10),transparent_32%)]" />
            <div className="relative max-w-4xl">
              <div className="inline-flex items-center rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-primary border border-purple-100 shadow-sm mb-5">
                BOSS 直聘自动投递助手
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                AI辅助投递，<span className="gradient-text">自动批量开聊 BOSS</span>
              </h1>
              <p className="text-lg text-gray-600 leading-8 max-w-3xl mb-4">
                按你的求职偏好，自动开聊推荐列表中匹配的职位；已读不回自动复聊，让沟通双向奔赴。无论小白还是大佬，几步简单配置即可快速开始求职。
              </p>
              <p className="text-sm text-gray-400 italic border-l-2 border-purple-300 pl-4 mb-8">
                用科技让复杂的求职过程变简单 —— 与每一位牛人站在一起。
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#download" className="btn-primary px-6 py-3 rounded-xl font-semibold">立即下载</a>
                <a href="#features" className="btn-outline px-6 py-3 rounded-xl font-semibold">查看功能</a>
              </div>
            </div>
          </section>

          {/* Quick Nav */}
          <section className="feature-card rounded-3xl border border-gray-200 bg-white p-6 md:p-8 mb-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
              <div>
                <p className="text-sm font-semibold text-primary mb-2">快速导航</p>
                <h2 className="text-2xl font-bold text-gray-900">想了解哪一部分？</h2>
              </div>
              <Link href="/" className="text-sm font-medium text-primary hover:underline">返回首页</Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
              {quickNav.map(([href, label]) => (
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
            {/* 核心功能 */}
            <SectionCard id="features" eyebrow="核心功能" title="两大自动化能力">
              <div className="mb-6 rounded-2xl border border-gray-100 bg-gray-50 px-5 py-3 text-sm text-gray-500 leading-7">
                💡 以下为程序实际界面截图；BOSS 直聘网页会不定期改版，部分截图可能与最新界面略有差异，仅供参考。
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                {/* 自动开聊 */}
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-xl border border-blue-100">💬</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">自动开聊</h3>
                      <p className="text-sm text-gray-500">扩列神器</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-7 mb-4">
                    按照你设置的求职偏好，自动开聊推荐职位列表中匹配的 BOSS。可开聊推荐列表中的职位、按求职期望推荐的职位、以及按关键词搜索找到的职位；可通过拖拽自定义搜索顺序。
                  </p>
                  <h4 className="font-semibold text-gray-900 mb-2">匹配步骤</h4>
                  <ol className="space-y-3 text-gray-700 mb-4">
                    {[
                      '选择职位来源与职位筛选条件。',
                      '按公司名称在列表中查找职位，找到目标职位后自动点击，右侧展示职位详情。',
                      '对工作地、薪资、工作经验、职位名称、职位类型、职位描述、BOSS 活跃度逐项匹配：匹配则自动点击「开聊」；不匹配则按你设置的策略标记为不合适。',
                    ].map((s, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="rounded-lg bg-white px-2.5 py-1 text-xs font-bold text-blue-700 border border-blue-100">{i + 1}</span>
                        <span className="leading-7">{s}</span>
                      </li>
                    ))}
                  </ol>
                  <h4 className="font-semibold text-gray-900 mb-2">标记不合适的三种策略</h4>
                  <ul className="space-y-2 text-sm text-gray-700 mb-4">
                    <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> 在 BOSS 直聘上标记不合适：一段时间内不再看到该职位，并自动置换新职位。</li>
                    <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> 在本地数据库标记不合适：7 天内再遇到该职位时直接跳过。</li>
                    <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> 仅本次运行内记录：本次运行跳过该职位，下次运行可能会再次查看。</li>
                  </ul>
                  <h4 className="font-semibold text-gray-900 mb-2">异常情况处理</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> 当前筛选无更多职位时，自动切换筛选条件 → 切换职位来源 → 全部用尽后等待一段时间，再从头开始查找。</li>
                    <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> 当天开聊次数用尽时，暂停运行 60 分钟后重试；若重试时已到第二天，则继续开聊。</li>
                  </ul>
                  <Figure src="/boss/job-filter.png" caption="选择职位来源与筛选条件" />
                </div>

                {/* 已读不回自动复聊 */}
                <div className="rounded-2xl border border-purple-100 bg-purple-50 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-xl border border-purple-100">🔔</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">已读不回自动复聊</h3>
                      <p className="text-sm text-gray-500">助力双向奔赴</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-7 mb-4">
                    BOSS 已读不回、简历投不出去？自动复聊有事没事提醒一下已读不回的 Ta，助力沟通双向奔赴。
                  </p>
                  <h4 className="font-semibold text-gray-900 mb-2">匹配逻辑</h4>
                  <ul className="space-y-2 text-sm text-gray-700 mb-4">
                    <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> 在聊天列表中查找已读不回的 BOSS，再发一条消息，多次复聊。</li>
                    <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> 设置「跟进时限」：在此时间之前活跃的聊天不会被检查。</li>
                    <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> 设置「跟进间隔」：距上次提醒不足该间隔的聊天暂不跟进，直到超过间隔再跟进。</li>
                  </ul>
                  <h4 className="font-semibold text-gray-900 mb-2">发送内容（二选一）</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span>「[盼回复]」表情。</li>
                    <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> 由大语言模型（结合简历与当前聊天上下文）生成的内容。</li>
                  </ul>
                  <Figure src="/boss/auto-reply.png" caption="已读不回自动复聊界面" />
                </div>
              </div>
              <div className="mt-6 max-w-2xl mx-auto">
                <Figure src="/boss/auto-chat-overview.png" caption="自动开聊配置与运行总览" />
              </div>
            </SectionCard>

            {/* 辅助功能 */}
            <SectionCard id="tools" eyebrow="辅助功能" title="让配置与求职更省心" description="围绕两大核心能力，提供一系列辅助功能，降低使用门槛。">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tools.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-40 object-cover object-top border-b border-gray-200 bg-white"
                    />
                    <div className="p-5">
                      <div className="text-2xl mb-3">{item.icon}</div>
                      <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-7">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>

            {/* 系统要求 */}
            <SectionCard id="requirements" eyebrow="系统要求" title="支持的操作系统">
              <div className="grid md:grid-cols-3 gap-4">
                {requirements.map((r) => (
                  <div key={r.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                    <div className="text-3xl mb-3">{r.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">{r.title}</h3>
                    <p className="text-sm text-gray-600 leading-7">{r.desc}</p>
                  </div>
                ))}
              </div>
            </SectionCard>

            {/* 下载安装 */}
            <SectionCard id="download" eyebrow="下载安装" title="下载并开始使用" description="目前提供 Windows 版安装包，安装完成后程序会自动启动并引导你完成初次配置。">
              <div className="max-w-xl mx-auto rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-5">
                  <div className="text-4xl">💻</div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Windows 版</h3>
                    <p className="text-sm text-gray-400">geekgeekrun-ui_0.17.4_x64_setup.exe · 约 105 MB</p>
                  </div>
                </div>
                <ol className="space-y-2 text-sm text-gray-600 mb-6 list-decimal list-inside leading-7">
                  <li>点击下方按钮下载安装包（.exe）</li>
                  <li>双击安装包开始安装</li>
                  <li>安装完成后程序自动启动，并引导你完成初次配置</li>
                </ol>
                <div className="space-y-3">
                  <a href={WIN_DOWNLOAD} className="btn-primary px-6 py-3 rounded-xl font-semibold inline-block w-full text-center">
                    ⚡ 快速下载（GitHub）
                  </a>
                  <a href={WIN_BAIDU} target="_blank" rel="noopener noreferrer" className="btn-outline px-6 py-3 rounded-xl font-semibold inline-block w-full text-center">
                    🐢 慢速下载（百度网盘）
                  </a>
                  <p className="text-center text-sm text-gray-500">
                    网盘提取码：<code className="rounded bg-purple-50 px-2 py-0.5 text-primary border border-purple-100 font-mono">{WIN_BAIDU_CODE}</code>
                  </p>
                </div>
              </div>
            </SectionCard>

            {/* 工作原理 */}
            <SectionCard id="how" eyebrow="工作原理" title="为什么需要它">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-gray-700 leading-7 space-y-3">
                <p>
                  在已经开聊很多职位的情况下，求职平台经常会推荐：①长时间不活跃的「僵尸」职位（活跃信息默认隐藏，需点开详情才能看到）；②牛头不对马嘴、不符合求职期望的职位。
                </p>
                <p>
                  人工筛选这些职位会带来很大的心智负担。因此程序在自动开聊中加入了清理机制——通过标记不合适的方式，让这些不活跃、不合适的职位逐渐消失，保证只开聊符合你口味的职位。
                </p>
              </div>
            </SectionCard>

            {/* 使用须知 */}
            <SectionCard id="notice" eyebrow="使用须知" title="使用前请务必阅读" description="请逐条阅读以下风险提示与说明；若你不接受其中任何一条，请不要使用本程序。">
              <div className="grid md:grid-cols-2 gap-4">
                {noticeItems.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-700 leading-7">{item.desc}</p>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>

          {/* Footer */}
          <footer className="mt-10 rounded-3xl border border-gray-200 bg-white px-6 py-8 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-primary mb-1">{BRAND}</p>
              <p className="text-gray-500">遇到问题或有建议，欢迎反馈，我们会持续修复与迭代。</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/" className="btn-outline px-5 py-3 rounded-xl font-semibold">返回首页</Link>
              <a href="/#contact" className="btn-primary px-5 py-3 rounded-xl font-semibold">联系我们</a>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
