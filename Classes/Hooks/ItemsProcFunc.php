<?php
/***************************************************************
*  Copyright notice
*
*  (c) 2012 Georg Ringer <typo3@ringerge.org>
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

/**
 * ItemsProcFunc to make backend_layout fields
 * multilanguage aware if the name starts with 'LLL:'
 *
 * @package TYPO3
 * @subpackage tx_modernpackage
 */
class Tx_Modernpackage_Hooks_ItemsProcFunc {

	/**
	 * Labels of a be_layout record
	 *
	 * @param array $params
	 * @return void
	 */
	public function getLabel(array &$params) {
		if (t3lib_div::isFirstPartOfStr($params['row']['title'], 'LLL:')) {
			$params['title'] = $GLOBALS['LANG']->sL($params['row']['title'], TRUE);
		} else {
			$params['title'] = $params['row']['title'];
		}
	}
}

?>