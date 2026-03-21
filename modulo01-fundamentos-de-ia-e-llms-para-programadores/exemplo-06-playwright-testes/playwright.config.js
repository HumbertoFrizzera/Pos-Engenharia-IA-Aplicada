const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
module.exports = {
  timeout: 5000,
  expect: { timeout: 5000 },
  reporter: [['list'], ['html']],
  use: {
    baseURL: 'https://erickwendel.github.io',
    headless: false,
    viewport: { width: 1280, height: 720 }
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
};
