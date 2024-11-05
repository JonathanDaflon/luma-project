Feature: Contact Form
    As a Luma end-user,
    I want to contact them,
    So I can utilize their product

    Background: Visiting the homepage
        Given I visit the contact form page

    Scenario: Contact form validates user input
        When I fill the fields with invalid information
        Then I should see a validation error

    Scenario: Contact form can be filled successfully
        When I fill the fields with valid information
        Then I should not see any validation errors
# Then I should be redirected to the thank you page / not possible due to captcha