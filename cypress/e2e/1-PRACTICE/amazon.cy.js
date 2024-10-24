describe('amazon website',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    it('amazon search mobiles',()=>{
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('samsung 24{enter}')
        cy.get('#nav-search-submit-button').click()
        cy.get('[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]').eq(0).invoke('removeAttr','target').click()
        //cy.scrollTo(0, 500); // Scrolls vertically to 500px
        cy.get('[class="nav-logo-locale"]').should('have.css', 'background-color', 'rgb(0, 0, 0)')
        //cy.get('#nav-logo-sprites').should('have.css', 'background-color', 'rgb(0, 0, 0)')
        //cy.get('[class="a-size-large a-spacing-micro a-spacing-top-base"]').scrollIntoView({ easing: 'linear', duration: 2000 })
        // cy.scrollTo('bottom');
        //cy.get('input#add-to-cart-button').eq(1).click()
        //cy.get('#attach-sidesheet-view-cart-button').click()
        //cy.get('#sw-gtc > .a-button-inner > .a-button-text').click()
        
     })
})
// cy.get('[class="puisg-row"]').eq(0).click()
// cy.get('#a-autoid-1-announce').click()
// cy.wait(2000)
// cy.get('#nav-cart-count').click()
//cy.get('div[class="a-row"]').eq(0).click()
 //cy.get('#add-to-cart-button').eq(1).click()
        // cy.get('[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]').eq(0).click()
        //cy.origin('https://www.amazon.in/Samsung-Galaxy-Smartphone-Black-Storage/dp/B0CS62KYQY/ref=sr_1_1_sspa?crid=310J986N5VYBY&dib=eyJ2IjoiMSJ9.eAdbTLhovceNWCRn-mzDzRktme6gqkWj1JuK8YG4uk9gpY7gwOmd0N3EaEWxaPEhQD4-zE7btM636o1m33PyFJZZDPJozqpzoT2Fx5MlyRpEVDTiniqiUflWMeWzMsPKBHl2NVYZHWQVm_nnWH0qGB_TUAfMKtx9tUzqftfbgDFqqkZY6_F5Tj-49CwDxzO0rVobrf96obK9FP1B0mVNhAQ0Xt-2f9PMolMY4NgnlBY.3KWco6RHCPjEPP02XVzs51rFEcKSlxemei9ZWpEBp1s&dib_tag=se&keywords=samsung+24&nsdOptOutParam=true&qid=1727868255&sprefix=sumsung+24%2Caps%2C365&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1')
       //new windows
    //    cy.window().then((win)=>{
    //     cy.stub(win,'open').callsFake((url)=>{
    //         win.location.href=url;
    //     })
    //    }) 
       //cy.get() 
       //cy.get('[class="a-size-extra-large a-text-normal"]').then((tex)=>{
      //     const visibl = tex.text()
      //     cy.wrap(visibl).should('contains',  'Shopping Cart');
      //     cy.log(visibl);
  
      //      cy.contains('[class="a-size-extra-large a-text-normal"]',  'Shopping Cart')
  
      //    // cy.get('#title > #productTitle').should('contains', 'Samsung Galaxy S23 Ultra 5G AI Smartphone (Green, 12GB, 256GB Storage)');
      //     })
        
        // cy.get('#nav-cart-count').click()