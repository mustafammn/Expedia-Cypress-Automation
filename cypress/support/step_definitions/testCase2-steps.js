import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
const staysPage = require("../../pageObjectModel/staysPage.json");

And("User clicks on Travelers Dropdown", () => {
  cy.get(staysPage.travellers).click();
});

And("User selects two adults and two children", () => {
  cy.get(staysPage.childrenPlus).dblclick();
});

And("User sets the children`s ages to 8 and 10 and submit", () => {
  cy.get(staysPage.child1Age).select("8");
  cy.get(staysPage.child2Age).select("10");
  cy.get(staysPage.travellersDoneButton).click();
});

Then("User Asserts that the submission was successful", () => {
  cy.get(staysPage.travellers)
    .invoke("text")
    .then((elemenetvalue) => {
      expect(elemenetvalue).to.contains("4 travelers");
    });
});
