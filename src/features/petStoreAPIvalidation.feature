Feature: PetStore API validations
  As a user of the PetStore API
  I want to be able to perform various operations on pets
  So that I can manage pet information effectively

  @PetStoreAPI_TC01
  Scenario Outline: Add a new pet and find it by ID
    Given the PetStore API is available
    When I add a new pet with the following details
      | id        |                          1122 |
      | name      | Cat                           |
      | status    | available                     |
      | photoUrls | ["https://google.com/photo1"] |
    Then the response status should be 200
    And the response should contain the added pet details
    When I request the pet with ID 1122
    Then the response status should be 200

