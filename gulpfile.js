var gulp = require('gulp');
var liveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var concatCss = require('gulp-concat-css');
var less = require('gulp-less');

var mocha = require('gulp-mocha');
var babel = require('babel-core/register');

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

gulp.task('less', function(){
		gulp.src('app/less/*.less')
		.pipe(less())
		.pipe(gulp.dest('./temp/css'))
})

gulp.task('default', ['bundle','css','live-server', 'less'], function(){
	browserSync.init(null, {
		proxy:"http://localhost:8686",
		port:8687
	});
})


gulp.task('mocha', function() {
    return gulp.src(['test/*.js'])
        .pipe(mocha({
            compilers: {
                js: babel
            }
        }));
});
