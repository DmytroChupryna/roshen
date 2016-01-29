
var gulp = require('gulp'),
    concatCSS =require('gulp-concat-css'),
    prefixer =require('gulp-autoprefixer'),
    live =require('gulp-livereload'),
    connect =require('gulp-connect'),
    notify =require('gulp-notify'),
    minifyCss = require('gulp-minify-css'),
    spritesmith = require('gulp.spritesmith'),
    imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');

gulp.task('connect',function(){
    connect.server({
        root:'www'
    })
});
//gulp.task('sprite', function () {
//    var spriteData = gulp.src('app/images/icon/*.png')
//        .pipe(spritesmith({
//            imgName: 'sprite.png',
//            cssName: 'sprite.css',
//            padding: 10
//        }));
//    return spriteData.pipe(gulp.dest('sprite/images'));
//});
//gulp.task('sass', function () {
//    gulp.src('app/css/*.sass')
//        .pipe(sass.sync().on('error', sass.logError))
//        .pipe(gulp.dest('app/css'));
//});
//gulp.task('css', function() {
//    gulp.src('app/css/*.css')
//        .pipe(concatCSS('style.css'))
//        .pipe(prefixer('last 4 versions','>1%','ie 9'))
//        //.pipe(minifyCss({compatibility: 'ie9'}))
//        .pipe(gulp.dest('dist/css'))
//        .pipe(notify('Ты крут!'))
//        .pipe(connect.reload());
//});

//gulp.task("html",function(){
//    gulp.src('app/*.html')
//        .pipe(connect.reload())
//});
//
//gulp.task('compress', function() {
//    gulp.src('app/images/*')
//        .pipe(imagemin())
//        .pipe(gulp.dest('dist/images'))
//});

//gulp.task("watch",function(){
//    gulp.watch('app/css/*.css',['css']);
//    gulp.watch('app/*.html',['html']);
//    gulp.watch('app/css/*.sass', ['sass']);
//    gulp.watch('app/images/*', ['compress']);
//});

gulp.task("default",['connect']);