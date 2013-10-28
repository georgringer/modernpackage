

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

