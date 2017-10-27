var gulp = require("gulp");
var concat = require("gulp-concat");

// Set variables so we can use them for vendor directories etc. Note the trailing slash
var VENDOR_DIR = "node_modules/";
var SRC_DIR = "";
var BUILD_DIR = "";

///////////////////////////////////////////////////////////////
////               Begin JavaScript Tasks                  ////
///////////////////////////////////////////////////////////////
gulp.task("vendor", function () {
    "use strict";
    return gulp.src([
        VENDOR_DIR + "angular/angular.js",
        VENDOR_DIR + "angular-route/angular-route.js"
    ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(BUILD_DIR));
});
gulp.task("js", function () {
    "use strict";
    return gulp.src([
        SRC_DIR + "appjs/my-app.js",
        SRC_DIR + "appjs/config.js",
        SRC_DIR + "appjs/**/*.js"
    ])
        .pipe(concat('application.js'))
        .pipe(gulp.dest(BUILD_DIR));
});

gulp.task("watch", function () {
    "use strict";
    gulp.watch([SRC_DIR + "appjs/**/*.js"], ["js"]);
});

// Run all build steps and watch for changes
gulp.task("default", ["vendor", "js", "watch"]);
