import buyTicketData from '../fixtures/buy_tickets-date_data.json'

describe('Buy Tickets', () => {
  beforeEach(function(){
    cy.visit('passageiros/en/buy-tickets');
    cy.dismissCookie();
  })

  it('Cancel Ticket Purchase Before Payment', () => {
    const today = new Date()
    cy.enterPurchaseTicketData('Lagos', 3, 'Porto - Campanha', 5)
  })

  // buyTicketData.forEach((reservation) => {
  //   it('Buy Ticket departing ' + reservation.departDate + ' days from today and arriving ' + reservation.arriveDate + ' from today', () => {
  //
  //   })
  // })
})
