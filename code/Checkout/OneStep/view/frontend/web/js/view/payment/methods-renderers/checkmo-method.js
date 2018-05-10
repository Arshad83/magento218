define(
    [
        'Magento_OfflinePayments/js/view/payment/method-renderer/checkmo-method'],
    function (Component) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Checkout_OneStep/payment/methods-renderers/checkmo'
            }
        });
    }
);
