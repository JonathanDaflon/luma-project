Feature: Navigation Links
    As a Luma end-user,
    I want to check their Navigation links,
    So I can check whatever content I want

    Scenario Outline: Navigation links redirects to the desired pages
        Given I visit the homepage
        When I hover over the menu "<menu>"
        And I click the navigation link with text "<text>"
        Then I should be redirected to the page "<url>"
        Examples:
            | menu         | text                  | url                                                                              |
            | Platform     | Platform              | https://www.lumahealth.io/patient-success-platform/                              |
            | Platform     | Access & Retention    | https://www.lumahealth.io/patient-success-platform/patient-access-and-retention/ |
            | Platform     | Patient Communication | https://www.lumahealth.io/patient-success-platform/patient-communication/        |
            | Who We Serve | Who We Serve          | https://www.lumahealth.io/who-we-serve/                                          |
            | Integrations | EHR Integrations      | https://www.lumahealth.io/integrations-2/                                        |
            | Learn        | Learn Hub             | https://www.lumahealth.io/learn/                                                 |
