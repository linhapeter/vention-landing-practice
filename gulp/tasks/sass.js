"use strict";
const sass = require("gulp-sass")(require("sass"));
module.exports = function () {
  $.gulp.task("sass", function () {
    return $.gulp
      .src("./src/**/**.scss")
      .pipe($.gp.sourcemaps.init())
      .pipe(sass())
      .on("error", $.gp.notify.onError({ title: "Style" }))
      .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + "/assets/css"))
      .pipe($.browserSync.stream());
  });
};
