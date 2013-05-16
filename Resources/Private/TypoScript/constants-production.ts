# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************


#-------------------------------------------------------------------------------
#	General Constants
#-------------------------------------------------------------------------------
styles.content.imgtext.maxW = 1200

#-------------------------------------------------------------------------------
#	Constants of the PRODUCTION mode
#-------------------------------------------------------------------------------
plugin.theme_configuration {
	url = http://localhost/master/

	general {
		adminPanel = 1
		copyright_information.link = 242
		googleanalytics = 1
		googleanalytics.code = UA-XXXXXXXXXXX

		pageTitle {
			prefix = Modern Package -
			suffix =
		}
	}

	assets {
		merge = 1
		compress = 1
	}

	navigation {
		top = 17
		footer = 12
	}

	extensions {
		realurl = 1

		indexed_search {
			page = 30
		}
		news {
			latest {
				limit = 3
				detailPid = 259
				startingpoint = 260
				cropMaxCharacters = 120
			}
		}
	}
}

plugin.theme_configuration.navigation_service = 232
plugin.theme_configuration.navigation_service-right = 238
plugin.theme_configuration.navigation_languageswitch.languages = 0,1,2
plugin.theme_configuration.navigation_languageswitch.labels = English |*| German |*| Italian