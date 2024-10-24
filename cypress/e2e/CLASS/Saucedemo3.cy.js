describe('demo',()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/v1/')
    })
    it('login',()=>{
        cy.get('input#user-name').type('standard_user')
        cy.get('input#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('include','/inventory.html')
    })
    it('add to cart',()=>{
        cy.visit('https://www.saucedemo.com/v1/inventory.html')
        cy.get('select').select('lohi')
        cy.get('.inventory_item').each(($products)=>{
            if($products.text().includes('Sauce Labs Onesie')){
                cy.wrap($products).find('button').click()
            }
            if($products.text().includes('Sauce Labs Bike Light')){
                cy.wrap($products).find('button').click()
            }
            if($products.text().includes('Bolt T-Shirt')){
                cy.wrap($products).find('button').click()
            }
        })
        cy.get('[class="fa-layers-counter shopping_cart_badge"]').invoke('text').should('equal','3')
        cy.get('[href="./cart.html"]').click()
        cy.get('.cart_item').should('have.length',3)
        cy.contains('CHECKOUT').click()
        cy.get('#first-name').type('kannadasan')
        cy.get('#last-name').type('karthikeyan')
        cy.get('#postal-code').type('610001')
        cy.get('.btn_primary').click()
        let sum=0;
        cy.get('.cart_item').each(($priceforeachitem)=>{
            const modifyprice=$priceforeachitem.text();
            const splitprices=modifyprice.split('$')
            const makeitunique=splitprices[1].trim()
            sum=Number(sum)+Number(makeitunique)
        }).then(()=>{
            console.log(sum);
        })
        cy.get('.summary_subtotal_label').then((sub)=>{
            const modifysub=sub.text();
            const splitsub=modifysub.split('$')
            const makeitunique=splitsub[1].trim()
            const subtotal=Number(makeitunique)
            expect(subtotal).to.eq(sum)
            cy.get('.btn_action ').click()
            cy.get('.complete-header').invoke('text').should('equal','THANK YOU FOR YOUR ORDER')
            cy.get('.pony_express').should('be.visible')
        })
    })
})