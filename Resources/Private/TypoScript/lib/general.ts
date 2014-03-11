
# **********************************************************
# Library for TypoScript about general library objects.
# **********************************************************

#-------------------------------------------------------------------------------
#	GENERAL: Copyright Information
#-------------------------------------------------------------------------------
lib.copyright_information = COA
lib.copyright_information {
	10 = TEXT
	10 {
		data = date:U
		strftime = %Y
		noTrimWrap = || {LLL:EXT:modernpackage/Resources/Private/Language/locallang.xml:general.copyright}|
		noTrimWrap.insertData = 1
		typolink.parameter = {$plugin.theme_configuration.general.copyright_information.link}
	}
}

#-------------------------------------------------------------------------------
#	GENERAL: Logo
#-------------------------------------------------------------------------------
lib.general.logo = COA
lib.general.logo {
	10 = IMAGE
	10 {
		ATagParams = class="img-responsive"
		file = EXT:modernpackage/Resources/Public/Template/img/logo.gif
		stdWrap.typolink.parameter = {$plugin.theme_configuration.url}
	}
}

#-------------------------------------------------------------------------------
#	GENERAL: Link to search page
#-------------------------------------------------------------------------------
lib.general.searchPageLink = TEXT
lib.general.searchPageLink {
	typolink {
		parameter =  {$plugin.theme_configuration.navigation.searchPage}
		returnLast = url
	}
}

#-------------------------------------------------------------------------------
#	GENERAL: Header image
#-------------------------------------------------------------------------------
lib.general.headerImage = IMAGE
lib.general.headerImage {
	file {
		import =  uploads/media/
		import.data = levelmedia:-1, slide
		treatIdAsReference = 1
		import.listNum = 0
	}
}
