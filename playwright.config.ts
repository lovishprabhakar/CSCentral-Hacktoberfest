import { defineConfig, devices } from '@playwright/test';

require('dotenv').config();
const isLocal = process.env.local;
const setBaseURL = isLocal
  ? process.env.LOCAL_BASE_URL
  : process.env.PROD_BASE_URL;

export default defineConfig({
  testDir: './tests',
  globalSetup: './src/global-setup.ts',
  timeout: 30 * 1000,
  expect: {
    timeout: 8000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { outputFile: './playwright-report.html' }],
    ['json', { outputFile: './playwright-report.json' }],
  ],
  use: {
    baseURL: setBaseURL,
    actionTimeout: 0,
    trace: 'on',
    video: 'on',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
