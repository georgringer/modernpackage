# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************

# **********************************************************
# Multilanguage configuration
#
# Especially when having more languages it is very useful
# to have this in a seperate file
# **********************************************************

# Default language
config {
	sys_language_uid = 0
	language = en
	locale_all = en
	htmlTag_langKey = en
}
plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 0

# German
[globalVar = GP:L=1]
	config {
		sys_language_uid = 1
		language = de
		locale_all = de
		htmlTag_langKey = de
	}
	plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 1
[global]

# Italian
[globalVar = GP:L=2]
	config {
		sys_language_uid = 2
		language = it
		locale_all = it
		htmlTag_langKey = it
	}
	plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 2
[global]