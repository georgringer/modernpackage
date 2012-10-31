# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************

# **********************************************************
# Lightbox implementation by using plain TypoScript
# and fancybox, see http://fancybox.net/ for details
# **********************************************************

# Add the CSS / JS files
page {
	includeCSS {
		file5 = EXT:modernpackage/Resources/Public/Contrib/fancybox/jquery.fancybox-1.3.4.css
	}

	includeJSFooter {
		# Optional
		jquery_easing = EXT:modernpackage/Resources/Public/Contrib/fancybox/jquery.easing-1.3.pack.js
		# fancybox library
		fancybox = EXT:modernpackage/Resources/Public/Contrib/fancybox/jquery.fancybox-1.3.4.pack.js
		# Enabling lightbox for content images + configuration
		enable_fancybox = EXT:modernpackage/Resources/Public/Template/js/enable_fancybox.js
	}
}

# Change rendering of images to fit the needs of the lightbox requirements
tt_content.image.20.1.imageLinkWrap {
  JSwindow = 0
  directImageLink = 1
  linkParams.ATagParams {
    dataWrap = class= "lightbox" rel="fancybox{field:uid}"
  }
}
