var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');

gulp.task('sass', gulp.series( function() {
    return gulp.src(['node_modules/bulma/bulma.sass', 'src/assets/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('public'));
}));

gulp.task('watch', gulp.series( function() {
    gulp.watch(['node_modules/bulma/bulma.sass', 'src/assets/scss/*.scss']), gulp.parallel(['sass']);
}))

gulp.task('default', gulp.series(['sass','watch']));