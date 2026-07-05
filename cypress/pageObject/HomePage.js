class HomePage {
    selectItem(){
        cy.get("#item_1_title_link").click()
    }

    selectTshirt(){
        cy.contains('Sauce Labs Bolt T-Shirt').click()
    }

    shoppingCart(){
        cy.get("#shopping_cart_container").click()
    }

    checkout(){
        cy.get("#checkout").click()
    }

    logout(){
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
    }
}
export default HomePage