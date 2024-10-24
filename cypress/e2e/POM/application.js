class userinfo{

    constructor(){
        this.firstName='#first_name-22';
        this.lastName='input[data-key="last_name"]';
        this.genDer='input[name="gender[]"]';
        this.dobField='#birth_date-22';
        this.dateOfYear= '[class="picker__select--year"]';
        this.userName='#user_login-22';
        this.passWord= '#user_password-22';
        this.cnfmPassWord= '#confirm_user_password-22';
        this.mail='#user_email-22';
        this.phNo='#mobile_number-22';
        this.termsCheck='[class="um-icon-android-checkbox-outline-blank"]';
        this.submit='div input[type="submit"]';
    
    }
    
    FirstName(fName){
        cy.get(this.firstName).type(fName)
    }
    LastName(LName){
        cy.get(this.lastName).type(LName)
    
    }
    Gender(Value){
        cy.get(this.genDer).check(Value,{ force: true }).should('be.checked').and('have.value',Value);
    }
    DateOfBirth(){
    
        cy.get(this.dobField).click()
        cy.get(this.dateOfYear).select('2000')
        cy.get('[class="picker__day picker__day--infocus"]').eq(4).click()
    
    }
    
    UserName(uName){
        cy.get(this.userName).type(uName)  
        
    }
    PassWord(uPass){
        cy.get(this.passWord).type(uPass)
    }
    ConfirmPassword(CnfPass){
         cy.get(this.cnfmPassWord).type(CnfPass)
    }
    Email(eMailID){
        cy.get(this.mail).type(eMailID)
    }
    PhoneNumber(pNo){
        cy.get(this.phNo).type(pNo)
    }
    TermsCheckBox(){
        cy.get(this.termsCheck).click()
    }
    RegisterButton(){
        cy.get(this.submit).click()
    }
    }
    
    export default userinfo;