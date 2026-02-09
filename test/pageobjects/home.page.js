    const { $ } = require('@wdio/globals')

    class HomePage {

        get btn_menu () {
            return $('//span[@class="icon-menu"]');
        }

        get btn_my_account () {
            return $('(//a[@class="nasa-login-register-ajax"])[3]');
        }

        get btn_browse_products () {
            return $('//li[@class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-parent-item default-menu root-item li_accordion"]//a[@class="accordion"]');
        }

        get btn_search () {
            return $('(//a[@title="POS Parts"])[5]');
        }

        get btn_return_shop () {
            return $('//p[@class="return-to-shop"]//following::a');
        }

        async clickMenu () {
            await this.btn_menu.click();
        }
    
        async clickMyAccount () {
            await this.btn_my_account.click();
        } 

        async clickBrowseProducts () {
            await this.btn_browse_products.click();
        }
        
        async clickSearch () {
            await this.btn_search.click();
        }
        
        async clickReturnShop () {
            await this.btn_return_shop.click();
        }
    }

    module.exports = new HomePage();