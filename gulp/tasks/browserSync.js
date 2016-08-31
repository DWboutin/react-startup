/**
 * @file Tâche pour executer le serveur Express et rafraîchir le browser lorsqu'il y a des changements
 * @author Mikael Boutin
 * @version 0.0.1
 */
import gulp from 'gulp';

import consts from '../consts';
import settings from '../settings';

const { BROWSER_SYNC_RELOAD_DELAY, EXPRESS_SERVER_ENTRY, NODEMON_WATCH_FILES, BROWSER_SYNC_PROXY, BROWSER_SYNC_PORT, BROWSER_SYNC_BROWSERS } = consts;
let { browserSync, nodemon } = settings;

/**
 * Tâche pour executer le serveur Express et rafraîchir le browser lorsqu'il y a des changements
 * @param openBrowser {boolean} Définit si le browser s'ouvre automatiquement (default: false)
 */
let browserSyncTask = (openBrowser = false) => {
  let nodemonInstance = undefined;

  gulp.task('nodemon', (cb) => {
    let called = false;

    nodemonInstance = nodemon({
      script: EXPRESS_SERVER_ENTRY,
      watch: NODEMON_WATCH_FILES,
    })
    .on('start', () => {
        /** On s'assure que start est appelé une seule fois */
        if(!called) {
          cb();
        }
        called = true;

    })
    .on('restart', () => {

      setTimeout(() => {
        browserSync.reload({
          stream: false
        });
      }, BROWSER_SYNC_RELOAD_DELAY)

    });

  });

  gulp.task('nodemon-restart', () => {
    if(nodemonInstance !== undefined){
      nodemonInstance.restart();
    }
  });

  gulp.task('browser-sync', ['nodemon'], () => {
    /** on attend qu'Express soit prêt */
    setTimeout(() => {
      browserSync({
        proxy: BROWSER_SYNC_PROXY,
        port: BROWSER_SYNC_PORT,
        browser: BROWSER_SYNC_BROWSERS,
        open: openBrowser
      });
    }, BROWSER_SYNC_RELOAD_DELAY);

  });

};

export default browserSyncTask;