# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or at your option) any later version.
# ******************************************************************************


# **********************************************************
# Changes of content element rendering
# **********************************************************

tt_content {

	# Every content element is wrapped inside a div
	stdWrap.outerWrap = <div class="ce">|</div>

	# Disable image rendering and jumpurl for filelist element
	uploads.20 {
		linkProc.combinedLink = 0
		itemRendering.10.data = register:linkedLabel
		linkProc.jumpurl >
	}

	# Make some modifications to the rendering of the standard MAIL form records
	mailform.20 {
		accessibility = 1
	}

	# Remove the ancient onfocus="blurLink(this);" from sitemap links
	# Unfortunately this hasn't been fully implemented in css_styled_content yet
	menu.20 {
		default.1.noBlur = 1
		1.1.noBlur = 1
		4.1.noBlur = 1
		5.1.noBlur = 1
		6.1.noBlur = 1
		7.1.noBlur = 1
		7.2.noBlur = 1
	}

	stdWrap.innerWrap.cObject = CASE
	stdWrap.innerWrap.cObject {
		key.field = layout
		default=TEXT
		default.value = |

		1 = TEXT
		1.value = <div class="box">|</div>
		2 = TEXT
		2.value = <div class="box news">|</div>
		3 = TEXT
		3.value = <div class="box download">|</div>
		4 = TEXT
		4.value = <div class="box link-list">|</div>
		5 = TEXT
		5.value = <div class="box info">|</div>
		6 = TEXT
		6.value = <blockquote class="box citation">|</blockquote>
		7 = TEXT
		7.value = <div class="link-list-only">|</div>
		8 = TEXT
		8.value = <div class="alert alert-block">|</div>
		9 = TEXT
		9.value = <div class="alert alert-success alert-block">|</div>
		10 = TEXT
		10.value = <div class="alert alert-info alert-block">|</div>
		11 = TEXT
		11.value = <div class="alert alert-error alert-block">|</div>
	}

	stdWrap.innerWrap2 = | <p class="csc-linkToTop no-print"><a href="#"><i class="icon-eject"></i>{LLL:EXT:css_styled_content/pi1/locallang.xml:label.toTop}</a></p>

	# Define different wrappers for content elements depending on the page column
	#stdWrap.outerWrap.cObject = CASE
	#stdWrap.outerWrap.cObject {
	#  # Define wrappers for each column position (colPos 0,1,2,3)
	#  key.field = colPos

	#  # Default is no wrapper
	#  default = TEXT
	#  default.value = |

	#  # Add wrapper for content in right column (colPos=2)
	#  # we use this to style the box around content in this column
	#  2 = CASE
	#  2 {
	#    # Add wrapping to all content elements
	#    default = TEXT
	#    default.value = <div class="secondaryContentSection">|</div>
	#
	#    # But - exclude inserted records from being wrapped
	#    key.field = CType
	#    shortcut = TEXT
	#    shortcut.value = |
	#    image = TEXT
	#   image.value = |
	#   html = TEXT
	#    html.value = |
	#  }
	#
	#}

	## Define max image width for each content column separately
	#image.20.maxW.cObject = CASE
	#image.20.maxW.cObject {
	#  key.field = colPos
	#  default = TEXT
	#  default.value = 417
	#  # normal
	#  0 = TEXT
	#  0.value = 417
	#  # left
	#  1 = TEXT
	#  1.value = 150
	#  # right
	#  2 = TEXT
	#  2.value = 155
	#}

	#image.20.maxWInText.cObject = CASE
	#image.20.maxWInText.cObject {
	#  key.field = colPos
	#  default = TEXT
	#  default.value = 260
	#  # normal
	#  0 = TEXT
	#  0.value = 260
	#  # left
	#  1 = TEXT
	#  1.value = 70
	#  # right
	#  2 = TEXT
	#  2.value = 70
	#}

}


# Add a header class for the error elements
lib.stdheader.3.headerClass.cObject.25 = TEXT
lib.stdheader.3.headerClass.cObject.25 {
	value = alert-heading
	noTrimWrap = | ||

	if {
		value = 8,9,10
		isInList.field = layout
	}
}