const Pass = {};
describe('new registration form', () => {
    before('Navigate the page', () => {
        cy.visit('http://V7datalabs.in/live')
    });
    it('Fill out form and write results to full CSV', () => {
        cy.get('#first_name-22').type('TONY').then((Iron) => {
            const F = Iron.val();
            let key = F ? 'PASS' : 'FAIL';
            Pass['FIRSTNAME'] = key;
        }).then(() => {
            cy.get('#last_name-22').type('STARK').then((Iron) => {
                const k = Iron.val();
                Pass['LASTNAME'] = k ? 'PASS' : 'FAIL';
            });
            cy.get('input[name="gender[]"]').check('Male',{ force: true }).should('be.checked').and('have.value','Male')
            cy.get('input[name="gender[]"]').then((Gender)=>{
                const g = Gender.val();
                Pass['GENDER'] = g ? 'PASS' : 'FAIL';
            })
            cy.get('#birth_date-22').click();
            cy.get('.picker__select--year').select('1994');
            cy.get('.picker__nav--next').dblclick();
            cy.get('.picker__day').contains('10').click();
            cy.get('#birth_date-22').then((DOB) => {
                const D = DOB.val();
                Pass['DOB'] = D ? 'PASS' : 'FAIL';
            });
            cy.get('#user_login-22').then((user) => {
                const U = user.val();
                Pass['USER LOGIN'] = U ? 'PASS' : 'FAIL';
            });
            cy.get('#user_password-22').type('stark@112').then((password) => {
                const W = password.val();
                Pass['PASSWORD'] = W ? 'PASS' : 'FAIL';
            });
            cy.get('#confirm_user_password-22').type('stark@112').then((Conpass) => {
                const CP = Conpass.val();
                Pass['CONFIRM PASSWORD'] = CP ? 'PASS' : 'FAIL';
            });
            cy.get('#user_email-22').type('tonystark@gmail.com').then((mail) => {
                const ml = mail.val();
                Pass['EMAIL'] = ml ? 'PASS' : 'FAIL';
            });
            cy.get('#mobile_number-22').type('9944668899').then((mobile) => {
                const mb = mobile.val();
                Pass['MOBILE NUMBER'] = mb ? 'PASS' : 'FAIL';
            });
            cy.get('.um-icon-android-checkbox-outline-blank').click()
            cy.get('[class="um-field-checkbox-option"]').should('have.text','I Accept the Terms and Conditions')
        }).then(() => {
            // Create CSV rows with all fields
            const rows = [['FIRST NAME', 'LAST NAME', 'GENDER','DATE OF BIRTH', 'USER NAME', 'PASSWORD', 'CONFIRM PASSWORD', 'EMAIL', 'MOBILE NUMBER']]; // Add headers
            rows.push([
                Pass['FIRSTNAME'],Pass['LASTNAME'],Pass['GENDER'] , Pass['DOB'],Pass['USER LOGIN'],Pass['PASSWORD'],
                Pass['CONFIRM PASSWORD'], Pass['EMAIL'], Pass['MOBILE NUMBER']
            ]); // Add row with results

            // Convert rows to CSV format
            const csvContent = rows.map(e => e.join(',')).join('\n');
            cy.writeFile('cypress/results/application1.csv', csvContent);
        });
    });
});
