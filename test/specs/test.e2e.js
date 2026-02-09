const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')
const CartPage = require('../pageobjects/cart.page')
const ShopPage = require('../pageobjects/shop.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await HomePage.clickMenu();
        await HomePage.clickMyAccount();
        await LoginPage.login('gerardo.zuleta15@gmail.com', 'Geuz1234!')
        await expect(CartPage.flashAlert).toBeExisting()
        await expect(CartPage.flashAlert).toHaveText(
            expect.stringContaining('Cart'))
    })
    
    it('Return to shop', async () => {
        await HomePage.clickReturnShop();
        await expect(ShopPage.flashAlert).toBeExisting()
        await expect(ShopPage.flashAlert).toHaveText(
            expect.stringContaining('Shop'))
    })
})

describe('Search and add to cart a product', () => {
    it('should add a product to cart', async () => {
        await ShopPage.clickSearchInput();
        await ShopPage.clickAddToCartButton();
        await expect(CartPage.viewCartList).toBeExisting()
    })
    
})

