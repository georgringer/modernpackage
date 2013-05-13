# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************


# **********************************************************
# Constants of the PRODUCTION mode
# **********************************************************

plugin.theme_configuration {
	company = Modern Package
	popup = &copy; - Modern Package
	title = Modern Package
	url = http://localhost/master/

	general {
		copyright_information.link = 242
	}

	assets {
		merge = 1
		compress = 1
	}

	navigation {
		footer = 12
	}

	extensions {
		indexed_search {
			form-target = 241
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