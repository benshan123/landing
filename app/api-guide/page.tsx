'use client';

import Link from 'next/link';

const BRAND = 'Cheapest Interview';

const steps = [
  {
    num: '1',
    title: '进入阿里云百炼平台，找到 API Key 页面',
    desc: (
      <>
        <p className="mb-2">打开浏览器，访问阿里云百炼平台：</p>
        <a href="https://bailian.console.aliyun.com/cn-beijing?tab=model#/api-key" target="_blank" rel="noopener noreferrer"
          className="inline-block bg-blue-50 text-blue-600 font-mono text-sm px-4 py-2 rounded-lg hover:bg-blue-100 transition break-all mb-3">
          https://bailian.console.aliyun.com → API Key
        </a>
        <p className="mb-2">如果没有阿里云账号，先注册一个（支持支付宝一键登录）。</p>
        <p>登录后在左侧菜单最下方找到 <strong>「API Key」</strong>，点击进入 API Key 管理页面。</p>
      </>
    ),
    img: '/api-guide-keys.png',
    imgAlt: 'API Key 管理页面',
  },
  {
    num: '2',
    title: '创建一个新的 API Key',
    desc: (
      <>
        <p className="mb-2">点击右上角 <strong>「+ 创建 API Key」</strong> 按钮。</p>
        <p className="mb-2">在弹出的对话框中：</p>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li><strong>归属业务空间</strong>：保持默认即可</li>
          <li><strong>描述</strong>：可以留空，或填写「StealthMate」方便识别</li>
          <li><strong>权限</strong>：选择「全部」</li>
        </ul>
        <p className="mt-2">点击 <strong>「确定」</strong>，系统会生成一个以 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">sk-</code> 开头的 API Key。<strong>请立即复制保存</strong>，关闭弹窗后将无法再次查看完整 Key。</p>
      </>
    ),
    img: '/api-guide-create.png',
    imgAlt: '创建 API Key',
  },
  {
    num: '3',
    title: '给账户充值（最低 0.01 元即可）',
    desc: (
      <>
        <p className="mb-2">通义千问按用量计费，非常便宜（每次分析约几分钱）。需要先充值才能使用。</p>
        <p className="mb-2">进入阿里云 <strong>「费用与成本」→「充值汇款」</strong> 页面：</p>
        <a
          href="https://billing-cost.console.aliyun.com/fortune/fund-management/recharge"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-50 text-blue-600 font-mono text-sm px-4 py-2 rounded-lg hover:bg-blue-100 transition break-all mb-3"
        >
          前往充值页面
        </a>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>选择 <strong>支付宝充值</strong>（实时到账，最方便）</li>
          <li>充值金额填 <strong>0.01 元</strong> 起即可测试</li>
          <li>建议充值 <strong>1~5 元</strong>，足够用很久</li>
        </ul>
        <p className="mt-2">勾选确认后点击 <strong>「确认充值」</strong>，支付宝扫码完成充值。</p>
      </>
    ),
    img: '/api-guide-recharge.png',
    imgAlt: '充值页面',
  },
  {
    num: '4',
    title: '【单机位版】在电脑客户端中配置 API',
    desc: (
      <>
        <p className="mb-2">打开 StealthMate 客户端，进入 <strong>「高级设置」→「自定义 API」</strong>：</p>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li><strong>API 提供商</strong>：选择「通义千问（国内直连，支持图片）」</li>
          <li><strong>API Key</strong>：粘贴刚才复制的 sk- 开头的密钥</li>
          <li><strong>模型</strong>：选择 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">qwen-vl-max</code>（视觉理解最强，推荐）</li>
        </ul>
        <p className="mt-2">点击 <strong>「测试连接」</strong>，看到「成功：连接成功」即配置完成。然后点击「保存」。</p>
      </>
    ),
    img: '/api-guide-desktop.png',
    imgAlt: '单机位客户端 API 设置',
  },
  {
    num: '5',
    title: '【双机位版】在手机端配置 API',
    desc: (
      <>
        <p className="mb-2">双机位版的 AI 分析由手机端直接调用。配对连接成功后，点击手机页面右上角 <strong>「设置」</strong> 图标：</p>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li><strong>AI 提供商</strong>：选择「通义千问」</li>
          <li><strong>API Key</strong>：粘贴 sk- 开头的密钥</li>
          <li><strong>模型</strong>：选择 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">qwen-vl-max</code></li>
          <li><strong>CORS 代理 URL</strong>：留空即可（通义千问支持直连）</li>
          <li><strong>编程语言</strong>：根据需要选择（如 Python3）</li>
        </ul>
        <p className="mt-2">点击 <strong>「测试连接」</strong>，看到 <span className="text-green-600 font-semibold">✓ 连接成功</span> 即可。然后点击「保存设置」。</p>
      </>
    ),
    img: '/api-guide-phone.png',
    imgAlt: '手机端 API 设置',
  },
];

