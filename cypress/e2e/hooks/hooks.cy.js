/*
1. before() -> una vez al principio
2. beforeEach() -> antes de cada test 
3. TEXT EXECUTION
4. afterEach() -> despues de cada test
5. beforeEach()
6. TEST EXECUTION
7. afterEach()
8. after() -> una vez al final

skip => salta el test case
only +> ejecuta solo un test case


*/

describe('Demo hooks', () => {
    
    before(() => {
        cy.log('Before')
    })
    
    beforeEach(() => {
        cy.log('BeforeEach')
    })
    
    it('should be test #1', () => {
        cy.log('test #1');
    });

    it.skip('should be test #2', () => {
        cy.log('test #2');
    });

    it('should be test #3', () => {
        cy.log('test #3');
    }); 
    
    afterEach(() => {
        cy.log('afterEach')
    })
    
    after(() => {
        cy.log('after')
    })
});



