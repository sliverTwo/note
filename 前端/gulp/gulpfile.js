var gulp = require('gulp');
var babel = require('gulp-babel');
var gulpCssMin = require('gulp-clean-css');
var gulpJsMin = require('gulp-uglify');
var gulpHtmlMin = require('gulp-htmlmin');
var watchPath = require('gulp-watch-path');
var fileinclude = require('gulp-file-include');
var gutil = require('gulp-util')

function packageJs(path = 'app/src/**/*.js') {
	path = path.replace(/\\/g, '/');
	gutil.log('打包js,源文件:' + path);
	let dest = 'app/dist';
	if (!path.includes('app/src/**/*.')) {
		let arr = path.split('/');
		let filename = arr[arr.length - 1];
		dest = path.replace(filename, '').replace('app/src/', 'app/dist/');
	}
	gulp.src(path)
		.pipe(babel({
			presets: [
				['env', {
					// "targets": "> 0.25%, not dead"
					"targets": {
						'Android Browser': 4,
					}
				}]
			]
		}))
		.pipe(gulpJsMin())
		.pipe(gulp.dest(dest));
}

function packageCss(path = 'app/src/**/*.css') {
	path = path.replace(/\\/g, '/');
	gutil.log('打包css,源文件:' + path);
	let dest = 'app/dist';
	if (!path.includes('app/src/**/*.')) {
		let arr = path.split('/');
		let filename = arr[arr.length - 1];
		dest = path.replace(filename, '').replace('app/src/', 'app/dist/');
	}
	gulp.src(path)
		.pipe(gulpCssMin())
		.pipe(gulp.dest(dest));
}

function packageHtml(path = 'app/src/**/*.html') {
	path = path.replace(/\\/g, '/');
	gutil.log('打包html,源文件:' + path);
	let dest = 'app/dist';
	if (!path.includes('app/src/**/*.')) {
		let arr = path.split('/');
		let filename = arr[arr.length - 1];
		dest = path.replace(filename, '').replace('app/src/', 'app/dist/');
	}
	var options = {
		collapseWhitespace: true,
		collapseBooleanAttributes: true,
		removeComments: true,
		removeEmptyAttributes: true,
		removeScriptTypeAttributes: true,
		removeStyleLinkTypeAttributes: true,
		minifyJS: true,
		minifyCSS: true
	};
	gulp.src([path, '!page/include/**.html'])
		.pipe(fileinclude({
			prefix: '#',
			basepath: '@file'
		}))
		.pipe(gulpHtmlMin(options))
		.pipe(gulp.dest(dest));
}
gulp.task('packageJs', (cb) => {
	packageJs();
	cb();
})

gulp.task('packageCss', (cb) => {
	packageCss();
	cb();
})

gulp.task('packageHtml', (cb) => {
	packageHtml();
	cb();
})
gulp.task('watchResource', function() {
	gulp.watch('app/src/js/**/*.js', {
		delay: 1
	}).on('all', (stats, path) => {
		packageJs(path);
	});
	gulp.watch('app/src/**/*.html', {
		delay: 1
	}).on('all', (status, path) => {
		packageHtml(path);
	});
	gulp.watch('app/src/**/*.css', {
		delay: 1
	}).on('all', (status, path) => {
		packageCss(path);
	});;
})

gulp.task('default', gulp.parallel('watchResource', (cb) => {
	cb();
}));

gulp.task('package', (cb) => {
	packageCss();
	packageJs();
	packageHtml();
	cb();
});
