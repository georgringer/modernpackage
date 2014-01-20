

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
config.titleTagFunction = GeorgRinger\Modernpackage\PageTitle->getTitleTag
config.titleTagFunction {
	data = page:subtitle // page:title

	noTrimWrap = |{$plugin.theme_configuration.general.pageTitle.prefix} | {$plugin.theme_configuration.general.pageTitle.suffix}|
}


# **********************************************************
# Various icons, must be placed in root
# **********************************************************
page {
#	shortcutIcon = favicon.ico

#	headerData.31 = TEXT
#	headerData.31.value (
#		<link rel="icon" href="{$plugin.theme_configuration.url}favicon.ico" type="image/x-icon">
#		<link rel="apple-touch-icon" sizes="57x57" href="{$plugin.theme_configuration.url}apple-touch-icon-57x57.png" />
#		<link rel="apple-touch-icon" sizes="72x72" href="{$plugin.theme_configuration.url}apple-touch-icon-72x72.png" />
#		<link rel="apple-touch-icon" sizes="114x114" href="{$plugin.theme_configuration.url}apple-touch-icon-114x114.png" />
#		<link rel="apple-touch-icon" sizes="144x144" href="{$plugin.theme_configuration.url}apple-touch-icon-144x144.png" />
#		<link rel="apple-touch-icon" sizes="153x153" href="{$plugin.theme_configuration.url}apple-touch-icon-153x153.png" />
#	 )
}

# **********************************************************
# Canonical Tag to current page
# **********************************************************
page.headerData.32 = TEXT
page.headerData.32 {
		typolink {
			parameter.data = TSFE:id
			addQueryString = 1
			returnLast = url
		}
		noTrimWrap (
|
<link rel="canonical" href="|" />
|
)
}

includeLibs.pagetitle = EXT:modernpackage/Classes/Page/AlternativeLanguageTag.php
page.headerData.33 = USER
page.headerData.33 {
	userFunc = GeorgRinger\Modernpackage\Page\AlternativeLanguageTag->get

	# Use either one of those, see below for its configuration
	useRealurl = 1
	useSimpleMode = 0

	# Use the realurl mapping
	realurl {
		key = _DEFAULT
		default = de
	}

	# Use the simple mapping
	simpleMode {
		#0 = en
		#1 = de
		#2 = fr
		#3 = it
	}
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
[global]