const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
    return gulp.src('final-project/styles.scss') // Source SCSS file
        .pipe(sass().on('error', sass.logError)) // Compile SCSS to CSS
        .pipe(gulp.dest('final-project/dist/css')); // Destination folder for CSS files
}

exports.compileSass = compileSass;

// Create a default task that runs the compileSass task
exports.default = compileSass;
