<?php

namespace GeorgRinger\Modernpackage\Error;

class ProductionExceptionHandler extends \TYPO3\CMS\Core\Error\ProductionExceptionHandler implements \TYPO3\CMS\Core\Error\ExceptionHandlerInterface {


	/**
	 * @param \Exception $exception exception
	 * @return void
	 */
	public function echoExceptionWeb(\Exception $exception) {
		if (!headers_sent()) {
			header("HTTP/1.1 500 Internal Server Error");
		}

		$this->writeLogEntries($exception, self::CONTEXT_WEB);

		/** @var \TYPO3\CMS\Core\Messaging\ErrorpageMessage $messageObj */
		$messageObj = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance('TYPO3\\CMS\\Core\\Messaging\\ErrorpageMessage', $this->getMessage($exception));
		$messageObj->setHtmlTemplate('typo3conf/ext/modernpackage/Resources/Private/Templates/Standalone/Errors/Production.html');
		$messageObj->output();
	}

}

?>