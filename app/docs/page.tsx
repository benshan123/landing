'use client';

import Link from 'next/link';

const shortcutRows = [
  ['截图', 'Ctrl+H', 'Cmd+H *'],
  ['生成答案', 'Ctrl+Enter', 'Cmd+Enter'],
  ['隐藏 / 显示窗口', 'Ctrl+B', 'Cmd+B'],
  ['重置清空', 'Ctrl+R', 'Cmd+R'],
  ['切换面试模式', 'Ctrl+M', 'Cmd+M *'],
  ['面试录音开关', 'Alt+X', 'Option+X'],
  ['滚动答案（上 / 下）', 'Ctrl+, / Ctrl+.', 'Cmd+, / Cmd+.'],
  ['移动窗口', 'Ctrl+方向键', 'Cmd+方向键'],
  ['放大 / 缩小窗口', 'Ctrl++ / Ctrl+-', 'Cmd++ / Cmd+-'],
  ['透明度调节', 'Ctrl+[ / Ctrl+]', 'Cmd+[ / Cmd+]'],
  ['退出应用', 'Ctrl+Q', 'Cmd+Q'],
];

const installSteps = [
  '启动 Cheapest Interview 后，会先看到激活界面。',
  '复制界面上的机器码，发送给卖家或客服。',
  '拿到激活码后输入并点击“激活”。',
  '如果网络波动，稍等几秒即可，应用会自动重试。',
];

const settingsItems = [
  '编程语言 / 面试语言',
  '浅色 / 深色主题',
  '窗口透明度',
  '解题模型',
  '截图模式（全屏 / 区域）',
  'AI 服务商、API Key、自定义快捷键',
];

