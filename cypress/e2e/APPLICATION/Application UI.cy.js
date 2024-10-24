describe('Regitration page',()=>{
    before(()=>{
        cy.visit('https://v7datalabs.in/live/')
    })
    it('login',()=>{
        cy.get('#first_name-22').type('Kannadasan');
        cy.get('#last_name-22').type('karthikeyan')
        cy.get('input[name="gender[]"]').check('Male',{ force: true }).should('be.checked').and('have.value','Male')
        cy.get('#birth_date-22').click()
        cy.get('.picker__select--year').select('1994')
        cy.get('.picker__nav--next').dblclick()
        cy.get('.picker__day').contains('10').click();
        cy.get('#user_login-22').type('Kannadasan1')
        cy.get('#user_password-22').type('Kanna@112')
        cy.get('#confirm_user_password-22').type('Kanna@112')
        cy.get('#user_email-22').type('kannadasan1@gmail.com')
        cy.get('#mobile_number-22').type('9944601185')
        cy.get('.um-icon-android-checkbox-outline-blank').click()
        cy.get('input.um-button').click()
})
})
