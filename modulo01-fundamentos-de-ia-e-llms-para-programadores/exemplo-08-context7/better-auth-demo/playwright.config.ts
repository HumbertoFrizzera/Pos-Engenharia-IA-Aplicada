import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'http://localhost:3001',
    headless: true,
  },
  testDir: './tests',
  webServer: {
    command: 'npm run dev -- --port 3001',
    port: 3001,
    timeout: 120000,
    reuseExistingServer: true,
  },
});
