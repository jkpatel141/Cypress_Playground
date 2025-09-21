describe("To test the login functaionlity", () => {
    it("To test the login successfully", () => {
        cy.visit('https://playground.bondaracademy.com/pages/iot-dashboard')

        cy.get('.fixed').first().within(() => {
            cy.get('.size-small').within(() => {
                cy.get('.ng-star-inserted').first().click()

            })
        })
        cy.get('.search-input').should('be.visible').and ('be.focused')
        cy.get('.close-button appearance-ghost size-medium shape-rectangle icon-start icon-end status-basic nb-transition').click()
    })
})