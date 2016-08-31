/**
 * @file Crée les settings de base pour les taches et les exporte
 * @author Mikael Boutin
 * @version 0.0.1
 */
import consts from './consts';
import browserify from 'browserify';
import browserSync from 'browser-sync';
import nodemon from 'gulp-nodemon';
import watchify from 'watchify';
import babelify from 'babelify';
import _ from 'lodash';

/** destructuring consts.js */
let { SRC_PATH, BUILD_PATH } = consts;

let watchifyConfig = {
  entries: [ SRC_PATH + '/client/app.js' ],
  debug: true
};

let bundler = watchify(browserify(_.assign({
  cache: {},
  packageCache: {}
}, watchify.args, watchifyConfig)));

bundler
  .ignore('./config.js')
  .transform(babelify.configure({
    presets: ['es2015', 'react', 'stage-2']
  }));
bundler.on('log', console.log); // Output build logs to terminal.

/**
 * Un objet ayant les settings utilisable par Gulp
 * @exports settings
 * @prop bundler {function} Watchify du browserify pour utiliser dans ./gulp/tasks/bundle.js
 * @prop expressServerPath {string} Emplacement du fichier serveur d'Express
 * @prop browserSync {package} Package de browser-sync pour que tout les tâches aient la même instance
 */
export default {
  bundler: bundler,
  expressServerPath: './index.js',
  browserSync: browserSync,
  nodemon: nodemon
};