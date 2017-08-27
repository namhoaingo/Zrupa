var gulp = require('gulp');
var liveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var concatCss = require('gulp-concat-css');

// live server task
gulp.task('live-server', function(){
	var server = new liveServer('server/main.js');
	server.start();
})

gulp.task('bundle', function(){
	return browserify({
		entries:'app/main.jsx',
		debug:true
	})
	.transform(reactify)
	.bundle()
	.pipe(source('app.js'))
	.pipe(gulp.dest('./temp'));
})

gulp.task('css', function(){
	return gulp.src('app/css/*.css')
			.pipe(concatCss('main.css'))
			.pipe(gulp.dest('./temp/css'))
})

gulp.task('default', ['bundle','css','live-server'], function(){
	browserSync.init(null, {
		proxy:"http://localhost:8686",
		port:8687
	});
})
