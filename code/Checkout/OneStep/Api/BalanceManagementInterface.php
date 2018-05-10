<?php

namespace Checkout\OneStep\Api;

/**
 * Customer balance(store credit) operations
 * @api
 */
interface BalanceManagementInterface
{
    /**
     * remove store credit
     *
     * @param int $cartId
     * @return bool
     */
    public function remove($cartId);
}
