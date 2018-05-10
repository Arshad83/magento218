<?php
/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
namespace Payment\Paypal\Model\Method;



/**
 * Free payment method
 * @method \Magento\Quote\Api\Data\PaymentMethodExtensionInterface getExtensionAttributes()
 */
class customFree extends \Magento\Payment\Model\Method\Free
{
   

    /**
     * Check whether method is enabled in config
     *
     * @param \Magento\Quote\Model\Quote|null $quote
     * @return bool
     */
    public function isAvailableInConfig2()
    {
        echo "  learning magento2  ";
    }


}
