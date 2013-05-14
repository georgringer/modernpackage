# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************


# *******************************************************************
# Constants of the DEVELOPMENT mode
# !!! add everything to the production.ts and only those things
#     which differ to this section!
# *******************************************************************

plugin.theme_configuration {
	#url = http://dev.project.local/

	assets {
		merge = 0
		compress = 0
	}

	general {
		googleanalytics = 0
	}

	extensions {
		realurl = 1
	}
}

