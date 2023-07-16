const reporter = require('cucumber-html-reporter');
const { getDate } = require('../src/utils/functions');
const currentDate = getDate();
require('dotenv').config();

let getPlatform = () => {
  if (process.platform === 'win32') return 'Windows';
  else if (process.platform === 'darwin') return 'Mac';
  else if (process.platform === 'linux') return 'Linux';
  else return 'Unknown Platform';
};

const options = {
  theme: 'bootstrap',
  jsonFile: 'cucumber/cucumber_report.json',
  output: 'reports/cucumberReports/cucumber_report_' + currentDate + '.html',
  reportSuiteAsScenario: true,
  scenarioTimestamp: true,
  screenshotsDirectory: './reports/cucumberScreenshots/',
  storeScreenshots: false,
  launchReport: true,
  metadata: {
    'App Version': 'Sample App 2.0.0',
    'Test Environment': `${process.env.TEST_ENVIRONMENT}`,
    Browser: `${process.env.BROWSER}`,
    Platform: getPlatform()
  }
};

reporter.generate(options);
