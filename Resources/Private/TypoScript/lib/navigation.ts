
# **********************************************************
# Library for TypoScript about navigations.
# **********************************************************

#-------------------------------------------------------------------------------
#	NAVIGATION: Main
#-------------------------------------------------------------------------------
lib.navigation.main = COA
lib.navigation.main {
	10 = HMENU
	10 {
		1 = TMENU
		1 {
			noBlur = 1
			expAll = 1

			NO = 1
			NO {
					wrapItemAndSub = <li>|</li>
					ATagTitle.field = subtitle // title
					stdWrap.htmlSpecialChars = 1
			}

			ACT <.NO
			ACT.wrapItemAndSub = <li class="active">|</li>
			ACT.ATagParams = class="active"
			ACT.ATagBeforeWrap = 1

			CUR <.ACT

			IFSUB <.NO
			IFSUB {
				wrapItemAndSub = <li class="dropdown">|</li>
				ATagParams = class="dropdown-toggle" data-toggle="dropdown"

				linkWrap = |<span class="caret"></span>
				ATagBeforeWrap = 1
			}

			ACTIFSUB <.ACT
			ACTIFSUB.wrapItemAndSub = <li class="active dropdown">|</li>

		}

		2 <.1
		2 {
			wrap = <ul class="dropdown-menu sub-menu">|</ul>

			SPC <.NO
			SPC.wrapItemAndSub = <li class="divider">|</li>
		}

		3 <.2
		3 {
			wrap = <ul>|</ul>
		}
	}
}

#-------------------------------------------------------------------------------
#	NAVIGATION: Breadcrumb: Hide if on root page
#-------------------------------------------------------------------------------
lib.navigation.show_breadcrumb = TEXT
lib.navigation.show_breadcrumb {
	value = {level:0}
	insertData = 1
}


#-------------------------------------------------------------------------------
#	NAVIGATION: Service navigation TOP
#-------------------------------------------------------------------------------
lib.navigation.service-top = COA
lib.navigation.service-top {
	stdWrap.wrap = <ul class="nav nav-service">|</ul>

	10 = HMENU
	10 {
		special = directory
		special.value = {$plugin.theme_configuration.navigation_service}

		1 = TMENU
		1 {
			noBlur = 1

			NO {
				wrapItemAndSub = <li>|</li>
				ATagTitle.field = subtitle // title
				stdWrap.htmlSpecialChars = 1
			}
		}
	}
}

lib.navigation.service-top-right = COA
lib.navigation.service-top-right {
	10 = HMENU
	10 {
		special = directory
		special.value = {$plugin.theme_configuration.navigation_service-right}

		1 = TMENU
		1 {
			noBlur = 1

			NO {
				wrapItemAndSub = <li>|</li>
				ATagTitle.field = subtitle // title
				stdWrap.htmlSpecialChars = 1
			}
		}
	}

}

#-------------------------------------------------------------------------------
#	NAVIGATION: Breadcrumb
#-------------------------------------------------------------------------------
lib.navigation.breadcrumb = COA
lib.navigation.breadcrumb {

	10 = HMENU
	10 {
		special = rootline
		#special.range =  1

		1 = TMENU
		1 {
			noBlur = 1

			NO = 1
			NO {
				wrapItemAndSub = <li>|</li>
				ATagTitle.field = subtitle // title
				stdWrap.htmlSpecialChars = 1
			}

			CUR <.NO
			CUR {
				wrapItemAndSub = <li class="active">|</li>
				doNotLinkIt = 1
			}
		}
	}

	# Add news title if on single view
	20 = RECORDS
	20 {
		if.isTrue.data = GP:tx_news_pi1|news
		dontCheckPid = 1
		tables = tx_news_domain_model_news
		source.data = GP:tx_news_pi1|news
		source.intval = 1
		conf.tx_news_domain_model_news = TEXT
		conf.tx_news_domain_model_news {
			field = title
			htmlSpecialChars = 1
		}
		wrap =  <li class="active">|</li>
	}
}


