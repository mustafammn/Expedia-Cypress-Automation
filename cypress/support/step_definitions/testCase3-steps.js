import { expect } from "chai";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
const flightsPage = require("../../pageObjectModel/flightsPage.json");

Given("User is on Flights tab", () => {
  cy.get(flightsPage.flights).click();
});

And("User confirms Roundtrip is selected by default", () => {
  cy.get(flightsPage.roundTripActive).should(
    "have.class",
    "uitk-tab uitk-tab-button active"
  );
});

And(
  'User confirms "Leaving from, Going to, Departing and Returning" labels exist',
  () => {
    cy.get(flightsPage.leavingFrom)
      .invoke("text")
      .then((elementValue) => {
        expect(elementValue).to.eq("Leaving from:");
      });

    cy.get(flightsPage.goingTo)
      .invoke("text")
      .then((elementValue) => {
        expect(elementValue).to.eq("Going to:");
      });

    cy.get(flightsPage.departing)
      .invoke("text")
      .then((elementValue) => {
        expect(elementValue).to.contains("Departing");
      });

    cy.get(flightsPage.returning)
      .invoke("text")
      .then((elementValue) => {
        expect(elementValue).to.contains("Returning");
      });
  }
);

When("User clicks on the Economy dropdown", () => {
  cy.get(flightsPage.economyDropdown).click();
});

And("User selects First class", () => {
  cy.get(flightsPage.economyDropdownOptionFirstClass).click();
});

Then("User confirms the dropdown is updated to First class", () => {
  cy.get(flightsPage.economyDropdown)
    .invoke("text")
    .then((elemenetvalue) => {
      expect(elemenetvalue).to.eq("First class");
    });
});
