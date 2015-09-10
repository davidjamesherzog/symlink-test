var gulp = require('gulp'),
    minimist = require('minimist'),
    minifyCSS = require('gulp-minify-css'),
    //tasks = requireDir('./gulp/tasks'),
    config = require('./config')(),
    $ = require('gulp-load-plugins')({lazy: true, rename: {'gulp-minify-css': 'minify'}}),
    open = require('open');
    
// default
gulp.task('default', ['help']);

// help
gulp.task('help', $.taskListing);

gulp.task('create:symlinks', function () {
  return gulp.src(config.symlinks.src)
    .pipe($.symlink(config.symlinks.dest, {force: true}));
});

//Build Styles
gulp.task('build:styles', function () {
  gulp.src(config.sass.main)
      .pipe($.sourcemaps.init())
      .pipe($.sass({includePaths: config.sass.src}).on('error', $.sass.logError))
      //.pipe(minifyCSS())
      .pipe($.rename(config.sass.name))
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest(config.sass.dest));
});

gulp.task('watch:sass', function () {
  gulp.watch(config.sass.main, ['build:styles']);
});

gulp.task('cowbell', function () {
  process.stdout.write('\u0007');
  open(config.cowbell);
});

gulp.task('cowbell:more', function () {
  for (var i = 0; i < 3; i++) {
    setTimeout(function (i) {
      process.stdout.write('\u0007');
    }, 500 * i, i);
  }
  open(config.cowbell);
});