#-------------------------------------------------------------------------------
#	NAVIGATION: Sidebar
#-------------------------------------------------------------------------------
lib.navigation.sidebar = COA
lib.navigation.sidebar {
	10 = HMENU
	10 {
		entryLevel = 1

		1 = TMENU
		1 {
			wrap = <ul class="list-group subnavi">|</ul>
			noBlur = 1

			NO = 1
			NO {
					wrapItemAndSub = <li class="list-group-item">|</li>
					ATagTitle.field = subtitle // title
					stdWrap.htmlSpecialChars = 1
			}

			ACT <.NO
			ACT.wrapItemAndSub = <li class="list-group-item active">|</li>
			ACT.ATagParams = class="active"
			ACT.ATagBeforeWrap = 1

			IFSUB <.NO
			IFSUB.wrapItemAndSub = <li class="list-group-item has-sub">|</li>

			ACTIFSUB <.ACT
			ACTIFSUB.wrapItemAndSub = <li class="list-group-item active has-sub">|</li>
		}

		2 <.1
		2 {
			wrap = <ul>|</ul>
			NO.wrapItemAndSub = <li>|</li>
			IFSUB.wrapItemAndSub = <li class="has-sub">|</li>
			ACT.wrapItemAndSub = <li class="active">|</li>
			ACTIFSUB.wrapItemAndSub = <li class="active">|</li>
		}

		3 <.2
	}
}

#-------------------------------------------------------------------------------
#	NAVIGATION: Language menu
#-------------------------------------------------------------------------------
lib.navigation.languageswitch = COA
lib.navigation.languageswitch {
	# Item to open language menu
	5 = TEXT
	5 {
		wrap = <a href="#" class="dropdown-toggle" data-toggle="dropdown">|<b class="caret"></b></a>
		data = LLL:EXT:modernpackage/Resources/Private/Language/locallang.xml:general.language_switch-label
	}

	# Language menu
	10 = HMENU
	10 {
		special = language
		special.value = {$plugin.theme_configuration.navigation_languageswitch.languages}

		wrap = <ul class="dropdown-menu">|</ul>

		1 = TMENU
		1 {
			noBlur = 1

			NO = 1
			NO {
				wrapItemAndSub = <li>|</li>
				stdWrap.cObject = TEXT
				stdWrap.cObject.value = {$plugin.theme_configuration.navigation_languageswitch.labels}
			}
			ACT <.NO
			ACT {
				wrapItemAndSub = <li class="active">|</li>
			}
		}
	}
}


#-------------------------------------------------------------------------------
#	NAVIGATION: Footer
#-------------------------------------------------------------------------------
lib.navigation.service_footer = COA
lib.navigation.service_footer {
	10 = HMENU
	10 {
		special = directory
		special.value = {$plugin.theme_configuration.navigation.footer}

		1 = TMENU
		1 {
			noBlur = 1
			expAll = 1

			NO = 1
			NO {
				wrapItemAndSub = <li>|</li>
				ATagTitle.field = subtitle // title
				stdWrap.htmlSpecialChars = 1
			}
		}
	}
}


#-------------------------------------------------------------------------------
#	NAVIGATION: Social media icons
#-------------------------------------------------------------------------------
lib.navigation.socialmedia = COA
lib.navigation.socialmedia {
	10 = TEXT
	10 {
		wrap = <li>|</li>
		value = Facebook
		stdWrap.typolink {
			parameter = http://www.facebook.com
			target = _blank
			ATagParams = class="facebook" onclick="_gaq.push(['_trackSocial', 'facebook', 'socialicon']);"
		}
	}
	20 <.10
	20 {
		value = Youtube
		stdWrap.typolink {
			parameter = http://www.youtube.com/
			ATagParams = class="youtube" onclick="_gaq.push(['_trackSocial', 'youtube', 'socialicon']);"
		}
	}
	30 <.10
	30 {
		value = Twitter
		stdWrap.typolink {
			parameter = http://twitter.com/
			ATagParams = class="twitter" onclick="_gaq.push(['_trackSocial', 'twitter', 'socialicon']);"
		}
	}
	40 <.10
	40 {
		value = LinkedIn
		stdWrap.typolink {
			parameter = http://linkedin.com/
			ATagParams = class="linkedin" onclick="_gaq.push(['_trackSocial', 'linkedin', 'socialicon']);"
		}
	}
	50 <.10
	50 {
		value = Google+
		stdWrap.typolink {
			parameter = http://plus.google.com
			ATagParams = class="google" onclick="_gaq.push(['_trackSocial', 'google+', 'socialicon']);"
		}
	}
}

