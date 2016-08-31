/**
 * @file Tâche pour l'optimisation des images
 * @author Mikael Boutin
 * @version 0.0.1
 */
import gulp from 'gulp';
import imageop from 'gulp-image-optimization';

/**
 * Tâche pour l'optimisation des images
 * @function
 */
let imagesTask = () => {
  gulp.task('images', function(cb) {
    gulp.src('./src/assets/img/**')
      .pipe( imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
      }))
      .pipe(gulp.dest('./public/img/'))
      .on('end', cb)
      .on('error', cb);
  });
};

export default imagesTask;