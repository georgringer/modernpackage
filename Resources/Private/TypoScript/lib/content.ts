# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or at your option) any later version.
# ******************************************************************************


# **********************************************************
# Rendering of all colpos'
# **********************************************************

#-------------------------------------------------------------------------------
#	CONTENT: Main Content (colPos = 0)
#-------------------------------------------------------------------------------
lib.content_main = COA
lib.content_main {
	stdWrap.wrap = <div class="content-main-inner">|</div>
	10 < styles.content.get
}
lib.content_0 < lib.content_main

#-------------------------------------------------------------------------------
#	CONTENT: Left Content (colPos = 1)
#-------------------------------------------------------------------------------
lib.content_left = COA
lib.content_left {
	stdWrap.wrap = <div class="content-left-inner">|</div>
	10 < styles.content.getLeft
}
lib.content_1 < lib.content_left

#-------------------------------------------------------------------------------
#	CONTENT: Right Content (colPos = 2)
#-------------------------------------------------------------------------------
lib.content_right = COA
lib.content_right {
	stdWrap.wrap = <div class="content-right-inner">|</div>
	10 < styles.content.getRight
}
lib.content_2 < lib.content_right

#-------------------------------------------------------------------------------
#	CONTENT: Border Content (colPos = 3)
#-------------------------------------------------------------------------------
lib.content_border = COA
lib.content_border {
	stdWrap.wrap = <div class="content-border-inner">|</div>
	10 < styles.content.getBorder
}
lib.content_3 < lib.content_border

#-------------------------------------------------------------------------------
#	CONTENT: colPos = 4
#-------------------------------------------------------------------------------
lib.content_4 = COA
lib.content_4 {
	stdWrap.wrap = <div class="content-border-inner">|</div>
	10 < styles.content.get
	10.select.where = colPos=4
}

#-------------------------------------------------------------------------------
#	CONTENT: colPos = 5
#-------------------------------------------------------------------------------
lib.content_5 = COA
lib.content_5 {
	stdWrap.wrap = <div class="content-border-inner">|</div>
	10 < styles.content.get
	10.select.where = colPos=5
}

#-------------------------------------------------------------------------------
#	CONTENT: colPos = 6
#-------------------------------------------------------------------------------
lib.content_6 = COA
lib.content_6 {
	stdWrap.wrap = <div class="content-border-inner">|</div>
	10 < styles.content.get
	10.select.where = colPos=6
}
