const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  
  testDir: './e2e',   

  use: {
    headless: false,
    screenshot: 'on',
    video: 'retain-on-failure'
  },

  reporter: [['html', { open: 'never' }]]
});