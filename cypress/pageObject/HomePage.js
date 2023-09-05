class HomePage {
    selectItem(){
    cy.get("#item_1_title_link").click()
    }

    shoppingCart(){
        cy.get("#shopping_cart_container").click()
    }

    checkout(){
        cy.get("#checkout").click()
    }
}
export default HomePage