/**
 * @file Tâche pour compresser toutes les dépendances de l'application avec Browserify et rendre le fichier {BUILD_PATH}/js/app.min.js avec sa sourcemap
 * @author Mikael Boutin
 * @version 0.0.1
 */
import gulp from 'gulp';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import babelify from 'babelify';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';

import consts from '../consts';
import settings from '../settings';

const { BUILD_PATH } = consts;
const { bundler, browserSync } = settings;

/**
 * Tâche pour créer le bundle app.min.js avec Browserify pour le rendu côté client
 * @function
 * @return {object} bundler Pour Watchify
 */
let bundleTask = () => {

  gulp.task('bundle', () => {
    return bundler.bundle()
      .on('error', console.log)
      .pipe(source('app.min.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      //.pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest( BUILD_PATH + '/js' ));
  });

  gulp.task('bundle-and-refresh', ['bundle'], () => {
    gulp.start('nodemon-restart');
  });

};

export default bundleTask;