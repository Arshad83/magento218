define(
    [
        'mage/translate',
        'Magento_Paypal/js/view/payment/method-renderer/payflowpro-method'
    ],
    function ($t, Component) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Checkout_OneStep/payment/methods-renderers/payflowpro-form',
                isCurrentlySecure: window.checkoutConfig.iwdOpcSettings.isCurrentlySecure

            }
        });
    }
);
