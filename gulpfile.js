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
    reload      = BrowserSync.reload,
    fonts_path  = 'public/assets/fonts',
    // images_path = 'public/assets/images',
    css_path    = 'public/assets/css'
    // rename  = require('gulp-rename'),
;

// Compile/Process Sass
function compile_sass() {
    return src(['src/assets/scss/*.scss'])
    .pipe(sass())
    .pipe(urlAdjust({
        prependRelative: '../images/'
    }))
    .pipe(dest(css_path))
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
    watch('src/assets/scss/**/*.scss', compile_sass);
    // Watch HTML files and Reload
    watch('./public/*.html').on('change', reload);
}


// Testing FontAwesome copy
// function fontAwesome(done) {
//     // Files to public fulder
//     src(['node_modules/@fortawesome/fontawesome-free/webfonts'])
//     .pipe(dest(fonts_path + '/webfonts'));
    
//     // Files to src
//     src([
//         'node_modules/@fortawesome/fontawesome-free/scss/**/*.scss'
//     ])
//     .pipe(dest('src/assets/scss/fontawesome'));

//     done();
// }

// Define default task
task('default', series( compile_sass, watch_files));