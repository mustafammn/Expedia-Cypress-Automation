// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('CheckInOut', () => {
    const oneWeeks = () => {
      let currentTime = new Date(Date.now() + 12096e5)
      let month = currentTime.getMonth() + 1
      let day = currentTime.getDate()
      let year = currentTime.getFullYear()
      let oneWeek = `0${month}` + '-' + `0${day}`
      const paddedTime = oneWeek
        .match(/\d+/g)
        .map((e) => `0${e}`.slice(-2))
        .join('-')
      return year + '-' + paddedTime
    };
  
    cy.contains('Check-in').click({ force: true })
    cy.get('.bui-calendar__date--today').click()
    cy.get(`[data-date="${oneWeeks()}"]`).click()
  })