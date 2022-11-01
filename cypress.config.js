const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: "po15ym",

  dashboardRun:
    "npx cypress run --record --key 26b315aa-178e-4c8d-a612-fd90910c6d96",

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    experimentalWebKitSupport: true
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
