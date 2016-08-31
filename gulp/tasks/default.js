/**
 * @file Tâche par défaut de Gulp - Compresse l'application et regarde pour les changements
 * @author Mikael Boutin
 * @version 0.0.1
 */
import gulp from 'gulp';

/**
 * Tâche Tâche par défaut de Gulp - Compresse l'application et regarde pour les changements
 * @function
 */
let defaultTask = () => {
  gulp.task('default', ['build', 'watch']);
};

export default defaultTask;