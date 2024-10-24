import login from "../POM/swaglog";
import product from "../POM/product";
import Address from "../POM/address";
describe('login test with data driven', () => {
    let loginpage   = new login();
    let productpage = new product();
    let Addresspage = new Address();
    let cred;
    before(() => {
        cy.fixture('example').then((tdata) => {
            cred = tdata;
        })
    })
    it('should log in successfully', () => {
        cy.visit('https://www.saucedemo.com/v1/')
        loginpage.typinguserName(cred.username);
        loginpage.typingpassword(cred.password);
        loginpage.clickonsubmit();
        productpage.sortingprice();
        cred.prod.forEach((product) => {
        cy.addingProducttocart(product); 
    });
        productpage.clickOncarticon();
        productpage.cartandassertion()  
        productpage.checkout()      
        Addresspage.typingfirstname(cred.firstname)
        Addresspage.typinglastname(cred.lastname)
        Addresspage.typingpostalcode(cred.postalcode)
        Addresspage.clicksubmit()
        cy.evaluatePrice();
        Addresspage.clickfinishbutton()
        Addresspage.Textvisible()
        Addresspage.Imageassertion()
       
      
    
        });
        
    })