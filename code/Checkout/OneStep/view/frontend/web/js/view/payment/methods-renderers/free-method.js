define(
    [
        'Magento_Payment/js/view/payment/method-renderer/free-method'
    ],
    function (Component) {
        'use strict';
        return Component.extend({
            defaults: {
                template: 'Checkout_OneStep/payment/methods-renderers/free'
            }
        });
    }
);
