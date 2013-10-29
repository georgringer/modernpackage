<?php

class Tx_Modernpackage_PageTitle {

	public function getTitleTag($content, $conf) {
		$pageTitle = $this->cObj->TEXT((array)$GLOBALS['TSFE']->tmpl->setup['config.']['titleTagFunction.']);
		return trim($pageTitle);
	}
}
