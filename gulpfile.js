let gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync');
const { task } = require('gulp');

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({ stream: true }))

});
gulp.task('html', function() {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true }))
});
gulp.task('js', function() {
    return gulp.src('app/js/*.js')
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});
gulp.task('watch', function() {
    gulp.watch('app/scss/style.scss', gulp.parallel('sass'))
    gulp.watch('app/*.html', gulp.parallel('html'))
    gulp.watch('app/js/*.js', gulp.parallel('js'))
});