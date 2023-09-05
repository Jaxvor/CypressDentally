const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    chromeWebSecurity: false, //Due to an issue with Saucelabs demo site & Cypress, I had to switch off this setting: https://github.com/cypress-io/cypress/issues/21213
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
});
