/// <reference types="cypress" />

// cypress/e2e/dummyjson_auth.cy.js
describe('DummyJSON Auth + Protected routes', () => {

    it('Logs in via DummyJSON and uses token for protected API', () => {
        // Step 1: Login to get a token
        cy.request('GET', 'https://dummyjson.com/carts').then((data) => {
            expect(data.status).to.eq(200)
            cy.log("Display all the data", JSON.stringify(data.body.carts[0].products[0]))
            expect(data.body.carts[0].products[0].discountedTotal).to.have.eq(85743.87)
         //   expect(data.body.products.length).to.be.lte(31)
        //    data.body.products.forEach(element => {
         //       cy.log(`Title": ${element.title}`)                
         //   });
        })
    })
})
