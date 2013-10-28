
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
			wrap = EXT:modernpackage/Resources/Private/Templates/|.html
		}
		layoutRootPath = EXT:modernpackage/Resources/Private/Templates/Layouts/
		variables {

		}
	}

	# CSS files to be included
	includeCSS {
		file1 = EXT:modernpackage/Resources/Public/Template/css/bootstrap.min.css
		file1.media = screen,print
		file2 = EXT:modernpackage/Resources/Public/Template/css/style.css
		file2.media = screen,print
		file3 = EXT:modernpackage/Resources/Public/Template/css/mediaqueries.css
		file3.media = screen,print
		file5 = EXT:modernpackage/Resources/Public/Template/css/flexslider.css
		file5.media = screen,print
		file6 = EXT:modernpackage/Resources/Public/Template/css/responsiveTable.css
		file6.media = screen,print
		file6 = EXT:modernpackage/Resources/Public/Template/css/yoxview.css
		file6.media = screen,print
		file8 = EXT:modernpackage/Resources/Public/Template/css/jquery-ui-1.10.3.custom.min.css
		file8.media = screen,print
	}

	# JS files to be included
	includeJSFooter {
		bootstrap = EXT:modernpackage/Resources/Public/Template/js/bootstrap.min.js
		flexslider = EXT:modernpackage/Resources/Public/Template/js/jquery.flexslider-min.js
		yoxview = EXT:modernpackage/Resources/Public/Template/js/jquery.yoxview-2.21.min.js
		placeholder = EXT:modernpackage/Resources/Public/Template/js/jquery.placeholder.min.js
		responsive = EXT:modernpackage/Resources/Public/Template/js/respond.min.js
		customjs = EXT:modernpackage/Resources/Public/Template/js/script.js
	}

	includeJS {
		html5shiv = EXT:modernpackage/Resources/Public/Template/js/html5shiv.js
		html5shiv {
			allWrap = <!--[if lt IE 9]>|<![endif]-->
			excludeFromConcatenation = 1
			forceOnTop = 1
		}
	}

	includeJSFooterlibs {
		jQuery = EXT:modernpackage/Resources/Public/Template/js/jquery-1.9.1.js
		jQueryUi = EXT:modernpackage/Resources/Public/Template/js/jquery-ui-1.10.3.custom.min.js
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

