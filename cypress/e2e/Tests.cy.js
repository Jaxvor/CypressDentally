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

describe('Tech Challenge Tests', function () {

beforeEach(function () {
    cy.fixture('credentials').then((testdata) => {
      this.testdata = testdata
      cy.visit("/") //Url is set in cypress.config.js as baseUrl value
    })
  }) 
  
    it("User successfully logs in and completes checkout", function () {
      //This test logs in as valid user, visits a product page, adds an item to shopping cart, and completes checkout
      login.successfulLogin(this.testdata.standard_user, this.testdata.password)
      home.selectItem()
      product.addToCart()
      home.shoppingCart()
      home.checkout()
      checkout.enterCheckoutDetails(this.testdata.firstname, this.testdata.lastname, this.testdata.postcode)
      checkout.finishCheckout()
  })

    it("User fails to login due to being blocked", function() {
      //This test will ensure that locked out users cannot login and access the site
      login.blockedLogin(this.testdata.locked_out, this.testdata.password)
  })

    it("Add item to a basket, view the basket and remove an item", function() {
      login.successfulLogin(this.testdata.standard_user, this.testdata.password)
      home.selectItem()
      product.addToCart()
      home.shoppingCart()
      cart.removeFromCart()
    })
})