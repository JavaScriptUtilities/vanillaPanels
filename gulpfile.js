const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


// Compile SCSS to CSS
function compileSCSS() {
    return gulp.src('./scss/**/*.scss') // Source SCSS files
        .pipe(sass().on('error', sass.logError)) // Compile SCSS to CSS
        .pipe(gulp.dest('./css')); // Output to ./css directory
}

// Watch for changes in SCSS files
function watchFiles() {
    gulp.watch('./scss/**/*.scss', compileSCSS);
}

// Define default task
exports.default = gulp.series(compileSCSS, watchFiles);
