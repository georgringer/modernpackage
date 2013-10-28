<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

/***************
 * Embed TypoScript
 */
t3lib_extMgm::addStaticFile($_EXTKEY, 'Configuration/TypoScript/Test', 'Theme EXT:"' . $_EXTKEY . '" TEST');
t3lib_extMgm::addStaticFile($_EXTKEY, 'Configuration/TypoScript/Development', 'Theme EXT:"' . $_EXTKEY . '" DEVELOPMENT');
t3lib_extMgm::addStaticFile($_EXTKEY, 'Configuration/TypoScript/Production', 'Theme EXT:"' . $_EXTKEY . '" PRODUCTION');

/***************
 * Include styling for backend/login
 */
$context = \TYPO3\CMS\Core\Utility\GeneralUtility::getApplicationContext()->__toString();
if (!empty($context)) {
	$GLOBALS['TBE_STYLES']['logo'] = '../typo3conf/ext/' . $_EXTKEY . '/Resources/Public/Backend/img/backend_logo_' . strtolower($context) . '.png';
} else {
	$GLOBALS['TBE_STYLES']['logo'] = '../typo3conf/ext/' . $_EXTKEY . '/Resources/Public/Backend/img/backend_logo.png';
}
$GLOBALS['TBE_STYLES']['inDocStyles_TBEstyle'] .= '@import "' . t3lib_extMgm::extRelPath($_EXTKEY) . 'Resources/Public/Backend/css/login.css";';

/***************
 * Add icons to the page tree
 */
$availableIcons = array('system', 'layouts', 'menufolder');
foreach($availableIcons as $icon) {
	t3lib_SpriteManager::addTcaTypeIcon(
		'pages',
		'contains-' . $icon,
		t3lib_extMgm::extRelPath($_EXTKEY) . 'Resources/Public/Icons/PageTree/' . $icon . '.png');
	$GLOBALS['TCA']['pages']['columns']['module']['config']['items'][] = array(
		0 => 'LLL:EXT:' . $_EXTKEY . '/Resources/Private/Language/locallang_be.xml:pagetree.' . $icon ,
		1 => $icon,
	);
}

?>