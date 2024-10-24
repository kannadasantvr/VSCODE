class ProductPage {
    // Method to extract and return the tax amount
    getTaxAmount() {
      cy.get('[class="summary_tax_label"]').then((taxx) => {
        const a = taxx.text();
        cy.log(a); // Log full tax label
  
        const b = a.split('$');
        cy.log(b); // Split the text on the $ sign
  
        const t = b[1].trim(); // Extract and trim the tax value
        cy.log(t);
  
        let ft = Number(t); // Convert the string tax to a number
        cy.log('Tax Amount: ' + ft);
  
        return ft; // Return the extracted tax amount
      });
    }
  }
  
  export const productpage = new ProductPage();
  