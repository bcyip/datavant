import buyTicketData from '../fixtures/buy_tickets-date_data.json'

describe('Buy Tickets', () => {
  beforeEach(function(){
    cy.visit('passageiros/en/buy-tickets');
    cy.dismissCookie();
  })

  it('Cancel Ticket Purchase Before Payment ', () => {
    const today = new Date()
    let departDate = new Date(today.getFullYear(), today.getMonth(), today.getDate()+3)
    let returnDate = new Date(today.getFullYear(), today.getMonth(), today.getDate()+5)
    
    cy.buyTicketDateFormatted(departDate, returnDate).then((dates) => {
      cy.enterPurchaseTicketData('Lagos', 'Porto - Campanha', dates)
    })
    cy.get('#searchTimetableForm > div > div:nth-child(4) > div.col-md-10.col-lg-10.mtop > p > input').click()
    cy.get('#exitButton').click()

    cy.get('#searchTimetableForm > div > div:nth-child(1) > div:nth-child(3) > div > input')
      .should('have.value', 'Lagos')
    cy.get('#arrival-date').should('have.value', 'Porto - Campanha')
    cy.formatDate(departDate).then((formattedDepartDate) => {
      cy.get('#datepicker-first').should('have.value', formattedDepartDate)
    })
    cy.formatDate(returnDate).then((formattedReturnDate) => {
      cy.get('#datepicker-second').should('have.value', formattedReturnDate)
    })
  })

  // buyTicketData.forEach((reservation) => {
  //   it('Buy Ticket departing ' + reservation.departDate + ' days from today and arriving ' + reservation.arriveDate + ' from today', () => {
  //
  //   })
  // })
})
