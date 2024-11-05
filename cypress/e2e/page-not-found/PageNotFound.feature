Feature: Page Not Found
    As a Luma end-user,
    I want to be correctly informed of a wrong domain,
    So I can correctly visualize their website

    Scenario: Visiting a wrong page
        Given I visit a wrong page
        When I receive a 404 error
        And I should the 404 page