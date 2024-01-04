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
Cypress.Commands.add('dismissCookie', () => {
  cy.get('body > div.wrapper > div:nth-child(1) > div.header > div:nth-child(2) > div > div > div > div > div > a')
    .contains('I accept the use of cookies').then(($btn) => {
      if ($btn.length){
        $btn.click()
      } else {
        cy.log("cookie notification already dismissed")
      }
    });
})

Cypress.Commands.add('enterPurchaseTicketData', (departCity, departDate, arriveCity, arriveDate) => {
  cy.get('#searchTimetableForm > div > div:nth-child(1) > div:nth-child(3) > div > input')
    .type(departCity)
  cy.get('#arrival-date').type(arriveCity)

  cy.get('#datepicker-first').type(departDate)

  cy.get('#datepicker-second').type(arriveDate)
})
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
