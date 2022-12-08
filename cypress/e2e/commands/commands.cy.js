
describe('Commands Example', () => {
 
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.typeLogin('standard_user','secret_sauce')
    })

    it('Test', () => {
        cy.log('Test')
    });
    
    afterEach('Test', () => {
        cy.Logout()
    });
    

});

describe('Commands Example 2', () => {
    it('Succes Login Test', () => {
        cy.typeLogin('standard_user','secret_sauce')
        cy.get('.title').should('contain.text', 'Products')
        cy.Logout()
        cy.url().should('eq', 'https://www.saucedemo.com/')
    });

    it('Failed Login Test', () => {
        cy.typeLogin('standard_user','dummyPassword') 
        cy.get('.error').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')     
    });
});