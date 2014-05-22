#*** RTE Classe des Interface (Ausrichtung)
RTE.classes {
	green {
		name = Green
		value = color:#d2d443;
	}
}

#
# *** Entfernt das Bild vor den Links
RTE.default.buttons.link.properties.class.allowedClasses {
	internalLink {
		class = internal-link
		type = page
		image >
	}
	externalLink {
		class = external-link
		type = url
		image >
	}
	externalLinkInNewWindow {
		class = external-link-new-window
		type = url
		image >
	}
	internalLinkInNewWindow {
		class = internal-link-new-window
		type = page
		image >
	}
	download {
		class = download
		type = file
		image >
	}
	mail {
		class = mail
		type = mail
		image >
	}
}


## RTE Konfiguration
RTE.default {

	RTEHeightOverride = 500
	RTEWidthOverride = 800

	# RTE Stylesheet für benutzerdefinierte Formatauszeichnungen
	#contentCSS = typo3conf/ext/theme_modernpackage/Resources/Public/Css/rte.css

	# Markup options
	enableWordClean = 1
	removeTrailingBR = 1
	removeComments = 1
	removeTags = center, sdfield
	removeTagsAndContents = style,script

	hidePStyleItems = h1,h2,h5,h6,address, DIV, P
	buttons.formatblock.removeItems = h1,h2,h3,h4,h5,h6,address, DIV, P,article,section,aside,footer,header,nav

	# Buttons die gezeigt/versteckt werden
	showButtons = formatblock, blockstyle, bold, italic, left, center, right, orderedlist, unorderedlist, link, insertcharacter, removeformat, undo, redo, outdent, indent,chMode
	hideButtons = textstyle,image,line, underline, textstylelabel, blockstylelabel,insertparagraphafter, insertparagraphbefore, fontstyle, fontsize, strikethrough, lefttoright, righttoleft, bgcolor, textindicator, emoticon, user, spellcheck, inserttag, subscript, superscript, acronym, about, showhelp, copy, cut, paste, justifyfull, textcolor, table, tableproperties, rowproperties, rowAinsertabove, rowinsertunder, rowdelete, rowsplit, columninsertbefore, columninsertafter, columndelete, columnsplit, cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, toggleborders, cellmerge,findreplace


	# Hält die RTE Icons gegroupt zusammen
	keepButtonGroupTogether = 1

	# blendet Statusbar in htmlarea aus
	showStatusBar =  1
	useCSS = 1

	## Add styles Left, center and right alignment of text in paragraphs and cells.
	inlineStyle.text-alignment (
		p.align-left, h1.align-left, h2.align-left, h3.align-left, h4.align-left, h5.align-left, h6.align-left, td.align-left { text-align: left; }
		p.align-center, h1.align-center, h2.align-center, h3.align-center, h4.align-center, h5.align-center, h6.align-center, td.align-center { text-align: center; }
		p.align-right, h1.align-right, h2.align-right, h3.align-right, h4.align-right, h5.align-right, h6.align-right, td.align-right { text-align: right; }
	)

	## Use stylesheet file rather than the above mainStyleOverride and inlineStyle properties to style the contents (htmlArea RTE only)
	ignoreMainStyleOverride = 1

	proc {
		# tags die erlaubt / verboten sind
		allowTags = pre,font,table, thead, tbody, tr, th, td, h1, h2, h3, h4, h5, h6, div, p, br, span, ul, ol, li, re, blockquote, strong, em, b, i, u, sub, sup, strike, a, img, nobr, hr, tt, q, cite, abbr, acronym, center
		denyTags =

		# br wird nicht zu p konvertiert
		dontConvBRtoParagraph = 1

		# tags sind erlaubt außerhalt von p, div
		allowTagsOutside = img,hr,span

		# erlaubte attribute in p, div tags
		keepPDIVattribs = align,class,style,id

		# List all class selectors that are allowed on the way to the database
		allowedClasses (
			green
		)

		# html parser einstellungen
		HTMLparser_rte {

			# tags die erlaubt/verboten sind
			allowTags < RTE.default.proc.allowTags
			denyTags < RTE.default.proc.denyTags

			# tags die untersagt sind
			#removeTags = font

			# entfernt html-kommentare
			removeComments = 1

			# tags die nicht übereinstimmen werden nicht entfernt (protect / 1 / 0)
			keepNonMatchedTags = 0
		}


		# Content to database
		entryHTMLparser_db = 1
		entryHTMLparser_db {

			# tags die erlaubt/verboten sind
			allowTags < RTE.default.proc.allowTags
			denyTags < RTE.default.proc.denyTags

			# CLEAN TAGS
			noAttrib = b, i, u, strike, sub, sup, strong, em, quote, blockquote, cite, tt, br, center

			rmTagIfNoAttrib = span,div,font

			# htmlSpecialChars = 1

			## align attribute werden erlaubt
			tags {
				p.fixAttrib.align.unset >
				p.allowedAttribs = class,style,align

				div.fixAttrib.align.unset >

				hr.allowedAttribs = class

				# b und i tags werden ersetzt (em / strong)
				b.remap = strong
				i.remap = em

				## img tags werden erlaubt
				#img >

				# Unbedingt nötig für Farben mit Firefox
				span.fixAttrib.style.unset = 1

				font.allowedAttribs = color, face, size
			}
		}

	}

	# Classes: Ausrichtung
	buttons.blockstyle.tags.div.allowedClasses (
		green
	)
	buttons.blockstyle.tags.p.allowedClasses < buttons.blockstyle.tags.div.allowedClasses

	# Classes: Eigene Stile
	buttons.textstyle.tags.span.allowedClasses = green
	buttons.image.properties.class.allowedClasses = rte_image


	# Classes für Links (These classes should also be in the list of allowedClasses)
	buttons.link.page.properties.class.default =
	buttons.link.url.properties.class.default =
	buttons.link.file.properties.class.default =
	buttons.link.mail.properties.class.default =

	# zeigt alle CSS-Klassen die in formate.css vorhanden sind
	buttons.blockstyle.showTagFreeClasses = 1
	buttons.textstyle.showTagFreeClasses = 1

	# Do not allow insertion of the following tags
	hideTags = font

	# Tabellen Optionen in der RTE Toolbar
	hideTableOperationsInToolbar = 0
	keepToggleBordersInToolbar = 1

	# Tabellen Editierungs-Optionen (cellspacing/ cellpadding / border)
	disableSpacingFieldsetInTableOperations = 1
	disableAlignmentFieldsetInTableOperations=1
	disableColorFieldsetInTableOperations=1
	disableLayoutFieldsetInTableOperations=1
	disableBordersFieldsetInTableOperations=0

	tags.p.allowedAttribs = class, style, align
}

# Use same processing as on entry to database to clean content pasted into the editor
RTE.default.enableWordClean.HTMLparser < RTE.default.proc.entryHTMLparser_db

# FE RTE configuration (htmlArea RTE only)
RTE.default.FE < RTE.default
RTE.default.FE.userElements >
RTE.default.FE.userLinks >

# Breite des RTE in Fullscreen-Ansicht
TCEFORM.tt_content.bodytext.RTEfullScreenWidth= 80%



##################
RTE.default.proc {
	entryHTMLparser_db.tags {
		span.fixAttrib.style.unset >
	}
}

RTE.config {
    ## Freischalten der Klassen im Frontend
    tt_content.bodytext.proc.allowedClasses = weiss
	tt_news.bodytext.proc.allowedClasses = weiss
}

