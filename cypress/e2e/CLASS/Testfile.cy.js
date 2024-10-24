describe('JSON TO CSV',()=>{
beforeEach(()=>{
  cy.fixture('data.json').as('data')
})
it('count of item ,key, friends',function(){
  const data = this.data;
  const countList = data.length;
  cy.log('count of list:',countList)

  data.forEach(person=>{
    const keycount = Object.keys(person).length
    cy.log('count of key:',keycount)
  })
  const csvContent = rows.map(e => e.join(',')).join('\n');
  cy.writeFile('cypress/results/a1.csv', csvContent);

// Write CSV to a file (use Node.js or any tool to save it)
//console.log(csvContent);
})
})