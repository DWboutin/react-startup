import React from 'react';
import express from 'express';

import reactRouting from './middlewares/reactRouting';

import config from './config';

const { APP_NAME, APP_PORT } = config;

const app = express();

app.use(reactRouting);

app.listen(APP_PORT, () => {
  console.log(APP_NAME + ' is listening on port ' + APP_PORT + '; Env: ' + process.env.NODE_ENV);
});

export default app;