/**
 * @file Tâche par défaut de Gulp
 * @author Mikael Boutin
 * @version 0.0.1
 */
import gulp from 'gulp';
import browserSyncTask from './browserSync'

/**
 * Tâche qui construit examine les changements et ouvre l'application dans le browser
 * @function
 */
let serveTask = () => {
  gulp.task('serve', ['build-and-watch', 'watch'], () => {
    browserSyncTask(true);
    gulp.start('browser-sync');
  });
};

export default serveTask;