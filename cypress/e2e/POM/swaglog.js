class login {
    constructor(){
        this.username='#user-name';
        this.password='#password';
        this.submit='#login-button';
    }
    typinguserName(usern){
        cy.get(this.username).type(usern)
    }
    typingpassword(userp){
        cy.get(this.password).type(userp)
    }
    clickonsubmit(){
        cy.get(this.submit).click()
    }
}
export default login;