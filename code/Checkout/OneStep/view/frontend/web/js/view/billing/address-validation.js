define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/additional-validators',
        'Checkout_OneStep/js/model/billing/address-validator',
        'Magento_Checkout/js/model/quote'
    ],
    function (Component, additionalValidators, billingValidator, quote) {
        'use strict';
        additionalValidators.registerValidator(billingValidator);
        return Component.extend({});
    }
);
