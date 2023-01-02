import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given('User accesses to the Expedia page', () => {
    cy.visit("https://www.expedia.com/")
    cy.title().should('eq', 'Expedia Travel: Vacation Homes, Hotels, Car Rentals, Flights & More')
})