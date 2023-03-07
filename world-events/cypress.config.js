const { defineConfig } = require("cypress");
module.exports = defineConfig({
  projectId: '7ccbgj',
  e2e: {
    baseUrl: "http://localhost:3000",
  },
});
