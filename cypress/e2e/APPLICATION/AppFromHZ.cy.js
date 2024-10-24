let Field_Name, Test_status;
let results = [];
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
describe('new registration form', () => {
  before('Navigate the page', () => {
    cy.visit('http://V7datalabs.in/live');
  });

  it('Firstname', () => {
    cy.get('#first_name-22').type('Tony').then(($FirstName_input) => {
      const FirstName_Val = $FirstName_input.val();
      cy.get('[for="first_name-22"]').invoke('text').then(($text) => {
        Field_Name = $text;
        Test_status = FirstName_Val ? 'Pass' : 'Fail'; 
        cy.log(Test_status);
        results.push({ Field_Name, Test_status });
        cy.log(results);
      });
    });

    cy.get('#last_name-22').type('Stark').then(($Lastname) => {
      const Lastname = $Lastname.val();
      cy.get('[for="last_name-22"]').invoke('text').then(($text) => {
        Field_Name = $text;
        Test_status = Lastname ? 'Pass' : 'Fail'; 
        cy.log(Test_status);
        results.push({ Field_Name, Test_status });
        cy.log(results);
      });
    });

    cy.get('input[name="gender[]"]').check('Male', { force: true }).should('be.checked').and('have.value', 'Male');
    cy.get('input[name="gender[]"]').then(($Gender) => {
      const Gender = $Gender.val();
      cy.get('[for="gender-22"]').invoke('text').then(($text) => {
        Field_Name = $text;
        Test_status = Gender ? 'Pass' : 'Fail'; 
        cy.log(Test_status);
        results.push({ Field_Name, Test_status });
        cy.log(results);
      });
    });

    cy.get('#birth_date-22').click();
    cy.get('.picker__select--year').select('1994');
    cy.get('.picker__nav--next').dblclick();
    cy.get('.picker__day').contains('10').click();
    cy.get('#birth_date-22').then((DOB) => {
      const Dateofbirth = DOB.val();
      cy.get('[for="birth_date-22"]').invoke('text').then(($text) => {
        Field_Name = $text;
        Test_status = Dateofbirth ? 'Pass' : 'Fail'; 
        cy.log(Test_status);
        results.push({ Field_Name, Test_status });
        cy.log(results);
      });
    });

    cy.get('#user_login-22').type('RobartTony Jr').then((username) => {
      const user = username.val();
      cy.get('[for="user_login-22"]').invoke('text').then(($text) => {
        Field_Name = $text;
        Test_status = user ? 'Pass' : 'Fail'; 
        cy.log(Test_status);
        results.push({ Field_Name, Test_status });
        cy.log(results);
      });
    });

    cy.get('#user_password-22').type('stark@112').then((password) => {
      const password1 = password.val();
      cy.get('[for="user_password-22"]').invoke('text').then(($text) => {
        Field_Name = $text;
        Test_status = password1 ? 'Pass' : 'Fail'; 
        cy.log(Test_status);
        results.push({ Field_Name, Test_status });
        cy.log(results);
      });
    });

    cy.get('#confirm_user_password-22').type('stark@112').then((confirmpassword) => {
      const Conpassword = confirmpassword.val();
      cy.get('[for="confirm_user_password-22"]').invoke('text').then(($text) => {
        Field_Name = $text;
        Test_status = Conpassword ? 'Pass' : 'Fail'; 
        cy.log(Test_status);
        results.push({ Field_Name, Test_status });
        cy.log(results);
      });
    });

    cy.get('#user_email-22').type('tonystark@gmail.com').then((mail) => {
      const Email = mail.val();
      cy.get('[for="user_email-22"]').invoke('text').then(($text) => {
        Field_Name = $text;
        Test_status = Email ? 'Pass' : 'Fail'; 
        cy.log(Test_status);
        results.push({ Field_Name, Test_status });
        cy.log(results);
      });
    });

    cy.get('#mobile_number-22').type('9944668899').then((mobile) => {
      const mobileNumber = mobile.val();
      cy.get('[for="mobile_number-22"]').invoke('text').then(($text) => {
        Field_Name = $text;
        Test_status = mobileNumber ? 'Pass' : 'Fail'; 
        cy.log(Test_status);
        results.push({ Field_Name, Test_status });
        cy.log(results);
      });
    });

    cy.get('.um-icon-android-checkbox-outline-blank').click().then(($checkbox) => {
      cy.get('[class="um-field-checkbox-option"]').should('have.text','I Accept the Terms and Conditions')
      // const isChecked = $checkbox.find('input[type="checkbox"]').is(':checked');
      // cy.get('[class="um-field-checkbox-option"]').invoke('text').then(($text) => {
      //   Field_Name = $text;
      //   Test_status = isChecked ? 'Pass' : 'Fail'; 
      //   cy.log(Test_status);
      //   results.push({ Field_Name, Test_status });
      //   cy.log(results);
      // });
    }).then(() => {
      // Function to convert the results array into CSV format
      const transformToCSV = (data) => {
        // Extract the field names and test status
        const headers = data.map(item => item.Field_Name).join(',');  // Header row (field names)
        const statuses = data.map(item => item.Test_status).join(','); // Data row (test statuses)

        // Join headers and data row
        return [headers, statuses].join('\n');
      };

      // Convert results to CSV format
      const csvData = transformToCSV(results);

      // Write the CSV file
      cy.writeFile('cypress/results/AppFromHZ.csv', csvData);
    });
  });
});
