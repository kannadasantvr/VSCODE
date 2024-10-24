describe("platfrom login test",()=>{
    beforeEach(() => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
      })
    it('validate login functionality for postive case',()=>{
cy.get("input#username").type("student");
cy.get("input#password").type("Password123");
cy.get('button#submit').click()
cy.url().should('include','practicetestautomation.com/logged-in-successfully/')
cy.wait(4000)
cy.get('p strong').should('have.text','Congratulations student. You successfully logged in!')
cy.get('a[class*="wp-block-button__link"]').should('be.visible')

})  
it("validate login funtionality for negative username",()=>{
  cy.get("input#username").type("kkk");
  cy.get("input#password").type("Password123");
  cy.get('button#submit').click()
  cy.get('div#error').should('be.visible')
  cy.get('div#error').should('have.text','Your username is invalid!')
  cy.screenshot()
  cy.wait(4000)
})
it("validate login funtionality for negative password",()=> {
  cy.get("input#username").type("Student");
  cy.get("input#password").type("Passw");
  cy.get('button#submit').click()
  cy.get('#error').should('be.visible')
  cy.get('#error').should('have','Your password is invalid')
  cy.screenshot()
  }
)
  
})