<?php
namespace Payment\Paypal\Api;

interface PaypalMethodListInterface
{	

	public function name($name);    /**
     * Returns greeting message to user
     *
     * @api
     * @param string $name Users name.
     * @return string Greeting message with users name.
     */
   public function updateCart($cartId, $products = null);

    /**
     * Get list of payment methods.
     *
     * @param int $storeId
     * @return \Magento\Payment\Api\Data\PaymentMethodInterface[]
     */
    public function getList($storeId);

    /**
     * Get list of active payment methods.
     *
     * @param int $storeId
     * @return \Magento\Payment\Api\Data\PaymentMethodInterface[]
     */
    public function getActiveList($storeId);
}

