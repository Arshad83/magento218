define(
    [
        'jquery',
        'Magento_Authorizenet/js/view/payment/method-renderer/authorizenet-directpost'
    ],
    function ($, Component) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Checkout_OneStep/payment/methods-renderers/authorizenet-directpost',
                isCurrentlySecure: window.checkoutConfig.iwdOpcSettings.isCurrentlySecure
            }
        });
    }
);
