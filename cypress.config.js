const { defineConfig } = require("cypress");



module.exports = defineConfig({
  e2e: {
    
      "chromeWebSecurity": false,
      "experimentalStudio": true,//cypress estudio beta

    
    // baseUrl: 'https://www.google.com/',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
