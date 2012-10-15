<?php

$TYPO3_CONF_VARS['FE']['addRootLineFields'].= ',tx_realurl_pathsegment';
$TYPO3_CONF_VARS['EXTCONF']['realurl']['_DEFAULT'] = array(
	'pagePath' => array(
		'type' => 'user',
		'userFunc' => 'EXT:realurl/class.tx_realurl_advanced.php:&tx_realurl_advanced->main',
		'spaceCharacter' => '-',
		'languageGetVar' => 'L',
		'expireDays' => '3',
		'rootpage_id' => 1,
		'firstHitPathCache' => 1,
		'segTitleFieldList' => 'tx_realurl_pathsegment,alias,title,uid',
	),
	'init' => array(
		'enableCHashCache' => TRUE,
		'enableCHashCache' => 1,
		'respectSimulateStaticURLs' => 0,
		'enableUrlDecodeCache' => 1,
		'enableUrlEncodeCache' => 1
	),
	'preVars' => array(
		array(
			'GETvar' => 'L',
			'valueMap' => array(
//				'de' => '1',
			),
			'noMatch' => 'bypass',
		),
		array(
			'GETvar' => 'no_cache',
			'valueMap' => array(
				'nc' => 1,
			),
			'noMatch' => 'bypass',
		),
	),
	'fileName' => array(
		'defaultToHTMLsuffixOnPrev' => TRUE,
		'index' => array(
			'feed.rss' => array(
				'keyValues' => array(
					'type' => 9818,
				)
			),
		),
	),
	'fixedPostVars' => array(
		// EXT:news start
		'newsFixedPostVars' => array(
			array(
				'GETvar' => 'tx_news_pi1[action]',
				'valueMap' => array(
					'detail' => '',
				),
				'noMatch' => 'bypass'
			),
			array(
				'GETvar' => 'tx_news_pi1[controller]',
				'valueMap' => array(
					'News' => '',
				),
				'noMatch' => 'bypass'
			),
			array(
				'GETvar' => 'tx_news_pi1[news]',
				'lookUpTable' => array(
					'table' => 'tx_news_domain_model_news',
					'id_field' => 'uid',
					'alias_field' => 'title',
					'addWhereClause' => ' AND NOT deleted',
					'useUniqueCache' => 1,
					'useUniqueCache_conf' => array(
						'strtolower' => 1,
						'spaceCharacter' => '-',
					),
				),
			),
		),
		// EXT:news end
	),
	'postVarSets' => array(
		'_DEFAULT' => array(
			'login' => array(
				array(
					'GETvar' => 'tx_felogin_pi1[forgot]',
				),
			),
			// EXT:news start
			'news' => array(
				array(
					'GETvar' => 'tx_news_pi1[action]',
				),
				array(
					'GETvar' => 'tx_news_pi1[controller]',
				),
				array(
					'GETvar' => 'tx_news_pi1[news]',
					'lookUpTable' => array(
						'table' => 'tx_news_domain_model_news',
						'id_field' => 'uid',
						'alias_field' => 'title',
						'addWhereClause' => ' AND NOT deleted',
						'useUniqueCache' => 1,
						'useUniqueCache_conf' => array(
							'strtolower' => 1,
							'spaceCharacter' => '-',
						),
					),
				),
			),
			// EXT:news end
		),
	),
);

/*
	// Fixed postvars for news
$ids = explode(',','45,140');
foreach ($ids as $id) {
$TYPO3_CONF_VARS['EXTCONF']['realurl']['_DEFAULT']['fixedPostVars'][$id] = 'newsFixedPostVars';
}
*/

?>