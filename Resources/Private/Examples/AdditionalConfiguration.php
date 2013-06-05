<?php

/**
 * IMPORTANT: This file has to be moved to typo3conf/
 */

if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

// Change allow/deny behaviour
$GLOBALS['TYPO3_CONF_VARS']['BE']['explicitADmode'] = 'explicitAllow';

// Permissions
$GLOBALS['TYPO3_CONF_VARS']['BE']['fileCreateMask'] = '0644';
$GLOBALS['TYPO3_CONF_VARS']['BE']['folderCreateMask'] = '0755';
$GLOBALS['TYPO3_CONF_VARS']['BE']['maxFileSize'] = '30480';

// Slide for the keywords + description to create better meta-tags
$GLOBALS['TYPO3_CONF_VARS']['FE']['addRootLineFields'] .= ',keywords,description';

// Additional settings for IM/GM
$GLOBALS['TYPO3_CONF_VARS']['gdlib_png'] = '1';
$GLOBALS['TYPO3_CONF_VARS']['GFX']['png_truecolor'] = '1';

?>