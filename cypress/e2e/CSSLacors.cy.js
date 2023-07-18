describe("CSSLocators", () => {
    it('cssloca', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get('input.search_query').type('T-Shirts')
        .should('have.value', 'T-Shirts')
        cy.get("[name='submit_search']").click()
        cy.get("span.lighter").contains('T-Shirts')
        
    });
})