var gulp = require('gulp'),
	connect = require('gulp-connect'),
	opn = require('opn');

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true,
    port: 8888
  });
  opn('http://localhost:8888');
});

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});
gulp.task('css', function () {
  gulp.src('./app/css/*.html')
    .pipe(connect.reload());
});
gulp.task('js', function () {
  gulp.src('./app/js/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/css/*.html'], ['css']);
  gulp.watch(['./app/js/*.html'], ['js']);
});

gulp.task('default', ['connect', 'watch']);