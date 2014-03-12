# **********************************************************
# General PAGE setup
#
# including template, CSS + JS files
# **********************************************************

page = PAGE
page {

	# Page template
	10 = FLUIDTEMPLATE
	10 {
		file.stdWrap.cObject = TEXT
		file.stdWrap.cObject {
			data = levelfield:-1, backend_layout_next_level, slide
			override.field = backend_layout
			split {
				token = file__
				1.current = 1
				1.wrap = |
			}
			ifEmpty = 1col
			wrap = EXT:modernpackage/Resources/Private/Templates/|.html
		}
		layoutRootPath = EXT:modernpackage/Resources/Private/Templates/Layouts/
		variables {

		}
	}

	# CSS files to be included
	includeCSS {
		style = EXT:modernpackage/Resources/Public/Template/css/style.css
		style.media = screen,print
		print = EXT:modernpackage/Resources/Public/Template/css/print.css
		print.media = print

		bootstrap-ie7 = EXT:modernpackage/Resources/Public/Template/css/bootstrap-ie7.css
		bootstrap-ie7 {
			allWrap =<!--[if lt IE 8]>|<![endif]-->
			excludeFromConcatenation = 1
		}
		ie7 = EXT:modernpackage/Resources/Public/Template/css/ie7.css
		ie7 {
			allWrap =<!--[if lt IE 8]>|<![endif]-->
			excludeFromConcatenation = 1
		}
	}

	includeJS {
		modernizer = EXT:modernpackage/Resources/Public/Template/js/modernizer.js
		modernizer {
			forceOnTop = 1
		}
		jQuery = EXT:modernpackage/Resources/Public/Template/js/jquery-1.10.2.min.js
		jQuery {
			forceOnTop = 1
		}
		html5shiv = EXT:modernpackage/Resources/Public/Template/js/html5shiv.js
		html5shiv {
			allWrap = <!--[if lt IE 9]>|<![endif]-->
			excludeFromConcatenation = 1
		}
		respondjs = EXT:modernpackage/Resources/Public/Template/js/respond.js
		respondjs {
			allWrap = <!--[if lt IE 9]>|<![endif]-->
			excludeFromConcatenation = 1
		}
		html5shiv-printshiv = EXT:modernpackage/Resources/Public/Template/js/html5shiv-printshiv.js
		html5shiv-printshiv {
			allWrap =<!--[if lt IE 8]>|<![endif]-->
			excludeFromConcatenation = 1
		}
	}

	includeJSFooterlibs {
		jQueryUi = EXT:modernpackage/Resources/Public/Template/js/jquery-ui-1.10.3.js
		tab = EXT:modernpackage/Resources/Public/Template/js/tab.js
		tooltip = EXT:modernpackage/Resources/Public/Template/js/tooltip.js
		popover = EXT:modernpackage/Resources/Public/Template/js/popover.js
		dropdown = EXT:modernpackage/Resources/Public/Template/js/dropdown.js
		transitions = EXT:modernpackage/Resources/Public/Template/js/transitions.js
		collapse = EXT:modernpackage/Resources/Public/Template/js/collapse.js

		fancybox = EXT:modernpackage/Resources/Public/Template/js/jquery.fancybox.js
		flexslider = EXT:modernpackage/Resources/Public/Template/js/flexslider.js
		jqueryvalidatemin = EXT:modernpackage/Resources/Public/Template/js/jquery.validate.min.js
		placeholder = EXT:modernpackage/Resources/Public/Template/js/placeholder.min.js
		ias = EXT:modernpackage/Resources/Public/Template/js/jquery-ias.min.js
		responsive-images = EXT:modernpackage/Resources/Public/Template/js/responsive-images.js
	}

	# JS files to be included
	includeJSFooter {
		custom = EXT:modernpackage/Resources/Public/Template/js/custom.js
	}


	# Add some good classes to the bodytag to make a styling of special pages easier
	bodyTagCObject = COA
	bodyTagCObject   {
		stdWrap.wrap = <body class="|">

			# Add page UID
			10 = TEXT
			10 {
				value = page-{field:uid}
				insertData = 1
				noTrimWrap = || |
			}

			# Add current language
			20 = TEXT
			20 {
				value = language-{TSFE:sys_language_uid} languagecontent-{TSFE:sys_language_content}
				insertData = 1
				noTrimWrap = || |
			}
			# Add level
			25 = TEXT
			25 {
				value = level-{level:0}
				insertData = 1
				noTrimWrap = || |
			}
			# Add backend-layout
			30 = TEXT
			30 {
				wrap = template-|
				data = levelfield:-1, backend_layout_next_level, slide
				override.field = backend_layout
				split {
					token = file__
					1.current = 1
					1.wrap = |
				}
			}

			# Add uid of optional FE-layout
			40 = TEXT
			40 {
				fieldRequired = layout
				value = layout-{field:layout}
				insertData = 1
				noTrimWrap = | ||
			}
	}


}

