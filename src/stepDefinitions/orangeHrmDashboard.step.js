const { Given, When, Then } = require('@cucumber/cucumber');
const { orangeHRMLoginPage } = require('./../pageObjects/orangeHRMLogin.page');
const { orangeHRMDashboard } = require('./../pageObjects/orangeHRMDashboard.page');
const loginPage = new orangeHRMLoginPage();
const dashBoardPage = new orangeHRMDashboard();

Given('I launch orange HRM url', async () => {
  await loginPage.launchURL();
});
When('I provide {string} and {string} and click on login button', async (username, password) => {
  await loginPage.loginProcess(username, password);
});
Then('I landed on orangeHRM dashboard page', async () => {
  await dashBoardPage.dashboardPAgeValidation();
});
Then('I validate left side panel menu from the list as {string}', async (leftPanelMenus) => {
  await dashBoardPage.leftPanelMenusValidation(leftPanelMenus);
});
Then('I click on Admin menu', async () => {
  await dashBoardPage.clickOnAdminMenu();
});
Then('I can see Admin-User Management page is displayed', async () => {
  await dashBoardPage.adminPageValidation();
});
Then('I click on {string} dropdown menu', async (qualificationMenu) => {
  await dashBoardPage.clickOnQualificationMenu(qualificationMenu);
});
Then('I click on {string} submenu', async (eduMenu) => {
  await dashBoardPage.clickOnEducationMenu(eduMenu);
});
Then('I validate no of records found as {string}', async (numberOfRecords) => {
  await dashBoardPage.numberOfRecordsValidation(numberOfRecords);
});
