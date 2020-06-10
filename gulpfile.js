let gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  del = require('del'),
  autoprefixer = require('gulp-autoprefixer');
cleanCSS = require('gulp-clean-css');


gulp.task('clean', async function () {
  del.sync('build')
})

gulp.task('scss', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 8 versions']
    }))
    .pipe(gulp.dest('css'))
});

gulp.task('css', function () {
  return gulp.src('css/**/*.css')
    .pipe(concat('styles.min.css'))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('build/css'))
});

gulp.task('js', function () {
  return gulp.src([
    'js/jquery-3.5.1.min.js',
    'js/slick.min.js',
    'js/script.js'
  ])
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
});

gulp.task('export', function () {
  let buildHtml = gulp.src('*.html')
    .pipe(gulp.dest('build'));

  let BuildFonts = gulp.src('fonts/**/*.*')
    .pipe(gulp.dest('build/fonts'));

  let BuildImg = gulp.src('img/**/*.*')
    .pipe(gulp.dest('build/img'));

  let BuildSvg = gulp.src('svg/**/*.*')
    .pipe(gulp.dest('build/svg'));

  let BuildIco = gulp.src('*.ico')
    .pipe(gulp.dest('build'));

  let BuildPng = gulp.src('*.png')
    .pipe(gulp.dest('build'));
    

  let BuildSvgIco = gulp.src('*.svg')
    .pipe(gulp.dest('build'));

  let BuildXml = gulp.src('*.xml')
    .pipe(gulp.dest('build'));

  return gulp.src('*.webmanifest')
    .pipe(gulp.dest('build'));
});

gulp.task('default', gulp.series('clean', 'scss', 'css', 'js', 'export'))