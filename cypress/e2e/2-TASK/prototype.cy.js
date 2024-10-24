import 'cypress-real-events/support';
describe('prototype', () => {
  before(()=>{
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
  })
  it.skip('filling the datas', () => {
    cy.url().should('eq', 'https://rahulshettyacademy.com/angularpractice/')
    cy.fixture('proto').then(function (data) {
      cy.get(':nth-child(1) > .form-control').type(data.username)
      cy.get('[type="date"]')
        .trigger('mouseover', 910, 20)  // Trigger mouseover at specified coordinates
        .click({ force: true });
        // cy.get('[type="date"]').trigger('mouseover',910,20 ,{force:true})
    })
  })
  it.only('cart button',()=>{
    cy.get('[class="navbar navbar-expand-sm bg-dark navbar-dark"]').contains('Shop').click()
    cy.get('h4.card-title').each(($product,$add)=>{
      if($product.text().includes('Blackberry')){
        cy.get('[class="btn btn-info"]').eq($add).click()
      }
      if($product.text().includes('iphone X')){
        cy.get('[class="btn btn-info"]').eq($add).click()
      }
    })
    cy.get('[class="nav-link btn btn-primary"]').click()
    cy.get('div [class="media"]').contains('iphone X').should('exist')
    cy.contains('button', 'Checkout').click()
    cy.get('#country').type('mal')
    cy.contains('Malta',{ timeout: 10000 }).click()
    cy.get('.checkbox').click()//.should('be.checked')
   cy.get('[class="btn btn-success btn-lg"]').click()
   //cy.get('.alert').should('contain.text', 'Success');
   cy.get('.alert').then((Element)=>{
    const actal= Element.text();
    expect(actal.includes("Success")).to.be.true
   })
  })
})




































  // describe('prototype',()=>{z
  //     before(function(){
  //         cy.fixture('proto').then(function(kanna){
  //            this.data=kanna;
  //         })
  //     })
  //     it('filling the datas',()=>{
  // cy.visit('https://rahulshettyacademy.com/angularpractice/')
  // //cy.get('[name="name"]').eq('0').type(this.data.name)
  // cy.get('[name="email"]').type(this.data.prods)
  // // cy.get('[name="name"]').eq('1').should('be.value',this.data.name)
  // // cy.get('#exampleInputPassword1').type(this.data.password)
  // cy.get('#exampleCheck1').check().should('be.checked')
  // // cy.get('select').select('Female').should('be.visible','Female')
  // // cy.get('#inlineRadio3').should('be.disabled','Radio3')
  // // cy.get('#inlineRadio2').check().should('be.checked')
  // // cy.get('[type="date"]').click()
  // // cy.get('[name="bday"]').select('Show date picker')
  //     })
  // })

