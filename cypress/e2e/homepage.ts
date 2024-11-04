import { Before, Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  // disable Cypress's default behavior of logging all XMLHttpRequests and fetches to the Command Log
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
});

Given("I visit the homepage", () => {
  cy.visit("/");
});

Then("I should see the text {string}", (text: string) => {
  cy.contains(text);
});
