<?php

namespace Checkout\OneStep\Plugin\Payments\Paypal;

use \Magento\Paypal\Model\AbstractConfig as PaypalConfig;

/**
 * Class Config
 * @package IWD\Opc\Model\Payments\Paypal
 */
class Config
{
    /**
     * @param PaypalConfig $subject
     * @param $results
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    public function afterGetBuildNotationCode(PaypalConfig $subject, $result)
    {
        return 'IWD_SI_MagentoCE_WPS';
    }
}