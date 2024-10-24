
describe('saucedemo site', () => {
    it('username password', () => {
        const url = Cypress.env('protourl'); // Fetch the environment variable
        cy.visit(url); // Visit the site using the environment variable
        
    });
});
