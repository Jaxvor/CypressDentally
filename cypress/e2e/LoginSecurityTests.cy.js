import LoginPage from "../pageObject/LoginPage";
const login = new LoginPage();

describe('Login security tests', function () {

    beforeEach(function () {
        cy.fixture('credentials').then((testdata) => {
          this.testdata = testdata
          cy.visit("/") //Url is set in cypress.config.js as baseUrl value
        })
    })
    
    it("User fails to login due to being blocked", function() {
        //This test will ensure that locked out users cannot login and access the site
        login.blockedLogin(this.testdata.locked_out, this.testdata.password)
    })
})