# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************


# **********************************************************
# General configuration of a page
# **********************************************************

page {
	meta.viewport = width=100%, minimum-scale=1.0, maximum-scale=1.0
	#Favicon
	headerData.4 = TEXT
	headerData.4.value = <link rel="shortcut icon" href="{$plugin.theme_configuration.url}typo3conf/ext/modernpackage/Resources/Public/favicon.ico" />
}

config {
	doctype = html5
	xmlprologue = none
	xhtml_cleaning = all
	disablePrefixComment = 1
	meaningfulTempFilePrefix = 100

	# Admin Panel
	admPanel = 0

	# remove inline CSS/JS to external
	removeDefaultJS = external
	inlineStyle2TempFile = 1
	minifyJS = 1

	# RealURL
	simulateStaticDocuments = 0
	baseURL = {$plugin.theme_configuration.url}
	absRefPrefix = {$plugin.theme_configuration.url}
	tx_realurl_enable = 0
	prefixLocalAnchors = all
	prefixLocalAnchors >

	# Spam
	spamProtectEmailAddresses = -2
	spamProtectEmailAddresses_atSubst = <script type="text/javascript">obscureMid();</script>
	spamProtectEmailAddresses_lastDotSubst = <script type="text/javascript">obscureEnd();</script>

	# indexed Search
	index_enable = 1
	index_externals = 1

	# check for valid L-params
	linkVars = L(0-50)

	# Links & content sharing across domains
	typolinkEnableLinksAcrossDomains = 1
	typolinkCheckRootline = 1
	content_from_pid_allowOutsideDomain = 1

	# Awstats
	#stat = 1
	#stat_apache = 1
	#stat_apache_logfile = stat.log
	#stat_excludeBEuserHits = 1
	#stat_mysql = 1
	#stat_typeNumList = 0

	headerComment (
######################################################################
#                                   __                               #
#                .--------.-----.--|  |.-----.----.-----.            #
#                |        |  _  |  _  ||  -__|   _|     |            #
#                |__|__|__|_____|_____||_____|__| |__|__|            #
#                                                                    #
#                   modern TYPO3 theme by Georg Ringer               #
######################################################################
	)


}