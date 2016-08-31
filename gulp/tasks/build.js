/**
 * @file Tâche construire l'application, toutes les tâche à la construction du dossier {BUILD_PATH}
 * @author Mikael Boutin
 * @version 0.0.1
 */
import gulp from 'gulp';
import settings from '../settings';

const { bundler, browserSync } = settings;

/**
 * Tâche construire l'application, toutes les tâche à la construction du dossier {BUILD_PATH}
 */
let buildTask = () => {

  gulp.task('build', ['bundle', 'scripts', 'sass', 'images'], () => {
    bundler.close();
  });

  gulp.task('build-and-watch', ['bundle', 'scripts', 'sass', 'images']);

  gulp.task('build-and-refresh', ['bundle', 'scripts', 'sass', 'images'], () => {
    gulp.start('nodemon-restart');
  });

};

export default buildTask;