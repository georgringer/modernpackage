
# **********************************************************
# Lightbox implementation by using plain TypoScript
# and fancybox, see http://fancybox.net/ for details
# **********************************************************

# Change rendering of images to fit the needs of the lightbox requirements
tt_content.image.20.1.imageLinkWrap {
	JSwindow = 0
	directImageLink = 1
	linkParams.ATagParams {
		dataWrap = class= "fancybox" data-fancybox-group="group{field:uid}"
	}
}


# Enable lightbox by default
#tt_content.image.20.1.imageLinkWrap.enable >
#tt_content.image.20.1.imageLinkWrap.enable = 1