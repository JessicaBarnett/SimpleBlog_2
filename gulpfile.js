/*
  to set up in a new project:
    npm init
      //will run you through steps of creating a package.json

    npm install gulp --save-dev
      //will add gulp to said package.json

    npm install package-name package-name package-name --save-dev
      //add each of your required packages to package.json

*/

var gulp = require('gulp');

var sass = require('gulp-sass');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var express = require('express');
var nodemon = require('gulp-nodemon');
// var to5 = require('gulp-6to5');


/**** Front-end Tasks ****/

var assetDir = './assets/';

gulp.task('sass', function () {
  gulp.src(assetDir+'stylesheets/' + 'style.scss')
  .pipe(sass({errLogToConsole: true}))
  .pipe(gulp.dest(assetDir+'stylesheets/'));
});


gulp.task('templates', function(){
  gulp.src(assetDir+'/templates/*.handlebars')
  .pipe(handlebars())
  .pipe(wrap('Handlebars.template(<%= contents %>)'))
  .pipe(declare({  //this gives the template a name I can access in the js
    namespace: 'App.templates',
    noRedeclare: true, // Avoid duplicate declarations
  }))
  .pipe(concat('templates.js'))
  .pipe(gulp.dest(assetDir+'scripts/'));
});

/**** Watch tasks ****/

gulp.task('sassWatch', ['sass'], function() {
  gulp.watch(assetDir+'stylesheets/*.scss', ['sass']);
      // .pipe(sass({errLogToConsole: true}));
});


gulp.task('templateWatch', ['templates'], function() {
  gulp.watch(assetDir+'templates/*.handlebars', ['templates']);
      // .pipe(templates({errLogToConsole: true}));
});


/**** Back-end tasks ****/

// gulp.task('express', function() {
//   var app = express();
//   app.use(express.static(__dirname));
//   app.listen(4000);
// });

gulp.task('server', function() {
  // Start the server at the beginning of the task
  nodemon({ script: 'server.js' })
    .on('restart', function () {
      console.log('restarted!');
    });
});


/**** Default ****/


gulp.task('default', ['sass', 'templates', 'server', /*'express',*/ 'sassWatch', 'templateWatch'], function() {

  // // watch for Sass changes
  // gulp.watch('./stylesheets/*.scss', function() {
  //   gulp.run('sass');
  // });
  //
  // // watch for Template changes
  // gulp.watch('./templates/*.handlebars', function() {
  //   gulp.run('templates');
  // });


});