const faqItems = [
  {
    q: '快捷键全部不生效？',
    a: '通常是后台存在多个 Cheapest Interview 进程。请先完全退出所有进程，再重新启动应用。',
  },
  {
    q: '激活失败怎么办？',
    a: '大多数情况是网络波动导致。保持联网状态，等待几秒后再次尝试即可。',
  },
  {
    q: '截图后没有生成答案？',
    a: '请先检查是否已经在“高级设置”里配置好可用的 API Key。',
  },
  {
    q: '面试模式没有转录内容？',
    a: '请确认已经点击“开始监听”或按下对应快捷键。Mac 用户还需要提前安装虚拟音频驱动。',
  },
  {
    q: '如何完全卸载？',
    a: '卸载应用后，删除配置目录即可：Windows 为 %APPDATA%\\cheapest-interview\\，macOS 为 ~/Library/Application Support/cheapest-interview/。',
  },
];

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

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto h-16 px-4 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary transition">
            <span aria-hidden="true">←</span>
            <span>返回首页</span>
          </Link>
          <div className="text-sm font-semibold gradient-text">Cheapest Interview Docs</div>
        </div>
      </nav>

      <div className="pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <section className="relative overflow-hidden rounded-[32px] border border-purple-100 bg-gradient-to-br from-purple-50 via-white to-blue-50 px-6 py-10 md:px-10 md:py-14 mb-10">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.10),transparent_32%)]" />
            <div className="relative max-w-4xl">
              <div className="inline-flex items-center rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-primary border border-purple-100 shadow-sm mb-5">
                使用文档 · v1.0.0
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                快速上手 <span className="gradient-text">Cheapest Interview</span>
              </h1>
              <p className="text-lg text-gray-600 leading-8 max-w-3xl mb-8">
                这是一份网页版使用说明，涵盖安装与激活、笔试 / 面试操作流程、快捷键、设置项、Mac 注意事项和常见问题。第一次使用，建议按顺序看完前四部分。
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#install" className="btn-primary px-6 py-3 rounded-xl font-semibold">开始阅读</a>
                <Link href="/" className="btn-outline px-6 py-3 rounded-xl font-semibold">返回首页</Link>
              </div>
            </div>
          </section>

          <section className="feature-card rounded-3xl border border-gray-200 bg-white p-6 md:p-8 mb-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
              <div>
                <p className="text-sm font-semibold text-primary mb-2">快速导航</p>
                <h2 className="text-2xl font-bold text-gray-900">你可以直接跳到需要的部分</h2>
              </div>
              <Link href="/" className="text-sm font-medium text-primary hover:underline">返回产品首页</Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
              {[
                ['#install', '安装与激活'],
                ['#api', 'API 配置（可选）'],
                ['#usage', '基本操作（笔试 / 面试）'],
                ['#shortcuts', '快捷键表格'],
                ['#settings', '设置说明'],
                ['#mac', 'Mac 用户须知'],
                ['#faq', '常见问题'],
              ].map(([href, label]) => (
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
            <SectionCard
              id="install"
              eyebrow="01 · 安装与激活"
              title="先安装，再完成激活"
              description="首次使用时，建议先确认安装包正确、网络可用，然后再输入激活码。整个流程通常只需要 1~2 分钟。"
            >
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">安装方式</h3>
                  <div className="space-y-4 text-gray-600 leading-7">
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Windows</p>
                      <p>双击 <code className="rounded bg-white px-2 py-1 text-sm border border-gray-200">StealthMate-Setup-1.0.0.exe</code> 安装即可。</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">macOS</p>
                      <p>打开 <code className="rounded bg-white px-2 py-1 text-sm border border-gray-200">.dmg</code> 文件后，将应用拖入 Applications。</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-purple-100 bg-purple-50 p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">首次激活步骤</h3>
                  <div className="space-y-4">
                    {installSteps.map((step, index) => (
                      <div key={step} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary text-sm font-bold border border-purple-100">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 leading-7">{step}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-2xl border border-white/80 bg-white/80 p-4 text-sm text-gray-600 leading-6">
                    激活码格式示例：
                    <code className="ml-2 rounded bg-purple-50 px-2 py-1 text-primary border border-purple-100">SM-XXXX-XXXX-XXXX</code>
                  </div>
                </div>
              </div>
            </SectionCard>

            <SectionCard
              id="api"
              eyebrow="02 · API 配置（可选）"
              title="内置免费模型，开箱即用"
              description="软件已内置免费 AI 模型，安装激活后即可直接使用，无需任何额外配置。如果你希望获得更快的响应速度或使用更强的模型，可以自行申请 API Key。"
            >
              <div className="rounded-2xl border border-green-200 bg-green-50 p-5 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎉</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">无需配置，直接使用</h3>
                    <p className="text-gray-700 leading-7">软件已内置免费模型，激活后即可截图生成答案、面试语音监听等全部功能。以下 API 配置仅为<strong>可选的进阶设置</strong>。</p>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 mb-6">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl">🟢</span>
                    <h3 className="text-lg font-semibold text-gray-900">通义千问（QWEN）</h3>
                  </div>
                  <p className="text-gray-700 leading-7 mb-3">阿里云大模型，<strong>新用户有免费额度</strong>，国内直连无需科学上网。</p>
                  <a href="https://bailian.console.aliyun.com/?tab=model#/api-key" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline text-sm font-medium">
                    前往申请 API Key →
                  </a>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl">🟡</span>
                    <h3 className="text-lg font-semibold text-gray-900">Kimi（月之暗面）</h3>
                  </div>
                  <p className="text-gray-700 leading-7 mb-3">国产大模型，需充值后使用，国内直连。</p>
                  <a href="https://platform.moonshot.cn/console/api-keys" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline text-sm font-medium">
                    前往申请 API Key →
                  </a>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl">🔵</span>
                    <h3 className="text-lg font-semibold text-gray-900">OpenRouter</h3>
                  </div>
                  <p className="text-gray-700 leading-7">聚合多种模型（GPT、Claude 等），需科学上网。</p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl">🔵</span>
                    <h3 className="text-lg font-semibold text-gray-900">Gemini</h3>
                  </div>
                  <p className="text-gray-700 leading-7">Google 大模型，需科学上网。</p>
                </div>
              </div>

              <div className="rounded-2xl border border-purple-100 bg-purple-50 p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">如何写入 API Key</h3>
                <div className="space-y-3 text-gray-700 leading-7">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary text-sm font-bold border border-purple-100">1</div>
                    <span>点击软件右上角的<strong>齿轮图标</strong>进入设置页面。</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary text-sm font-bold border border-purple-100">2</div>
                    <span>点击<strong>「高级设置」</strong>，选择想使用的 AI 平台和模型。</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary text-sm font-bold border border-purple-100">3</div>
                    <span>粘贴 API Key → 点击<strong>「测试连接」</strong>确认可用 → 点击<strong>「保存设置」</strong>。</span>
                  </div>
                </div>
              </div>
            </SectionCard>

            <SectionCard
              id="usage"
              eyebrow="03 · 基本操作"
              title="默认先用笔试模式，需要时切到面试模式"
              description="启动后，屏幕上方会出现一个可拖动的悬浮横条。大多数情况下，你只需要记住截图、生成答案、切换模式这几个动作。"
            >
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-xl border border-blue-100">📝</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">笔试模式（默认）</h3>
                      <p className="text-sm text-gray-500">适合代码题、选择题、资料分析等场景</p>
                    </div>
                  </div>
                  <ol className="space-y-4 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="rounded-lg bg-white px-2.5 py-1 text-xs font-bold text-blue-700 border border-blue-100">Ctrl+H</span>
                      <span className="leading-7">截图，可连续多次截图，把同一题的多个区域拼在一起分析。</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="rounded-lg bg-white px-2.5 py-1 text-xs font-bold text-blue-700 border border-blue-100">Ctrl+Enter</span>
                      <span className="leading-7">生成 AI 答案，系统会结合当前截图内容输出解题结果。</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="rounded-lg bg-white px-2.5 py-1 text-xs font-bold text-blue-700 border border-blue-100">Ctrl+R</span>
                      <span className="leading-7">重置内容并回到初始横条状态，适合开始下一题。</span>
                    </li>
                  </ol>
                </div>

                <div className="rounded-2xl border border-purple-100 bg-purple-50 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-xl border border-purple-100">🎙️</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">面试模式</h3>
                      <p className="text-sm text-gray-500">适合技术面、HR 面、行为面等口语问答场景</p>
                    </div>
                  </div>
                  <ol className="space-y-4 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="rounded-lg bg-white px-2.5 py-1 text-xs font-bold text-primary border border-purple-100">Ctrl+M</span>
                      <span className="leading-7">切换到面试模式。</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="rounded-lg bg-white px-2.5 py-1 text-xs font-bold text-primary border border-purple-100">Alt+X</span>
                      <span className="leading-7">开始监听系统音频，再按一次可停止监听。</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="rounded-lg bg-white px-2.5 py-1 text-xs font-bold text-primary border border-purple-100">实时转录</span>
                      <span className="leading-7">面试官说话会被转成文字，停止后 AI 会自动生成参考回答。</span>
                    </li>
                  </ol>
                </div>
              </div>
            </SectionCard>

            <SectionCard
              id="shortcuts"
              eyebrow="04 · 快捷键表格"
              title="常用快捷键一览"
              description="快捷键都支持在高级设置中自定义。如果你是 Mac 用户，建议优先修改和系统快捷键冲突的那两个组合键。"
            >
              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-purple-50 to-blue-50 text-gray-700">
                        <th className="px-5 py-4 text-left font-semibold border-b border-gray-200">功能</th>
                        <th className="px-5 py-4 text-left font-semibold border-b border-gray-200">Windows</th>
                        <th className="px-5 py-4 text-left font-semibold border-b border-gray-200">Mac</th>
                      </tr>
                    </thead>
                    <tbody>
                      {shortcutRows.map(([label, win, mac], index) => (
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
              <div className="mt-5 rounded-2xl border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-800 leading-7">
                <strong>Mac 提示：</strong> 带 * 的快捷键可能和系统行为冲突，建议把 <code className="rounded bg-white px-2 py-1 border border-yellow-200">Cmd+H</code> 改成 <code className="rounded bg-white px-2 py-1 border border-yellow-200">Cmd+Shift+H</code>，把 <code className="rounded bg-white px-2 py-1 border border-yellow-200">Cmd+M</code> 改成 <code className="rounded bg-white px-2 py-1 border border-yellow-200">Cmd+Shift+M</code>。
              </div>
            </SectionCard>

            <SectionCard
              id="settings"
              eyebrow="05 · 设置说明"
              title="齿轮按钮里可以完成大部分配置"
              description="点击工具条上的齿轮图标，会打开快捷设置。这里能快速调整语言、主题、透明度、模型等常用项；继续进入高级设置，则可以配置 API Key 和自定义快捷键。"
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {settingsItems.map((item) => (
                  <div key={item} className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 text-gray-700 flex items-start gap-3">
                    <span className="mt-0.5 text-primary font-bold">✓</span>
                    <span className="leading-7">{item}</span>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard
              id="mac"
              eyebrow="06 · Mac 用户须知"
              title="Mac 上主要注意快捷键冲突和音频驱动"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">快捷键冲突</h3>
                  <p className="text-gray-700 leading-7">
                    macOS 默认把 <code className="rounded bg-white px-2 py-1 text-sm border border-orange-200">Cmd+H</code> 用作隐藏应用，把 <code className="rounded bg-white px-2 py-1 text-sm border border-orange-200">Cmd+M</code> 用作最小化窗口，因此建议你在高级设置中改成
                    <code className="mx-2 rounded bg-white px-2 py-1 text-sm border border-orange-200">Cmd+Shift+H</code>
                    和
                    <code className="ml-2 rounded bg-white px-2 py-1 text-sm border border-orange-200">Cmd+Shift+M</code>。
                  </p>
                </div>
                <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">面试模式音频</h3>
                  <p className="text-gray-700 leading-7">
                    如果需要捕获系统音频，请先安装
                    <a
                      href="https://existential.audio/blackhole/"
                      target="_blank"
                      rel="noreferrer"
                      className="mx-1 text-primary hover:underline"
                    >
                      BlackHole
                    </a>
                    虚拟音频驱动。安装完成后，再进入 Cheapest Interview 的面试模式进行监听即可。
                  </p>
                </div>
              </div>
            </SectionCard>

            <SectionCard
              id="faq"
              eyebrow="07 · 常见问题"
              title="先看这里，很多问题都能快速解决"
            >
              <div className="space-y-4">
                {faqItems.map((item) => (
                  <div key={item.q} className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.q}</h3>
                    <p className="text-gray-600 leading-7">{item.a}</p>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>

          <footer className="mt-10 rounded-3xl border border-gray-200 bg-white px-6 py-8 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-primary mb-1">Cheapest Interview</p>
              <p className="text-gray-500">需要购买、续费或排查问题时，可直接返回首页查看下载与联系方式。</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/" className="btn-outline px-5 py-3 rounded-xl font-semibold">
                返回首页
              </Link>
              <a href="/#contact" className="btn-primary px-5 py-3 rounded-xl font-semibold">
                联系客服
              </a>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
