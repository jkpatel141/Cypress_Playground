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

    it("Create the record from the external file", () => {
        cy.fixture('credentials.json').then((data) => {
            const create = { name: data.postmethod.name, email: data.postmethod.email }
            cy.request({
                method: 'POST',
                url: 'https://jsonplaceholder.typicode.com/users',
                body: create
            }).then((response) => {
                expect(response.status).to.eq(201)
                cy.log("Reposnce" + JSON.stringify(response.body))
            })
        })
    })

    it("Update the record", () => {

        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users/10'
        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Name" + JSON.stringify(response.body.name))
        })

        cy.fixture('credentials.json').then((data) => {
            const create = { name: data.updateMethod.name, email: data.updateMethod.email }
            cy.request({
                method: 'PUT',
                url: 'https://jsonplaceholder.typicode.com/users/10',
                body: create
            }).then((response) => {
                expect(response.status).to.eq(200)
                cy.log("Reposnce" + JSON.stringify(response.body))
            })
        })
    })

    it("Update all records", () => {

        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users'
        }).then((response) => {
            expect(response.status).to.eq(200)
            response.body.forEach((string1, index) => {
                cy.log(`User : ${index + 1} : ${string1.name}`)
            })

            const storeUser = response.body

            storeUser.forEach(displayUser => {
                cy.fixture('credentials.json').then((data) => {
                    const create = { name: data.updateMethod.name, email: data.updateMethod.email }
                    cy.request({
                        method: 'PUT',
                        url: `https://jsonplaceholder.typicode.com/users/${displayUser.id}`,
                        body: create
                    }).then((response) => {
                        expect(response.status).to.eq(200)
                        cy.log("Reposnce" + JSON.stringify(response.body))

                    })
                })
            })
        })
    })

    it("To verify the delete method", () => {
        cy.request('GET','https://jsonplaceholder.typicode.com/users').then((data) => {
            expect(data.status).to.eq(200)

            const finalCount = data.body.length;

            cy.log(`Total : ${finalCount}`)
        })
        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/users/1',
        }).then((response) => {
            expect(response.status).to.eq(200)
            // cy.log("Reposnce" + JSON.stringify(response.body))
            const finalCount = response.body.length;
            cy.log(`Total count fo this page are : ${finalCount}`);
        })

        cy.request('GET','https://jsonplaceholder.typicode.com/users').then((checl) => {
            expect(checl.status).to.eq(200)

            const finalCount1 = checl.body.length;

            cy.log(`Total : ${finalCount1}`)
        })

    })
})