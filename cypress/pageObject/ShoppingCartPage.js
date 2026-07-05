class ShoppingCartPage{
    removeFromCart() {
        //The first 'Remove' button in the basket will be clicked in order to avoid using the id which uses a specific item name which may change or be out of stock
        cy.contains('button', 'Remove').first().click()
    }
}
export default ShoppingCartPage