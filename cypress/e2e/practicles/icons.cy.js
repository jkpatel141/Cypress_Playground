/// <reference types="cypress" />

describe("Verify alll the icons behavior", () => {
    beforeEach(() => {
        cy.visit('/')  // Visit base URL set in cypress.config.js
    })
    it("Verify the Light icon works as expected", () => {

        const darkColor = 'rgb(34, 43, 69)';
        const lightColor = 'rgb(143, 155, 179)';
        const mainTitle = ['Light', 'Roller Shades', 'Wireless Audio', 'Coffee Maker'];
        const witch = ['ON', 'OFF'];

        cy.get('ngx-dashboard div.row ngx-status-card').each(($card, index) => {
            cy.wrap($card).within(() => {
                cy.get('.title.h5').should('have.text', mainTitle[index]).and('have.css', 'font-size', '22px').and('have.css', 'color', darkColor)
                cy.get('.status.paragraph-2').should('have.text', witch[0]).and('have.css', 'font-size', '13px')

                cy.get('.icon-container').click()

                cy.get('.title.h5').should('have.text', mainTitle[index]).and('have.css', 'font-size', '22px').and('have.css', 'color', lightColor)
                cy.get('.status.paragraph-2').should('have.text', witch[1]).and('have.css', 'font-size', '13px')
            })
        })
    })
})