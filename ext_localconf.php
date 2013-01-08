<?php

if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

	// Change allow/deny behaviour
$TYPO3_CONF_VARS['BE']['explicitADmode'] = 'explicitAllow';

	// Permissions
$TYPO3_CONF_VARS['BE']['fileCreateMask'] = '0644';
$TYPO3_CONF_VARS['BE']['folderCreateMask'] = '0755';
$TYPO3_CONF_VARS['BE']['maxFileSize'] = '30480';

	// Slide for the keywords + description to create better meta-tags
$TYPO3_CONF_VARS['FE']['addRootLineFields'] .= ',keywords,description';

	// Additional settings for IM/GM
$TYPO3_CONF_VARS['gdlib_png'] = '1';
$TYPO3_CONF_VARS['GFX']['png_truecolor'] = '1';


$settings = unserialize($GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY]);
if (!empty($settings['setPageTSconfig'])) {
	t3lib_extMgm::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Resources/Private/TsConfig/Page/main.ts">');
}

if (!empty($settings['setUserTSconfig'])) {
	t3lib_extMgm::addUserTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Resources/Private/TsConfig/User/main.ts">');
}

?>