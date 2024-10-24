describe("basic test elements",()=>{
    it('basic test',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.get('a[href="https://www.udemy.com/user/testing-minds/"]').should('be.visible')
            cy.go('back')
        })
    })
})