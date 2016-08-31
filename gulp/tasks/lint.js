/**
 * @file Tâche qui regarde la syntaxe du code
 * @author Mikael Boutin
 * @version 0.0.1
 */
import gulp from 'gulp';
import eslint from 'gulp-eslint';
import consts from '../consts';

const { ESLINT_CONFIGS } = consts;

/**
 * Tâche qui examine la syntaxe du code
 * @function
 */
let lintTask = () => {
  gulp.task('lint', function (cb) {
    return gulp.src(['./src/**/*.js'])
      .pipe(eslint(ESLINT_CONFIGS))
      .pipe(eslint.format())
      .pipe(eslint.failOnError());
  });
};

export default lintTask;