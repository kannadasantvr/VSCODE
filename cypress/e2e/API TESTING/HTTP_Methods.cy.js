describe('HTTP Methods',()=>{


    const resss = {
        id: 13,
        email: "kanna.howell@reqres.in",
        first_name: "kannadasan",
        last_name: "Howel",
        
    }

    it('GET Method',()=>{
        cy.request(  {    
            method:'GET',
            url: 'https://reqres.in/api/users?page=2'
        }
        ).its('status').should('equal',200)


    })

    it('POST Method',()=>{
        cy.request(  {    
            method:'POST',
            url: 'https://reqres.in/api/users',
            body: resss
        }
        )
        .its('status')
        .should('equal',201)
        expect(resss.email).to.eq('kanna.howell@reqres.in')

    })

    it('PUT Method',()=>{
        cy.request(  {    
            method:'PUT',
            url: 'https://reqres.in/api/users/2',
            body: {
                "name": "morpheus",
                "job": "zion resident"
            }
        }
        )
        .its('status')
        .should('equal',200)

    })
    it('DELETE Method',()=>{
        cy.request(  {    
            method:'DELETE',
            url: 'https://reqres.in/api/users/2',
          
        }
        )
        .its('status')
        .should('equal',204)

    })






})