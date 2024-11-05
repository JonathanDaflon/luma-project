Feature: Responsive Design
    As a Luma end-user,
    I want to check their responsive design,
    So I can utilize any device to access their website

    Background: Visiting the homepage
        Given I visit the homepage

    Scenario: Website is responsive on tablets
        When I change devices to a tablet
        Then I should not see any elements designed for desktop
        And I should be able to use the interact with the side menu
        And I should see all the sections at display

    Scenario: Website is responsive on smartphones
        When I change devices to a smartphone
        Then I should not see any elements designed for desktop
        And I should be able to use the interact with the side menu
        And I should see all the sections at display