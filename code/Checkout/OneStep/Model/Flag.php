<?php

namespace Checkout\OneStep\Model;

class Flag extends \Magento\Framework\Flag
{

    public function initFlagCode($code)
    {
        $this->_flagCode = $code;
        return $this;
    }
}
