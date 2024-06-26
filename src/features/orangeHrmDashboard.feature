@Regression_OrangeHRM
Feature: Validate dropdown menus and number of records are displaying on the page
  As an user
  I want to login into the application
  and I want to validate dropdown menus and number records are displaying under Education sub menu.

  @OrangeHRM_Login_TestCase
  Scenario Outline: Login with valid credentials and validate admin page records
    Given I launch orange HRM url
    When I provide "<username>" and "<password>" and click on login button
    Then I landed on orangeHRM dashboard page
    And I validate left side panel menu from the list as "<leftPanelMenu>"
    And I click on Admin menu
    Then I can see Admin-User Management page is displayed
    And I click on "Qualifications" dropdown menu
    And I click on "Education" submenu
    Then I validate no of records found as "<numberOfRecords>"

    Examples:
      | username | password | leftPanelMenu                                                                                   | numberOfRecords |
      | Admin    | admin123 | Admin,PIM,Leave,Time,Recruitment,My Info,Performance,Dashboard,Directory,Maintenance,Claim,Buzz | 4               |
