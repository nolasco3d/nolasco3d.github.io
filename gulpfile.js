// Imports functions from Gulp
const { 
    task,
    series,
    parallel,
    src,
    watch,
    dest
} = require('gulp');

// Variables and Loaders
let sass        = require('gulp-sass'),
    urlAdjust   = require('gulp-css-url-adjuster'),
    // babel       = require('gulp-babel'),
    BrowserSync = require('browser-sync').create(),
    reload      = BrowserSync.reload
    // rename  = require('gulp-rename'),
;

// Compile/Process Sass
function compile_sass() {
    return src(['node_modules/bulma/bulma.sass', 'src/assets/scss/*.scss'])
    .pipe(sass())
    .pipe(urlAdjust({
        prependRelative: '../images/'
    }))
    .pipe(dest('public/assets/css'))
    .pipe(BrowserSync.stream());
}

// Create Server and Live Reload
function watch_files() {
    BrowserSync.init({
        server: {
            baseDir: './public'
        }
    });
    
    // Watch SASS/SCSS files and Reload
    watch([
        'node_modules/bulma/bulma.sass',
         'src/assets/scss/*.scss'
        ], compile_sass);
    // Watch HTML files and Reload
    watch('./public/*.html').on('change', reload);
}

// Define default task
task('default', series(compile_sass, watch_files));