define([
    'jquery',
    'Checkout_OneStep/js/model/quote',
    'Checkout_OneStep/js/checkout-data'
], function ($, quote, checkoutData) {
    'use strict';

    return function (paymentData) {
        if (!quote.isShowComment()) {
            return;
        }

        if (paymentData['extension_attributes'] === undefined) {
            paymentData['extension_attributes'] = {};
        }

        paymentData['extension_attributes']['comment'] = checkoutData.getComment();
    };
});
