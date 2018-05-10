define(
    [
        'ko',
        'Magento_OfflinePayments/js/view/payment/method-renderer/banktransfer-method'
    ],
    function (ko, Component) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Checkout_OneStep/payment/methods-renderers/banktransfer'
            }
        });
    }
);
