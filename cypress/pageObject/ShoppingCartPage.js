class ShoppingCartPage{
    removeFromCart() {
        //The id is tied to the item in the cart so this is potentially very flakey because the item may change name or 
        //may be out of stock
        cy.get('#remove-sauce-labs-bolt-t-shirt').click()
        cy.contains('#remove-sauce-labs-bolt-t-shirt').should('not.exist')
    }
}
export default ShoppingCartPage