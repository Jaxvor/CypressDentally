import LoginPage from "../pageObject/LoginPage";
import HomePage from "../pageObject/HomePage";
import ProductPage from "../pageObject/ProductPage";
import CheckoutPage from "../pageObject/CheckoutPage";
import ShoppingCartPage from "../pageObject/ShoppingCartPage";

const login = new LoginPage();
const home = new HomePage();
const product = new ProductPage();
const checkout = new CheckoutPage();
const cart = new ShoppingCartPage();

describe('Shopping cart process regression tests', function () {

beforeEach(function () {
    cy.fixture('credentials').then((testdata) => {
      this.testdata = testdata
      cy.visit("/") //Url is set in cypress.config.js as baseUrl value
      login.successfulLogin(this.testdata.standard_user, this.testdata.password)
    })
  }) 

    it("User completes checkout", function () {
      //This test visits a product page, adds an item to shopping cart, and completes checkout
      home.selectItem()
      product.addToCart()
      home.shoppingCart()
      home.checkout()
      checkout.enterCheckoutDetails(this.testdata.firstname, this.testdata.lastname, this.testdata.postcode)
      checkout.finishCheckout()
      cy.contains('Thank you for your order!').should('be.visible')
  })
    
    it("Add item to a basket, view the basket and remove an item", function() {
      home.selectItem()
      product.addToCart()
      home.shoppingCart()
      cart.removeFromCart()
      //As this test removes the only item from the basket, we can check that the 'Remove' button is no longer visible to ensure that the item has been removed
      cy.contains('Remove').should('not.exist')
    })

    it("User clicks on product title and is taken to the corresponding product page", function() {
      home.selectTshirt()
      cy.contains('Sauce Labs Bolt T-Shirt').should('be.visible')
      cy.contains('Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.').should('be.visible')
    })
})