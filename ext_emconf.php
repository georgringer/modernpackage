<?php

########################################################################
# Extension Manager/Repository config file for ext "a21glossary".
#
# Auto generated 17-02-2012 15:52
#
# Manual updates:
# Only the data in the array - everything else is removed by next
# writing. "version" and "dependencies" must not be touched!
########################################################################

$EM_CONF[$_EXTKEY] = array(
	'title' => 'Modern package',
	'description' => 'A modern package with all you need',
	'category' => 'fe',
	'shy' => 0,
	'dependencies' => 'extbase,fluid',
	'conflicts' => '',
	'priority' => '',
	'loadOrder' => '',
	'module' => '',
	'state' => 'stable',
	'internal' => 0,
	'uploadfolder' => 0,
	'createDirs' => '',
	'modify_tables' => '',
	'clearCacheOnLoad' => 1,
	'lockType' => '',
	'author' => 'Georg Ringer',
	'author_email' => 'typo3@ringerge.org',
	'author_company' => '',
	'CGLcompliance' => '',
	'CGLcompliance_note' => '',
	'version' => '0.0.1',
	'_md5_values_when_last_written' => 'a:17:{s:9:"ChangeLog";s:4:"6150";s:10:"README.txt";s:4:"9b32";s:24:"class.tx_a21glossary.php";s:4:"69ea";s:21:"ext_conf_template.txt";s:4:"76ef";s:12:"ext_icon.gif";s:4:"dff2";s:17:"ext_localconf.php";s:4:"b780";s:14:"ext_tables.php";s:4:"f645";s:14:"ext_tables.sql";s:4:"f3ae";s:28:"icon_tx_a21glossary_main.gif";s:4:"a4ed";s:13:"locallang.xml";s:4:"efca";s:16:"locallang_db.xml";s:4:"4280";s:21:"Configuration/Tca.php";s:4:"36e1";s:52:"Configuration/TypoScript/Accessibility/constants.txt";s:4:"8dbf";s:48:"Configuration/TypoScript/Accessibility/setup.txt";s:4:"d2a1";s:14:"doc/manual.sxw";s:4:"f0a4";s:20:"static/constants.txt";s:4:"26fe";s:16:"static/setup.txt";s:4:"82e1";}',
	'constraints' => array(
		'depends' => array(
			'php' => '5.1.0-0.0.0',
			'typo3' => '4.6.0-0.0.0',
		),
		'conflicts' => array(
		),
		'suggests' => array(
			'news' => '1.3.0-',
		),
	),
	'suggests' => array(
	),
);

?>