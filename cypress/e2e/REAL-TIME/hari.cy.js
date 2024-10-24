let Field_Name,Test_status;
let results = [];
describe('new registration from',()=>{
    before('Navigate the page',()=>{
        cy.visit('http://V7datalabs.in/live')
    })
    
it('Firstname', () => {
  cy.get('#first_name-22').type('Tony').then(($FirstName_input) => {
    const FirstName_Val = $FirstName_input.val();

    cy.get('[for="first_name-22"]').invoke('text').then(($text) => {
      Field_Name = $text;
      Test_status = FirstName_Val ? 'Pass' : 'Fail'; // Ternary operator
      cy.log(Test_status);
      results.push({ Field_Name, Test_status });
      cy.log(results);
    })
  })
  cy.get('#last_name-22').type('Stark').then(($Lastname) => {
    const Lastname = $Lastname.val();
    cy.get('[for="last_name-22"]').invoke('text').then(($text)=>{
      Field_Name = $text;
      Test_status = Lastname ? 'Pass' : 'Fail'; // Ternary operator
      cy.log(Test_status);
      results.push({ Field_Name, Test_status });
      cy.log(results);
    })
  })
  cy.get('input[name="gender[]"]').check('Male',{ force: true }).should('be.checked').and('have.value','Male')
  cy.get('input[name="gender[]"]').then(($Gender)=>{
    const Gender =$Gender.val()
    cy.get('[for="gender-22"]').invoke('text').then(($text)=>{
      Field_Name = $text;
      Test_status = Gender ? 'Pass' : 'Fail'; // Ternary operator
      cy.log(Test_status);
      results.push({ Field_Name, Test_status });
      cy.log(results);
    })
  })
  cy.get('#birth_date-22').click();
  cy.get('.picker__select--year').select('1994');
  cy.get('.picker__nav--next').dblclick();
  cy.get('.picker__day').contains('10').click();
  cy.get('#birth_date-22').then((DOB) => {
  const Dateofbirth = DOB.val();
  cy.get('[for="birth_date-22"]').invoke('text').then(($text)=>{
    Field_Name = $text;
    Test_status = Dateofbirth ? 'Pass' : 'Fail'; 
    cy.log(Test_status);
    results.push({ Field_Name, Test_status });
    cy.log(results);
  })          
  })
  cy.get('#user_login-22').type('RobartTony Jr').then((username) => {
    const user = username.val();
    cy.get('[for="user_login-22"]').invoke('text').then(($text) => {
      Field_Name = $text;
      Test_status = user ? 'Pass' : 'Fail'; // Ternary operator
      cy.log(Test_status);
      results.push({ Field_Name, Test_status });
      cy.log(results);
    })
})
cy.get('#user_password-22').type('stark@112').then((password) => {
  const password1 = password.val();
  cy.get('[for="user_password-22"]').invoke('text').then(($text) => {
    Field_Name = $text;
    Test_status = password1 ? 'Pass' : 'Fail'; 
    cy.log(Test_status);
    results.push({ Field_Name, Test_status });
    cy.log(results);
  })
})
cy.get('#confirm_user_password-22').type('stark@112').then((confirmpassword) => {
  const Conpassword = confirmpassword.val();
  cy.get('[for="confirm_user_password-22"]').invoke('text').then(($text) => {
    Field_Name = $text;
    Test_status = Conpassword ? 'Pass' : 'Fail'; 
    cy.log(Test_status);
    results.push({ Field_Name, Test_status });
    cy.log(results);
  })
})
cy.get('#user_email-22').type('tonystark@gmail.com').then((mail) => {
  const Email = mail.val();
 cy.get('[for="user_email-22"]').invoke('text').then(($text)=>{ 
 Field_Name = $text;
 Test_status = Email ? 'Pass' : 'Fail'; 
 cy.log(Test_status);
 results.push({ Field_Name, Test_status });
 cy.log(results);
})
})
cy.get('#mobile_number-22').type('9944668899').then((mobile) => {
  const mobileNumber = mobile.val();
  cy.get('[for="mobile_number-22"]').invoke('text').then(($text)=>{
    Field_Name = $text;
    Test_status = mobileNumber ? 'Pass' : 'Fail'; 
    cy.log(Test_status);
    results.push({ Field_Name, Test_status });
    cy.log(results);
  })
})
cy.get('[class="um-field-checkbox-option"]').then(($checkbox) => {
  const isChecked = $checkbox.find('input[type="checkbox"]').is(':checked');
  cy.get('[class="um-field-checkbox-option"]').invoke('text').then(($text) => {
    Field_Name = $text;
    Test_status = isChecked ? 'Pass' : 'Fail';  
    cy.log(Test_status);
    results.push({ Field_Name, Test_status });
    cy.log(results);
  })
})
.then(() => {
  // Log or process the final results array
  // cy.log('Results:', results);
  // You can use results array here

  const transformToCSV = (data) => {
      const headers = data.map(item => item.value);
      const csvContent = [
        [...headers].join(','),  // Header row
        [...data.map(item => item.key)].join(',')  // Data row
      ].join('\n');
      return csvContent;
    };
    
    // Convert data to CSV format
    const csvData = transformToCSV(results);
    cy.log(csvData)
    //const csvContent = rows.map(e => e.join(',')).join('\n');
            cy.writeFile('cypress/results/applic1.csv', csvContent);

    //const fileName = 'task-one.csv'

    //cy.task('write',{ fileName, data : csvData})

  //   const filePath = path.join(__dirname, 'results', 'task-one.csv');
    
})
})
})//it block
//})//describe