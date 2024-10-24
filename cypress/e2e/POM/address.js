class Address {
    constructor(){
        this.firstname='#first-name';
        this.lastname='#last-name';
        this.pcode='#postal-code';
    }
    typingfirstname(usern){
        cy.get(this.firstname).type(usern)
    }
    typinglastname(userp){
        cy.get(this.lastname).type(userp)
    }
    typingpostalcode(pinc){
        cy.get(this.pcode).type(pinc)
    }
    clicksubmit(){
        cy.get('.btn_primary').click()
    }  
    clickfinishbutton(){
        cy.get('.btn_action ').click()
    }
    Textvisible(){
        cy.get('.complete-header').invoke('text').should('equal','THANK YOU FOR YOUR ORDER')
    }
    Imageassertion(){
        cy.get('.pony_express').should('be.visible')
    }
}
export default Address;