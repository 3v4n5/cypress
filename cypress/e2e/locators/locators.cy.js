

let username = 'standard_user'
let password = 'secret_sauce'
let URL = 'https://www.saucedemo.com/'

describe('Locators in Cypress', function(){

    beforeEach(() => {
        cy.visit(URL);//visita la pagina en cada caso de prueba
    });


    it('GET method', () => {
        // cy.visit(URL)
        cy.get('#user-name').type(username)//obtiene elemento por id
        cy.get('input#password').type(password)//obtiene el elemento por input
        cy.get('[data-test="login-button"]').click()//obtiene elemento por data-test
    })

    it('EQ|First|Last Method', () => {
        cy.get('input').first().type(username)//encuentra el primer input
        cy.get('input').eq(1).type(password)//encuentra la posicion 1 del array de inputs
        cy.get('input').last().click()//encuentra el ultimo elemento del array de inputs
    });

    it('FILTER Method', () => {
        cy.get('input').filter('[type="text"]').type(username)//filtra por type del input
        cy.get('input').filter('[type="password"]').type(password)//filtra por type del input
        cy.get('input').filter('[type="submit"]').click()//filtra por type del input
    });

    it('FIND Method', () => {
        cy.get('form').find('input').eq(0).type(username)//encuentra la posicion 0 del array de inputs
        cy.get('form').find('input').eq(1).type(password)//encuentra la posicion 1 del array de inputs
        cy.get('form').find('input').last().click()//encuentra la ultima posicion del array de inputs
    });

    it('PARENT Method', () => {
        cy.get('form').parent().should('have.class', 'login-box')
    });

})

