/// <reference types="cypress" />

describe("POST examples", () => {
    it("Create the data using API", () => {
        const create = { name: "Jignesh Patel", email: "test@test.com" }
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/users',
            body: create
        }).then((response) => {
            cy.log('Response:', JSON.stringify(response.body))
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('name', 'Jignesh Patel')
            expect(response.body).to.have.property('email', 'test@test.com')
            expect(response.body).to.have.property('id')
        })
    })

    it.only("Create the record from the external file", () => {
        it("Cheeck using the externam file", () => {
            cy.fixture('credentials.json').then((data) => {
                cy.log('Loaded Fixture Data:', JSON.stringify(data))
                console.log('Fixture Data:', data)
                const create = { name: data.name, email: data.email }
                cy.request({
                    method: 'POST',
                    url: 'https://jsonplaceholder.typicode.com/users',
                    body: create
                }).then((response) => {
                    cy.log('Response:', JSON.stringify(response.body))
                    expect(response.status).to.eq(200)
                })
            })
        })
    })
})