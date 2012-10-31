# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************

# **********************************************************
# Library for TypoScript about navigations.
# Content:
#	* Service navigation (top)
#	* Breadcrumb
#	* Sidebar
#	* Language switch
#	* Footer menu (left & right)
# **********************************************************

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
	stdWrap.wrap = <ul class="breadcrumb">|</ul>

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
		source.intVal = 1
		conf.tx_news_domain_model_news = TEXT
		conf.tx_news_domain_model_news {
			field = title
			htmlSpecialChars = 1
			typolink {
				parameter.data = page:uid
				addQueryString = 1
			}
		}
		wrap =  <li class="last">|</li>
	}
}


#-------------------------------------------------------------------------------
#	NAVIGATION: Sidebar
#-------------------------------------------------------------------------------
lib.navigation.sidebar = COA
lib.navigation.sidebar {
	stdWrap.wrap = <ul class="nav-sidebar">|</ul>

	10 = HMENU
	10 {
		1 = TMENU
		1 {
			noBlur = 1

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
			CUR.ATagParams = class="selected"

			IFSUB <.NO
			IFSUB.wrapItemAndSub = <li class="hassub">|</li>

			ACTIFSUB <.ACT
			ACTIFSUB.wrapItemAndSub = <li class="activesub">|</li>

			SPC <.NO
			SPC.wrapItemAndSub = <li class="nav-header">|</li>
		}

		2 <.1
		2.wrap = <ul>|</ul>

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
		data = LLL:EXT:modernpackage/Resources/Private/Language/locallang.xml:language_switch-label
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
#	NAVIGATION: Footer (left)
#-------------------------------------------------------------------------------
lib.navigation.footer-left = COA
lib.navigation.footer-left {
	stdWrap.wrap = <ul>|</ul>

	10 = HMENU
	10 {

		special = list
		special.value = {$plugin.theme_configuration.navigation.footer-left}

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

			IFSUB <.NO
			IFSUB {
				wrapItemAndSub = <li class="subpages">|</li>
			}
		}

		2 <.1
		2.wrap = <ul>|</ul>
		3 <.1
		3.wrap = <ul>|</ul>
	}
}

#-------------------------------------------------------------------------------
#	NAVIGATION: Footer (right)
#-------------------------------------------------------------------------------
lib.navigation.footer-right = COA
lib.navigation.footer-right {
	stdWrap.wrap = <ul>|</ul>

	10 = HMENU
	10 {

		special = list
		special.value = {$plugin.theme_configuration.navigation.footer-right}

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

