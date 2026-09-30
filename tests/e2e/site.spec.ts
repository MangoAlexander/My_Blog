import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = [
  ['/', 'Ideas worth keeping'],
  ['/writing/', 'Writing'],
  ['/writing/designing-for-the-return-visit/', 'Designing for the return visit'],
  ['/notes/', 'Notes'],
  ['/projects/', 'Projects'],
  ['/about/', 'I make digital things'],
  ['/now/', 'Now'],
  ['/uses/', 'Uses'],
  ['/archive/', 'Archive'],
  ['/tags/', 'Tags'],
  ['/admin/', 'Write anywhere'],
] as const;

for (const [path, heading] of pages) {
  test(`${path} renders its primary content`, async ({ page }) => {
    await page.goto(path);
    await expect(
      page.getByRole('heading', { name: new RegExp(heading, 'i') }).first(),
    ).toBeVisible();
    await expect(page.locator('body')).not.toHaveCSS('overflow-x', 'scroll');
  });
}

test('navigation and theme preference work', async ({ page }, testInfo) => {
  await page.goto('/');
  if (testInfo.project.name.includes('mobile')) {
    await page.getByRole('button', { name: 'Menu' }).click();
  }
  const toggle = page.getByRole('button', { name: /Theme:/ });
  await toggle.click();
  await expect(page.locator('html')).toHaveAttribute('data-preference', 'light');
  await toggle.click();
  await expect(page.locator('html')).toHaveAttribute('data-preference', 'dark');
  await page.getByRole('link', { name: 'Writing', exact: true }).click();
  await expect(page).toHaveURL(/\/writing\/?$/);
});

test('article interactions and links work', async ({ page }) => {
  await page.goto('/writing/designing-for-the-return-visit/');
  await expect(page.locator('.reading-progress')).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'Adjacent articles' })).toBeVisible();
  if (await page.locator('.mobile-toc').isVisible()) {
    await page.locator('.mobile-toc summary').click();
    await page
      .locator('.mobile-toc')
      .getByRole('link', { name: 'Build a place, not a launch' })
      .click();
  } else {
    await page.locator('.toc').getByRole('link', { name: 'Build a place, not a launch' }).click();
  }
  await expect(page).toHaveURL(/#build-a-place-not-a-launch$/);
});

test('search indexes published pages', async ({ page }) => {
  await page.goto('/search/');
  await page.getByRole('searchbox').fill('quiet interface');
  await expect(page.locator('#search-results li').first()).toBeVisible();
  await expect(page.locator('#search-status')).toContainText('result');
});

test('unknown path uses custom 404', async ({ page }) => {
  const response = await page.goto('/a-page-that-does-not-exist');
  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { name: /wandered off/i })).toBeVisible();
});

test('mobile menu opens and routes', async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.includes('mobile'), 'mobile-only interaction');
  await page.goto('/');
  const menu = page.getByRole('button', { name: 'Menu' });
  await menu.click();
  await expect(menu).toHaveAttribute('aria-expanded', 'true');
  await page.getByRole('link', { name: 'Notes', exact: true }).click();
  await expect(page).toHaveURL(/\/notes\/?$/);
});

for (const path of ['/', '/writing/designing-for-the-return-visit/', '/admin/']) {
  test(`${path} has no automatically detectable accessibility violations`, async ({ page }) => {
    await page.goto(path);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
}
