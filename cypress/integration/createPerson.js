describe("Person List", function() {
  it("Creates a new Person", function() {
    cy.fixture("config").then(config => {
      cy.login(config);

      cy.localVisit(config, "adicionar");

      cy.fixture("mockCreatePerson").then(person => {
        cy.get("[name=name]").type(person.name);
        cy.get("[name=dob]").type(person.dob);
        cy.get("[name=email]").type(person.email);

        cy.get("#personForm").submit();
      });

      
    });
  });
});
