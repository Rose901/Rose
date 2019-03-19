var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var fileinclude = require('gulp-file-include');
var concat = require('gulp-concat');

var dist = './dist';
var src = {
    all_scss: 'src/scss/**/*.scss',
    scss: 'src/scss/main.scss',
    fonts: 'src/scss/fonts/*.*',
    js: 'src/js/*.js',
    maps: '',
    css: 'css',
    html: 'src/html/*.html',
    all_html: 'src/html/**/*.html'
};

var lib_paths = [
    'node_modules/bootstrap/scss'
];

// Browser sync
gulp.task('watch', ['sass'], function () {

    browserSync.init({
        server: dist
    });

    gulp.watch(src.all_scss, ['sass']);
    gulp.watch(src.js, ['js']);
    gulp.watch(src.all_html, ['fileinclude']);
});

// Compile sass into CSS
gulp.task('sass', function () {
    return gulp.src(src.scss)
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: lib_paths
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write(src.maps))
        .pipe(gulp.dest(dist))
        .pipe(reload({ stream: true }));
});

gulp.task('js', function () {
    return gulp.src([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/popper.js/dist/umd/popper.min.js',
        './node_modules/bootstrap/dist/js/bootstrap.min.js',
        './node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
        './src/js/site.js',
    ])
        //.pipe(uglify())
        .pipe(concat('site.min.js'))
        .pipe(gulp.dest(dist))
        .pipe(browserSync.stream());
});

gulp.task('fonts', function () {
    return gulp.src(src.fonts).pipe(gulp.dest(dist + '/fonts'))
});

// HTML
gulp.task('fileinclude', function () {
    gulp.src([src.html])
        .pipe(fileinclude({
            prefix: '@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(dist))
        .pipe(reload({ stream: true }))
});

gulp.task('default', ['sass', 'js', 'fileinclude', 'fonts', 'watch']);
gulp.task('styles', ['sass']);