class ProductPage {
    addToCart(){
        //This will select a t-shirt from the homepage. The id's are set to specific items rather than generic id's which
        //is potentially problematic should the items be removed from the site or stock runs out
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
    }

    removeFromCart() {
        //The id is tied to the item in the cart so again this is potentially very flakey because the item may change name or 
        //may be out of stock
        cy.get('#remove-sauce-labs-bolt-t-shirt').click()
    }
}
export default ProductPage