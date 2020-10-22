const {
    task,
    series,
    parallel,
    src,
    watch,
    dest
} = require('gulp');

let sass        = require('gulp-sass'),
    urlAdjust   = require('gulp-css-url-adjuster'),
    BrowserSync = require('browser-sync').create(),
    reload      = BrowserSync.reload,
    // fonts_path  = 'public/assets/fonts',
    css_path  = 'docs/assets/css'
;

// Compile/process SCSS
function compile_sass() {
    return src(['src/assets/scss/*.scss'])
    .pipe(sass())
    .pipe(urlAdjust({
        prependRelative: '../images/'
    }))
    .pipe(dest(css_path))
    .pipe(BrowserSync.stream());
}


function watch_files() {
    BrowserSync.init({
        server: {
            baseDir: './docs'
        }
    });

    // Watch SCSS files and Reload
    watch('src/assets/scss/**/*.scss', compile_sass);

    // Watch HTML files and Reload
    watch('./docs/*.html').on('change', reload);
}

// Default task
task('default', series(compile_sass, watch_files));
