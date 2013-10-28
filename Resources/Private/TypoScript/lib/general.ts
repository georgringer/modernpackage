
# **********************************************************
# Library for TypoScript about general library objects.
# Content:
#	* Copyright Information
#	* Logo
#	* Footer image
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
		noTrimWrap = || {LLL:EXT:modernpackage/Resources/Private/Language/locallang.xml:copyright}|
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
		file = EXT:modernpackage/Resources/Public/Template/img/logo.png
		stdWrap.typolink.parameter = {$plugin.theme_configuration.url}
	}
}

#-------------------------------------------------------------------------------
#	GENERAL: Footer image
#-------------------------------------------------------------------------------
lib.footer_logo = COA
lib.footer_logo {
	stdWrap.wrap = <h1>|</h1>
	10 = IMAGE
	10 {
		file = EXT:modernpackage/Resources/Public/Template/img/logo-government-package-footer.png
	}
}
