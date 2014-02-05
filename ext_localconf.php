<?php

if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

// Add TsConfig
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Resources/Private/TsConfig/Page/main.ts">');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Resources/Private/TsConfig/User/main.ts">');

// Add menu item to clear system cache for Development & Testing context
$context = \TYPO3\CMS\Core\Utility\GeneralUtility::getApplicationContext()->__toString();
if ($context === 'Development' || $context === 'Testing') {
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig('options.clearCache.system = 1');
}

// Modify flexform values
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_befunc.php']['getFlexFormDSClass'][$_EXTKEY] =
	'GeorgRinger\\Modernpackage\\Hooks\T3libBefunc';

// Backend layouts
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['BackendLayoutDataProvider']['file']
	= 'GeorgRinger\\Modernpackage\\View\BackendLayout\FileProvider';