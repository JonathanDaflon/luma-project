Feature: Home Page
    As a Luma end-user,
    I want to check their Home page,
    So I can utilize their product

    Background: I visit the homepage
        Given I visit the homepage

    Scenario: Home page loads successfully
        Then I should see the text "Manual Tasks’ Worst Nightmare"

    Scenario: Home page sections and elements are displayed correctly
        Then I should see the navbar section
        And I should see the hero section