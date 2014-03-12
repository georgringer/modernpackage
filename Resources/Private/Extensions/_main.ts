# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************

# **********************************************************
# Basis of all changes to extensions (also sysexts)
# **********************************************************

<INCLUDE_TYPOSCRIPT: source="FILE:EXT:modernpackage/Resources/Private/Extensions/extbase.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:modernpackage/Resources/Private/Extensions/indexed_search.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:modernpackage/Resources/Private/Extensions/rgsmoothgallery.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:modernpackage/Resources/Private/Extensions/news/news.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:modernpackage/Resources/Private/Extensions/formhandler/formhandler.ts">


# Remove general CSS styles
plugin.tx_indexedsearch._CSS_DEFAULT_STYLE >
plugin.tx_felogin_pi1._CSS_DEFAULT_STYLE >
#plugin.tx_cssstyledcontent._CSS_DEFAULT_STYLE >