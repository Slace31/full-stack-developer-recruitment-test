const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    fileServerFolder: ".",
    fixturesFolder: "./src/fixtures",
    specPattern: "./src/integration/**/*.spec.{js,jsx,ts,tsx}",
    modifyObstructiveCode: false,
    supportFile: "./src/support/index.ts",
    video: true,
    videosFolder: "../../dist/cypress/apps/calendar-app-e2e/videos",
    screenshotsFolder: "../../dist/cypress/apps/calendar-app-e2e/screenshots",
    chromeWebSecurity: false
  },
})
