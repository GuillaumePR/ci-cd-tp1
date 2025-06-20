// playwright.config.mjs

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: "./tests/e2e",
  timeout: 30000,
  retries: 1,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: "retain-on-failure",
  },
  reporter: [["list"], ["html", { open: "never" }]],
};

export default config;
