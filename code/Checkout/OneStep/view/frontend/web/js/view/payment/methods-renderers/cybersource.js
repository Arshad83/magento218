define(
    [
        'Magento_Cybersource/js/view/payment/method-renderer/cybersource'
    ],
    function ($, Component) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Checkout_OneStep/payment/methods-renderers/cybersource-form'
            }
        });
    }
);
