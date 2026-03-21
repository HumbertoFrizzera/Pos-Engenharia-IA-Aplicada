import { test, expect } from '@playwright/test';

test.describe('Form Submission Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/vanilla-js-web-app-example/');
  });

  test('should add new image to the list when form is submitted with valid data', async ({ page }) => {
    // Get initial count of articles
    const initialCount = await page.locator('article').count();

    // Fill the form
    await page.getByRole('textbox', { name: 'Image Title' }).fill('Test Image');
    await page.getByRole('textbox', { name: 'Image URL' }).fill('https://via.placeholder.com/150');

    // Submit the form
    await page.getByRole('button', { name: 'Submit Form' }).click();

    // Check that a new article was added
    await expect(page.locator('article')).toHaveCount(initialCount + 1);

    // Check that the new article has the correct title
    const lastArticle = page.locator('article').last();
    await expect(lastArticle.locator('h4')).toHaveText('Test Image');

    // Check that the image src is set
    await expect(lastArticle.locator('img')).toHaveAttribute('src', 'https://via.placeholder.com/150');
  });
});