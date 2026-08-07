import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('download section exposes the 2.3.9 desktop installers and Android pairing app', async () => {
  const [page, i18n] = await Promise.all([
    readFile(new URL('../app/page.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/i18n.ts', import.meta.url), 'utf8'),
  ]);

  const expectedPageContent = [
    'https://github.com/benshan123/wdz/releases/download/v3.1/mianshikun-Setup-2.3.9.exe',
    'https://pan.baidu.com/s/1aI3ATo56WT7rUho5k3hp_Q',
    'https://github.com/benshan123/wdz/releases/download/v3.1/mianshikun-2.3.9-universal.dmg',
    'https://pan.baidu.com/s/1DbWthnJTUf6mvrRejvTV3g',
    'https://github.com/benshan123/wdz/releases/download/v3.1/app-debug.apk',
    'https://pan.baidu.com/s/1u_N4NyBTjMDViaGba_mdOQ',
    'lg:grid-cols-3',
    'download_android_title',
  ];

  for (const value of expectedPageContent) assert.match(page, new RegExp(value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));

  for (const value of ['2.3.9', '34qu', 'mb8c', '84mx', '扫码后直接进入配对页面，无需再次扫码', 'Open the pairing page directly after scanning—no second scan needed']) {
    assert.ok(i18n.includes(value), `missing i18n content: ${value}`);
  }
});
