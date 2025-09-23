import LoginPage from "../../../pages/encapsulation.js"

describe("Login Test", () => {

    beforeEach(() => {
        cy.visit('/')  // Visit base URL set in cypress.config.js
    })

    const login = new LoginPage()
    it("To verify the login attempt", () => {

        cy.fixture('credentials').then((data) => {
            cy.contains("Auth").click()
            cy.contains("Login").click()

            const user = data.validCredentails.username;
            const password = data.validCredentails.password;

            login
                .assertEmailValidationMessage(" Email is required! ")
                .verifyUserNamePlaceHolder("Email address")
                .enterUsername(user)
                .verifyPasswordPlaceHolder("Password")
                .assertPasswordValidationMessage(" Password is required! ")
                .enterPassword(password)
            login.clickOnSignIn();


            cy.url().should('include', 'https://playground.bondaracademy.com/pages/iot-dashboard')
        })
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
    })

    it("Verify that all elements are selected and asserted", () => {
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
            cy.get('button.select-button').click({ multiple: true });

            // Find the option that matches and click it
            cy.get('nb-option').contains(expectedOption).click();

            // Verify the button now shows the selected option
            cy.get('button.select-button')
                .should('contain.text', expectedOption);
        })
    })
})