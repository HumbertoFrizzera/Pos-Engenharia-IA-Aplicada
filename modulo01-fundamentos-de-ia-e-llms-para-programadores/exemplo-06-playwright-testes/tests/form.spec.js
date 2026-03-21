const { test, expect } = require('@playwright/test');

test('form submit adds new item to the list', async ({ page }) => {
  await page.goto('/vanilla-js-web-app-example/');
  const uniqueTitle = `Playwright Test ${Date.now()}`;
  const imageUrl = 'https://via.placeholder.com/150?text=pw-test';

  const initialCount = await page.locator('h4').count();

  await page.fill('#title', uniqueTitle);
  await page.fill('#imageUrl', imageUrl);
  await page.click('#btnSubmit');

  // Expect a new heading with the submitted title
  await expect(page.locator(`h4:has-text("${uniqueTitle}")`)).toBeVisible({ timeout: 3000 });

  const afterCount = await page.locator('h4').count();
  expect(afterCount).toBeGreaterThan(initialCount);
});

test('form validation: empty fields do not add an item', async ({ page }) => {
  await page.goto('/vanilla-js-web-app-example/');
  const initialCount = await page.locator('h4').count();

  // Ensure fields are empty and try to submit
  await page.fill('#title', '');
  await page.fill('#imageUrl', '');
  await page.click('#btnSubmit');

  // Give the page a moment to react
  await page.waitForTimeout(500);

  const afterCount = await page.locator('h4').count();
  expect(afterCount).toBe(initialCount);
});
