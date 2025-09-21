/// <reference types="cypress" />

describe("Login funcationlities", () => {

    beforeEach(() => {
        cy.visit('/')  // Visit base URL set in cypress.config.js
    })

    it("This is first test", () => {

    })

    it("This is second test", () => {

    })

    it("Verify the login screen", () => {

    })

    it("Verify the login screen", () => {

        cy.visit("https://playground.bondaracademy.com/")
        //  cy.get(":nth-child(2) > ngx-status-card > nb-card").click()

        // cy.get('ngx-temperature > .size-large > .full-width > .tabset > .active > .tab-link').click()
    })

    it("Verify the lohin functionality", () => {

        //by Tag anme
        cy.get('input')

        //by ID
        cy.get('#inputEmail1')

        //by Class value
        cy.get('.input-full-width')

        // by attributes
        cy.get('[fullwidth]')

        // attributes with value
        cy.get('[placeholder="Email"]')

        // how to combine sevral attributes

        cy.get('[placeholder="Email"][fullwidth]')
        cy.get('input[placeholder="Email"]')

        // find by data cy
        cy.get('[data-cy="inputEmail1"]')
    })

    it("Cypress locators method", () => {
        // get () to find element on page globally 
        // find () to find the child element
        // contains() to find web elements text
        cy.contains("Sign in")
        cy.contains('[status="warning"]', 'Sign in')
        cy.contains('nb-card', 'Horizontal form').find('button')
        cy.contains('nb-card', 'Horizontal form').contains("Sign in")
        cy.contains('nb-card', 'Horizontal form').get("button")
    })

    it("Cypress locators method", () => {
        cy.contains('nb-card', "Using the Grid").find('.row').contains('button')
    })

    it("Resuable locater", () => {
        // Cypress Alias
        cy.get('#inputEmail').as('inputEmail')
        cy.get('@inputEmail')
    })

    it("Assertion locater", () => {
        // fetch 
        cy.get('[for="exampleInputEmail1"]').then(label => {
            const test = label.text()
            console.log(test)
        })

        cy.get('[for="exampleInputEmail1"]').should('have.text', 'Email address')

        cy.get('[for="exampleInputEmail1"]').then(label => {
            expect(label).to.contain('Enail address')
        })
    })
    it("Time Out", () => {
        // fetch 
        cy.contains('Modal & Overlays').click()
        cy.contains('Dialog').click()

        cy.contains('Open with delay 10 seconds').click()
        cy.get('nb-dialog-container nb-card-header', { timeout: 11000 })
            .should('have.text', "Friendly reminder")
    })
    it("Time Out", () => {
        // fetch 
        cy.contains("Forms").click()
        cy.contains("Form Layouts").click()
    })
})