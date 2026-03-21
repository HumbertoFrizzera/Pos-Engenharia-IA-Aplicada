const { test, expect } = require('@playwright/test');

test('vanilla-js-web-app-example loads and shows expected content', async ({ page }) => {
  await page.goto('/vanilla-js-web-app-example/');
  // Stable element checks learned from the page structure
  await expect(page.locator('h4:has-text("AI Alien")')).toBeVisible();
  await expect(page.locator('h4:has-text("Predator Night Vision")')).toBeVisible();
  await expect(page.locator('h4:has-text("ET Bilu")')).toBeVisible();
  await expect(page.locator('img[src*="ai-alien.jpeg"]')).toBeVisible();
});
