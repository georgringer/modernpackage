
# **********************************************************
# Rendering of all content columns
# **********************************************************

#-------------------------------------------------------------------------------
#	CONTENT: Main Content (colPos = 0)
#-------------------------------------------------------------------------------
lib.content.main = COA
lib.content.main {
	stdWrap.wrap = <div class="content-main-inner">|</div>
	stdWrap.innerWrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->
	10 < styles.content.get
}
lib.content.0 < lib.content.main

#-------------------------------------------------------------------------------
#	CONTENT: Left Content (colPos = 1)
#-------------------------------------------------------------------------------
lib.content.left = COA
lib.content.left {
	stdWrap.wrap = <div class="content-left-inner">|</div>
	stdWrap.innerWrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->
	10 < styles.content.getLeft
}
lib.content.1 < lib.content.left

#-------------------------------------------------------------------------------
#	CONTENT: Right Content (colPos = 2)
#-------------------------------------------------------------------------------
lib.content.right = COA
lib.content.right {
	stdWrap.wrap = <div class="content-right-inner">|</div>
	stdWrap.innerWrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->
	10 < styles.content.getRight
}
lib.content.2 < lib.content.right

#-------------------------------------------------------------------------------
#	CONTENT: Border Content (colPos = 3)
#-------------------------------------------------------------------------------
lib.content.border = COA
lib.content.border {
	stdWrap.wrap = <div class="content-border-inner">|</div>
	stdWrap.innerWrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->
	10 < styles.content.getBorder
}
lib.content.3 < lib.content.border

#-------------------------------------------------------------------------------
#	CONTENT: colPos = 4
#-------------------------------------------------------------------------------
lib.content.4 = COA
lib.content.4 {
	stdWrap.wrap = <div class="content-4-inner">|</div>
	stdWrap.innerWrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->
	10 < styles.content.get
	10.select.where = colPos=4
}

#-------------------------------------------------------------------------------
#	CONTENT: colPos = 5
#-------------------------------------------------------------------------------
lib.content.5 = COA
lib.content.5 {
	stdWrap.wrap = <div class="content-5-inner">|</div>
	stdWrap.innerWrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->
	10 < styles.content.get
	10.select.where = colPos=5
}

#-------------------------------------------------------------------------------
#	CONTENT: colPos = 6
#-------------------------------------------------------------------------------
lib.content.6 = COA
lib.content.6 {
	stdWrap.wrap = <div class="content-6-inner">|</div>
	stdWrap.innerWrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->
	10 < styles.content.get
	10.select.where = colPos=6
}

#-------------------------------------------------------------------------------
#	CONTENT: Special Usecases
#		Be aware in which templates those are used
#-------------------------------------------------------------------------------

#	CONTENT: 13 Address
#		Be aware in which templates those are used
#-------------------------------------------------------------------------------

lib.content.13 = COA
lib.content.13 {
	stdWrap.wrap = <div class="content-14-inner">|</div>
	10 < styles.content.get
	10.select.where = colPos=13
	10.renderObj = COA
	10.renderObj {
		10 < lib.stdheader

		20 = TEXT
		20 {
			wrap = <address>|</address>
			field = bodytext
			parseFunc < lib.parseFunc_RTE
		}
	}
}