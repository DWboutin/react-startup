/**
 * @file Fichier de constantes pour Gulp
 * @author Mikael Boutin
 * @version 0.0.1
 */
import config from '../config';

const { APP_PORT, BASE_URL } = config;

const eslint_cfg = {
  ecmaFeatures: {
    jsx: true,
    modules: true,
    experimentalObjectRestSpread: true
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    strict: 0,
    'no-underscore-dangle': 0
  }
};

export default {

  /** @constant {string} SRC_PATH Emplacement du dossier "src" */
  SRC_PATH: './src',

  /** @constant {string} SRC_PATH Emplacement du dossier où se construit les éléments */
  BUILD_PATH: './public',

  /** @constant {string} SASS_ENTRY_FILE Emplacement du fichier .scss à convertir */
  SASS_ENTRY_FILE: './src/assets/sass/style.scss',

  /** @constant {int} BROWSER_SYNC_RELOAD_DELAY Délai en miliseconde pour le refresh du browser */
  BROWSER_SYNC_RELOAD_DELAY: 3000,

  /** @constant {string} BROWSER_SYNC_PROXY Informe browser-sync quelle location il doit rendre en proxy (provenant du config.js) */
  BROWSER_SYNC_PROXY: BASE_URL,

  /** @constant {int} APP_PORT Port de l'application (provenant du config.js) */
  APP_PORT: APP_PORT,

  /** @constant {int} BROWSER_SYNC_PROXY Informe browser-sync quelle location il doit rendre en proxy */
  BROWSER_SYNC_PORT: 4000,

  /** @constant {array} BROWSER_SYNC_BROWSERS Indique dans quels browsers browser-sync s'executera */
  BROWSER_SYNC_BROWSERS: ['google chrome'],

  /** @constant {string} EXPRESS_SERVER_ENTRY Point d'entré du fichier serveur */
  EXPRESS_SERVER_ENTRY: './index.js',

  /** @constant {array} NODEMON_WATCH_FILES Fichiers que nodemon doit observer pour rafraîchir le serveur */
  NODEMON_WATCH_FILES: ['./index.js', './public/js/**'],

  /** @constant {object} ESLINT_CONFIGS Configurations utilisés pour le LINT du code */
  ESLINT_CONFIGS: eslint_cfg,

  WATCH_SCRIPTS: {
    BUNDLE: ['./src/**.js', './src/**/**.js', './src/**/**/**.js', './src/**/**/**/**.js', './src/**/**/**/**/**.js', './src/**/**/**/**/**/**.js', './src/**/**/**/**/**/**/**.js'],
    SCRIPTS: ['./src/assets/js/vendors/**', './src/assets/js/scripts/**.js', './src/assets/js/main.js'],
    SASS: ['./src/assets/sass/**/**.scss']
  }
};