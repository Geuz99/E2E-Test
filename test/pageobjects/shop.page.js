const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ShopPage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('//div[@class="breadcrumb-row"]//following::h2');
    }

    get searchInput () {
        return $('//img[@alt="ACTIVE SHIELD SUNGLASSES"]');
    }

    get addToCartButton () {
        return $('//button[@name="add-to-cart"]');
    }

    get checkoutButton () {
        return $('//a[@title="Checkout"]');
    }

    get viewCartList () {
        return $('//div[@class="cart_list"]');
    }

    get deleteProductButton () {
        return $('//a[@title="Remove this item"]');
    }  
    
    get viewEmptyWidget () {
        return $('//div[@class="widget_shopping_cart_content cart_sidebar"]');
    }

    async clickSearchInput () {
        await this.searchInput.scrollIntoView();
        await this.searchInput.click();
    }

    async clickAddToCartButton () {
        await this.addToCartButton.scrollIntoView();
        await this.addToCartButton.click();
    }

    async clickDeleteProductButton () {
        await this.deleteProductButton.click();
    }

}

module.exports = new ShopPage();
     