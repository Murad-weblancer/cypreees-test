describe('XPATHLactors', ()=>{
    it('xpath', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.xpath("//ul[@id='blockbestsellers']/li").should('have.length', 6)
    });
})