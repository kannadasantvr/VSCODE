describe('just lanch the url',()=>{
    it('implicet assertions',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive').and('contain','orangehrm').and('not.contain','greenhrm')
        //cy.xpath("//body/div[@id='app']/div[1]/div[1]").should('have.length',8)
    })
    it('Explict assertios',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[placeholder="Username"]').type('Admin')
        cy.get('[placeholder="Username"]').should('be.visible','Admin')
        cy.get('[placeholder="Password"]').type('admin123')
        //cy.get('[type="submit"]').should('exist').click()
        cy.get('[type="submit"]').click()
        let expname = 'David Romer';
        cy.get('.oxd-userdropdown-name').then ((x)=>{
            let actname = x.text();
            expect(actname).to.equal(expname)
            //expect(actname).to.not.equal(expname)
        })


    })
}) 