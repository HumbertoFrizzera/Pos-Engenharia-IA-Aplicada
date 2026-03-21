import { test, expect } from '@playwright/test';

test('home page should respond on port 3001', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL('http://localhost:3001/');
  await expect(page.locator('text=Você não está logado')).toBeVisible();
});
