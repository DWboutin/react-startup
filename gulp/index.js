/**
 * @file Importe toutes les tâches gulp pour les envoyer au gulpfile.babel.js
 * @author Mikael Boutin
 * @version 0.0.1
 */
import bundleTask from './tasks/bundle';
import imagesTask from './tasks/images';
import browserSyncTask from './tasks/browserSync';
import lintTask from './tasks/lint';
import sassTask from './tasks/sass';
import scriptsTask from './tasks/scripts';
import buildTask from './tasks/build';
import watchTask from './tasks/watch';
import serveTask from './tasks/serve';
import defaultTask from './tasks/default';

/**
 * Un objet ayant toutes les tâches de Gulp. Dans le gulfile, seulement executer les tâche nécessaire au projet
 * @exports tasks
 * @prop bundleTask {function} Initialise les tâche 'bundle', 'bundle-and-refresh' -> Compresse toutes les dépendances de l'application avec Browserify pour rendre le fichier {BUILD_PATH}/js/app.min.js avec sa sourcemap
 * @prop imagesTask {function} Initialise la tâche 'images' -> Optimisation des images dans {BUILD_PATH}/img/**.*
 * @prop browserSyncTask {function} Initialise les tâche 'browser-sync', 'nodemon' et 'nodemon-restart' -> Execute le fichier server et radraìchi le browser et le serveur au besoin
 * @prop lintTask {function} Initialise la tâche 'lint' -> Examine la syntaxe du code
 * @prop buildTask {function} Initialise la tâche 'build' -> Construit l'application dans le dossier {BUILD_PATH}
 * @prop sassTask {function} Initialise la tâche 'sass' -> Converti le .scss en .css en compressant
 * @prop scriptsTask {function} Initialise la tâche 'scripts' -> Concatene et compresse les fichiers JS dans assets/js
 * @prop watchTask {function} Initialise la tâche 'watch' -> Observe les changements dans les fichiers
 * @prop serveTask {function} Initialise la tâche 'serve' -> Construit examine les changements et ouvre l'application dans le browser
 * @prop defaultTask {function} Initialise la tâche 'default' -> Tâche par défaut qui s'execute avec la commande '$ gulp' - Compresse l'application et regarde pour les changements
 */
export default {
  bundleTask: bundleTask,
  imagesTask: imagesTask,
  browserSyncTask: browserSyncTask,
  lintTask: lintTask,
  sassTask: sassTask,
  scriptsTask: scriptsTask,
  buildTask: buildTask,
  watchTask: watchTask,
  serveTask: serveTask,
  defaultTask: defaultTask,
};