export default function ApiGuidePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto h-16 px-4 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary transition">
            <span aria-hidden="true">←</span>
            <span>返回首页</span>
          </Link>
          <div className="text-sm font-semibold gradient-text">保姆级 API 配置指南</div>
        </div>
      </nav>

      <div className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-4">
            <div className="inline-block mb-3 px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
              📖 保姆级教程
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              通义千问 API 配置指南
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto">
              5 分钟完成配置，每次分析仅需几分钱，性价比最高的 AI 模型选择
            </p>
          </div>

          {/* 为什么推荐通义千问 */}
          <div className="mt-8 mb-12 grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
              <div className="text-2xl mb-2">🇨🇳</div>
              <h4 className="font-semibold text-gray-900 mb-1">国内直连</h4>
              <p className="text-sm text-gray-500">无需 VPN，延迟极低</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
              <div className="text-2xl mb-2">💰</div>
              <h4 className="font-semibold text-gray-900 mb-1">极其便宜</h4>
              <p className="text-sm text-gray-500">每次分析约 0.01~0.03 元</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
              <div className="text-2xl mb-2">👁️</div>
              <h4 className="font-semibold text-gray-900 mb-1">视觉理解强</h4>
              <p className="text-sm text-gray-500">qwen-vl-max 截图识别准确率高</p>
            </div>
          </div>

          {/* 步骤 */}
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                      {step.num}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 pt-1">{step.title}</h3>
                  </div>
                  <div className="text-sm text-gray-600 leading-relaxed ml-14">
                    {step.desc}
                  </div>
                </div>
                {step.img && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                      <img src={step.img} alt={step.imgAlt}
                        className="w-full h-auto" loading="lazy" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 底部提示 */}
          <div className="mt-10 bg-green-50 border border-green-200 rounded-xl px-6 py-5">
            <h4 className="font-bold text-green-800 mb-2">🎉 配置完成！</h4>
            <p className="text-sm text-green-700 leading-relaxed">
              配置成功后，截图分析将使用你自己的 API Key 调用通义千问 qwen-vl-max 模型。
              费用从你的阿里云账户余额中扣除，每次仅需几分钱。
              如遇问题，可加 QQ 群（1094796213）咨询。
            </p>
          </div>

          {/* 返回链接 */}
          <div className="mt-10 text-center">
            <Link href="/" className="text-primary hover:underline text-sm font-medium">← 返回首页</Link>
            <span className="mx-4 text-gray-300">|</span>
            <Link href="/docs" className="text-primary hover:underline text-sm font-medium">查看使用文档 →</Link>
          </div>
        </div>
      </div>

      {/* 页脚 */}
      <section className="py-10 px-4 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-gray-300">© 2026 {BRAND} · 本产品为 AI 学习辅助工具，请合理使用</p>
        </div>
      </section>
    </main>
  );
}
