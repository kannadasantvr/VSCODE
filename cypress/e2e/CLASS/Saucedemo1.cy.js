describe("platfrom login check",()=>{
    beforeEach(() => {
            cy.visit('https://www.saucedemo.com/v1/')
            cy.viewport('samsung-note9')
      })
it('login user',()=>{
cy.get("input#user-name").type("standard_user");
cy.get("input#password").type("secret_sauce");
cy.get("input#login-button").click()
cy.get('.bm-burger-button > button').click()
cy.get('#logout_sidebar_link').click()
cy.wait(2000)
})
it('locked_out_user',()=>{
      cy.viewport('ipad-mini')
      cy.get("input#user-name").type("locked_out_user"); 
      cy.get("input#password").type("secret_sauce");
      cy.get("input#login-button").click()  
      cy.get('[data-test="error"]')  
})
it('problem_user',()=>{
      cy.get("input#user-name").type("problem_user"); 
      cy.get("input#password").type("secret_sauce");
      cy.get("input#login-button").click() 
      cy.wait(2000)
      cy.get('.bm-burger-button > button').click()
cy.get('#logout_sidebar_link').click()
      
})
it('performance_glitch_user',()=>{
      cy.get("input#user-name").type("performance_glitch_user"); 
      cy.get("input#password").type("secret_sauce");
      cy.get("input#login-button").click() 
      cy.wait(2000)
      cy.get('.bm-burger-button > button').click()
cy.get('#logout_sidebar_link').click()
      })
})