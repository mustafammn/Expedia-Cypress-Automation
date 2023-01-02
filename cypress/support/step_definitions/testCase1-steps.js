import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
const staysPage = require("../../pageObjectModel/staysPage.json");

Given("User searches for the {string} on Stays tab", (keyword) => {
  cy.get(staysPage.goingToButton).click();
  cy.get(staysPage.goingToField).type(keyword);
  cy.wait(1000);
});

And("User selects the first option from the drop-down", () => {
  cy.get(staysPage.goingToDropdownList)
    .find(staysPage.goingToDropdownOptions)
    .contains("Universal Orlando Resort")
    .click();
});

And(
  "User selects Check-in and Check-out dates for a week from the current date",
  () => {
    cy.get(staysPage.checkIn).click();
    cy.get(staysPage.datePickerCurrentDay).first().click();
    cy.get(staysPage.datePickerCurrentDay).eq(5).click();
    cy.get(staysPage.datePickerDoneButton).click();
  }
);

And("User clicks on Search button", () => {
  cy.get(staysPage.searchHotel).click();
});