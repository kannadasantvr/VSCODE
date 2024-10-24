describe('amazon website',()=>{
    it('amazon search mobiles',()=>{
cy.visit('https://www.amazon.in');
cy.get('header') // Replace with the correct selector for the Amazon header
  .invoke('css', 'background-color')
  .then((bgColor) => {
    cy.log('Background Color:', bgColor);
    expect(bgColor).to.eq('rgba(0, 0, 0, 0)'); // Example: Dark blue/gray
  });
})
})
