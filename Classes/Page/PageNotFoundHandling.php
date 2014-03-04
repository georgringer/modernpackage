<?php

namespace GeorgRinger\Modernpackage\Page;

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

/**
 * Class PageNotFoundHandling
 * It can be registered in FE with
 * 'pageNotFound_handling' => 'USER_FUNCTION:typo3conf/ext/modernpackage/Classes/Page/PageNotFoundHandling.php:GeorgRinger\\Modernpackage\\Page\\PageNotFoundHandling->pageNotFound'
 *
 * @package GeorgRinger\Modernpackage\Page
 */
class PageNotFoundHandling {

	/**
	 * Page not found handling
	 *
	 * @param array $params
	 * @param \TYPO3\CMS\Frontend\Controller\TypoScriptFrontendController $ref
	 * @throws \TYPO3\CMS\Core\Error\Http\PageNotFoundException
	 * @return void
	 */
	public function pageNotFound(array $params, \TYPO3\CMS\Frontend\Controller\TypoScriptFrontendController $ref = NULL) {
		$domain = \TYPO3\CMS\Core\Utility\GeneralUtility::getIndpEnv('TYPO3_SITE_URL');
		$domainInformation = parse_url($domain);
		$errorPageUid = NULL;

		switch ($domainInformation['host']) {
			case 'www.domain1.tld':
				$errorPageUid = 123;
				break;
		}

		if (!is_null($errorPageUid)) {
			$link = $domain . 'index.php?id=' . $errorPageUid;

			$sysLanguageUid = $this->getSysLanguage($ref);
			if ($sysLanguageUid > 0) {
				$link .= '&L=' . $sysLanguageUid;
			}

			\TYPO3\CMS\Core\Utility\HttpUtility::redirect($link, \TYPO3\CMS\Core\Utility\HttpUtility::HTTP_STATUS_404);
		}

		$message = 'The page not found handling could not handle the request. The original message was: "' . $params['reasonText'] . '" with URL "' . $params['currentUrl'] . '"';
		throw new \TYPO3\CMS\Core\Error\Http\PageNotFoundException($message, 1301648780);
	}


	/**
	 * Try to get the current sys_language from various places
	 *
	 * @param \TYPO3\CMS\Frontend\Controller\TypoScriptFrontendController $ref
	 * @return int
	 */
	protected function getSysLanguage(\TYPO3\CMS\Frontend\Controller\TypoScriptFrontendController $ref) {
		if ($ref->sys_language_uid > 0) {
			return (int)$ref->sys_language_uid;
		}

		$getRequest = (int)GeneralUtility::_GET('L');
		if ($getRequest > 0) {
			return $getRequest;
		}

		$realurlVars = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['_DEFAULT']['preVars'];
		$firstUrlArgument = array_shift(GeneralUtility::trimExplode('/', GeneralUtility::getIndpEnv('REQUEST_URI'), TRUE));
		if ($firstUrlArgument) {
			foreach ($realurlVars as $mapping) {
				if ($mapping['GETvar'] === 'L' && isset($mapping['valueMap'][$firstUrlArgument])) {
					return (int)$mapping['valueMap'][$firstUrlArgument];
				}
			}
		}

		return 0;
	}
}