Cypress.Commands.add("login", config => {
  cy.localVisit(config, "login");

  cy.get("#email").type(config.email);
  cy.get("#password").type(config.pw);

  cy.get("form").submit();
});

Cypress.Commands.add("localVisit", (config, path) => {
  cy.visit(config.host + path);
});
