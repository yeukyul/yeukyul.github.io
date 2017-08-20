var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify');


gulp.task('sass', function() {
   gulp.src('css/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('css'));
});

gulp.task('concat_css', function() {
   gulp.src('css/*.css')
	.pipe(concat('all.css'))
  	.pipe(cleanCSS())
  	.pipe(gulp.dest('.'));
});

gulp.task('default', ['sass', 'concat_css'])
