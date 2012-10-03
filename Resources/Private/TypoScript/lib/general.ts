# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or at your option) any later version.
# ******************************************************************************

# **********************************************************
# Library for TypoScript about general library objects.
# Content:
#	* Copyright Information
#	* Header slogan
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
#	GENERAL: Header slogan
#-------------------------------------------------------------------------------
lib.header_slogan = COA
lib.header_slogan {
	10 = TEXT
	10 {
		value = III Modern <div>package</div>
	}
}

#-------------------------------------------------------------------------------
#	GENERAL: Footer image
#-------------------------------------------------------------------------------
lib.footer_logo = COA
lib.footer_logo {
	10 = IMAGE
	10 {
		file = EXT:modernpackage/Resources/Public/Template/img/logo-government-package-footer.png
	}
}
