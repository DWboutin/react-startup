import tasks from './gulp';

tasks.bundleTask();
tasks.imagesTask();
tasks.browserSyncTask();
tasks.lintTask();
tasks.sassTask();
tasks.scriptsTask();

tasks.buildTask();
tasks.watchTask();
tasks.serveTask();

tasks.defaultTask();