//     ___|\ \   / __ )  ____|  _ \  |   |  _ \  |   |  ___|  ____|
//    |     \   /  __ \  __|   |   | |   | |   | |   |\___ \  __|
//    |        |   |   | |     __ <  ___ | |   | |   |      | |
//   \____|   _|   ___/ _____|_| \_\_|  _|\___/ \___/ _____/ _____|

// @author Ralph Harrer <ralph.harrer@cyberhouse.at>
// @author Georg Großberger <georg.grossberger@cyberhouse.at>

/* GULP LIBS */

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var csslint = require('gulp-csslint');
var minifyCSS = require('gulp-minify-css');
var lr = require('tiny-lr');
var livereload = require('gulp-livereload');
var server = lr();
var es = require('event-stream');
var header = require('gulp-header');
var kss = require('gulp-kss');

// loading config.json
var config = require('./config.json');

if (!config.hasOwnProperty('dir')) {
	config.dir = {
		'dest': '../../Public/Template',
		'src': '.'
	};
}

/* DIRECTORIES */
var dirSrc = config.dir.src;
var dirDest = config.dir.dest;

var dirAllJs = dirSrc + "/js/**/*.js";
var dirAllImg = [dirSrc + "/img/*", dirSrc + "/img/**/*"];
var dirAllLess = [dirSrc + "/less/style.less", dirSrc + "/less/print.less", dirSrc + "/less/rte.less"];

var dirClean = dirDest + "/*";
var dirDestImg = dirDest + "/img";
var dirDestJs = dirDest + "/js";
var dirDestCss = dirDest + "/css";

/* TASKS */

/**
 * clears the build directory by removing all files in it.
 */
gulp.task('clean', function (cb) {
	gulp.src(dirClean)
		.pipe(clean());
	cb();
});

/**
 * uglifies and copies every js file to the destination. it does not merge the js files to one single file yet.
 */
gulp.task('scripts', function () {
	return gulp.src(dirAllJs)
		.pipe(uglify())
		.pipe(header(config.header.message))
		.pipe(gulp.dest(dirDestJs))
		.pipe(livereload(server));
});

/**
 * optimizes and copies every image within the image folder to the destination
 */
gulp.task('images', function () {
	return gulp.src(dirAllImg)
		.pipe(imagemin({ optimizationLevel: config.task.imagemin.optimizationLevel}))
		.pipe(gulp.dest(dirDestImg))
		.pipe(livereload(server));
});

/**
 * compiles every less file to css. minifies the result and moves it to the destination
 */
gulp.task('less-css-minify', function () {
	return gulp.src(dirAllLess)
		.pipe(less())
		.pipe(minifyCSS())
		.pipe(header(config.header.message))
		.pipe(gulp.dest(dirDestCss))
		.pipe(livereload(server));
});

/**
 * moves root files which are specified in the config.json to the destination
 */
gulp.task('copy-unprocessed', function () {
	return gulp.src(config.copy)
		.pipe(gulp.dest(dirDest))
		.pipe(livereload(server));
});

/**
 * moves and uglifies node module js files as specified in config.json
 */
gulp.task('copy-node-modules', ['scripts'], function () {
	var streams = [];

	config.node_modules.copy.forEach(function (file) {
		streams.push(
			gulp
				.src(file.from)
				.pipe(gulp.dest(file.to))
		);
	});

	return es.concat.apply(null, streams).pipe(livereload(server));
});

gulp.task("build", ["less-css-minify", "scripts", "images", "copy-node-modules", "copy-unprocessed"]);
gulp.task('default', ['build']);


/**
 * starts the watch task listening for changes in private
 */
gulp.task('watch', function () {
	gulp.watch([dirSrc + "/../**/*.html", dirSrc + "/../**/*.ts"], ['copy-unprocessed']);
	gulp.watch(dirSrc + "/../**/*.js", ['scripts', "copy-node-modules"]);
	gulp.watch([dirSrc + "/../**/*.png", dirSrc + "/../**/*.gif", dirSrc + "/../**/*.jpg"], ['images']);
	gulp.watch(dirSrc + "/../**/*.less", ['less-css-minify']);
});

/**
 * starts the server which watches files changes
 */
gulp.task('server', ['watch'], function () {
	server.listen(config.lr.port, function (err) {
		if (err) return console.log(err);
	});
});

