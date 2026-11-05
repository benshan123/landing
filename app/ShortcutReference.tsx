import { docsTranslations } from './docs/i18n-docs';
import type { Locale } from './i18n';

export default function ShortcutReference({ locale, usageTip }: { locale: Locale; usageTip?: string }) {
  const t = docsTranslations[locale];
  const cellPadding = locale === 'zh' ? 'px-3 sm:px-5' : 'px-5';
  const keyPadding = locale === 'zh' ? 'whitespace-nowrap px-1.5 sm:px-2.5' : 'px-2.5';

  return (
    <>
      <div className="mb-5 rounded-2xl border border-purple-100 bg-purple-50 px-5 py-4 text-sm leading-7 text-purple-900">
        {usageTip ?? t.s04_jokeTip}
      </div>
      <div className="overflow-hidden rounded-2xl border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-purple-50 to-blue-50 text-gray-700">
                <th className={`${cellPadding} py-4 text-left font-semibold border-b border-gray-200`}>{t.s04_thFunc}</th>
                <th className={`${cellPadding} py-4 text-left font-semibold border-b border-gray-200`}>{t.s04_thWin}</th>
                <th className={`${cellPadding} py-4 text-left font-semibold border-b border-gray-200`}>{t.s04_thMac}</th>
              </tr>
            </thead>
            <tbody>
              {t.shortcutRows.map(([label, win, mac], index) => (
                <tr key={label} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'}>
                  <td className={`${cellPadding} py-4 border-b border-gray-100 font-medium text-gray-800`}>{label}</td>
                  <td className={`${cellPadding} py-4 border-b border-gray-100`}>
                    <code className={`rounded-lg border border-gray-200 bg-white ${keyPadding} py-1 text-xs md:text-sm text-gray-700`}>{win}</code>
                  </td>
                  <td className={`${cellPadding} py-4 border-b border-gray-100`}>
                    <code className={`rounded-lg border border-gray-200 bg-white ${keyPadding} py-1 text-xs md:text-sm text-gray-700`}>{mac}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-5 rounded-2xl border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-800 leading-7" dangerouslySetInnerHTML={{ __html: t.s04_macTip }} />
    </>
  );
}
