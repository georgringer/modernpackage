
#-------------------------------------------------------------------------------
#	Constants of the PRODUCTION mode
#-------------------------------------------------------------------------------
plugin.theme_configuration {
	url = http://localhost/master/

	general {
		adminPanel = 1
		googleanalytics = 1
		googleanalytics.code = UA-XXXXXXXXXXX

		pageTitle {
			prefix = !!TESTING!! modernpackage -
			suffix =
		}
	}

	assets {
		merge = 1
		compress = 1
	}

	extensions {
		realurl = 1

		formhandler {
			contact {
				debug = 0
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

