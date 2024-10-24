describe('drag and drop',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    it('drag drop function',()=>{
        cy.visit('https://demo.automationtesting.in/Static.html');
        cy.get('#angular').drag('#droparea').then((drop)=>{
            assert.isTrue(drop)
        })
    })
})