<?php
namespace GeorgRinger\Modernpackage\Error;
/***************************************************************
 *  Copyright notice
 *
 *  (c) 2014 Georg Ringer <georg.ringer@cyberhouse.at>
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

use TYPO3\CMS\Core\Error\ExceptionHandlerInterface;
use TYPO3\CMS\Core\Error\ProductionExceptionHandler as DefaultProductionHandler;

class ProductionExceptionHandler extends DefaultProductionHandler implements ExceptionHandlerInterface {

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
