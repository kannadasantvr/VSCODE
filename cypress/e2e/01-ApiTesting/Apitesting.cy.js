describe('apitesting',()=>{

it('Get method',()=>{
    cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
    .its('status')
    .should('equal',200)
})

it('post method',()=>{
    cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts/',
        body:   {
                title:"Test post",
                body:"This is post call",
                userId:1 
             }
            })
    .its('status')
    .should('equal',201)
})
it('put method',()=>{
    cy.request({
        method: 'PUT',
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        body:   {
                title:"Test post",
                body:"This is post call",
                userId:1,
                id:1 
             }
            })
    .its('status')
    .should('equal',200)
})
it('Delete method',()=>{
    cy.request('DELETE','https://jsonplaceholder.typicode.com/posts/1')
    .its('status')
    .should('equal',200)
})
})