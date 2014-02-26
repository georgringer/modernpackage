# **********************************************************
# Constants
# **********************************************************
lib.constants.permissions.groupid = 1


#-------------------------------------------------------------------------------
#	Pages
#-------------------------------------------------------------------------------
TCEFORM.pages {
	alias.disabled = 1
	categories.disabled = 1
	doktype.removeItems = 6
	url_scheme.removeItems = 0

	# Backend Layouts
	backend_layout.PAGE_TSCONFIG_ID >
	backend_layout_next_level.PAGE_TSCONFIG_ID >

	# Hide no backend layout label, deactivated by default!
	#backend_layout.removeItems = 0,-1
	#backend_layout_next_level.removeItems = -1
}

#-------------------------------------------------------------------------------
#	Page module
#-------------------------------------------------------------------------------
# Set the default label and flag
mod {
	# Show the content element wizard with tabs
	wizards.newContentElement.renderMode = tabs

	# Default flag
	SHARED {
		defaultLanguageLabel = English
		defaultLanguageFlag = gb.gif
	}
}

#-------------------------------------------------------------------------------
#	Content elements
#-------------------------------------------------------------------------------
TCEFORM.tt_content {
	header_layout {
		altLabels {
			1 = LLL:EXT:modernpackage/Resources/Private/Language/locallang_be.xml:tt_content.header_layout.1
			2 = LLL:EXT:modernpackage/Resources/Private/Language/locallang_be.xml:tt_content.header_layout.2
			3 = LLL:EXT:modernpackage/Resources/Private/Language/locallang_be.xml:tt_content.header_layout.3
			4 = LLL:EXT:modernpackage/Resources/Private/Language/locallang_be.xml:tt_content.header_layout.4
			5 = LLL:EXT:modernpackage/Resources/Private/Language/locallang_be.xml:tt_content.header_layout.5
		}
	}

	# Sections
	section_frame {
		removeItems = 11,12,20,21,66
		addItems {
			26 = LLL:EXT:modernpackage/Resources/Private/Language/locallang_be.xml:tt_content.section.hidden
			27 = LLL:EXT:modernpackage/Resources/Private/Language/locallang_be.xml:tt_content.section.visible-phone
			28 = LLL:EXT:modernpackage/Resources/Private/Language/locallang_be.xml:tt_content.section.visible-tablet
			29 = LLL:EXT:modernpackage/Resources/Private/Language/locallang_be.xml:tt_content.section.hidden-desktop
			30 = LLL:EXT:modernpackage/Resources/Private/Language/locallang_be.xml:tt_content.section.visible-desktop
		}
	}

	# Change layouts
	layout {
		removeItems = 1,2,3
		addItems {
			21 = LLL:EXT:modernpackage/Resources/Private/Language/locallang_be.xml:tt_content.layout.quotation
			22 = LLL:EXT:modernpackage/Resources/Private/Language/locallang_be.xml:tt_content.layout.box-warning
			23 = LLL:EXT:modernpackage/Resources/Private/Language/locallang_be.xml:tt_content.layout.box-success
			24 = LLL:EXT:modernpackage/Resources/Private/Language/locallang_be.xml:tt_content.layout.box-info
			25 = LLL:EXT:modernpackage/Resources/Private/Language/locallang_be.xml:tt_content.layout.box-error
			26 = LLL:EXT:modernpackage/Resources/Private/Language/locallang_be.xml:tt_content.layout.toggle
		}
	}

	imagecols {
		removeItems = 5,7,8
	}
}


#-------------------------------------------------------------------------------
# Defaults for new elements
#-------------------------------------------------------------------------------
TCAdefaults {
	tt_content {
		header_layout = 2
	}
}

#-------------------------------------------------------------------------------
# Special backend condition to set defaults for elements created
# in non main column
#-------------------------------------------------------------------------------
#[globalVar = GP:defVals|tt_content|colPos = 1|2|3|4|5]
#TCAdefaults.tt_content {
#	header_layout = 3
#}
#[end]


#-------------------------------------------------------------------------------
#	Permissions
#-------------------------------------------------------------------------------
TCEMAIN.permissions {
	# owner
	#userid = 1
	# group
	groupid < lib.constants.permissions.groupid
	# all rights for group
	group = 31
}

# Remove 'copy X' text
TCEMAIN.table {
	pages.disablePrependAtCopy = 1
	tt_content.disablePrependAtCopy = 1
}

#-------------------------------------------------------------------------------
#	RTE
#-------------------------------------------------------------------------------
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:modernpackage/Resources/Private/TsConfig/Page/rte/default.ts">

