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

Cypress.Commands.add('enterPurchaseTicketData', (departCity, returnCity, dates) => {
  cy.get('#searchTimetableForm > div > div:nth-child(1) > div:nth-child(3) > div > input')
    .type(departCity)
  cy.get('#searchTimetableForm > div > div:nth-child(1) > div:nth-child(3) > div > ul > li > a')
    .contains(departCity).click()

  //TODO: rework date selection
  // - depart date prioritizes time
  // - return date mimics clicking through months if necessary (also because you have to)
  cy.get('#arrival-date').type(returnCity)
  cy.get('#searchTimetableForm > div > div:nth-child(1) > div:nth-child(4) > div > ul > li.active > a')
    .contains(returnCity).click()
  cy.get('#datepicker-first').clear()
  cy.get('#datepicker-first').type(dates.departDate)
  cy.get('[class*="picker__day--selected"]').contains(dates.departDate.split(/(\s+)/)[0]).click()

  let exactReturnDateRegex = new RegExp("^" + dates.returnDate.split(/(\s+)/)[0] + "$")
  cy.get('#datepicker-second').click()
  //only return up to 3 months in advance
  for(let i=0; i<dates.delta; i++){
    cy.get('#datepicker-second_root > div > div > div > div > div.picker__header > div.picker__nav--next').click()
  }
  cy.get('#datepicker-second_table').contains(exactReturnDateRegex).click()
})

Cypress.Commands.add('buyTicketDateFormatted', (departDate, returnDate) => {
  let delta = 0

  //TODO: utilize formatDate, first glance nesting will get nasty
  let departDay = departDate.getDate()
  let departMonth = departDate.toLocaleString('default', { month: 'long' });
  let departYear = departDate.getFullYear()
  let formattedDepartDate = departDay + " " + departMonth + ", " + departYear

  let returnDay = returnDate.getDate()
  let returnMonth = returnDate.toLocaleString('default', { month: 'long' });
  let returnYear = returnDate.getFullYear()
  let formattedReturnDate = returnDay + " " + returnMonth + ", " + returnYear

  //dates getMonth returns 0-11
  //TODO: Still need to handle edge case Nov-Feb case
  delta = returnDate.getMonth()

  return cy.wrap({'departDate': formattedDepartDate, 'returnDate': formattedReturnDate, 'delta': delta})
})

Cypress.Commands.add('formatDate', (date) => {
  let day = date.getDate()
  let month = date.toLocaleString('default', { month: 'long' });
  let year = date.getFullYear()
  let formattedDate = day + " " + month + ", " + year
  return cy.wrap(formattedDate)
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
