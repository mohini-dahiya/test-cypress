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
Cypress.Commands.add("GithubLogin", (username, password) => {
  // Pass in dependencies via args option
  const args = { username, password };
  cy.origin("", { args }, ({ username, password }) => {
    cy.visit("/login");
    cy.contains("Username").find("input").type(username);
    cy.contains("Password").find("input").type(password);
    cy.get("button").contains("Login").click();
  });
  cy.url().should("contain", "/home");
});
