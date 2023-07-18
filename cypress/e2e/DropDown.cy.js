/// <reference types="Cypress" />
describe('handler dropdown', () => {
    it.skip('Drop down with select', () => {
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get('#zcf_address_country').select('Italy').should('have.value', 'Italy')
    });

    it.skip('Drop down without select', () => {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get("span[aria-label='Country']").click()
        cy.get("input[role='combobox']").type("Italy").type('{enter}')
        cy.get("span[aria-label='Country']").should('have.text', 'Italy')
    });
    it.skip('Auto suggest dropdown', () => {
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('uzbekistan').should('have.value', 'uzbekistan')
        cy.wait(1500)
        cy.get('.suggestion-title').contains('Uzbekistan Airways').click()

    });
    it('Auto suggest dropdown', () => {
        cy.visit('https://www.google.com/')
        cy.get('#APjFqb').type('nba')
        cy.wait(2000)
        cy.get('div.wM6W7d>span').should('have.length', '12')
        // cy.get('div.wM6W7d>span').each($el=>{
        //     if($el.text() === 'nba players'){
        //         cy.wrap($el).click()
        //     }
        // })
        cy.get('div.wM6W7d>span').contains('nba players').click()
        cy.get('#APjFqb').should('have.value', 'nba players')
    });
})