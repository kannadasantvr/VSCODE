describe('codbox',()=>{
    it('automation practice',()=>{
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.url().should('eq','https://codenboxautomationlab.com/practice/')
        cy.get('[class="entry-header"]').should('be.visible','Automation Practice')
        cy.get('[name="radioButton"]').check('radio2').should('be.checked').debug()
        cy.get('#autocomplete').type('ca')
        cy.get('[class="ui-menu-item-wrapper"]',{timeout:9000}).each(($options)=>{
            if($options.text()==="Canada"){
                cy.wrap($options).click({force: true})
            }
            })
        cy.get('#autocomplete').should('be.visible','Canada')
        cy.get('#dropdown-class-example').select('Appium').should('be.visible','Appium')  
    })
})