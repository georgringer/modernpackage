<?php
namespace GeorgRinger\Modernpackage\ViewHelpers;
/*                                                                       *
 * Copyright 2014 Georg Großberger <contact@grossberger-ge.org           *
 *                                                                       *
 * This is free software; you can redistribute it and/or modify it under *
 * the terms of the MIT- / X11 - License                                 *
 *                                                                       */

use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper;

/**
 * Utilize the full typolink power in a fluid template
 *
 * @author Georg Großberger <georg.grossberger@cyberhouse.at>
 * @license http://opensource.org/licenses/MIT MIT - License
 */
class TypolinkViewHelper extends AbstractViewHelper {

	/**
	 * @var \TYPO3\CMS\Extbase\Configuration\ConfigurationManagerInterface
	 * @inject
	 */
	protected $configurationManager;

	public function initializeArguments() {
		parent::initializeArguments();
		$this->registerArgument('parameter', 'string', 'Target used for external links', TRUE);
		$this->registerArgument('parameterStdWrap', 'array', 'Target used for external links');
		$this->registerArgument('useCacheHash', 'array', 'Target used for external links', FALSE, TRUE);
		$this->registerArgument('extTarget', 'string', 'Target used for external links');
		$this->registerArgument('extTargetStdWrap', 'array', 'stdWrap');
		$this->registerArgument('fileTarget', 'string', 'Target used for file links');
		$this->registerArgument('fileTargetStdWrap', 'array', 'stdWrap');
		$this->registerArgument('target', 'string', 'Target used for internal links');
		$this->registerArgument('targetStdWrap', 'array', 'stdWrap');
		$this->registerArgument('additionalParams', 'array', 'This is parameters that are added to the end of the URL.');
		$this->registerArgument('additionalParamsStdWrap', 'array', 'stdWrap, eg.: {data: "TSFE : id"}');
		$this->registerArgument('forceAbsoluteUrl', 'boolean', 'Forces links to internal pages to be absolute, thus having a proper URL scheme and domain prepended.');
		$this->registerArgument('forceAbsoluteUrlArray', 'array', 'forceAbsoluteUrl settings');
		$this->registerArgument('addQueryString', 'boolean', 'Add the QUERY_STRING to the start of the link.');
		$this->registerArgument('addQueryStringArray', 'array', 'addQueryString settings');
		$this->registerArgument('jumpurl', 'boolean', 'Decides if the link should call the script with the jumpurl parameter in order to register any clicks in statistics.');
		$this->registerArgument('jumpurlArray', 'array', 'jumpurl settings');
		$this->registerArgument('wrap', 'string', 'Wraps the links.');
		$this->registerArgument('wrapStdWrap', 'array', 'stdWrap');
		$this->registerArgument('ATagBeforeWrap', 'string', 'If set, the link is first wrapped with ".wrap" and then the A-tag.');
		$this->registerArgument('ATagBeforeWrapStdWrap', 'array', 'stdWrap');
		$this->registerArgument('linkAccessRestrictedPages', 'boolean', 'If set, typolinks pointing to access restricted pages will still link to the page even though the page cannot be accessed.');
		$this->registerArgument('userFunc', 'string', 'This passes the link-data compiled by the typolink function to a user- defined function for final manipulation.');
	}


	public function render() {
		$content = $this->renderChildren();

		if (empty($this->arguments['parameter'])) {
			$this->arguments['parameter'] = $content;
			$content = '';
		}

		$config = array(
			'parameter' => $this->arguments['parameter'],
			'useCacheHash' => $this->arguments['useCacheHash'],
			'no_cache' => !$this->arguments['useCacheHash']
		);

		unset($this->arguments['parameter'], $this->arguments['useCacheHash']);

		foreach ($this->arguments as $name => $value) {
			if (is_array($value)) {
				if (substr($name, -5) === 'Array') {
					$name = substr($name, 0, -5) . '.';
				} elseif (strtolower(substr($name, -7)) === 'stdwrap') {
					$name = substr($name, 0, -7) . '.';
				} elseif (!empty($value)) {
					$value = '&' . GeneralUtility::implodeArrayForUrl('', $value);
				}
			}
			$config[$name] = $value;
		}

		return $this->configurationManager->getContentObject()->TEXT(array(
			'value' => $content,
			'typolink.' => $config
		));
	}
}
