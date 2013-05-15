# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************


# **********************************************************
# Seo related stuff
# **********************************************************

page.meta {
	keywords.field = keywords
	keywords.override.data = register:newsKeywords
	description.field = description
	abstract.field = abstract
	robots = INDEX,FOLLOW
}

# **********************************************************
# <title> - Tag
# **********************************************************
includeLibs.pagetitle = EXT:modernpackage/Classes/PageTitle.php
config.titleTagFunction = Tx_Modernpackage_PageTitle->getTitleTag
config.titleTagFunction {
	data = page:subtitle // page:title

	noTrimWrap = |{$plugin.theme_configuration.general.pageTitle.prefix} | {$plugin.theme_configuration.general.pageTitle.suffix}|
}

# **********************************************************
# Google Analytics
# **********************************************************
[globalVar = LIT:1 = {$plugin.theme_configuration.general.googleanalytics}]
page.headerData.919 = COA
page.headerData.919 {
	stdWrap.wrap = <script type="text/javascript">|</script>

	10 = TEXT
	10.insertData = 1
	10.value (
	  var pluginUrl = '//www.google-analytics.com/plugins/ga/inpage_linkid.js';
	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', '{$plugin.theme_configuration.general.googleanalytics.code}']);
	  _gaq.push (['_gat._anonymizeIp']);
	  _gaq.push(['_require', 'inpage_linkid', pluginUrl]);
	  _gaq.push(['_trackPageview']);
	)

	20 = TEXT
	20.value (
	  (function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();
	)

}