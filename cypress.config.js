const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern:[
      "**/1-getting-started/*.js",
      "**/2-advanced-examples/*.js"
    ],
    "viewportWidth": 1920,
    "viewportHeight": 1080,
    baseUrl: "https://ultimateqa.com/"
  },
});
