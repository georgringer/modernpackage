# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************


# **********************************************************
# Rendering of all colpos'
# **********************************************************

#-------------------------------------------------------------------------------
#	CONTENT: Main Content (colPos = 0)
#-------------------------------------------------------------------------------
lib.content.main = COA
lib.content.main {
	stdWrap.wrap = <div class="content-main-inner">|</div>
	10 < styles.content.get
}
lib.content.0 < lib.content.main

#-------------------------------------------------------------------------------
#	CONTENT: Left Content (colPos = 1)
#-------------------------------------------------------------------------------
lib.content.left = COA
lib.content.left {
	stdWrap.wrap = <div class="content-left-inner">|</div>
	10 < styles.content.getLeft
}
lib.content.1 < lib.content.left

#-------------------------------------------------------------------------------
#	CONTENT: Right Content (colPos = 2)
#-------------------------------------------------------------------------------
lib.content.right = COA
lib.content.right {
	stdWrap.wrap = <div class="content-right-inner">|</div>
	10 < styles.content.getRight
}
lib.content.2 < lib.content.right

#-------------------------------------------------------------------------------
#	CONTENT: Border Content (colPos = 3)
#-------------------------------------------------------------------------------
lib.content.border = COA
lib.content.border {
	stdWrap.wrap = <div class="content-border-inner">|</div>
	10 < styles.content.getBorder
}
lib.content.3 < lib.content.border

#-------------------------------------------------------------------------------
#	CONTENT: colPos = 4
#-------------------------------------------------------------------------------
lib.content.4 = COA
lib.content.4 {
	stdWrap.wrap = <div class="content-border-inner">|</div>
	10 < styles.content.get
	10.select.where = colPos=4
}

#-------------------------------------------------------------------------------
#	CONTENT: colPos = 5
#-------------------------------------------------------------------------------
lib.content.5 = COA
lib.content.5 {
	stdWrap.wrap = <div class="content-border-inner">|</div>
	10 < styles.content.get
	10.select.where = colPos=5
}

#-------------------------------------------------------------------------------
#	CONTENT: colPos = 6
#-------------------------------------------------------------------------------
lib.content.6 = COA
lib.content.6 {
	stdWrap.wrap = <div class="content-border-inner">|</div>
	10 < styles.content.get
	10.select.where = colPos=6
}
