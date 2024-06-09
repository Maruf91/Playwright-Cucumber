class orangeHRMLoginPage {
  constructor() {
    this.userName = "//input[@name='username']";
    this.password = "//input[@name='password']";
    this.loginButton = "//button[contains(.,'Login')]";
  }
  /* Here explicit waits have been used to take the screenshot properly! */
  async launchURL() {
    await page.goto(baseURL);
    await page.waitForTimeout(1000);
  }
  async loginProcess(username, password) {
    await page.locator(this.userName).type(username);
    await page.locator(this.password).type(password);
    await page.waitForTimeout(1000);
    await page.locator(this.loginButton).click();
  }
}
module.exports = { orangeHRMLoginPage };
