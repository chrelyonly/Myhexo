// 获取 gulp
var gulp = require('gulp')
// 获取 uglify 模块
var imagemin = require('gulp-imagemin')
// 压缩图片任务
gulp.task('images', function(cb) {
    // 找到图片
    gulp.src('public/src/img/*')
        .pipe(imagemin({
            progressive: true,
        }))
        .pipe(gulp.dest('public/src/img/'))
        cb()
})
// 默认任务 gulp 4.0 适用的方式
gulp.task('default', gulp.parallel('images'
 //build the website
));