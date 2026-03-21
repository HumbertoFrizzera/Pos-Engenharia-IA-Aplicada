const { test } = require('@playwright/test');

test('inspect form labels and inputs', async ({ page }) => {
  await page.goto('/vanilla-js-web-app-example/');
  const labels = await page.locator('label').allTextContents();
  console.log('labels:', labels);
  const inputs = await page.locator('input').evaluateAll(nodes => nodes.map(n => ({
    placeholder: n.getAttribute('placeholder'),
    id: n.id,
    name: n.getAttribute('name'),
    type: n.type
  })));
  console.log('inputs:', inputs);
  const buttons = await page.locator('button, input[type="submit"]').allTextContents();
  console.log('buttons:', buttons);
});
