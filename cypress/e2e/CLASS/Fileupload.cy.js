describe('file upload',()=>{
    it('upload',()=>{
        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');
        cy.get('input[name="upfile"]').selectFile('C:\\Users\\kanna\\OneDrive\\Desktop\\Book1.xlsx')
    })

})