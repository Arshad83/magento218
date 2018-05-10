define(
    [
        'Magento_Eway/js/view/payment/method-renderer/direct'
    ],
    function (ccFormComponent) {
        'use strict';

        return ccFormComponent.extend({
            defaults: {
                template: 'Checkout_OneStep/payment/methods-renderers/eway-direct-form'
            }
        });
    }
);
