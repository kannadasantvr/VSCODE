  // ***********************************************
  // This example commands.js shows you how to
  // create various custom commands and overwrite
  // existing commands.
  //
  /// <reference types="cypress-xpath" />
  // For more comprehensive examples of custom
  // commands please read more here:
  // https://on.cypress.io/custom-commands
  // ***********************************************
  //
  //
  // -- This is a parent command --
  // Cypress.Commands.add('login', (email, password) => { ... })
  //
  //
  // -- This is a child command --
  // Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
  //
  //
  // -- This is a dual command --
  // Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
  //
  //
  // -- This will overwrite an existing command --
  // Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
  // Cypress.Commands.add('performlogin', (username, password) => {
  //     cy.get('input#user-name').type(username);
  //     cy.get('input#password').type(password);
  //     cy.get('input#login-button').click();
  // });
Cypress.Commands.add('addingProducttocart', (product) => {
 cy.get('.inventory_item').each(($products)=>{
    if($products.text().includes(product)){
        cy.wrap($products).find('button').click()
    }
    })
 })
 Cypress.Commands.add('evaluatePrice', () => { 
  let sum = 0;
  let taxAmount = 0;

  // Calculate the total price 
  cy.get('.cart_item').each(($item) => {
    const itemText = $item.text();
    const itemPrice = itemText.split('$')[1].trim(); 
    sum += Number(itemPrice)
  });
  cy.get('[class="summary_tax_label"]').then(($tax) => {
    const taxText = $tax.text();
    taxAmount = Number(taxText.split('$')[1].trim());
    cy.log('Calculated Tax Amount: ' + taxAmount);
  });
  cy.get('.summary_subtotal_label').then(($subtotal) => {
    const subtotalText = $subtotal.text();
    const subtotal = Number(subtotalText.split('$')[1].trim()); 
    expect(subtotal).to.eq(sum);
    const totalWithTax = subtotal + taxAmount;
    cy.log('Calculated Total with tax: ' + totalWithTax);
    cy.get('.summary_total_label').then(($total) => {
      const totalText = $total.text();
      const displayedTotal = Number(totalText.split('$')[1].trim());
      expect(displayedTotal).to.eq(totalWithTax);
    });
    cy.get('.summary_tax_label').then(($tax) => {
      const displayedTax = Number($tax.text().split('$')[1].trim());
      expect(displayedTax).to.eq(taxAmount);
    });
  });
});
//  Cypress.Commands.add('evaluateprice', () => { 
//  let sum = 0;
//  let ft;
//       cy.get('.cart_item').each(($priceforeachitem)=>{
//           const modifyprice  = $priceforeachitem.text();
//           const splitprices  = modifyprice.split('$')
//           const makeitunique = splitprices[1].trim()
//                 sum          = Number(sum)+Number(makeitunique)
//       }).then(()=>{
//           console.log(sum);
//       })
//       cy.get('[class="summary_tax_label"]').then((taxx)=>{
//         const a = taxx.text()
//         cy.log(a)
//         const b = a.split('$')
//         cy.log(b)
//         const t = b[1].trim()
//         cy.log(t)
//          ft = Number(t)
//         cy.log('Tax Amount'+ft)
//     }).then(()=>{
//         cy.log(ft)
//     })
//       cy.get('.summary_subtotal_label').then((sub)=>{
//           const modifysub    = sub.text();
//           const splitsub     = modifysub.split('$')
//           const makeitunique = splitsub[1].trim()
//           const subtotal     = Number(makeitunique)
//           expect(subtotal).to.eq(sum)
//           const totalwithtax = ft+subtotal
//           cy.log('Total with tax'+totalwithtax)
//       })
//     })
//
import 'cypress-iframe';
require('@4tw/cypress-drag-drop')
  // csv test report

const fs   = require('fs');
const path = require('path');

Cypress.Commands.add('writeTestResultsToCSV', (results) => {
  const csvHeaders = 'Test Name,Status,Duration\n';
  const csvRows    = results.map(result => 
    `${result.name},${result.status},${result.duration}`
  ).join('\n');
  
  const csvContent = csvHeaders + csvRows;
  const filePath   = path.join(Cypress.config('resultsFolder'), 'test-results.csv');

  fs.writeFileSync(filePath, csvContent);
  cy.log(`Test results written to ${filePath}`);
});
  // fff

  // Cypress.Commands.add('recordResult', (result) => {
  //     cy.task('recordTestResult', result);
  //   });
  
  ///// json file hari send this

  // Cypress.Commands.add('recordResult', (testName, status, timeTaken) => {
  //     cy.task('recordTestResult', { testName, status, timeTaken });
  //   });
  //   const fs = require('fs');
  // const path = require('path');

  // Cypress.Commands.add('writeToCSV', (filename, data) => {
  //   const filePath = path.join('cypress', 'downloads', filename);

  
  //   if (!fs.existsSync(filePath)) {
  //     fs.writeFileSync(filePath, 'Person,City,Friend,Friend City,Hobbies\n');
  //   }

  //   // Append data
  //   fs.appendFileSync(filePath, '${data}\n');
  // });
  /// < reference type = "cypress-xpath" / >