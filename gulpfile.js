var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('default', function () {
  nunjucksRender.nunjucks.configure(['templates/'], { watch: false, autoescape: false });

  gulp.src('src/*.html')
    .pipe(nunjucksRender())
    .pipe(gulp.dest('build'));

  gulp.src('src/css/*.css')
    .pipe(gulp.dest('build/css'));
});
