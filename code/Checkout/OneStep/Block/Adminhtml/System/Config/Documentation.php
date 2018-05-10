<?php

namespace Checkout\OneStep\Block\Adminhtml\System\Config;

use Magento\Framework\Data\Form\Element\AbstractElement;
use Magento\Config\Block\System\Config\Form\Field;

class Documentation extends Field
{
    public $userGuideUrl = "https://www.3esofttech.com/";

    protected function _getElementHtml(AbstractElement $element)
    {
        $element->getValue();
        return sprintf(
            '<span>
                        <a href="%s" target="_blank">%s</a>
                    </span>',
            $this->userGuideUrl,
            __('User Guide')
        );
    }
}
