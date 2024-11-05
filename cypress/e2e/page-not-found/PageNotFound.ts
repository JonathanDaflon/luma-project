import "cypress-mochawesome-reporter/cucumberSupport";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit a wrong page", () => {
  cy.intercept("GET", "/wrongpage", () => {}).as("wrongpage");
  cy.visit("/wrongpage", { failOnStatusCode: false });
});

When("I receive a 404 error", () => {
  cy.wait("@wrongpage").its("response.statusCode").should("eq", 404);
});

Then("I should the 404 page", () => {
  cy.contains("Page Not Found");
});
