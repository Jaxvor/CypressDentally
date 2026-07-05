import LoginPage from "../pageObject/LoginPage";
import HomePage from "../pageObject/HomePage";
const login = new LoginPage();
const home = new HomePage();

describe('Login security tests', function () {

    beforeEach(function () {
        cy.fixture('credentials').then((testdata) => {
          this.testdata = testdata
          cy.visit("/") //Url is set in cypress.config.js as baseUrl value
        })
    })
    
    it("User fails to login due to being blocked", function() {
        //This test will ensure that a locked out user cannot login and access the site
        login.blockedLogin(this.testdata.locked_out, this.testdata.password)
        cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
    })

    it("User logs in and logs out", function (){
        //This test ensures that a user can login and logout again
        login.successfulLogin(this.testdata.standard_user, this.testdata.password)
        home.logout()
        cy.contains('Login').should('be.visible')
    })
})