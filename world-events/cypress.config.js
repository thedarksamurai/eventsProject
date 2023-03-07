const { defineConfig } = require("cypress");
module.exports = defineConfig({
  projectId: '7ccbgj',
  e2e: {
    baseUrl: "https://events-project-mrq3-3z2lsok6y-thedarksamurai.vercel.app/",
  },
});
