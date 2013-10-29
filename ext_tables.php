<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

/***************
 * Embed TypoScript
 */
$contexts = array('development', 'testing', 'production');
foreach($contexts as $context) {
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
		$_EXTKEY,
		'Configuration/TypoScript/' . ucfirst($context), 'Theme EXT:"' . $_EXTKEY . '" ' . strtoupper($context)
	);
}

/***************
 * Include styling for backend/login
 */
$context = \TYPO3\CMS\Core\Utility\GeneralUtility::getApplicationContext()->__toString();
if (!empty($context)) {
	$GLOBALS['TBE_STYLES']['logo'] = '../typo3conf/ext/' . $_EXTKEY . '/Resources/Public/Backend/img/backend_logo_' . strtolower($context) . '.png';
} else {
	$GLOBALS['TBE_STYLES']['logo'] = '../typo3conf/ext/' . $_EXTKEY . '/Resources/Public/Backend/img/backend_logo.png';
}
$GLOBALS['TBE_STYLES']['inDocStyles_TBEstyle'] .= '@import "' . \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath($_EXTKEY) . 'Resources/Public/Backend/css/login.css";';

/***************
 * Add icons to the page tree
 */
$availableIcons = array('system', 'menufolder');
foreach($availableIcons as $icon) {
	t3lib_SpriteManager::addTcaTypeIcon(
		'pages',
		'contains-' . $icon,
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath($_EXTKEY) . 'Resources/Public/Icons/PageTree/' . $icon . '.png');
	$GLOBALS['TCA']['pages']['columns']['module']['config']['items'][] = array(
		0 => 'LLL:EXT:' . $_EXTKEY . '/Resources/Private/Language/locallang_be.xml:pagetree.' . $icon ,
		1 => $icon,
	);
}
