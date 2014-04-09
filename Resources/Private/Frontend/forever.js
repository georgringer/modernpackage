/*                                                               *
 * This file is brought to you by Georg Großberger               *
 * (c) 2014 Cyberhouse GmbH                                      *
 *                                                               *
 * It is free software; you can redistribute it and/or modify it *
 * under the terms of the MIT License / X11 License              *
 *                                                               */

var spawn = require('child_process').spawn,
	gulp;

function startGulp() {
	gulp = spawn("gulp", ["server"], {cwd: __dirname});

	gulp.stdout.on('data', function (data) {
		console.log(data.toString());
	});

	gulp.stderr.on('data', function (data) {
		console.log(data.toString());
	});

	gulp.on('close', function (code) {
		console.log('server shut down with exit code ' + code + ", restarting now");
		gulp = null;
		startGulp();
	});
}

startGulp();

process.on('exit', function() {
	if (gulp) {
		gulp.kill();
	}
});
