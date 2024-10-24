describe('Product and Price', () => {
    let productTitle = [];
    let cartprice = [];

    it('Add all product titles', () => {
        cy.visit('https://sprodata.in/')

       // cy.get('.wpf-search-container').should('have.length', 1);

        // Get all product titles
        cy.get('.woocommerce-loop-product__title').each((product) => {
            cy.wrap(product).invoke('text').then((text) => {
                  productTitle.push(text.trim()); // Push the trimmed text
              })
        })
    })

    it('Add all prices', () => {
        // Get all product prices
        cy.get('span[class="price"]').each((productprice) => {
            cy.wrap(productprice).within(() => {
                // Check if both sale and regular price are available
                cy.get('del[aria-hidden="true"]').then(($del) => {
                    if ($del.length > 0) {
                        cy.get('ins[aria-hidden="true"]').invoke('text').then((salePrice) => {
                            cartprice.push(salePrice.trim()); // Sale price
                        });
                    } else {
                        cy.get('del[aria-hidden="true"]').invoke('text').then((regularPrice) => {
                            cartprice.push(regularPrice.trim()); // Regular price
                        });
                    }
                });
            });
        });
    });
})
