var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var jade = require('gulp-jade');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');
var atImport = require('postcss-import');
var cssnano = require('cssnano');
var rename = require("gulp-rename");
var browserSync = require('browser-sync');
var lost = require('lost');
var clearfix = require('postcss-clearfix');


// 合併css
gulp.task('concat', function() {
    return gulp.src('./css/common/*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./css'));
});

//同步瀏覽器
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./",
      directory: true
    }
  });
});

//PUG
gulp.task('html', function() {
  gulp.src('./src/jade/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.reload({stream:true}));
});

// CSS 整理輸出
gulp.task('css', function () {
  var processors = [
  atImport,
  precss,
  cssnext,
  cssnano({zindex: false}),
  lost,
  clearfix,
  autoprefixer({browsers: ['last 1 version']}),
  ];
  var csscommon =  [gulp.src('./src/css/common/main.css')
                    .pipe(postcss(processors))
                    .pipe(concat('common.css'))
                    .pipe(gulp.dest('./css'))
                    .pipe(browserSync.reload({stream:true}))];
  var csscustom = [gulp.src('./src/css/*.css')
                   .pipe(postcss(processors))
                   .pipe(gulp.dest('./css'))
                   .pipe(browserSync.reload({stream:true}))];
  return [csscommon, csscustom];
});


//js 處理
gulp.task('js', function() {
  var jscommon = [gulp.src('./src/js/common/*.js')
                  .pipe(concat('common.min.js'))
                  .pipe(uglify())
                  .pipe(gulp.dest('./js/common'))
                  .pipe(browserSync.reload({stream:true}))];
  var jsplugin = [gulp.src('./src/js/plugin/*.js')
                  .pipe(uglify())
                  .pipe(gulp.dest('./js/plugin'))
                  .pipe(browserSync.reload({stream:true}))];
  var jscustom = [gulp.src('./src/js/*.js')
                  .pipe(uglify())
                  .pipe(gulp.dest('./js'))
                  .pipe(browserSync.reload({stream:true}))];

  return [jscommon, jsplugin, jscustom];
});

// 監控

gulp.task('watch', function () {
    gulp.watch(['./src/js/common/*.js','./src/js/*.js'], ['js']);
    gulp.watch(['./src/css/common/*.css','./src/css/*.css', './src/css/prototype/*.css'], ['css']);
    gulp.watch(['./src/jade/**/*.jade'], ['html']);
    gulp.watch("./css/*.*").on('change', browserSync.reload);
    gulp.watch("./js/*.*").on('change', browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);

});



gulp.task('start', ['concat','html','css','js','browser-sync', 'watch']);