define([
    'Magento_Braintree/js/view/payment/method-renderer/paypal',
    'mage/translate'
], function (Component, $t) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Checkout_OneStep/payment/methods-renderers/braintree/paypal'
        },
        getInstructions: function () {
            return $t('After clicking "Place Order", you will be directed to one of our trusted partners to complete your purchase.');
        },
        isSkipOrderReview: function () {
            return true;
        }
    });
});
