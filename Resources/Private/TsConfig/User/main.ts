# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************

# General
#################
# Disable condensed mode
setup.default.condensedMode = 0
setup.override.condensedMode = 0

# Extended view (secondary options)
setup.default.extendedView = 1
setup.override.extendedView = 1

# Allow creation of new folders in Element Browser
options.createFoldersInEB = 1


# Pagetree
#################
options.pageTree {
	# Shows the user db mount path above the mount itself (useful if you work a lot with user db mounts)
	showPathAboveMounts = 1

	# Shows the page id as a prefix of the title
	showPageIdWithTitle = 1

	# Shows the navigation title instead of the title if available
	showNavTitle = 1

	# Disables the left click on an icon that opens the contextmenu
	disableIconLinkToContextmenu = 0

	# Disable the filter feature in the top panel
	hideFilter = 1

	# Shows the domain name as a suffix of the title if available
	showDomainNameWithTitle = 1

	#  List of pages with a dedicated color for permanent highlighting in the tree
	#backgroundColor.<pid> = red
}