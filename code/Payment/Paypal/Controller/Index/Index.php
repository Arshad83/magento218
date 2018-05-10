<?php
 
namespace Payment\Paypal\Controller\Index;
use \Magento\Framework\App\Action\Action as controllerAction; 
use \Magento\Customer\Api\CustomerRepositoryInterface;
class Index extends controllerAction {	

	 protected $customer;

	/**
	 * @param \Magento\Framework\App\Action\Context $context
	 * @param \Demo\HelloWorld\Model\Customer $customer
	 */
	public function __construct(
	    \Magento\Framework\App\Action\Context $context,
	    \Payment\Paypal\Model\Method\customFree $customer
	) {
	    $this->customer = $customer;

	    parent::__construct($context);
	}

	/**
	 * Sets the content of the response
	 */
	public function execute() {
		$this->getResponse()->appendBody('Hello world');
		$this->customer->isAvailableInConfig2();
		echo $this->getCustomerId();

	}
}