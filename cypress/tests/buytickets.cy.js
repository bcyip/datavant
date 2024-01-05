import buyTicketData from '../fixtures/buy_tickets-date_data.json'

describe('Buy Tickets', () => {
  beforeEach(function(){
    cy.visit('passageiros/en/buy-tickets');
    cy.dismissCookie();
  })

  it('Cancel Ticket Purchase Before Payment ', () => {
    const today = new Date()
    cy.buyTicketDateFormatted(
      new Date(today.getFullYear(), today.getMonth(), today.getDate()+30),
      new Date(today.getFullYear(), today.getMonth(), today.getDate()+35))
      .then((dates) => {
        cy.enterPurchaseTicketData('Lagos', 'Porto - Campanha', dates)
      })
  })

  // buyTicketData.forEach((reservation) => {
  //   it('Buy Ticket departing ' + reservation.departDate + ' days from today and arriving ' + reservation.arriveDate + ' from today', () => {
  //
  //   })
  // })
})
