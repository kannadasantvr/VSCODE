describe('fristcry demo',()=>{
    it('first',()=>{
    cy.visit('https://www.firstcry.com/')
    cy.get('[class="B14_42 allcat"]').trigger('mouseover')
    })

})



