import "cypress-mochawesome-reporter/cucumberSupport";
import "cypress-real-events";
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I hover over the menu {string}", (menu: string) => {
  cy.get("nav#navbar").within(() => {
    cy.contains("ul.main-menu-v2 a[title]", menu).parent("li").realHover();
  });
});

When("I click the navigation link with text {string}", (text: string) => {
  cy.contains("span", text).click();
});

Then("I should be redirected to the page {string}", (url: string) => {
  cy.url().should("equal", url);
});
