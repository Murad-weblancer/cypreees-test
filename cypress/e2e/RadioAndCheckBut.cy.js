describe('Radio and Check', () => {
    // it('Radio', () => {
    //     cy.visit('https://itera-qa.azurewebsites.net/home/automation')

    //     // visibility of the elements
    //     cy.get('input#male').should('be.visible')
    //     cy.get('input#female').should('be.visible')

    //     // select of radio butt
    //     cy.get('input#male').check().should('be.checked')
    //     cy.get('input#female').should('not.be.checked')
    //     cy.wait(2200)

    //     // select of radio butt
    //     cy.get('input#female').check().should('be.checked')
    //     cy.get('input#male').should('not.be.checked')
    // });
    it('Check', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        // visibility of the elements
        cy.get('input#monday').should('be.visible')
        cy.get('input#tuesday').should('be.visible')

        // selecting checkbox
        cy.get('input#monday').check().should('be.checked')
        cy.get('input#tuesday').check().should('be.checked')

        // unselecting checkbox
        cy.get('input#monday').uncheck().should('not.be.checked')
        cy.get('input#tuesday').uncheck().should('not.be.checked')

        // selecting the all checkbox
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        cy.wait(2000)
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        cy.wait(1000)

        // selecting first checkbox
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')

        // unselecting first checkbox
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')
        
    });
})