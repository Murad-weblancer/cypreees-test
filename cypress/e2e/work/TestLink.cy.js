describe('TestLink', () => {
    it('Auth and suite', () => {
        cy.visit('http://testlink.fido.uz/login.php?note=logout&viewer=')
        cy.get('input#tl_login').type('murad.djalalov').should('have.value', 'murad.djalalov')
        cy.get('input#tl_password').type('md-tester').should('have.value', 'md-tester')
        cy.get('input#tl_login_button').click()
        // suite
        cy.wait(1500)
    });
})