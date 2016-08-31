/**
 * @file Tâche pour convertir le .scss en .css en compressant
 * @author Mikael Boutin
 * @version 0.0.1
 */
import gulp from 'gulp';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import consts from '../consts';
import settings from '../settings';

const { SASS_ENTRY_FILE, BUILD_PATH } = consts;
let { browserSync } = settings;

/**
 * Tâche pour convertir le .scss en .css en compressant
 */
let sassTask = () => {

  gulp.task('sass', () => {
    return gulp.src(SASS_ENTRY_FILE)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sourcemaps.write('./'))
        .pipe(plumber.stop())
        .pipe(gulp.dest(BUILD_PATH + '/css'));
  });

  gulp.task('sass-and-refresh', ['sass'], () => {
    browserSync.reload();
  });

};

export default sassTask;