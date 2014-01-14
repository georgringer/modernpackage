# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************

<INCLUDE_TYPOSCRIPT: source="FILE:EXT:news/Configuration/TypoScript/setup.txt">


# **********************************************************
# Changes to EXT:news
# **********************************************************

plugin.tx_news {
	view {
		templateRootPath >
		templateRootPaths {
			0 = EXT:news/Resources/Private/Templates/
			1 = EXT:modernpackage/Resources/Private/Extensions/news/main/Templates/
		}
		partialRootPath >
		partialRootPaths {
			0 = EXT:news/Resources/Private/Partials/
			1 = EXT:modernpackage/Resources/Private/Extensions/news/main/Partials/
		}
		layoutRootPath >
		layoutRootPaths {
			0 = EXT:news/Resources/Private/Layouts/
			1 = EXT:modernpackage/Resources/Private/Extensions/news/main/Layouts/
		}
        widget.Tx_News_ViewHelpers_Widget_PaginateViewHelper.templateRootPath = EXT:modernpackage/Resources/Private/Extensions/news/main/
	}

	settings {
		cssFile >
		list {
			paginate {
				insertAbove = 0
				insertBelow = 1
				itemsPerPage = 10
			}

			media {
				image {
					maxWidth = 400
					maxHeight = 350
				}
			}

			rss.channel {
				title = Dummy Title
				description =
				link = http://example.com
				language = en_GB
				copyright = TYPO3 News
				category =
				generator = TYPO3 EXT:news
			}
		}
		detail {
			media {
				image {
					maxWidth = 900
					maxHeight = 600
				}
			}
		}

	}
}


#-------------------------------------------------------------------------------
#	EXT:news Latest news
#-------------------------------------------------------------------------------

lib.extensions.news_latest = USER
lib.extensions.news_latest {
	userFunc = tx_extbase_core_bootstrap->run
	extensionName = News
	pluginName = Pi1

	switchableControllerActions {
		News {
			1 = list
		}
	}
	settings < plugin.tx_news.settings
	settings {
		hidePagination = 1
		cropMaxCharacters = {$plugin.theme_configuration.extensions.news.latest.cropMaxCharacters}
		detailPid = {$plugin.theme_configuration.extensions.news.latest.detailPid}
		limit = {$plugin.theme_configuration.extensions.news.latest.limit}
		startingpoint = {$plugin.theme_configuration.extensions.news.latest.startingpoint}

		isLatest = 1
	}
}