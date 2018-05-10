define([
    'jquery',
    'mage/utils/wrapper',
    'Checkout_OneStep/js/model/comment-assigner',
    'Checkout_OneStep/js/model/subscribe-assigner'
], function ($, wrapper, commentAssigner, subscribeAssigner) {
    'use strict';

    return function (placeOrderAction) {

        return wrapper.wrap(placeOrderAction, function (originalAction, messageContainer, paymentData) {
            commentAssigner(paymentData);
            subscribeAssigner(paymentData);

            return originalAction(messageContainer, paymentData);
        });
    };
});
