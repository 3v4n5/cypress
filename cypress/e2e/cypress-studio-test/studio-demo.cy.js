/* ==== Test Created with Cypress Studio ==== */
it('studiodemo', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://www.saucedemo.com/');
  cy.get('[data-test="username"]').clear('standard_user');
  cy.get('[data-test="username"]').type('standard_user');
  cy.get('[data-test="password"]').clear('s');
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').click();
  /* ==== End Cypress Studio ==== */
});