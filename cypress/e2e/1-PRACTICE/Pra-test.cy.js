describe('practice page login',()=>{
    let data
    before(()=>{
        cy.fixture('testlogin').then((tdata)=>{
        data = tdata
        })
    })
    it('login page',()=>{
        data.forEach((userlogin) => {
            const username1 = userlogin.username;
            const userpass  = userlogin.password;
            cy.visit('https://practicetestautomation.com/practice-test-login/')
      
        cy.get('#username').type(username1).should('be.visible')
        cy.get('#password').type(userpass).should('be.visible')
        if(username1==="student"&&userpass==="Password123"){
        cy.get('#submit').click()
        cy.wait(2000)
        cy.go('back')
        cy.reload()
        }
        if(username1==="incorrectUser"&&userpass==="Password123"){
        cy.get('#submit').click()
        cy.wait(3000)
        cy.get('#error').should('be.visible')
}
if(username1==="student"&&userpass==="incorrectPassword"){
    cy.get('#submit').click()
    cy.wait(3000)
    cy.get('#error').should('be.visible')
}
        //cy.get('[class="has-text-align-center"]').should('be.visible').and('contain','Congratulations student. You successfully logged in!')
        //cy.get('[class="wp-block-button aligncenter is-style-fill"]').click()
    })
});
})