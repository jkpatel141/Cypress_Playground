/// <reference types="cypress" />

describe("To Validate the login related testcases", () => {
    it("To Login to the web", () => {
        cy.fixture('credentials.json').then((data) => {
            const user = data.naveenLogin.userName;
            const password = data.naveenLogin.passWord;

            cy.visit('https://naveenautomationlabs.com/opencart');
            cy.login(user, password);
            cy.logout();
            cy.get('h1').contains('Account Logout').should('have.text', 'Account Logout');
            cy.createUserAPI(user, password).then((responce) => {
                expect(responce.status).be.eq(201);
                cy.log('Created user is' + JSON.stringify(responce.body))
            })
            cy.getAPiRecords().then((getRecord) => {
                expect(getRecord.status).to.eq(200)
                const checkLength = getRecord.body.length;
                cy.log(`number of records are : ${checkLength}`)
            })
        })
    })
})