'use strict';
var gulp = require('gulp'),
    eslint = require('gulp-eslint');

gulp.task('lint', function () {
    return gulp.src(['javascript/*.js'])
        .pipe(eslint())
        .pipe(eslint.failOnError())
        .pipe(eslint.formatEach());
});