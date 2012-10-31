# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************


# **********************************************************
# Debug stuff
# **********************************************************

config.no_cache = 1


page.headerData.5 = COA
page.headerData.5 {
	5 = TEXT
	5.value (
		<!--
Debug

	)

	10 = TEXT
	10.insertData = !
	10.value (
		Page Uid: {page:uid} | Page Pid: {page:pid}
		Sys_language: {TSFE:sys_language_uid} | Sys_language: {TSFE:sys_language_content}
	)

	99 = TEXT
	99.value (

	-->
	)
}
