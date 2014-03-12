
# **********************************************************
# Library for indexed_search
# **********************************************************


plugin.tx_indexedsearch {
	templateFile = EXT:modernpackage/Resources/Private/Extensions/indexed_search/template.html

	show {
		rules = 0
		parsetimes = 0
		L2sections = 0
		L1sections = 0
		LxALLtypes = 0
		clearSearchBox = 0
		clearSearchBox.enableSubSearchCheckBox = 0
		forbiddenRecords = 0
		alwaysShowPageLinks = 0
		advancedSearchLink = 0
		resultNumber = 0
		mediaList =
	}

	# Blinding of option-selectors / values in these (advanced search) (see $optValues array in source code for options + extResume checkbox)
	blind {
		type = 0
		defOp = 0
		sections = 0
		freeIndexUid = 1
		media = 0
		order = 0
		group = 0
		lang = 0
		desc = 0
		results = 0
		# defOp.1=1
		# extResume=1
	}
	search {
		rootPidList =
		page_links = 10
		detect_sys_domain_records = 0
		defaultFreeIndexUidList = -1
		skipExtendToSubpagesChecking = 0
		exactCount = 1
		targetPid.data = TSFE:id
	}
}
