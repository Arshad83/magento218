<?php

namespace Checkout\OneStep\Plugin\Country;

use Checkout\OneStep\Helper\Data as OpcHelper;
use Magento\Directory\Model\ResourceModel\Country\Collection as CountryCollection;

class Collection
{
    public $opcHelper;

    public function __construct(
        OpcHelper $opcHelper
    ) {
        $this->opcHelper = $opcHelper;
    }

    public function beforeToOptionArray(CountryCollection $subject, $emptyLabel = ' ')
    {
        if ($emptyLabel === ' ' && $this->opcHelper->isCheckoutPage()) {
            $emptyLabel = __('Please select a country.');
        }

        return [$emptyLabel];
    }
}
