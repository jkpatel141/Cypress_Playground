// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress" />

// Cypress custom command for the Login

Cypress.Commands.add('login', (userName, passWord) => {
    cy.contains('My Account').click();
    cy.get('.dropdown-menu.dropdown-menu-right').contains('Login').click();

    cy.get('#input-email').type(userName);
    cy.get('#input-password').type(passWord);
    cy.get('input[type="submit"][value="Login"]').click();
});

Cypress.Commands.add('logout', () => {
    cy.get('#top-links').within(() => {
        cy.contains('My Account').click();
        cy.get('.dropdown-menu.dropdown-menu-right li').should('have.length', 5);
        cy.get('.dropdown-menu.dropdown-menu-right li').eq(4).click();
    })    
});

Cypress.Commands.add('createUserAPI', (enterUser, enterEmail) => {
    const create = ({ user : enterUser, email: enterEmail});
    return cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/users',
        body : create
    })  
});

Cypress.Commands.add('getAPiRecords', () => {
    return cy.request('GET','https://jsonplaceholder.typicode.com/users')
});