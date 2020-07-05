const gulp = require("gulp");

let browserSync = require("browser-sync").create();

function sync(done) {
  browserSync.init({
    server: {
      baseDir: "./",
    },
    port: 3030,
  });

  done();
}

function browserReload(done) {
  browserSync.reload();
  done();
}

function watchFiles() {
  gulp.watch("./**/*.html", browserReload);
}

gulp.task("default", gulp.parallel(watchFiles, sync));
// gulp.task(sync);
