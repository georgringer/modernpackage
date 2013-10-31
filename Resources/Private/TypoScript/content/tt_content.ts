

# **********************************************************
# Changes of content element rendering
# **********************************************************

tt_content {

	# Every content element is wrapped inside a div
	stdWrap.outerWrap = <div class="element">|</div>
	stdWrap.outerWrap.override {
		if {
			value = 26,27,28,29,30
			isInList.field = section_frame
		}
		cObject = CASE
		cObject {
			#stdWrap.noTrimWrap = |<div class="element |">|</div>|
			key.field = section_frame

			26 = TEXT
			26.value = <div class="element hidden">|</div>
			27 = TEXT
			27.value = <div class="element visible-phone">|</div>
			28 = TEXT
			28.value = <div class="element visible-tablet">|</div>
			29 = TEXT
			29.value = <div class="element hidden-desktop">|</div>
			30 = TEXT
			30.value = <div class="element visible-desktop">|</div>
		}
	}

	stdWrap.innerWrap.cObject {
		default.20.40 = CASE
		default.20.40 {
			key.field = layout

			21 = TEXT
			21.value = box citation
			22 = TEXT
			22.value = alert alert-block
			23 = TEXT
			23.value = alert alert-success alert-block
			24 = TEXT
			24.value = alert alert-info alert-block
			25 = TEXT
			25.value = alert alert-error alert-block
			26 = TEXT
			26.value = toggle
		}
	}

	stdWrap.innerWrap2.cObject = COA
	stdWrap.innerWrap2.cObject {
		10 = TEXT
		10 {
			value = |
		}

		20 = TEXT
		20 {
			wrap = <p class="csc-linkToTop no-print">|</p>
			data = LLL:EXT:css_styled_content/pi1/locallang.xml:label.toTop
			typolink {
				parameter.dataWrap = {getIndpEnv:TYPO3_REQUEST_URL}#top
			}
		}
	}
}


lib.stdheader.10.stdWrap.override {
	if {
		value = 21,22,23,24,25
		isInList.field = layout
	}
	cObject = TEXT
	cObject {
		field = header
		htmlSpecialChars = 1
		wrap = <h6 class="header">|</h6>
	}
}

#-------------------------------------------------------------------------------
#	Responsive images
#-------------------------------------------------------------------------------
tt_content {
	image.20 {
		1.params = class="img-responsive thumbnail"

		addClassesCol >
		addClassesCol.override.cObject = CASE
		addClassesCol.override.cObject {
			key.field = imagecols

			1 = TEXT
			1.value col-sm-12
			2  = TEXT
			2.value = col-sm-6
			3 = TEXT
			3.value = col-sm-4
			4 = TEXT
			4.value= col-sm-3
			6 = TEXT
			6.value = col-sm-2


			default = TEXT
			default.value = col-sm-3
		}
		rendering {
			noCaption {
				rowStdWrap.wrap = <div class="row"> | </div>
				noRowsStdWrap.wrap = <div class="row csc-textpic-imagerow-none"> | </div>
				lastRowStdWrap.wrap = <div class="row csc-textpic-imagerow-last"> | </div>
				columnStdWrap.wrap = <div class="###CLASSES###"> | </div>
			}

			splitCaption {
				rowStdWrap.wrap = <div class="row"> | </div>
				noRowsStdWrap.wrap = <div class="row csc-textpic-imagerow-none"> | </div>
				lastRowStdWrap.wrap = <div class="row csc-textpic-imagerow-last"> | </div>
				columnStdWrap.wrap = <div class="###CLASSES###"> | </div>

				singleStdWrap.wrap.override = <figure class="thumbnail###CLASSES###">|###CAPTION###</figure>
				caption.wrap.override = <figcaption class="caption"> | </figcaption>
			}
		}
	}
}
