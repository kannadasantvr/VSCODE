import { writeFile } from "xlsx";
const Pass =new Map();

describe('new registration from',()=>{
    before('Navigate the page',()=>{
        cy.visit('http://V7datalabs.in/live')
    })
    it('Firstname',()=>{
        cy.get('#first_name-22').type('TONY').then((Iron)=>{
            const k = Iron.val()
            if(k){
                let key = 'PASS'
                cy.log(key)
                Pass['FIRST NAME']= key;
                cy.log(Pass)


            }else{
                let key = 'FAIL'
                cy.log(key)
                Pass['FIRST NAME']= key;
                cy.log(Pass)
            }

        })
        cy.get('#last_name-22').type('STARK').then((Iron)=>{
            const k = Iron.val()
            if(k){
                let key = 'PASS'
                cy.log(key)
                Pass['LAST NAME'] = key;
                cy.log(Pass)

            }else{
                let key = 'FAIL'
                cy.log(key)
                Pass['LAST NAME'] = key;
                cy.log(Pass)
            }
        })
        cy.get('input[name="gender[]"]').check('Male',{ force: true }).should('be.checked').and('have.value','Male')
            cy.get('input[name="gender[]"]').then((Gender)=>{
                const g = Gender.val();
                Pass['GENDER'] = g ? 'PASS' : 'FAIL';
            })
        cy.get('#birth_date-22').click()
        cy.get('.picker__select--year').select('1994')
        cy.get('.picker__nav--next').dblclick()
        cy.get('.picker__day').contains('10').click()
        cy.get('#birth_date-22').then((DOB)=>{
            const D = DOB.val()
            if(D){
                let key = 'PASS'
                Pass['DATE OF BIRTH'] = key;
                cy.log(Pass)
            }else{
                let key = 'FAIL'
                Pass['DATE OF BIRTH'] = key;
                cy.log(Pass)
            }
        })
        cy.get('#user_login-22').type('Kannadasan1').then((user)=>{
            const U = user.val()
            if(U){
                let key = 'PASS'
                Pass['USER LOGIN'] = key;
                cy.log(Pass)
            }else{
                let key = 'FAIL'
                Pass['USER LOGIN'] = key;
                cy.log(Pass)

            }
        }).then(()=>{
            cy.get('#user_password-22').type('Kanna@112').then((password)=>{
                const W = password.val()
                if(W){
                let key = 'PASS'
                Pass['PASSWORD'] = key;
                cy.log(Pass)
                }else{
                let key = 'PASS'
                Pass['PASSWORD'] = key;
                cy.log(Pass)
                }
            })
        }).then(()=>{
            cy.get('#confirm_user_password-22').type('Kanna@112').then((Conpass)=>{
                const CP = Conpass.val()
                if(CP){
                    let key = 'PASS'
                    Pass['CONFIRM PASSWORD'] = key;
                    cy.log(Pass)
                }else{
                    let key = 'FAIL'
                    Pass['CONFIRM PASSWORD'] = key;
                    cy.log(Pass)  
                }
            })
        })
        cy.get('#user_email-22').type('kannadasan1@gmail.com').then((mail)=>{
            const ml = mail.val()
            if(ml){
                let key = 'PASS'
                Pass['EMAIL'] = key;
                cy.log(Pass)
            }else{
                let key = 'FAIL'
                Pass['EMAIL'] = key;
                cy.log(Pass)
            }
        })
        cy.get('#mobile_number-22').type('9944601185').then((mobile) => {
            const mb = mobile.val();
            let key = mb ? 'PASS' : 'FAIL'
            Pass.set('MOBILE NUMBER',key)
            cy.log(Pass)
        });
        cy.get('.um-icon-android-checkbox-outline-blank').click()
        cy.get('[class="um-field-checkbox-option"]').should('have.text','I Accept the Terms and Conditions')
        
        const result =[];
        Pass.forEach((value,key)=>{
            result.push(`${key},${value}`)
        })
        const csvContent = result.join('\n');
        
        
        cy.writeFile('cypress/results/app65.csv', csvContent);
        })
      
    })

