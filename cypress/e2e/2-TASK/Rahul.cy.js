describe('my practice rahulshetty',()=>{
    it('radio button',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[type="checkbox"]').check(['option3','option2']).should('be.checked')
        cy.get('input[type="checkbox"]').uncheck('option1').should('not.be.checked')
        cy.get('#dropdown-class-example').select('option1').should('be.visible')
        cy.get('#autocomplete').click().type('ind')
        cy.get('.ui-menu-item div').each(($el)=>{
            if($el.text()=== "India"){
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('be.visible','India')
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        cy.get('.radioButton').check('radio1').should('be.checked')
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.origin("https://www.qaclickacademy.com",()=>
            {
             cy.get("#navbarSupportedContent a[href*='about']").click();
             cy.get(".mt-50 h2").should('contain','QAClick Academy');
             cy.go("back")
            })
            //cy.go("back")
        //cy.get('#product').should('equal','Learn SQL in Practical + Database Testing from Scratch')
    })
})      