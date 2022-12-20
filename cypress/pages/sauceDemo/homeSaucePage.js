class homeSaucePage{

    //  elements = {
    //     usernameInput: '#user-name',
    //     passwordInput: '#password',
    //     loginButton: '#login-button',
    //     errorMessage: 'h3[data-test="error"]'
    // }

    // typeUsername(username){
    //     return cy.get(this.elements.usernameInput).type(username)
    //     // this.elements.usernameInput().type(username)
    // }
    
    // typePassword(password){
    //     cy.get(elements.passwordInput).type(password)
    //     // this.elements.passwordInput().type(password)
    // }
    
    // clickLogin(){
    //     this.elements.loginButton().click()
    // }

    typeUsername(username){
        cy.get('#user-name')
          .clear()
          .type(username)
        return this            
    }
    
    typePassword(password){
        cy.get('#password')
        .clear()
        .type(password)
      return this  
    }

    clickLogin(){
        cy.get('h3[data-test="error"]').click()
    }

}

export default homeSaucePage;