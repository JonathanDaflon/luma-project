import "cypress-mochawesome-reporter/cucumberSupport";
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I change devices to a tablet", () => {
  cy.viewport("ipad-2");
});

When("I change devices to a smartphone", () => {
  cy.viewport("iphone-8");
});

Then("I should not see any elements designed for desktop", () => {
  cy.get("*.hide-desktop").should("not.be.visible");
});

Then("I should be able to use the interact with the side menu", () => {
  cy.get("a.navbar-trigger").click();
  cy.get("ul.main-menu-v2 > li").should("have.length", 5);
  cy.get("a.navbar-trigger").click();
});

Then("I should see all the sections at display", () => {
  cy.get("section.hero-full-width-image-section").should("be.visible");
  cy.get("section.top-logos").should("be.visible");
  cy.get("section.need-care").should("be.visible");
  cy.get("div.introduce-spark").should("be.visible");
  cy.get("section.built-for-integration").should("be.visible");
  cy.get("div.why-luma").should("be.visible");
  cy.get("div.owl-carousel").should("be.visible").and("have.length", 3);
  cy.get("div.workflow-content").should("be.visible");
  cy.get("div.workflow-container").should("be.visible");
  cy.get("section.trusted-by").should("be.visible");
  cy.get("div.counter-container").should("be.visible");
  cy.get("section.get-started-patient-success").should("be.visible");
  cy.get("footer").should("be.visible");
});
