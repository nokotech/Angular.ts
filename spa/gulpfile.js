const babelify = require('babelify')
const browserify = require('browserify')
const buffer = require('vinyl-buffer')
const source = require('vinyl-source-stream')
const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify')
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create()

gulp.task('es6', function () {
    browserify({entries: './src/es6/app.es6', debug: true})
        .transform(babelify)
        .bundle()
        .on('error', err => console.log('Error : ' + err.message))
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dest/js'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('sass', function(){
    gulp.src('./src/sass/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./dest/css'));
  });

gulp.task('copy', () => {
    gulp.src('./src/index.html').pipe(gulp.dest("./dest"));
    gulp.src('./src/view/**/*.html').pipe(gulp.dest("./dest/pages"));
    gulp.src('./src/lib/js/**/*').pipe(gulp.dest("./dest/js"));
    gulp.src('./src/lib/css/**/*').pipe(gulp.dest("./dest/css"));
    gulp.src('./src/lib/fonts/**/*').pipe(gulp.dest("./dest/fonts"));
});

gulp.task('watch', () => {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
    gulp.watch('./src/es6/**/*.es6', ['es6']);
    gulp.watch('./src/**/*', ['copy']);
});

gulp.task('default', ['es6', 'sass', 'copy', 'watch']);
