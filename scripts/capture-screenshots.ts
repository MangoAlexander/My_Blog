import { mkdir } from 'node:fs/promises';
import { chromium, type BrowserContext } from '@playwright/test';

const base = process.env.PREVIEW_URL || 'http://127.0.0.1:4321';
const output = new URL('../artifacts/screenshots/', import.meta.url).pathname;
await mkdir(output, { recursive: true });
const browser = await chromium.launch({
  executablePath: process.env.CI ? undefined : '/usr/bin/google-chrome',
});

async function context(
  width: number,
  height: number,
  theme: 'light' | 'dark',
): Promise<BrowserContext> {
  const result = await browser.newContext({ viewport: { width, height }, colorScheme: theme });
  await result.addInitScript((value) => localStorage.setItem('theme', value), theme);
  return result;
}

const shots = [
  ['home-desktop-light.png', '/', 1440, 900, 'light'],
  ['home-desktop-dark.png', '/', 1440, 900, 'dark'],
  ['home-mobile-light.png', '/', 390, 844, 'light'],
  ['home-mobile-dark.png', '/', 390, 844, 'dark'],
  ['writing-desktop.png', '/writing/', 1440, 900, 'light'],
  ['post-desktop-light.png', '/writing/designing-for-the-return-visit/', 1440, 900, 'light'],
  ['post-desktop-dark.png', '/writing/designing-for-the-return-visit/', 1440, 900, 'dark'],
  ['post-mobile.png', '/writing/designing-for-the-return-visit/', 390, 844, 'light'],
  ['projects-desktop.png', '/projects/', 1440, 900, 'light'],
  ['about-mobile.png', '/about/', 390, 844, 'light'],
] as const;

for (const [name, path, width, height, theme] of shots) {
  const browserContext = await context(width, height, theme);
  const page = await browserContext.newPage();
  await page.goto(`${base}${path}`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: `${output}${name}`, fullPage: true });
  await browserContext.close();
}

await browser.close();
console.log(`Captured ${shots.length} screenshots in ${output}`);
