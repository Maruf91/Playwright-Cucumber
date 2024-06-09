@POC
Feature: Login action
  As a user
  I want to login into application

  @Login_TestCase_01
  Scenario Outline: Login with valid credentials
    Given I visit a login page
    When I fill the login form with valid credentials
    Then I should see the home page
    Then I click on product from listing

    Examples:
      | username           | password     |
      | standard_user-TC01 | secret_sauce |
      | visual_user-TC02   | secret_sauce |

  @Login_TestCase_02
  Scenario Outline: Try to login with invalid credentials <username>
    Given I visit a login page
    When I fill the login form with "<username>" and "<password>"
    Then I wait for "3" seconds

    Examples:
      | username    | password |
      | fail-1-TC01 | fail-1   |
      # | fail-2-TC02 | fail-2   |
      # | fail-3-TC02 | fail-3   |
