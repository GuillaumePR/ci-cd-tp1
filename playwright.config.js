// playwright.config.js
const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "tests/e2e", // uniquement les tests E2E
  testIgnore: ["**/*.test.js"], // ignore les tests Jest (unitaires)
});
