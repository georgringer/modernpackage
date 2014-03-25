/*                                                               *
 * This file is brought to you by Georg Großberger               *
 * (c) 2014 Cyberhouse GmbH                                      *
 *                                                               *
 * It is free software; you can redistribute it and/or modify it *
 * under the terms of the MIT License / X11 License              *
 *                                                               */

var util = {};

(function() {
	var _arr = [],
		_forEach = _arr.forEach || function(callback) {
			var me = this, i = 0, len = me.length;

			for (i; i < len; i++) {
				callback(me[i], i, me);
			}
		};

	util.each = function(collection, callback) {
		_forEach.call(collection, callback);
	};

	util.updateMailLinks = function() {
		util.each([
			['@', 'mid'],
			['.', 'end']
		], function(replacement) {
			util.each(
				document.querySelectorAll(".obfuscate-" + replacement[1]),
				function(el) {
					var text = document.createTextNode(replacement[0]);
					el.parentNode.replaceChild(text, el);
				}
			)
		})
	};
})();
