class ProductPage {
    addToCart(){
        //This simply clicks the add to cart button on a product page.
        cy.get('#add-to-cart').click()
    }
}
export default ProductPage