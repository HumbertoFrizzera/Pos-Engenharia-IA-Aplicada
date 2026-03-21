import { test, expect } from '@playwright/test';

test.describe('Form Tests', () => {
  test('submitting the form adds a new item to the list', async ({ page }) => {
    await page.goto('https://erickwendel.github.io/vanilla-js-web-app-example/');

    const initialCount = await page.locator('article').count();

    await page.getByRole('textbox', { name: 'Image Title' }).fill('Test Item');
    await page.getByRole('textbox', { name: 'Image URL' }).fill('https://via.placeholder.com/150?text=test');
    await page.getByRole('button', { name: 'Submit Form' }).click();

    await expect(page.getByRole('heading', { name: 'Test Item', level: 4 })).toBeVisible();
    const finalCount = await page.locator('article').count();
    expect(finalCount).toBeGreaterThan(initialCount);
  });

  test('form validation shows errors for empty fields', async ({ page }) => {
    await page.goto('https://erickwendel.github.io/vanilla-js-web-app-example/');

    await page.getByRole('textbox', { name: 'Image Title' }).fill('');
    await page.getByRole('textbox', { name: 'Image URL' }).fill('');
    await page.getByRole('button', { name: 'Submit Form' }).click();

    await expect(page.getByText('Please type a title for the image.')).toBeVisible();
    await expect(page.getByText('Please type a valid URL')).toBeVisible();
  });
});