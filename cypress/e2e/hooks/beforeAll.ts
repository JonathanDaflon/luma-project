import { Before } from "@badeball/cypress-cucumber-preprocessor";

Before(function () {
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
});
