<?php

namespace GeorgRinger\Modernpackage\Page;

use TYPO3\CMS\Core\Utility\GeneralUtility;

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
class AlternativeLanguageTag {

	protected $languages = array();

	/**
	 * Define the alternative language tags
	 *
	 * @param string $content
	 * @param array $configuration
	 * @throws \UnexpectedValueException
	 * @return string
	 */
	public function get($content, $configuration) {
		$out = '';
		if (isset($configuration['useRealurl']) && $configuration['useRealurl'] == 1) {
			$this->getConfigurationFromRealurl($configuration['realurl.']);
		} elseif (isset($configuration['useSimpleMode']) && $configuration['useSimpleMode'] == 1) {
			$this->getConfigurationFromSimpleMode($configuration['simpleMode.']);
		} else {
			throw new \UnexpectedValueException('No configuration found, either use useRealurl = 1 or useSimpleMode = 1', 1390223252);
		}

		$headers = $this->generate();
		if (count($headers) > 0) {
			$out = implode(LF, $headers);
		}

		return $out;
	}

	/**
	 * Generate the links
	 *
	 * @return array
	 */
	protected function generate() {
		$headers = array();

		$this->removeCurrentLanguageFromList();
		$this->removeInvalidLanguagesFromList();

		foreach ($this->languages as $uid => $hrefLang) {
			$linkConfiguration = array(
				'parameter' => $GLOBALS['TSFE']->id,
				'additionalParams' => '&L=' . $uid,
				'addQueryString' => 1
			);
			$link = $this->cObj->typolink_URL($linkConfiguration);
			$headers[] = sprintf('<link rel="alternate" href="%s" hreflang="%s" />', htmlspecialchars($link), htmlspecialchars($hrefLang));
		}
		return $headers;
	}

	/**
	 * Remove the current language from the list
	 *
	 * @return void
	 */
	protected function removeCurrentLanguageFromList() {
		$currentLanguageId = $GLOBALS['TSFE']->sys_language_uid;
		if (isset($this->languages[$currentLanguageId])) {
			unset($this->languages[$currentLanguageId]);
		}
	}

	/**
	 * Remove languages which should not be rendered from the list
	 *
	 * @return void
	 */
	protected function removeInvalidLanguagesFromList() {
		$page = $GLOBALS['TSFE']->page;

		// No valid page if the default language should be shown and the page settings
		// are excluding the visibility of the default language
		if (isset($this->languages['0']) && GeneralUtility::hideIfDefaultLanguage($page['l18n_cfg'])) {
			unset($this->languages['0']);
		}

		// No valid page if the alternative language should be shown and the page settings
		// are requiring a valid overlay but it doesn't exists
		$hideIfNotTranslated = GeneralUtility::hideIfNotTranslated($page['l18n_cfg']);
		if ($hideIfNotTranslated) {
			foreach ($this->languages as $languageUid => $title) {
				$olRec = $GLOBALS['TSFE']->sys_page->getPageOverlay($GLOBALS['TSFE']->id, $languageUid);
				if (empty($olRec)) {
					unset($this->languages[$languageUid]);
				}
			}
		}
	}

	/**
	 * Get the configuration from realurl's configuration
	 *
	 * @param array $configuration
	 * @throws \RuntimeException
	 * @return void
	 */
	protected function getConfigurationFromRealurl($configuration) {
		if (!\t3lib_extMgm::isLoaded('realurl')) {
			return;
		}
		if (!is_array($configuration)) {
			return;
		}
		if (!isset($configuration['key'])) {
			return;
		}
		if (!\is_array($GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl'][$configuration['key']]['preVars'][0])) {
			return;
		}

		$languages = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl'][$configuration['key']]['preVars'][0]['valueMap'];

		foreach ($languages as $title => $uid) {
			$this->languages[$uid] = $title;
		}

		if (!isset($this->languages[0]) && isset($configuration['default'])) {
			$this->languages[0] = $configuration['default'];
		}
	}

	/**
	 * Get the configuration out of the passed configuration to this USER func
	 *
	 * @param array $configuration simple configuration
	 * @return void
	 * @throws \RuntimeException
	 * @throws \UnexpectedValueException
	 */
	protected function getConfigurationFromSimpleMode($configuration) {
		if (!is_array($configuration)) {
			throw new \RuntimeException('No configuration for simple mode found', 1390223253);
		}

		foreach ($configuration as $id => $value) {
			if (!is_numeric($id)) {
				throw new \UnexpectedValueException(sprintf('Given id "%s" is not a valid integer for the language configuration', $id), 1390223254);
			}
			$this->languages[$id] = $value;
		}
	}
}
