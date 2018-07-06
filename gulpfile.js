var gulp = require('gulp');
var babel = require('gulp-babel');
var minify = require('gulp-minify');
var sm = require('gulp-sourcemaps');


gulp.task('babelify', () => {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('minify', () => {
    return gulp.src('build/*.js')
        .pipe(sm.init())
        .pipe(minify())
        .pipe(sm.write())
        .pipe(gulp.dest('build/min'));
});

gulp.task('default', ['babelify', 'minify']);

var watcher = gulp.watch(['src/**/*.js', 'build/js/*.js'], ['babelify', 'minify']);
watcher.on('change', event => {
    console.info('Fixin Things....');
});