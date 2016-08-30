import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';

import Html from './Html.react';

import config from './config';

const { APP_NAME, APP_PORT } = config;

const app = express();

app.listen(APP_PORT, () => {
  console.log(APP_NAME + ' is listening on port ' + APP_PORT + '; Env: ' + process.env.NODE_ENV);
});

app.use((req, res, next) => {
  res.status(200).send('<!DOCTYPE html>\n' + renderToString(<Html />));
  next();
});

export default app;