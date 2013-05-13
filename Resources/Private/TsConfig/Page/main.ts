# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************

# **********************************************************
# Constants
# **********************************************************
lib.constants.permissions.groupid = 1


# *******************************************************
# Page TsConfig
# **********************************************************


#-------------------------------------------------------------------------------
#	Backend Layouts
#-------------------------------------------------------------------------------
TCEFORM.pages {
	# Storagepage of layouts
	backend_layout.PAGE_TSCONFIG_ID >
	backend_layout_next_level.PAGE_TSCONFIG_ID >

	# Hide no backend layout label, deactivated by default!
	#backend_layout.removeItems = 0,-1
	#backend_layout_next_level.removeItems = -1
}

#-------------------------------------------------------------------------------
#	Page module
#-------------------------------------------------------------------------------
# Show only the chosen columns in the page module
# 0=normal, 1=left, 2=right, 3=border
# mod.SHARED.colPos_list = 1,0,2

# Remove the 'border' option from selectbox 'column' in content records
# TCEFORM.tt_content.colPos.keepItems = 1,0,2

# Set the default label and flag
mod.SHARED.defaultLanguageLabel = English
mod.SHARED.defaultLanguageFlag = gb.gif

# Show the content element wizard with tabs (for consistency)
mod.wizards.newContentElement.renderMode = tabs

#-------------------------------------------------------------------------------
#	Content elements
#-------------------------------------------------------------------------------
TCEFORM.tt_content {
	# Reduce header layouts to default,1,2,3
	header_layout.removeItems = 5

	# Remove sections
	section_frame.removeItems = 1,2,5,6,10,11,12,20,21,66

	# Change layouts
	layout {
		removeItems = 1,2,3
		addItems {
			20 = LLL:EXT:modernpackage/Resources/Private/Language/locallang.xml:tt_content.layout.information
			21 = LLL:EXT:modernpackage/Resources/Private/Language/locallang.xml:tt_content.layout.quotation
			22 = LLL:EXT:modernpackage/Resources/Private/Language/locallang.xml:tt_content.layout.box-warning
			23 = LLL:EXT:modernpackage/Resources/Private/Language/locallang.xml:tt_content.layout.box-success
			24 = LLL:EXT:modernpackage/Resources/Private/Language/locallang.xml:tt_content.layout.box-info
			25 = LLL:EXT:modernpackage/Resources/Private/Language/locallang.xml:tt_content.layout.box-error
		}
	}
}


#-------------------------------------------------------------------------------
# Special backend condition to set defaults to "h4" and "box" if
# a new element in the right column is to be created
#-------------------------------------------------------------------------------
[globalVar = GP:defVals|tt_content|colPos = 2]
TCAdefaults.tt_content {
  header_layout = 4
  layout = 1
}
[end]


#-------------------------------------------------------------------------------
#	Pages
#-------------------------------------------------------------------------------
# There is no need for the Alias field in page properties when we use RealURL
TCEFORM.pages.alias.disabled = 1


#-------------------------------------------------------------------------------
#	RTE
#-------------------------------------------------------------------------------
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:modernpackage/Resources/Private/TsConfig/Page/Rte/default.ts">


#-------------------------------------------------------------------------------
#	Rights
#-------------------------------------------------------------------------------
TCEMAIN.permissions {
	# owner
	#userid = 1
	# group
	groupid < lib.constants.permissions.groupid
	# all rights for group
	group = 31
}
