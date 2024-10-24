describe('login test with data driven', () => {
    let data;
    before(() => {
        cy.fixture('example').then((datas) => {
            data = datas;
        });
    });
    it('should log in successfully', () => {
        cy.visit('https://www.saucedemo.com/v1/');
        cy.performlogin(data.username, data.password);
        cy.wait(2000); // Ideally, replace with better synchronization
        cy.get('select').select('lohi'); 
        data.prods.forEach(eachproduct => {
        cy.addingProducttocart(eachproduct)
        });
        cy.get('[href="./cart.html"]').click()
        cy.get('.cart_item').should('have.length',3)
        cy.contains('CHECKOUT').click()
        cy.get('#first-name').type('kannadasan')
        cy.get('#last-name').type('karthikeyan')
        cy.get('#postal-code').type('610001')
        cy.get('.btn_primary').click()
        cy.evaluateprice()
            cy.get('.btn_action ').click()
            cy.get('.complete-header').invoke('text').should('equal','THANK YOU FOR YOUR ORDER')
            cy.get('.pony_express').should('be.visible')

        })
  
    });
    
