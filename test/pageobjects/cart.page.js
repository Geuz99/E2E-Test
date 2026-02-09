const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('//h1[@class="page-title"]');
    }
}

module.exports = new CartPage();
    