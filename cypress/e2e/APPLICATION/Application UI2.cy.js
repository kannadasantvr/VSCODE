import userinfo from "../../fixtures/Pageobject/application"
let userDetails = new userinfo();
describe('Regitration page',()=>{
    beforeEach(function() {
        cy.visit('http://V7datalabs.in/live');
        this.startTime = new Date().getTime();  
      });
      afterEach(function() {

        const endTime = new Date().getTime();
        const timeTakenMs = endTime - this.startTime; 
        const timeTakenS = (timeTakenMs / 1000).toFixed(1) + 's'; // Convert to seconds and format
    
    
        cy.task('recordTestResult', {
          testName: this.currentTest.title,
          status: this.currentTest.state,
          timeTaken: timeTakenS
        });
      });
    it('smoke test',()=>{
        userDetails.FirstName('KANNADASAN')
        userDetails.LastName('KARTHIKEYAN')
        userDetails.Gender('Male')
        userDetails.DateOfBirth()
        userDetails.UserName('kannadasan2')
        userDetails.PassWord('Kanna@1234')
        userDetails.ConfirmPassword('Kanna@1234')
        userDetails.Email('dasan@gmail.com')
        userDetails.PhoneNumber('9944601185')
        userDetails.TermsCheckBox()
        userDetails.RegisterButton()
        
    })
    it('test case 1',()=>{
        //userDetails.FirstName('KANNADASAN')
        userDetails.LastName('KARTHIKEYAN')
        userDetails.Gender('Male')
        userDetails.DateOfBirth()
        userDetails.UserName('kannadasan23')
        userDetails.PassWord('Kanna@1234')
        userDetails.ConfirmPassword('Kanna@1234')
        userDetails.Email('dasan@gmail.com')
        userDetails.PhoneNumber('9944601185')
        userDetails.TermsCheckBox()
        userDetails.RegisterButton()
        cy.get('#um-error-for-first_name-22').should('have.text','First Name is required')
    })
    it('test case 2',()=>{
        userDetails.FirstName('KANNADASAN')
        //userDetails.LastName('KARTHIKEYAN')
        userDetails.Gender('Male')
        userDetails.DateOfBirth()
        userDetails.UserName('kannadasan24')
        userDetails.PassWord('Kanna@1234')
        userDetails.ConfirmPassword('Kanna@1234')
        userDetails.Email('dasan@gmail.com')
        userDetails.PhoneNumber('9944601185')
        userDetails.TermsCheckBox()
        userDetails.RegisterButton()
        cy.get('#um-error-for-last_name-22').should('have.text','Last Name is required')
    })
})
