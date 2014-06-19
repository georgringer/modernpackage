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
			data = levelfield:-2,backend_layout_next_level,slide
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
		file1 = EXT:modernpackage/Resources/Public/Template/css/style.css
		file1.media = screen,print

		file2 = EXT:modernpackage/Resources/Public/Template/css/print.css
		file2.media = print
	}

	# JS files to be included
	includeJSFooter {
		jQuery = EXT:modernpackage/Resources/Public/Template/js/jquery.min.js
		jQueryUI = EXT:modernpackage/Resources/Public/Template/js/jquery-ui-1.10.3.js
		bootstrap = EXT:modernpackage/Resources/Public/Template/js/bootstrap.min.js
		fancybox = EXT:modernpackage/Resources/Public/Template/js/jquery.fancybox.js
		flexslider = EXT:modernpackage/Resources/Public/Template/js/jquery.flexslider.js
		validate = EXT:modernpackage/Resources/Public/Template/js/jquery.validate.js
		placeholder = EXT:modernpackage/Resources/Public/Template/js/placeholder.js
		ias = EXT:modernpackage/Resources/Public/Template/js/jquery-ias.js
		util = EXT:modernpackage/Resources/Public/Template/js/util.js
		typo3 = EXT:modernpackage/Resources/Public/Template/js/typo3.js
		customjs = EXT:modernpackage/Resources/Public/Template/js/script.js
	}

	includeJS {
		html5shiv = EXT:modernpackage/Resources/Public/Template/js/html5shiv.js
		html5shiv {
			allWrap = <!--[if lt IE 9]>|<![endif]-->
			excludeFromConcatenation = 1
			forceOnTop = 1
		}
		html5shiv-printshiv = EXT:modernpackage/Resources/Public/Template/js/html5shiv-printshiv.js
		html5shiv-printshiv {
			allWrap = <!--[if lt IE 8]>|<![endif]-->
			excludeFromConcatenation = 1
			forceOnTop = 1
		}
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

# **********************************************************
# Issue Collector, e.g. JIRA
# **********************************************************
[globalVar = TSFE : beUserLogin > 0]
	page.includeJS.issueCollector = {$plugin.theme_configuration.general.issueCollectorJsPath}
	page.includeJS.issueCollector {
		excludeFromConcatenation = 1
		external = 1
	}
[global]
