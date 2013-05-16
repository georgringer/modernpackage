# ******************************************************************************
#	(c) 2013 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************

# **********************************************************
# Configuration for rgsmoothgallery, using flexslider
# **********************************************************


#-------------------------------------------------------------------------------
#	Configuration
#-------------------------------------------------------------------------------
includeLibs.rgsmoothgallery = typo3conf/ext/rgsmoothgallery/Classes/Rendering/ConfigurationRendering.php

tt_content.image.20 {
	# Set some classes around
	imageStdWrap.dataWrap.override {
		if.isTrue.field = tx_rgsmoothgallery_rgsg
		cObject = COA
		cObject {
			10 = TEXT
			10.value (
				<div class="flexslider" id="slideshow">	<ul class="slides">| </ul></div>
			)
			20 = TEXT
			20.value =
		}
	}

	# Add the JS configuration
	#imageStdWrap.stdWrap.append = USER
	#imageStdWrap.stdWrap.append {
	#	stdWrap.if.isTrue.field = tx_rgsmoothgallery_rgsg
	#	userFunc = Tx_Rgsmoothgallery_Rendering_ConfigurationRendering->user_renderConfiguration
	#}

	# Override the title field and use the caption
	1.altText.field.override = imagecaption
	1.altText.field.override.if.isTrue.field = tx_rgsmoothgallery_rgsg
	1.titleText.field.override = imagecaption
	1.titleText.field.overrideif.isTrue.field = tx_rgsmoothgallery_rgsg

	# Don't render the caption if not needed
	caption.stdWrap.if.isFalse.field = tx_rgsmoothgallery_rgsg

	# Render just the image
	rendering.rgsmoothgallery {
		allStdWrap {
			wrap = <div class="csc-textpic-imagewrap">|</div>
			innerWrap.cObject = CASE
			innerWrap.cObject {
				key.field = imageorient
				# above-center
				0 = TEXT
				0.value = <div class="csc-textpic-center-outer"><div class="csc-textpic-center-inner">|</div></div>
				# below-center
				8 < .0
			}
		}
		oneImageStdWrap {
			wrap = <li>|</li>
		}

		imgTagStdWrap {
			wrap =|
		}
		caption {
			required = 1
			wrap = <div class="caption">|</div>
		}
	}

	renderMethod.stdWrap {
		override = rgsmoothgallery
		override.if.isTrue.field = tx_rgsmoothgallery_rgsg
	}
}

