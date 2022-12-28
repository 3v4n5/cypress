export class homeSaucePage{

    elements = {
        usernameInput: '#user-name',
        passwordInput: '#password',
        loginButton: '#login-button',
        errorMessage: '[data-test="error"]'
    }

    typeUsername(username){
        cy.get(this.elements.usernameInput).type(username)
        // this.elements.usernameInput().type(username)
    }
    
    typePassword(password){
        cy.get(this.elements.passwordInput).type(password)
        // this.elements.passwordInput().type(password)
    }
    
    clickLogin(){
        cy.get(this.elements.loginButton).click()
    }

    getError(errorMessage){
      cy.get(this.elements.errorMessage).contains(errorMessage)
  }

    // typeUsername(username){
    //     cy.get('#user-name')
    //       .clear()
    //       .type(username)
    //     return this            
    // }
    
    // typePassword(password){
    //     cy.get('#password')
    //     .clear()
    //     .type(password)
    //   return this  
    // }

    // clickLogin(){
    //   cy.get('[data-test="login-button"]').click()
    // }

}


