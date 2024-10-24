describe('amazon website',()=>{
  Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  it('amazon search mobiles',()=>{
      cy.visit('https://www.amazon.in/')
      cy.get('#twotabsearchtextbox').type('haier 1.5 ton ac{enter}')
      const searchdata="Haier 1.5 Ton 3 Star Twin Inverter Split AC (Copper, 5 in 1 Convertible, 2 way-Swing, Anti Bacterial Filter, Cools at 54°C Temp, Long Air Throw - HSU17V-TMS3BN-INV,White,2024 Model)";
      cy.get('[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"] h2',{timeout:8000}).each(($product)=>{
        if($product.text().includes(searchdata)){
          cy.wrap($product).find('a').invoke('removeAttr','target').click()
        }
      })
  })
})