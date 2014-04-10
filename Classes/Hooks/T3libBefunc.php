<?php
namespace GeorgRinger\Modernpackage\Hooks;
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

class T3libBefunc {

	/**
	 * Hook function of t3lib_befunc
	 * It is used to change the flexform rendering
	 *
	 * @param array &$dataStructure Flexform structure
	 * @param array $conf some strange configuration
	 * @param array $row row of current record
	 * @param string $table table name
	 * @param string $fieldName some strange field name
	 * @return void
	 */
	public function getFlexFormDS_postProcessDS(&$dataStructure, $conf, $row, $table, $fieldName) {
		if ($table === 'tt_content' && $row['CType'] === 'table' && is_array($dataStructure)) {
			$this->updateFlexforms($dataStructure, $row);
		}
	}

	/**
	 * Update flexform configuration to change the input field for a class to a select
	 *
	 * @param array|string &$dataStructure flexform structure
	 * @param array $row row of current record
	 * @return void
	 */
	protected function updateFlexforms(array &$dataStructure, array $row) {
		$dataStructure['sheets']['sDEF']['ROOT']['el']['acctables_tableclass']['TCEforms']['config'] = array(
			'type' => 'select',
			'items' => array(
				array('LLL:EXT:modernpackage/Resources/Private/Language/locallang_be.xml:tableclasses.default', 'table'),
				array('LLL:EXT:modernpackage/Resources/Private/Language/locallang_be.xml:tableclasses.striped', 'table table-striped'),
				array('LLL:EXT:modernpackage/Resources/Private/Language/locallang_be.xml:tableclasses.condensed', 'table table-condensed'),
			),
			'size' => 1,
			'maxitems' => 1,
		);
	}
}
