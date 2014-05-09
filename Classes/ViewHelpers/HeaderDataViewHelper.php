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

use TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper;

/**
 * This view helper makes it possible to add data to the <head> section
 *
 * = Examples =
 *
 * <code title="Basic usage">
 *  <theme:headerData><script>alert(1)</script></theme:headerData>
 * </code>
 * <output>
 * alert msg
 * </output>
 */
class HeaderDataViewHelper extends AbstractViewHelper {

	/**
	 * Add content to the header
	 *
	 * @return void
	 */
	public function render() {
		$content = $this->renderChildren();

		if (!empty($content)) {
			$GLOBALS['TSFE']->additionalHeaderData[md5($content)] = $content;
		}
	}
}
