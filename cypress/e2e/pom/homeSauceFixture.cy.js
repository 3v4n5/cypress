import { homeSaucePage } from "../../pages/sauceDemo/homeSaucePage";
import { inventoryPage } from "../../pages/sauceDemo/inventoryPage";


const tests = require('../../fixtures/data-driven/sauceUsers.json')

describe('Home Sauce Demo', () => {
    
    const login = new homeSaucePage();
    const inventory = new inventoryPage();

    
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    tests.forEach(test =>{
        
        it(test.name, () => {
            
            login.typeUsername(test.username)
            login.typePassword(test.password)
            login.clickLogin()

            if(test.name === 'should login to inventory page'){
                inventory.getSpan(test.expected)     
            }else{
                login.getError(test.expected)
            }
        });
    
    })
    
});