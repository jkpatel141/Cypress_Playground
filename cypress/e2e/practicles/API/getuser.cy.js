/// <reference types="cypress" />

describe("Get API", () => {
    it("fetch list of users", () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/users').then((response) => {
            expect(response.status).to.eq(200)
       //     expect(response.body.data).to.have.length.greaterThan(0)
       //     expect(response.body.data[0]).to.have.property('email')
        })
    })
})

it("fetch the data from the params", () => {
    cy.request({
        method : 'GET',
        url : 'https://jsonplaceholder.typicode.com/users',
        qs : {page : 1}
    }).then((response) => {
        expect(response.status).to.eq(200)
    })
})