<?php

namespace GeorgRinger\Modernpackage;
/***************************************************************
 *  Copyright notice
 *
 *  (c) 2013 Georg Ringer <georg.ringer@cyberhouse.at>
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

class TitleTag {

	/**
	 * Define the title tag
	 *
	 * @param string $content
	 * @param array $configuration
	 * @return string
	 */
	public function get($content, $configuration) {
		$pageTitle = $this->cObj->TEXT((array)$GLOBALS['TSFE']->tmpl->setup['config.']['titleTagFunction.']);
		return trim($pageTitle);
	}
}
