
describe('Itsm', () => {
    it('Bag-report', () => {
        cy.visit('https://itsm.fido.uz/#/auth')
        cy.get('#mat-input-1').type('murad.djalalov')
            .should('have.value', 'murad.djalalov')
        cy.get('#mat-input-2').type('23072002mm')
        // cy.get('#mat-input-2').type('{enter}')
        cy.get("button[class='signin-button mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted']").click()
        cy.wait(2000)
        cy.get('.user-image').click()
        // cy.get('.fio-content').should('have.text', ' Джалалов Мурад Элдарович ')
        let exName = ' Джалалов Мурад Элдарович '

        cy.get('.fio-content').then(x => {
            let actName = x.text()
            expect(actName).to.equal(exName)
        })
        cy.wait(2000)
        cy.get('body').click()
        cy.get('body app-root app-doc-tiles:nth-child(6)').click()
        cy.wait(1000)
        cy.xpath("//body//app-root//div[@fxlayout='row']//div[@fxlayout='row']//button[2]").click()
        cy.get("#mat-input-41").type('Я Авто-Тест').should('have.value', 'Я Авто-Тест')
        cy.get(".ql-editor.ql-blank").type('Я был написан Мурадом:)')
        cy.get("#mat-select-26").click()
        cy.get("#mat-option-506").click()
        cy.get("#mat-select-28").click()
        cy.get("#mat-option-505").click()
        cy.get("mat-datepicker-toggle[class='mat-datepicker-toggle ng-tns-c38-101'] button[aria-label='Open calendar']").click()
        cy.get("button[aria-label='20.07.2023']").click()
        cy.wait(2000)
    });
})
