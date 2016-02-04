var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var nunjucksConfig = {
  autoescape: false,
  lstripBlocks: true,
  trimBlocks: true,
  watch: false
}

gulp.task('default', function () {
  nunjucksRender.nunjucks.configure(['templates/'], nunjucksConfig);

  gulp.src('src/*.html')
    .pipe(nunjucksRender())
    .pipe(gulp.dest('build'));

  gulp.src('src/css/*.css')
    .pipe(gulp.dest('build/css'));
});

var tar = require('gulp-tar');
var gzip = require('gulp-gzip');

gulp.task('archive', function() {
  gulp.src('build/**/*')
    .pipe(tar('examples.tar'))
    .pipe(gzip())
    .pipe(gulp.dest('.'));
});
