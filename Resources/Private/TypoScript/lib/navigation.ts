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
#	* Main navigation
#	* Service navigation (top)
#	* Breadcrumb
#	* Sidebar
#	* Language switch
#	* Top menu
#	* Footer menu
#	* Social Media
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
			wrap = <ul class="dropdown-menu">|</ul>

			SPC <.NO
			SPC.wrapItemAndSub = <li class="divider">|</li>
		}

		3 <.2
	}
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
				wrapItemAndSub = <li>| <span class="divider">/</span></li>
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
#	NAVIGATION: Top
#-------------------------------------------------------------------------------
lib.navigation.top = COA
lib.navigation.top {
	10 = HMENU
	10 {
		special = directory
		special.value = {$plugin.theme_configuration.navigation.top}

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

	20 = TEXT
	20 {
	}
}


#-------------------------------------------------------------------------------
#	NAVIGATION: Footer
#-------------------------------------------------------------------------------
lib.navigation.footer = COA
lib.navigation.footer {
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

	20 = TEXT
	20 {
		data = LLL:EXT:modernpackage/Resources/Private/Language/locallang.xml:print
		wrap = <li class="hidden-phone"><a href="javascript:window.print()">|</a></li>
	}
}


#-------------------------------------------------------------------------------
#	NAVIGATION: Social media icons
#-------------------------------------------------------------------------------
lib.navigation.socialmedia = COA
lib.navigation.socialmedia {
	10 = IMAGE
	10 {
		file = EXT:modernpackage/Resources/Public/Template/img/icons/facebook.jpg
		altText = Facebook
		stdWrap.typolink.parameter = http://www.facebook.com
		stdWrap.typolink.target = _blank
		#stdWrap.typolink.ATagParams = onclick="_gaq.push(['_trackSocial', 'facebook', 'socialicon']);"
	}
	20 = IMAGE
	20 {
		file = EXT:modernpackage/Resources/Public/Template/img/icons/youtube.jpg
		altText = Youtube
		stdWrap.typolink.parameter = http://www.youtube.com/
		stdWrap.typolink.target = _blank
		#stdWrap.typolink.ATagParams = onclick="_gaq.push(['_trackSocial', 'youtube', 'socialicon']);"
	}
	30 = IMAGE
	30 {
		file =  EXT:modernpackage/Resources/Public/Template/img/icons/twitter.jpg
		altText = Twitter
		stdWrap.typolink.parameter = http://twitter.com/
		stdWrap.typolink.target = _blank
		#stdWrap.typolink.ATagParams = onclick="_gaq.push(['_trackSocial', 'twitter', 'socialicon']);"
	}
}