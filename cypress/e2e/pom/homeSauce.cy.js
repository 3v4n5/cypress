import homeSaucePage from "../../pages/saucedemo/homeSaucePage";
import inventoryPage from "../../pages/sauceDemo/inventoryPage";

describe('POM implementation', function() {
    
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com')
    });
    
    
    it('should login to inventory page', function() {

        login.typeUsername('standard_user')
        login.typePassword('secret_sauce')
        login.clickLogin()

        inventoryPage.elements.titleSpan().should('have.text', 'Products')

    });
    
    it('should display locked out message', function() {

        login.typeUsername('locked_out_user')
        login.typePassword('secret_sauce')
        login.clickLogin()

        homeSaucePage.elements.titleSpan().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')

    });
    
    it('should display incorrect username', function() {

        login.typeUsername('dummyUser')
        login.typePassword('secret_sauce')
        login.clickLogin()

        inventoryPage.elements.titleSpan().should('have.text', 'Epic sadface: Username and password do not match any user in this service')

    });
    
    it('should display incorrect password', function() {

        login.typeUsername('standard_user')
        login.typePassword('dummyPassword')
        login.clickLogin()

        inventoryPage.elements.titleSpan().should('have.text', 'Epic sadface: Username and password do not match any user in this service')

    });
});