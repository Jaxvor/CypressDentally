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
  })
    
    it("Add item to a basket, view the basket and remove an item", function() {
      home.selectItem()
      product.addToCart()
      home.shoppingCart()
      //The id is tied to the item in the cart so this is potentially very flakey because the item may change name or 
      //may be out of stock
      cart.removeFromCart()
      cy.contains('#remove-sauce-labs-bolt-t-shirt').should('not.exist')
    })
})