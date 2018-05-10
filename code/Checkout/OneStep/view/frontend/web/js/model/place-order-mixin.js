define([
    'jquery',
    'mage/utils/wrapper',
    'Checkout_OneStep/js/model/comment-assigner',
    'Checkout_OneStep/js/model/subscribe-assigner'
], function ($, wrapper, commentAssigner, subscribeAssigner) {
    'use strict';

    return function (placeOrderAction) {

        return wrapper.wrap(placeOrderAction, function (originalAction, paymentData, messageContainer) {
            commentAssigner(paymentData);
            subscribeAssigner(paymentData);

            return originalAction(paymentData, messageContainer);
        });
    };
});
