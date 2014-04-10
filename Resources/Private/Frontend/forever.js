/*                                                               *
 * This file is brought to you by Georg Großberger               *
 * (c) 2014 Cyberhouse GmbH                                      *
 *                                                               *
 * It is free software; you can redistribute it and/or modify it *
 * under the terms of the MIT License / X11 License              *
 *                                                               */

var spawn = require("child_process").spawn,
	gulp,
	workingDirectory = process.cwd();

if (process.argv.length > 2) {
	var possibleWorkingDirectory = process.argv[2];
	if (!/^([a-zA-Z]:|\/)/.test(possibleWorkingDirectory)) {
		possibleWorkingDirectory = require("path").join(workingDirectory, possibleWorkingDirectory);
	}

	var stat = require("fs").statSync(possibleWorkingDirectory);

	if (stat && stat.isDirectory()) {
		workingDirectory = possibleWorkingDirectory;
		process.chdir(workingDirectory);
	}
}

function startGulp() {
	gulp = spawn("gulp", ["server"], {cwd: workingDirectory});

	gulp.stdout.on("data", function (data) {
		console.log(data.toString());
	});

	gulp.stderr.on("data", function (data) {
		console.log(data.toString());
	});

	gulp.on("close", function (code) {
		console.log("server shut down with exit code " + code + ", restarting now");
		gulp = null;
		startGulp();
	});
}

startGulp();

process.on("exit", function() {
	if (gulp) {
		gulp.kill();
	}
});
