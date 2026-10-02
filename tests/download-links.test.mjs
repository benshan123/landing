import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('download section exposes the 2.4.6 desktop installers and Android pairing app', async () => {
  const [page, i18n] = await Promise.all([
    readFile(new URL('../app/page.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/i18n.ts', import.meta.url), 'utf8'),
  ]);

  const expectedPageContent = [
    'https://github.com/benshan123/wdz/releases/download/2.3.2/InterviewKun-Setup-2.4.6.exe',
    'https://pan.baidu.com/s/18qR_Ox9x2DlUaPTxg4737A',
    'https://github.com/benshan123/wdz/releases/download/2.3.2/InterviewKun-2.4.6-arm64.dmg',
    'https://pan.baidu.com/s/1DuAn9NIFz3s0H_-YC338Yg',
    'https://github.com/benshan123/wdz/releases/download/v3.1/app-debug.apk',
    'https://pan.baidu.com/s/1u_N4NyBTjMDViaGba_mdOQ',
    'lg:grid-cols-3',
    'download_android_title',
    'locale === \'zh\'',
  ];

  for (const value of expectedPageContent) assert.match(page, new RegExp(value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));

  for (const value of ['2.4.6', 'i94c', 'u58n', '84mx', '加入自动更新功能（需要代理）', '新增模拟面试', '改善 ASR 语音识别的断句逻辑', '扫码后直接进入配对页面，无需再次扫码']) {
    assert.ok(i18n.includes(value), `missing i18n content: ${value}`);
  }
});
