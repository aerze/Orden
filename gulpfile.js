var gulp = require("gulp");
var jade = require("gulp-jade");
var sass = require("gulp-sass");
var babel = require("gulp-babel");
var sourcemaps = require("gulp-sourcemaps");

// should convert all es6 and jsx code in _src javascripts folder
gulp.task("babel", function(){
  gulp.src("_src/public/javascripts/**/*.es6",{"base":"_src"})
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("_dist/"));
})
// should convert main sass code in _src styles folder to one main css file
gulp.task("sass", ["babel"],function(){
  gulp.src("_src/public/styles/main.scss",{"base":"_src"})
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("_dist/"));
})

gulp.task("default", ["babel","sass"])
