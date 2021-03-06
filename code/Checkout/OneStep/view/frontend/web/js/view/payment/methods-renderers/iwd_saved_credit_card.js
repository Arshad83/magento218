define(
    [
        'mage/translate',
        'IWD_SavedCreditCard/js/view/payment/method-renderer/iwd_saved_credit_card'
    ],
    function ($t, Component) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Checkout_OneStep/payment/methods-renderers/iwd_saved_credit_card',
                isCurrentlySecure: window.checkoutConfig.iwdOpcSettings.isCurrentlySecure

            }
        });
    }
);
