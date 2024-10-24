describe('Greencart project',()=>{
    it('product page',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        cy.iframe().find('[href="#/offers"]').click()
        
})
it.only('calender selection ',()=>{

    const month  = "8"
    const year   = "2029"
    const date   = "12"
    const expect = [month,year,date]
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
    cy.get('[class="react-date-picker__inputGroup"]').click()
    cy.get('.react-calendar__navigation').dblclick()
    cy.contains('button',year).click()
    cy.get('button[class="react-calendar__tile react-calendar__year-view__months__month"]').eq(Number(month)-1).click()
     // cy.get('[class="react-calendar__month-view__days"]').contains(date).click()

    cy.get('[class="react-date-picker__inputGroup"]').each(($el,index)=>{
        cy.wrap($el).should('eq',expect[index])
    })
     // cy.contains('cutton',date).click()
})
})