<?php
namespace Payment\Paypal\Model;
 
use Magento\Quote\Api\CartRepositoryInterface;
use Payment\Paypal\Api\PaypalMethodListInterface as ApiInterface;
 
class PaypalMethod implements ApiInterface {
 
    /**
     * Quote / Cart Repository
     * @var CartRepositoryInterface $quoteRepository
     */
    protected $quoteRepository;
 
    /**
     * @param \Magento\Quote\Api\CartRepositoryInterface $quoteRepository
     * @param \Magento\Catalog\Api\ProductRepositoryInterface $productRepository
     */
    public function __construct(
        CartRepositoryInterface $quoteRepository
    ) {
        $this->quoteRepository = $quoteRepository;
    }
public function name($name){
    return "Hello,".$name;
}
    /**
     * Updates the specified cart with the specified products.
     *
     * @api
     * @param int $cartId
     * @param \TAG\CartManager\Api\CartProductInformationInterface[] $products
     * @return boolean
     */
    public function updateCart($cartId, $products = null) {
        $quote = $this->quoteRepository->getActive($cartId);
 
        if ($quote->hasItems()) {
            $quote->removeAllItems();
        }
 
        if (!empty($products)) {
            foreach ($products as $product) {
                $sku = $product->getSku();
                $qty = $product->getQty();
 
                $add_product = $this->productRepository->get($sku);
                $productType = $add_product->getTypeId();
 
                $quote->addProduct($add_product, $qty);
            }
        }
 
        $this->quoteRepository->save($quote->collectTotals());
 
        return true;
    }
}