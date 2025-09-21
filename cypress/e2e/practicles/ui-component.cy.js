/// <reference types="cypress" />

describe("Assert all the UI elemtns", () => {

    beforeEach(() => {
        cy.visit('/')  // Visit base URL set in cypress.config.js
    })

    it("To verify the login", () => {
        cy.contains("Forms").click()
        cy.contains("Form Layouts").click()

        const name = "Password"
        cy.get('#inputEmail1').type('test@test.com', { delay: 200 })
        cy.get('#inputPassword2').type(`${name}`)
    })

    it("To verify the dropdowns", () => {
        cy.contains('Modal & Overlays').click()
        cy.contains('Toastr').click()

        cy.contains('div', 'Toast type:').within(() => {

            cy.get('select').should('be.visible').then(($dropdown) => {

                cy.wrap($dropdown).find('option').each(($option) => {

                    const optionText = $option.text().trim()

                    cy.wrap($dropdown).select(optionText)

                    cy.wrap($dropdown).find(':selected').should('have.text', optionText)
                })
            })
        })


        // cy.contains('div','Position:').find('nb-select').click()
        // cy.get('.option-list').contains('bottom-start').click()
        // cy.contains('div','Position:').find('nb-select').should('have.text','bottom-start')    

        cy.get('button.select-button').click({ multiple: true })

        cy.get('nb-option').each(($option) => {
            const selectOption = $option.text().trim()

            cy.wrap($option).click()

            cy.get('button.select-button').should('have.length', selectOption)

            cy.get('button.select-button').click({ multiple: true });

        })
    })

    it.only("Verify that all elements are selected and asserted", () => {
        cy.contains('Modal & Overlays').click()
        cy.contains('Toastr').click()

       // cy.get('button.select-button').click({ multiple: true });

        const expectedOptions = [
            "top-left",
            "bottom-left",
            "bottom-right",
            "top-end",
            "top-start",
            "top-right"
        ];

        expectedOptions.forEach((expectedOption) => {

            // Open the dropdown each time before selecting
            cy.get('button.select-button').click({multiple: true});

            // Find the option that matches and click it
            cy.get('nb-option').contains(expectedOption).click();

            // Verify the button now shows the selected option
            cy.get('button.select-button')
                .should('contain.text', expectedOption);
        })

        // cy.get('nb-option').each(($option, index) => {

        //     const actaulValue = $option.to.text().trim()

        //     expect(actaulValue).to.eq(expectedOptions[index])

        //     cy.wrap($option).click()

        //     cy.get('button.select-button').should('contain.text', actaulValue)

        //     if (index < expectedOptions.length - 1) {

        //         cy.get('button.select-button').click({});

        //     }

        // })
    })
})
