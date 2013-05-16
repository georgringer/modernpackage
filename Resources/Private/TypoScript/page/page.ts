# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************

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
		file.stdWrap.cObject = CASE
		file.stdWrap.cObject {
			key.data = levelfield:-1, backend_layout_next_level, slide
			key.override.field = backend_layout

			default = TEXT
			default.value = EXT:modernpackage/Resources/Private/Templates/content-2col-60-40.html
			1 = TEXT
			1.value = EXT:modernpackage/Resources/Private/Templates/content-1col.html
			3 = TEXT
			3.value = EXT:modernpackage/Resources/Private/Templates/content-3col.html
		}
		#partialRootPath = EXT:modernpackage/Resources/Private/Templates/
		layoutRootPath = EXT:modernpackage/Resources/Private/Templates/Layouts/
		variables {

		}
	}

	# CSS files to be included
	includeCSS {
		file1 = EXT:modernpackage/Resources/Public/Template/css/bootstrap.css
		file1.media = screen,print
		file2 = EXT:modernpackage/Resources/Public/Template/css/bootstrap-responsive.css
		file2.media = screen,print
		file3 = EXT:modernpackage/Resources/Public/Template/css/style.css
		file3.media = screen,print
		file4 = EXT:modernpackage/Resources/Public/Template/css/mediaqueries.css
		file4.media = screen,print
		file5 = EXT:modernpackage/Resources/Public/Template/css/flexslider.css
		file5.media = screen,print
		file6 = EXT:modernpackage/Resources/Public/Template/css/responsiveTable.css
		file6.media = screen,print
		file7 = EXT:modernpackage/Resources/Public/Template/css/jquery-ui-1.10.3.custom.min.css
		file7.media = screen,print
	}

	# JS files to be included
	includeJSFooter {
		bootstrap = EXT:modernpackage/Resources/Public/Template/js/bootstrap.js
		flexslider = EXT:modernpackage/Resources/Public/Template/js/jquery.flexslider-min.js
		yoxview = EXT:modernpackage/Resources/Public/Template/js/jquery.yoxview-2.21.min.js
		placeholder = EXT:modernpackage/Resources/Public/Template/js/placeholder.js
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

		# Add uid of the backend-layout
		20 = TEXT
		20 {
			wrap = template-|
			data = levelfield:-1, backend_layout_next_level, slide
			override.field = backend_layout
		}

		# Add uid of optional FE-layout
		30 = TEXT
		30 {
			fieldRequired = layout
			value = layout-{field:layout}
			insertData = 1
			noTrimWrap = | ||
		}
	}

}

