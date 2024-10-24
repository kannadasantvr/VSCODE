describe('Swag Labs Tests', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/v1/');
    });
    it('should log in successfully', () => {
      cy.get('input#user-name').type('standard_user');
      cy.get('input#password').type('secret_sauce');
      cy.get('input#login-button').click();
      cy.url().should('include', '/inventory.html');
    });
    it('should add items to the cart and verify total', () => {
      cy.visit('https://www.saucedemo.com/v1/inventory.html');
      cy.get('.product_sort_container').select('Price (low to high)');
      cy.get(':nth-child(1) > .pricebar > .btn_primary').click();
      cy.get(':nth-child(2) > .pricebar > .btn_primary').click();
      cy.get(':nth-child(3) > .pricebar > .btn_primary').click();
      cy.get('.fa-layers-counter').click();
      cy.get('.btn_action').click();
      cy.get('input#first-name').type('kanna');
      cy.get('input#last-name').type('dasan');
      cy.get('input#postal-code').type('7896543');
      cy.get('.btn_primary').click();
      let allTotal = 0;
      cy.get('.inventory_item_price').each(($el) => {
        cy.wrap($el).invoke('text').then((text) => {
          const price = parseFloat(text.replace('$', '').trim());
          allTotal += price;
          cy.log(`Price: $${price}`);
        });
      }).then(() => {
        cy.log(`Calculated Item Total: $${allTotal}`); 
        // Verify the displayed total price
        cy.get('.summary_subtotal_label').invoke('text').then((resultText) => {
          const result = parseFloat(resultText.replace('Item total: $', '').trim());
          cy.log('Displayed Total: $' + result);
          expect(result).to.equal(allTotal);
        });
        cy.get('.btn_action').click()
        cy.get('.complete-header').invoke('text').should('equal','THANK YOU FOR YOUR ORDER')
      });
    });
  });
  