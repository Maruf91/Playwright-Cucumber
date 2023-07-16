const playwright = require('@playwright/test');
const {
  Before,
  After,
  BeforeAll,
  AfterAll,
  AfterStep
} = require('@cucumber/cucumber');
require('dotenv').config();
const { getDate } = require('../../utils/functions');
const currentDate = getDate();

BeforeAll(async () => {
  console.log('Launch Browser');
  switch (process.env.BROWSER) {
    case 'chromium':
      global.browser = await playwright['chromium'].launch({
        headless: false,
        args: ['--start-maximized', '--kiosk']
      });
      break;
    case 'firefox':
      global.browser = await playwright['firefox'].launch({
        headless: false,
        args: ['--start-maximized', '--kiosk']
      });
      break;
    default:
      throw new Error(`Unsupported browser: ${process.env.BROWSER}`);
  }
});

AfterAll(async () => {
  console.log('Close Browser');
  await global.browser.close();
});

Before(async () => {
  console.log('Create new context and page');
  global.context = await global.browser.newContext({
    viewport: null
  });
  global.page = await global.context.newPage();
});

After(async () => {
  console.log('Close context and page');
  await page.close();
  await context.close();
});
let stepIndex = 1;
AfterStep(async function () {
  this.attach(
    await page.screenshot({
      path: `./reports/cucumberScreenshots/step-${stepIndex++}-${currentDate}.png`,
      fullpage: true
    }),
    'image/png'
  );
});
