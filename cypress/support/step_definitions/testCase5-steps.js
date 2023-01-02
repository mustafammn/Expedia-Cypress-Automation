import { expect } from "chai";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
const homePage = require("../../pageObjectModel/homePage.json");


Given(
  'User clicks on each of the following tabs "Stays, Flights, Cars, Packages, Things to do and Cruises" and validates Search button appears',
  () => {
    const tabs = [
      cy.get(homePage.stays),
      cy.get(homePage.flights),
      cy.get(homePage.cars),
      cy.get(homePage.packages),
      cy.get(homePage.thingsToDo),
      cy.get(homePage.cruises),
    ]

    cy.get(homePage.tabs).each((item, index) => {
      cy.wrap(item).click(tabs[index]);
      cy.get(homePage.searchButton)
        .invoke("text")
        .then((elemenetvalue) => {
          expect(elemenetvalue).to.eq("Search")
        })
    })
  }
)
