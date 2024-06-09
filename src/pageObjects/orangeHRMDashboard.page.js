const { expect } = require('@playwright/test');

class orangeHRMDashboard {
  constructor() {
    this.dashboardHeader = '//h6';
    this.leftPannelMenus = "//ul[@class='oxd-main-menu']/li";
    this.adminMenuButton = "//ul[@class='oxd-main-menu']/li[contains(.,'Admin')]";
    this.qualificationMenu = "//span[contains(.,'Qualifications')]";
    this.educationMenu = "//ul[@class='oxd-dropdown-menu']/li[2]";
    this.recordsDisplay = "//div[contains(@class,'orangehrm-horizontal-padding')]/span";
    this.adminUserManagementHeader = "//span[contains(@class,'oxd-topbar-header-breadcrumb')]";
  }
  async dashboardPAgeValidation() {
    const dashboardHeaderText = await page.locator(this.dashboardHeader).textContent();
    console.log('Actual header name is: ', dashboardHeaderText);
    expect(dashboardHeaderText).toEqual('Dashboard');
    console.log('Successfully landed on Dashboard!');
    await page.waitForTimeout(2000);
  }
  async clickOnAdminMenu() {
    await page.locator(this.adminMenuButton).click();
    console.log('Clicked on Admin menu');
    await page.waitForTimeout(2000);
  }
  async adminPageValidation() {
    const admHeader = await page.locator(this.adminUserManagementHeader).textContent();
    console.log('Actual admin header is: ', admHeader);
    expect(admHeader).toEqual('AdminUser Management');
    console.log('Admin page is displayed...');
  }
  async clickOnQualificationMenu(qualificationMenu) {
    if (qualificationMenu == 'Qualifications') {
      await page.locator(this.qualificationMenu).click();
      console.log('Clicked on Qualification menu');
    }
  }
  async clickOnEducationMenu(eduMenu) {
    if (eduMenu == 'Education') {
      await page.locator(this.educationMenu).click();
      console.log('Clicked on Education menu');
    }
  }
  async numberOfRecordsValidation(numberOfRecords) {
    const actualNoOfRecords = await page.locator(this.recordsDisplay).textContent();
    console.log('Records found string is: ', actualNoOfRecords);
    let extractedNumber;
    let match = actualNoOfRecords.match(/\((\d+)\)/);
    if (match) {
      extractedNumber = match[1];
      console.log('Extracted number is: ', extractedNumber);
    }
    console.log('Number of records found: ', extractedNumber);
    expect(extractedNumber).toEqual(numberOfRecords);
    console.log('Record validation is successful!!');
  }
  async leftPanelMenusValidation(allMenus) {
    const allMenuList = allMenus.includes(',') ? allMenus.split(',') : [allMenus];
    let expectedMenuList = [];
    for (let i = 0; i < allMenuList.length; i++) {
      const currentMenuText = allMenuList[i];
      console.log('Current menu is: ', currentMenuText);
      expectedMenuList.push(currentMenuText);
    }
    let actualMenuList = [];
    const elements = await page.locator(this.leftPannelMenus);
    for (let i = 0; i < (await elements.count()); i++) {
      const innerText = await page.locator(this.leftPannelMenus).nth(i).innerText();
      actualMenuList.push(innerText.trim());
    }
    console.log('Actual list is: ', actualMenuList);
    console.log('Expected list is: ', expectedMenuList);
    try {
      expect(actualMenuList).toEqual(expectedMenuList);
      console.log('Left panel menu is matched!');
    } catch (error) {
      throw new Error(`Left panel menu has not matched!`);
    }
  }
}
module.exports = { orangeHRMDashboard };
