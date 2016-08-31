/**
 * @file Tâche pour observer les changements dans les fichiers
 * @author Mikael Boutin
 * @version 0.0.1
 */
import gulp from 'gulp';
import consts from '../consts';

const { WATCH_SCRIPTS } = consts;
const { BUNDLE, SCRIPTS, SASS } = WATCH_SCRIPTS;
/**
 * Tâche pour observer les changements dans les fichiers
 */
let watchTask = () => {

  gulp.task('watch', () => {
    gulp.watch( BUNDLE, ['bundle-and-refresh']);
    gulp.watch( SCRIPTS, ['scripts-and-refresh']);
    gulp.watch( SASS, ['sass-and-refresh']);
  });

};

export default watchTask;