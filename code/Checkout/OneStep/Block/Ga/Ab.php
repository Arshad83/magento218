<?php

namespace Checkout\OneStep\Block\Ga;

use Magento\Framework\View\Element\Template;
use Checkout\OneStep\Helper\Data as OpcHelper;

class Ab extends Template
{

    public $opcHelper;

    public function __construct(
        Template\Context $context,
        OpcHelper $opcHelper,
        array $data = []
    ) {
        parent::__construct($context, $data);
        $this->opcHelper = $opcHelper;
    }
}
