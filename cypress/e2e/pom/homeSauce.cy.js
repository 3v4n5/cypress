import { homeSaucePage } from "../../pages/saucedemo/homeSaucePage";
import { inventoryPage } from "../../pages/sauceDemo/inventoryPage";

describe('POM implementation', function() {
    
    const login = new homeSaucePage();
    const inventory = new inventoryPage();

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com')
    });
    
    
    it('should login to inventory page', function() {

        login.typeUsername('standard_user')
        login.typePassword('secret_sauce')
        login.clickLogin()

        inventory.getSpan('Products')

    });
    
    it('should display locked out message', function() {

        login.typeUsername('locked_out_user')
        login.typePassword('secret_sauce')
        login.clickLogin()

        login.getError('Epic sadface: Sorry, this user has been locked out.')

    });
    
    it('should display incorrect username', function() {

        login.typeUsername('dummyUser')
        login.typePassword('secret_sauce')
        login.clickLogin()

        login.getError('Epic sadface: Username and password do not match any user in this service')

    });
    
    it('should display incorrect password', function() {

        login.typeUsername('standard_user')
        login.typePassword('dummyPassword')
        login.clickLogin()

        login.getError('Epic sadface: Username and password do not match any user in this service')

    });
});