var config = {
    map: {
        '*': {
            'Magento_Checkout/js/model/quote': 'Checkout_OneStep/js/model/quote',
            'Magento_Checkout/js/checkout-data': 'Checkout_OneStep/js/checkout-data',
            'Magento_Checkout/js/model/checkout-data-resolver': 'Checkout_OneStep/js/model/checkout-data-resolver',
            'Magento_Checkout/js/view/summary/abstract-total': 'Checkout_OneStep/js/view/summary/abstract-total',

            'Magento_Checkout/js/model/shipping-rate-service': 'Checkout_OneStep/js/model/shipping-rate-service',
            'Magento_Checkout/js/model/shipping-save-processor/default': 'Checkout_OneStep/js/model/shipping-save-processor/default',
            'Magento_Checkout/js/model/shipping-rates-validator': 'Checkout_OneStep/js/model/shipping-rates-validator',
            'Magento_Checkout/js/model/new-customer-address': 'Checkout_OneStep/js/model/new-customer-address',

            'Magento_Checkout/js/model/payment-service': 'Checkout_OneStep/js/model/payment-service',

            'Magento_CheckoutAgreements/js/model/agreement-validator': 'Checkout_OneStep/js/model/agreement-validator',
            'Magento_CheckoutAgreements/js/model/agreements-assigner': 'Checkout_OneStep/js/model/agreements-assigner',

            'Magento_Paypal/js/action/set-payment-method': 'Checkout_OneStep/js/action/paypal/set-payment-method',

            'Magento_Customer/js/action/login': 'Checkout_OneStep/js/action/login'
        }
    },
    paths: {
        'microplugin': 'Checkout_OneStep/js/libs/microplugin',
        'sifter': 'Checkout_OneStep/js/libs/sifter',
        'iwdOpcSelectize': 'Checkout_OneStep/js/libs/selectize',
        'iwdOpcHelper': 'Checkout_OneStep/js/helper'
    },
    shim: {
        'iwdOpcSelectize': {
            'deps': ['jquery', 'microplugin', 'sifter']
        }
    },
    config: {
        mixins: {
            'Magento_Checkout/js/action/place-order': {
                'Checkout_OneStep/js/model/place-order-mixin': true
            },
            'Magento_Checkout/js/action/set-payment-information': {
                'Checkout_OneStep/js/model/set-payment-information-mixin': true
            }
        }
    }
};
