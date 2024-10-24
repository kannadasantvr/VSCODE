describe('Greencart project',()=>{
    it('product page',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        
})
})