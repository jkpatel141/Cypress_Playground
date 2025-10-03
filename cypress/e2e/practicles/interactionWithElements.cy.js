/// <reference types="cypress" />

describe("Check the elements how to automate them in cypress", () => {
    it("handle the windows tab", () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example a').invoke('removeAttr', 'target').click()

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        cy.contains('New Window').should('be.visible')
    })

    it("Add remove element", () => {
        cy.visit('https://the-internet.herokuapp.com/add_remove_elements/')

        for (let i = 0; i < 9; i++) {
            cy.get('.example button').contains('Add Element').click()
        }
        cy.get('#elements button').should('have.length',9)

         cy.get('#elements button').then(($btn) => {
            const check = $btn.length;
            for(let i=0; i < check; i++){
                cy.get('#elements button').first().click();
                cy.get('#elements button').should('have.length', check - (i + 1))
            }
         })         
    })
})