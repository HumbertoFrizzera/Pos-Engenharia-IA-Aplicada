import { test, expect } from '@playwright/test';

test.describe('Form Validation Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/vanilla-js-web-app-example/');
  });

  test('should not add image if title is empty', async ({ page }) => {
    const initialCount = await page.locator('article').count();

    // Fill only URL
    await page.getByRole('textbox', { name: 'Image URL' }).fill('https://via.placeholder.com/150');

    // Submit the form
    await page.getByRole('button', { name: 'Submit Form' }).click();

    // Check that no new article was added
    await expect(page.locator('article')).toHaveCount(initialCount);
  });

  test('should not add image if URL is empty', async ({ page }) => {
    const initialCount = await page.locator('article').count();

    // Fill only title
    await page.getByRole('textbox', { name: 'Image Title' }).fill('Test Image');

    // Submit the form
    await page.getByRole('button', { name: 'Submit Form' }).click();

    // Check that no new article was added
    await expect(page.locator('article')).toHaveCount(initialCount);
  });

  test('should not add image if both title and URL are empty', async ({ page }) => {
    const initialCount = await page.locator('article').count();

    // Submit the form without filling anything
    await page.getByRole('button', { name: 'Submit Form' }).click();

    // Check that no new article was added
    await expect(page.locator('article')).toHaveCount(initialCount);
  });
});