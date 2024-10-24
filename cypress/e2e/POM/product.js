class product{
    sortingprice(){
        cy.get('select').select('lohi')
    }
    addproducts(product){
        cy.addingProducttocart(product)
    }  
    clickOncarticon(){
        cy.get('[href="./cart.html"]').click()
    }
    cartandassertion(){
        cy.get('.cart_item').should('have.length',3)
    } 
    checkout(){
        cy.contains('CHECKOUT').click()
    }
}
export default product;