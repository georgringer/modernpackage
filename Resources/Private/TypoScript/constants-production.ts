
#-------------------------------------------------------------------------------
#	Include constants of used extendions
#-------------------------------------------------------------------------------
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:news/Configuration/TypoScript/constants.txt">


#-------------------------------------------------------------------------------
#	General Constants
#-------------------------------------------------------------------------------
styles.content.imgtext.maxW = 1200

#-------------------------------------------------------------------------------
#	Constants of the PRODUCTION mode
#-------------------------------------------------------------------------------
plugin.theme_configuration {
	url = /

	general {
		adminPanel = 1
		googleanalytics = 1
		googleanalytics.code = UA-XXXXXXXXXXX
		issueCollectorJsPath =

		pageTitle {
			prefix = modernpackage -
			suffix =
		}
	}

	assets {
		merge = 1
		compress = 1
	}

	navigation {
		searchPage = 19
		footer = 6
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

		formhandler {
			contact {
				debug = 0
				sendEmailToUser = 0

				email {
					user {
						# User email sender: Email address to use as sender address for the user email.
						sender_email =

					}
					admin {
						# Admin email sender: Email address to use as sender address for the admin email.
						sender_email =

						# Admin email recipient: Email address of an admin to receive the contact request.
						to_email =
					}
				}
			}
		}

	}
}

plugin.theme_configuration.navigation_service = 232
plugin.theme_configuration.navigation_service-right = 238
plugin.theme_configuration.navigation_languageswitch.languages = 0,1,2
plugin.theme_configuration.navigation_languageswitch.labels = English |*| German |*| Italian