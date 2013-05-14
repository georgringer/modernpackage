# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************

# **********************************************************
# Library for indexed_search snippets
# Content:
#	* Search box
# **********************************************************


#-------------------------------------------------------------------------------
#	EXT:indexed_search Searchform
#-------------------------------------------------------------------------------
lib.extensions.indexed_search.form = COA
lib.extensions.indexed_search.form {

	# Open form tag and set URL to target page
	10 = TEXT
	10 {
		wrap = <form class="navbar-search pull-right" action="|" method="post">
		typolink {
			parameter = {$plugin.theme_configuration.extensions.indexed_search.form-target}
			returnLast = url
		}
	}

	# Add rest of template
	20 = TEXT
	20 {
		insertData = 1
		value (
			<label for="search" class="hidden">Search:</label>
			<input type="text" class="search-query" placeholder="{LLL:EXT:modernpackage/Resources/Private/Language/locallang.xml:search-placeholder}">
				<button class="btn btn-mini">{LLL:EXT:modernpackage/Resources/Private/Language/locallang.xml:search-submit}</button>
			</form>
		)
	}
}
