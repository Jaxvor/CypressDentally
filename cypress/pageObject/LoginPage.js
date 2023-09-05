class LoginPage {

    enterUsername(standard_user, locked_out, problem, performance_glitch){
        cy.get('#user-name').type(standard_user, locked_out, problem, performance_glitch)
    }

    enterPassword(password){
        cy.get('#password').type(password)
    }

    loginButton(){
        cy.get('#login-button').click()
    }
    
    successfulLogin(standard_user, password) {
        this.enterUsername(standard_user)
        this.enterPassword(password)
        this.loginButton()
    }

    blockedLogin(locked_out, password) {
        this.enterUsername(locked_out)
        this.enterPassword(password)
        this.loginButton()
        cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
    }
}
export default LoginPage