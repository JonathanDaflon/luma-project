import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the homepage", () => {
  cy.visit("/");
  cy.title().should("equal", "Luma Health | Patient Success Platform");
});

Then("I should see the text {string}", (text: string) => {
  cy.contains(text).should("be.visible");
});

Then("I should see the navbar section", () => {
  cy.get("nav#navbar")
    .should("be.visible")
    .within(() => {
      cy.get("a.navbar-logo").should("have.attr", "title", "luma");

      cy.get("ul.main-menu-v2").should("be.visible");

      cy.get("div.actions")
        .get("a#header_login")
        .should("be.visible")
        .and("have.text", "Log in");
    });
});

Then("I should see the hero section", () => {
  cy.get("div.hero-text-container").within(() => {
    cy.get("h1.hero-section-title")
      .should("be.visible")
      .and("contain.text", "Manual Tasks’ Worst Nightmare");

    cy.get("p.hero-section-subtitle").should("be.visible");

    cy.get("div.hero-button-group").within(() => {
      cy.get("a[title='Build your demo']")
        .should("be.visible")
        .and("have.text", "Build your demo");

      cy.get("a[title='See what it does']")
        .should("be.visible")
        .and("have.text", "See what it does");
    });
  });
});
