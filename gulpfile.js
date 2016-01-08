var gulp = require("gulp");
var jade = require("gulp-jade");
var sass = require("gulp-sass");
var babel = require("gulp-babel");
var sourcemaps = require("gulp-sourcemaps");
var webpack = require("gulp-webpack");
var webpackConfig = require("./webpack.config.js")


// should convert all es6 and jsx code to es5
gulp.task("babel", function(){
  gulp.src("src/public/javascripts/es6/**/*.es6")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./src/public/javascripts/es5/"));
})
// should convert all es6 and jsx code in _src javascripts folder
gulp.task("webpack", ["babel"], function(){
  gulp.src("src/public/javascripts/es5/entry.js")
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest("dist/public/javascripts"));
})
// should convert main sass code in _src styles folder to one main css file
gulp.task("sass", ["webpack"],function(){
  gulp.src("src/public/styles/main.scss",{"base":"src"})
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist/"));
})
// Compile index jade file
gulp.task("jade", ["sass"],function(){
  gulp.src("src/public/jade/index.jade",{base: "./src/public/jade"})
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest("./"));
})

gulp.task("default", ["babel","webpack","sass","jade"])
