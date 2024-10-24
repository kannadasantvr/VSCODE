///<reference types="cypress-iframe" />
describe("basic test elements",()=>{
it('basic test',()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //radio button
    cy.get('input[type="radio"]').check('radio1').should('be.checked').and('have.value','radio1')
    //check box
    cy.get('label input[type="checkbox"]').check('option1','option2').should('be.checked')
    cy.wait(2000)
    //uncheck box
    cy.get('label input[type="checkbox"]').uncheck('option2').should('not.be.checked')
    //static dropdown
    cy.get('select').select('option2').should('have.value','option2')
    cy.wait(4000)
    cy.get('fieldset.a#opentab').invoke('removeAttr','target').click()
    cy.origin('https://www.qaclickacademy.com/',()=>{
        cy.get('a[href="https://www.udemy.com/user/testing-minds/"]').should('be.visible')
        cy.go('back')
    })
})
it('dynamic dropdown',()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#autocomplete').type('in')
    cy.get('li.ui-menu-item div',{timeout:9000}).each(($options)=>{
        if($options.text()==="India"){
            cy.wrap($options).click({force: true})
        }
        })
  
        cy.get('#alertbtn').click()
        cy.on('window:alert',(Alert)=>{
            expect(Alert).to.eq('Hello , share this practice page and share your knowledge')
            return true
        })

// Optional: Add assertions or further actions to verify the behavior
it('New Window',()=>{
        // //new window
        cy.window().then((win)=>{
            cy.stub(win,'open').callsFake((url)=>{
                win.location.href=url;
            });
        });
        cy.get('#openwindow').click();
    })
// cy.get('#displayed-text').should('be.visible')
// cy.get('#hide-textbox').click()
// cy.wait(2000)
// cy.get('#displayed-text').should('not.be.visible')
//webtable
cy.get('table tr td:nth-child(2)').each(($cells)=>{
    if($cells.text().includes('JMETER')){
        cy.wrap($cells).prev().then((expData)=>{
            cy.log(expData.text())
        })
    }
})
it.only('mousehover',()=>{
    cy.get('#mousehover').invoke('show')
    cy.contains('#tap',{timeout:4000}).click({force:true})
})
cy.frameLoaded('#courses-iframe');
cy.iframe().find('[href="mentorship"]').eq(0).click()
    })
    
})
