

# **********************************************************
# Changes of content element rendering
# **********************************************************

tt_content {
	# Make some modifications to the rendering of the standard MAIL form records
	mailform.20 {
		accessibility = 1
	}

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


# !!! still in alpha/beta !!!
tt_content.mailform.20 {
  stdWrap.wrap >
  postProcessor.1.messages.success = TEXT
  postProcessor.1.messages.success {
    value = <strong>Thanks for your email</strong><br />I will try to responst as soon as possible!
    wrap = <div class="alert alert-success">|</div>
  }

  layout {
    form (
    <form class="form-horizontal">
      <containerWrap />
    </form>
    )
    containerWrap (
      <div>
    <elements />
    </div>

    )
    elementWrap (
    <div class="">
      <element />
    </div>
    )
    mandatory (
    <span class="required">
      *
    </span>
    )
    error (
    <strong class="ym-message">
      <errorvalue />
    </strong>
    )
    textline (
    <div class="control-group">
      <span class="control-label"><label class="bar" /></span>
      <div class="controls"><input class="fo" /></div><inputvalue />
    </div>
    )
    textarea (
    <div class="control-group">
      <span class="control-label"><label class="bar" /></span>
      <div class="controls"><textarea /></div><inputvalue />
    </div>
    )
    select (
    <div class="control-group">
      <label />
      <select>
        <elements />
      </select>
    </div>
    )
    checkbox (
     <div class="control-group">
      <span class="control-label"><label /></span>
      <div class="controls"><input /></div>
    </div>
    )
    radio (
   <div class="control-group">
      <span class="control-label"><label /></span>
      <div class="controls"><input /></div>
    </div>
    )
    button (
    <div class="ym-fbox-button">
      <input />
    </div>
    )
    reset (
    <div class="ym-fbox-button">
      <input />
    </div>
    )
    submit (
    <div class="form-actions">
      <input class="btn" />
    </div>
    )
    radiogroup(
    <div class="control-group subgroup">
     <span class="control-label"><legend/></span>
      <div class="controls"><containerWrap /></div>
    </div>
    )
    checkboxgroup(
    <div class="control-group subgroup">
     <span class="control-label"><legend/></span>
      <div class="controls"><containerWrap /></div>
    </div>
    )
  }
}