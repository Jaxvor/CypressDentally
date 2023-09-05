class CheckoutPage {
    enterFirstName(firstname){
        cy.get('#first-name').type(firstname)
    }

    enterLastName(lastname) {
        cy.get('#last-name').type(lastname)
    }

    enterPostcode(postcode) {
        cy.get('#postal-code').type(postcode)
    }

    continue() {
        cy.get('#continue').click()
    }

    enterCheckoutDetails(firstname, lastname, postcode){
        this.enterFirstName(firstname)
        this.enterLastName(lastname)
        this.enterPostcode(postcode)
        this.continue()
    }

    finishCheckout(){
        cy.get('#finish').click()
        cy.contains('Thank you for your order!').should('be.visible')
    }
}
export default CheckoutPage