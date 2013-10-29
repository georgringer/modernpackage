<?php

if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Resources/Private/TsConfig/Page/main.ts">');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Resources/Private/TsConfig/User/main.ts">');

// Modify flexform values
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_befunc.php']['getFlexFormDSClass'][$_EXTKEY] =
	'EXT:' . $_EXTKEY . '/Classes/Hooks/T3libBefunc.php:Tx_Modernpackage_Hooks_T3libBefunc';

// As long as backend layouts are not as file, use EXT: belayout_fileprovider
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['BackendLayoutFileProvider']['ext'][] =  $_EXTKEY;