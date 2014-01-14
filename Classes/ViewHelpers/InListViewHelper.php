<?php

namespace GeorgRinger\Modernpackage\ViewHelpers;

	/***************************************************************
	 *  Copyright notice
	 *
	 *  (c) 2014 Georg Ringer <typo3@ringerge.org>
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
	 *  A copy is found in the textfile GPL.txt and important notices to the license
	 *  from the author is found in LICENSE.txt distributed with these scripts.
	 *
	 *
	 *  This script is distributed in the hope that it will be useful,
	 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
	 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	 *  GNU General Public License for more details.
	 *
	 *  This copyright notice MUST APPEAR in all copies of the script!
	 ***************************************************************/

/**
 * This view helper implements a condition for an item list
 * which is especially useful if some layouts should be considered
 *
 * = Examples =
 *
 * <code title="Basic usage">
 * {theme:inList(list: '1,2', item:data.layout, then: 'someClass', else: '')}"
 * </code>
 * <output>
 * If the field "layout" of the current page contains either 1 or 2, the string "someClass" is shown.
 * </output>
 */
class InListViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractConditionViewHelper {

	/**
	 * Check if given list contains given item. If yes, render the thenChild, otherwise
	 * the elseChild
	 *
	 * @param string $list list of items
	 * @param string $item item
	 * @return string
	 */
	public function render($list, $item) {
		if (\TYPO3\CMS\Core\Utility\GeneralUtility::inList($list, $item)) {
			return $this->renderThenChild();
		} else {
			return $this->renderElseChild();
		}
	}
}
