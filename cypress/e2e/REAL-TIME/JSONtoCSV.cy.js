describe('Json Task',()=>{
beforeEach('getting file from fixtures',()=>{
    cy.fixture('data').as('AllData')
})
it('List Count',()=>{

    cy.get('@AllData').then(AllData =>{
        const l = AllData.length
        cy.log('Count of List:'+l)

    })
})

})