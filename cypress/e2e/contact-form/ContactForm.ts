import "cypress-mochawesome-reporter/cucumberSupport";
import "cypress-iframe";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the contact form page", () => {
  cy.visit("book-a-demo");
  cy.get("iframe");
});

When("I fill the fields with invalid information", () => {
  cy.iframe("iframe.iframe-full-height")
    .find("input[name='firstname']")
    .click();

  cy.iframe("iframe.iframe-full-height").find("input[name='lastname']").click();
  cy.iframe("iframe.iframe-full-height")
    .find("input[name='email']")
    .type("abc");
});

When("I fill the fields with valid information", () => {
  cy.fixture("ContactForm").then((contact) => {
    cy.iframe("iframe.iframe-full-height")
      .find("input[name='firstname']")
      .type(contact.firstName);

    cy.iframe("iframe.iframe-full-height")
      .find("input[name='lastname']")
      .type(contact.lastName);

    cy.iframe("iframe.iframe-full-height")
      .find("input[name='email']")
      .type(contact.email);

    cy.iframe("iframe.iframe-full-height")
      .find("input[name='organization_name']")
      .type(contact.company);

    cy.iframe("iframe.iframe-full-height")
      .find("select[name='provider_range']")
      .select(contact.range);

    cy.iframe("iframe.iframe-full-height")
      .find("select[name='ehr']")
      .select(contact.ehr);

    cy.iframe("iframe.iframe-full-height")
      .find("select[name='organization_type']")
      .select(contact.type);

    cy.iframe("iframe.iframe-full-height")
      .find("div.hs_what_are_you_interested_in_ textarea")
      .type(contact.area1);

    cy.iframe("iframe.iframe-full-height")
      .find("div.hs_how_d_you_hear_about_us_ textarea")
      .type(contact.area2);

    cy.iframe("iframe.iframe-full-height").find("input[type='submit']").click();
  });
});

Then("I should see a validation error", () => {
  cy.iframe("iframe.iframe-full-height")
    .find("div.hs_firstname ul[role='alert'] label")
    .should("have.text", "Please complete this required field.");

  cy.iframe("iframe.iframe-full-height")
    .find("div.hs_lastname ul[role='alert']")
    .should("have.text", "Please complete this required field.");

  cy.iframe("iframe.iframe-full-height")
    .find("div.hs_email ul[role='alert']")
    .should("have.text", "Email must be formatted correctly.");
});

Then("I should not see any validation errors", () => {
  cy.iframe("iframe.iframe-full-height")
    .find("ul[role='alert']")
    .should("not.exist");
});

// Then("I should be redirected to the thank you page", () => {
//   cy.url().should("eq", "https://www.lumahealth.io/thank-you/");
// });
