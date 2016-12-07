'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('lint', function(){
 return gulp.src(['**/*.js', '!node_module'])
 .pipe(eslint())
 .pipe(eslint.format())
 .pipe(eslint.failAfterError());
});

gulp.task('test', function(){
 gulp.src('./test/*-test.js', {read: false})
 .pipe(mocha({reporter: 'spec'}));
});

gulp.task('dev', function(){
 gulp.watch(['**/*.js', '!node_module'],['lint', 'test']);
});

gulp.task('default', ['dev']);
