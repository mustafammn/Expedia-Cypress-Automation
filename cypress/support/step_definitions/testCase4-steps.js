import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
const flightsPage = require("../../pageObjectModel/flightsPage.json");

Given("User is on Flights tab", () => {
  cy.get(flightsPage.flights).click();
  cy.title().should("contains", "Flights");
});

And(
  "User clicks on One-way and validate that Returning date field no longer appears",
  () => {
    cy.get(flightsPage.oneWay).click();
    cy.get(flightsPage.returning).should("not.exist");
    cy.wait(1000);
  }
);

And(
  "User clicks on Roundtrip and validate the Returning date field is visible",
  () => {
    cy.get(flightsPage.roundTrip).click();
    cy.get(flightsPage.returning).should("exist");
  }
);
